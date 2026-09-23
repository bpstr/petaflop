# Publication review

Use `pass`, `not applicable`, `not run`, or `blocked`, with a short reason or evidence. Do not prefill successful results. A documentation review does not count as a hands-on test; a build does not count as a fact check.

| Check | Status and evidence |
| --- | --- |
| Reader, angle, and original contribution are clear | |
| Duplicate check completed against relevant posts/run history | |
| Central claims match opened original sources | |
| Event, source, and publication dates are distinguished | |
| Availability, versions, eligibility, and material restrictions are accurate | |
| Vendor claims, observations, and inference are distinguished | |
| Technical names, units, calculations, and comparisons are correct | |
| Code/commands are safe; actual execution or nonexecution is disclosed | |
| Headline and summary match the article's supported conclusion | |
| Visuals have a purpose, known rights, visible credit, and text alternatives | |
| Hungarian prose is natural; humanizer preserved claims, caveats, code, and attribution | |
| Frontmatter matches the live schema; category and tag casing are valid | |
| Slug is unique; publication date matches the folder; existing URLs stay unchanged | |
| Source links and local asset references resolve | |
| Visibility is intentional; no unfinished notes or placeholders remain | |
| `npm run check` result is recorded, or execution gap is explicit | |
| `npm run build` result is recorded when applicable | |
| Responsive/visual inspection result is recorded when applicable | |
| Writes stay within the task's authorization | |

Decision: `ready` or `hold`, with unresolved blockers.

After an authorized write, record the actual commit SHA, file readback result, and exact-commit CI/deployment state. Do not label pending deployment as live. For scheduled news, preserve the run-history checkpoint rules in `docs/news-publishing.md`.
