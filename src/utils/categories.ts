import { siteHref } from './paths';

/** A blog rovat (section/category). Each post belongs to exactly one. */
export interface Category {
  /** URL segment and stored frontmatter value. */
  slug: string;
  /** Display name (Hungarian). */
  label: string;
  /** One-line description for category pages and the homepage. */
  description: string;
}

/** Editorial sections. Order here drives nav order and homepage sections. */
export const CATEGORIES = [
  {
    slug: 'hirek',
    label: 'Hírek',
    description: 'Fontos technológiai, iparági és szabályozási változások az AI és a szoftverek világából.',
  },
  {
    slug: 'kiadasok',
    label: 'Kiadások',
    description: 'Új modellek, alkalmazások, fejlesztői eszközök és API-k megjelenései.',
  },
  {
    slug: 'tesztek',
    label: 'Tesztek',
    description: 'Eszközök, modellek és technológiák összehasonlítása, a mérési módszerekkel és korlátokkal együtt.',
  },
  {
    slug: 'utmutatok',
    label: 'Útmutatók',
    description: 'Gyakorlati magyarázatok és útmutatók AI-felhasználóknak és szoftverfejlesztőknek.',
  },
  {
    slug: 'elemzesek',
    label: 'Elemzések',
    description: 'Kutatási eredmények, technológiai döntések és a hírek mögötti összefüggések.',
  },
] as const satisfies readonly Category[];

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

/** Non-empty tuple of slugs for `z.enum(...)` in the content schema. */
export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [
  CategorySlug,
  ...CategorySlug[],
];

/** Fallback category for posts without an explicit one. */
export const DEFAULT_CATEGORY: CategorySlug = 'hirek';

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** Display label for a slug, falling back to the raw slug. */
export function categoryLabel(slug: string): string {
  return getCategory(slug)?.label ?? slug;
}

export function categoryUrl(slug: string): string {
  return siteHref(`/categories/${slug}/`);
}
