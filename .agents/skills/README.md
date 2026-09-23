# Petaflop editorial skills

These repository-local skills support Hungarian AI, technology, and developer-tool journalism. They use the [Agent Skills format](https://agentskills.io/specification): each skill has a named directory and a `SKILL.md` with a name and a trigger-oriented description. References and templates are loaded only when needed.

## Choose the skill

| Skill | When to use it | Result |
| --- | --- | --- |
| [magazine-writing](magazine-writing/SKILL.md) | Selecting, researching, drafting, or substantially revising a story | A supported angle and reader-focused article |
| [technical-review](technical-review/SKILL.md) | Checking product, API, code, research, cost, or performance claims | Specific corrections, caveats, and a publish/hold decision |
| [editorial-visuals](editorial-visuals/SKILL.md) | Planning or reviewing screenshots, illustrations, diagrams, and charts | A useful, accessible visual with documented provenance, or a decision to omit it |
| [humanizer](humanizer/SKILL.md) | Editing finished Hungarian or English prose | Natural wording without factual or technical drift |

## Workflow and discovery

Read root [AGENTS.md](../../AGENTS.md) and the [editorial policy](../../docs/editorial-policy.md). Research and draft with magazine-writing, review technical claims, review any visuals, edit with humanizer, and finally compare the edited copy against its evidence and validation checklist. Technical review and visual planning may start during research; humanizing cannot repair missing evidence.

An agent with compatible repository-skill discovery may load these by description. Other clients and the scheduled GitHub publisher must explicitly read the linked files. Merely adding Markdown files does not execute them. There are no install scripts, external service dependencies, or expanded tool permissions.

For routine news, keep notes compact in the existing publisher run record. Use the [story brief](magazine-writing/templates/story-brief.md) for substantial research and the [publication review](magazine-writing/templates/publication-review.md) as a checklist, not mandatory boilerplate in published articles. Sample cases in [editorial review cases](magazine-writing/references/review-cases.md) are acceptance examples, not evidence that a model evaluation ran.

## Maintenance

The research baseline is [recorded with sources](magazine-writing/references/research.md), reviewed on 2026-09-23. Revisit it when a relevant standard, tool behavior, or recurring editorial failure changes; do not rewrite stable guidance just to refresh a date.

Humanizer is a deliberately adapted upstream skill, not an unmodified mirror. Its [provenance and update policy](humanizer/UPSTREAM.md) and [MIT license](humanizer/LICENSE) travel with it. Other repository licensing is unchanged.
