import { getCollection, type CollectionEntry } from 'astro:content';
import { siteHref } from './paths';
import { tagToSlug } from './slug';
import { CATEGORIES, categoryUrl, type CategorySlug } from './categories';

export type Post = CollectionEntry<'posts'>;

export function postSlug(post: Post): string {
  return post.id.replace(/\.mdx?$/, '');
}

/** Published blog articles only (excludes draft/hidden). */
export async function getBlogPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft && !data.hidden);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** @deprecated Use getBlogPosts */
export const getPublishedPosts = getBlogPosts;

export function formatDate(date: Date, locale: string): string {
  const dateLocale = locale === 'zh-CN' ? 'zh-CN' : locale.startsWith('hu') ? 'hu-HU' : 'en-US';

  return date.toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Short date for archive list (MM-DD). */
export function formatArchiveDate(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${m}-${d}`;
}

export function postUrl(post: Post): string {
  return siteHref(`/posts/${postSlug(post)}/`);
}

export function tagUrl(tag: string): string {
  return siteHref(`/tags/${tagToSlug(tag)}/`);
}

export function postCategory(post: Post): CategorySlug {
  return post.data.category;
}

export function postCategoryUrl(post: Post): string {
  return categoryUrl(post.data.category);
}

/** Posts in a category, most recent first (input should already be sorted). */
export function getPostsByCategory(posts: Post[], slug: string): Post[] {
  return posts.filter((post) => post.data.category === slug);
}

/** Category slug → post count, following the canonical category order. */
export function getCategoryCounts(posts: Post[]): { slug: CategorySlug; count: number }[] {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
    count: posts.filter((post) => post.data.category === category.slug).length,
  }));
}

export function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags) tags.add(tag);
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
}

export function groupPostsByYear(posts: Post[]): Map<number, Post[]> {
  const map = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getFullYear();
    const list = map.get(year) ?? [];
    list.push(post);
    map.set(year, list);
  }
  return new Map([...map.entries()].sort((a, b) => b[0] - a[0]));
}

export function getAdjacentPosts(
  posts: Post[],
  current: Post,
): { prev: Post | null; next: Post | null } {
  const idx = posts.findIndex((p) => p.id === current.id);
  return {
    prev: idx > 0 ? posts[idx - 1]! : null,
    next: idx >= 0 && idx < posts.length - 1 ? posts[idx + 1]! : null,
  };
}

/** Posts sharing the most tags with `current`, most recent first; backfilled with recent posts if needed. */
export function getRelatedPosts(posts: Post[], current: Post, limit = 3): Post[] {
  const currentTags = new Set(current.data.tags);
  const others = posts.filter((p) => p.id !== current.id);

  const scored = others
    .map((post) => ({
      post,
      shared: post.data.tags.filter((tag) => currentTags.has(tag)).length,
    }))
    .filter(({ shared }) => currentTags.size === 0 || shared > 0)
    .sort((a, b) => {
      if (b.shared !== a.shared) return b.shared - a.shared;
      return b.post.data.date.valueOf() - a.post.data.date.valueOf();
    });

  const related = scored.slice(0, limit).map(({ post }) => post);

  if (related.length < limit) {
    const usedIds = new Set(related.map((p) => p.id));
    const fallback = others
      .filter((p) => !usedIds.has(p.id))
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .slice(0, limit - related.length);
    related.push(...fallback);
  }

  return related;
}
