# Petaflop

Petaflop.hu is a Hungarian magazine about AI, technology, and developer tools. It covers useful product changes, software-building tools, open-source projects, infrastructure, relevant hardware, and research with clear explanations and verifiable sources. Non-AI technology stories are welcome when they matter to readers or developers.

The site is built with Astro 6 using the Aonote theme. This repository contains the publication's content, application, and shared editorial workflow.

## Editorial workflow

Start with [AGENTS.md](AGENTS.md), [the project guide](docs/AI_ASSISTANT_GUIDE.md), and [the editorial policy](docs/editorial-policy.md).

Four repository skills support future articles:

| Skill | Purpose |
| --- | --- |
| [magazine-writing](.agents/skills/magazine-writing/SKILL.md) | Topic research, angle, reader, structure, tone, and publication review |
| [technical-review](.agents/skills/technical-review/SKILL.md) | Evidence, versions, APIs, benchmarks, costs, safe examples, and honest test claims |
| [editorial-visuals](.agents/skills/editorial-visuals/SKILL.md) | Useful images, diagrams, charts, rights, captions, and accessibility |
| [humanizer](.agents/skills/humanizer/SKILL.md) | Natural prose without factual or technical drift |

See the [skill index](.agents/skills/README.md) for usage, the [research baseline](.agents/skills/magazine-writing/references/research.md) for primary sources, and the [story brief](.agents/skills/magazine-writing/templates/story-brief.md) and [publication review](.agents/skills/magazine-writing/templates/publication-review.md) for reusable templates.

These skills are instructions, not automatic tests. Clients without repository-skill discovery should read their files explicitly. Humanizer is a pinned, Hungarian-adapted version of an upstream skill; its [provenance](.agents/skills/humanizer/UPSTREAM.md) and [MIT license](.agents/skills/humanizer/LICENSE) are included. Shared skills live in `.agents/skills/`, not the retired `.claude` directory.

## Content and publishing

Articles live in `src/content/posts/YYYY-MM/slug.md`. The month folder is part of the published URL, so preserve existing file locations and publication dates. The five sections remain Hírek, Kiadások, Tesztek, Útmutatók, and Elemzések; topics are expressed through consistently cased tags.

The [scheduled publishing brief](docs/news-publishing.md) defines short daily news, freshness, deduplication, direct-main write scope, and run history. Developer and technology news are included without turning routine briefs into long tutorials. Longer features and guides use the same skills in separately requested work.

Tool directory entries live in `src/content/tools/`, static pages in `src/content/pages/`, and article assets in `public/static/posts/`. Read `src/content.config.ts` before editing frontmatter.

## Local development

Use Node.js `>=22.12.0` and npm:

```bash
git clone https://github.com/bpstr/petaflop.git
cd petaflop
npm ci
npm run dev
```

```bash
npm run check
npm run build
npm run preview
```

`check` runs Astro validation; `build` produces `dist/`; `preview` serves the built site. Neither replaces editorial fact-checking. The existing `.github/workflows/deploy.yml` builds and deploys main pushes to GitHub Pages. Distinguish a commit, a successful build, and a successful deployment when reporting results.

## Project map

| Location | Purpose |
| --- | --- |
| `src/site.config.ts` | Site metadata, URL, and language |
| `src/content.config.ts` | Content schemas |
| `src/utils/categories.ts` | Editorial section definitions |
| `src/layouts/`, `src/components/`, `src/pages/` | Layout, components, and routes |
| `src/integrations/`, `src/plugins/` | Markdown rendering |
| `.agents/skills/` | Editorial skills and reference material |
| `docs/` | Project, editorial, and publishing documentation |

## Credits and licensing

The application derives from [Aonote](https://github.com/runsli/Aonote); original design and styles are credited to runsli. The repository [LICENSE](LICENSE) remains unchanged. `README.zh-CN.md` contains the original theme documentation rather than a synchronized Petaflop editorial guide.

The site's content-license configuration remains in `src/site.config.ts`. Third-party images and the adapted Humanizer retain their own applicable notices; do not assume one repository-wide license overrides them.
