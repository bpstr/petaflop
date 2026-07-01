# CLAUDE.md

This file gives Claude Code the project context needed to work safely on Petaflop.hu.

Read the shared agent guide before editing: [AI_ASSISTANT_GUIDE.md](./docs/AI_ASSISTANT_GUIDE.md).

## Claude Code workflow

- Treat this repository as the source for `https://petaflop.hu`, a Hungarian AI news blog built with Astro.
- Prefer small, focused changes and keep existing Astro/content-collection patterns.
- For news or time-sensitive AI coverage, verify facts against current primary or reputable sources before writing.
- Run `npm run check` for content/schema/type validation after changing Astro, TypeScript, or Markdown frontmatter.
- Run `npm run build` before handing back broader content, routing, feed, config, or layout changes.
- Do not edit generated output in `dist/`, dependency files in `node_modules/`, or unrelated upstream theme files unless the task requires it.

## Important local context

- Node.js must be `>=22.12.0`.
- New posts live in `src/content/posts/YYYY-MM/`, grouped by publish year and month (for example `src/content/posts/2026-01/sample-post.md`). The folder also sets the URL, e.g. `/posts/2026-01/sample-post/`. Don't move existing flat-file posts into dated folders — that changes their live URLs.
- Tool directory entries live in `src/content/tools/`.
- Site metadata and deployment URL live in `src/site.config.ts`.
- Astro content schemas live in `src/content.config.ts`.
