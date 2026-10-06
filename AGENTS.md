# AGENTS.md

Petaflop.hu is a Hungarian magazine covering AI, technology, and developer tools, built with Astro. Consumer features, technical reporting, and useful non-AI engineering topics are all in scope.

Read [the shared project guide](docs/AI_ASSISTANT_GUIDE.md) before editing. For editorial work, also read [the editorial policy](docs/editorial-policy.md) and [the skill index](.agents/skills/README.md).

## Editorial workflow

1. Use [magazine-writing](.agents/skills/magazine-writing/SKILL.md) for story selection, research, structure, and the reader-facing draft.
2. Apply [technical-review](.agents/skills/technical-review/SKILL.md) to material product, research, implementation, pricing, and performance claims. A brief needs the relevant checks, not a long report.
3. Use [editorial-visuals](.agents/skills/editorial-visuals/SKILL.md) when selecting, creating, or reviewing images, diagrams, screenshots, and charts. No image is a valid choice.
4. Apply [humanizer](.agents/skills/humanizer/SKILL.md) to the finished prose. Then recheck that evidence, numbers, limitations, attribution, and technical meaning survived the edit.
5. Validate the content and report actual publication/build results.

Read the skill files explicitly if the current agent does not discover repository skills. They are instructions, not automatically executed checks or permission to publish. Shared skills live only under `.agents/skills/`; do not recreate a tracked `.claude` directory. Root `CLAUDE.md` is a pointer to this shared workflow.

## Daily publishing agent

Follow [news-publishing.md](docs/news-publishing.md) and [daily-editorial-workflow.md](docs/daily-editorial-workflow.md). Complete five distinct Hungarian posts in one daily run, prioritizing AI news and verified viral AI topics. Use explicit editor, researcher, writer, reviewer, publisher, and recorder stages; one agent may execute them sequentially. No additional schedules are needed.

Prefer Claude, OpenAI, Gemini, Grok and Muse news when fresh, verified stories are available. Consult official sources and other reputable AI magazines as specified in the publishing brief; no brand quota overrides evidence or reader value.

Research a diverse shortlist and backups, build an evidence ledger, apply technical-review and humanizer, then recheck final claims and metadata. Replace a blocked story and continue. Never lower evidence standards to reach five. Use the [run template](docs/templates/daily-news-run.md) for retry-safe continuity.

The publisher may create NEW posts and update its own run records directly on main. It may not modify existing articles, code, skills, workflows, dependencies, or schedules. Count retries toward the five-post daily cap; a completed edition is a no-op on rerun. The owner authorized this workflow configuration change on 2026-10-06; future publishing runs do not inherit configuration-editing authority.

## Working rules

- Write reader-facing content in natural Hungarian. Research current claims using original sources; never invent testing, quotes, availability, or sources.
- Preserve existing conventions, category slugs, publication dates, and live article URLs unless the user explicitly requests a change. Do not move historical posts as cleanup.
- Read the current schema and exact tag spelling before creating content. Never treat old articles as evidence of current facts.
- Run `npm run check` after Astro, TypeScript, schema, or frontmatter changes; also run `npm run build` for routing, feeds, metadata, layout, or broader content changes. State explicitly when either cannot run.
- Use current file/branch SHAs, preserve concurrent edits, and never force-push. Do not edit generated output, dependencies, secrets, or unrelated theme files.
- Repository writes, successful builds, and successful deployments are separate outcomes. Report only observed results.

## Project locations

Node.js must be `>=22.12.0`; use the committed npm lockfile. Posts go in `src/content/posts/YYYY-MM/`, tools in `src/content/tools/`, and static article assets in `public/static/posts/`. The date folder is part of each post URL.

`src/content.config.ts` defines frontmatter, `src/utils/categories.ts` defines the five editorial sections, and `src/site.config.ts` defines site metadata. Keep framework details in the shared guide and writing rules in the editorial policy and skills rather than copying them into multiple agent entry points.
