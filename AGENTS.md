# AGENTS.md

This file gives Codex and other code agents the project context needed to work safely on Petaflop.hu.

Read the shared agent guide before editing: [AI_ASSISTANT_GUIDE.md](./docs/AI_ASSISTANT_GUIDE.md).

## Agent workflow

- Treat this repository as the source for `https://petaflop.hu`, a Hungarian AI news blog built with Astro.
- Follow existing conventions first; avoid broad refactors while making content or feature changes.
- For news or time-sensitive AI coverage, verify facts against current primary or reputable sources before writing.
- Run `npm run check` after changing Astro, TypeScript, or Markdown frontmatter.
- Run `npm run build` before completing broader content, routing, feed, config, or layout changes.
- Do not edit generated output in `dist/`, dependency files in `node_modules/`, or unrelated upstream theme files unless the task requires it.

## Important local context

- Node.js must be `>=22.12.0`.
- Posts live in `src/content/posts/`.
- Tool directory entries live in `src/content/tools/`.
- Site metadata and deployment URL live in `src/site.config.ts`.
- Astro content schemas live in `src/content.config.ts`.
