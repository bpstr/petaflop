# Extra articles and AlphaSignal source update — 2026-10-20

- Publication date/timezone: 2026-10-20 / Europe/Budapest.
- Authority: the owner explicitly requested adding AlphaSignal to future post research and publishing additional posts. This is a separate manual batch, as permitted by `docs/daily-editorial-workflow.md`; today's completed five-post daily edition and its record remain unchanged.
- Inspected main: `045db8891de7cf06838a5b450b88e9be4c2db3e9`.
- Intended publications: four distinct Hungarian posts, two release briefs and two research explainers.
- State: complete; four posts verified on main and deployed successfully.

## Future research configuration

The existing Daily Edition and Tech Ecosystem Watch task prompts were updated successfully to start research with AlphaSignal. Their enabled state, Europe/Budapest timezone, daily 08:00 and Friday 08:00 schedules, and existing limits were preserved. No new task was created.

The repository's `AGENTS.md`, editorial policy, news-publishing brief and daily editorial workflow now carry the same source priority. AlphaSignal is a primary editorial discovery source; original announcements, papers, documentation and repositories remain the evidence for technical facts. The instructions require discovery attribution, original-date checks, recorded access gaps and fallback to the existing roster. They do not require an AlphaSignal story when none qualifies.

## Discovery and selection

Opened AlphaSignal's [latest feed](https://alphasignal.ai/), [Editorial](https://alphasignal.ai/editorial) and [archive](https://alphasignal.ai/archive). The archive extraction did not provide an issue list. Individual selected articles and their original sources were accessible. Some other research items had Pro access restrictions; no restricted text was reconstructed from snippets.

| Event | Dates and evidence | Decision |
| --- | --- | --- |
| DeepInfer initial public code | Official initial commit 2026-10-20; recipe library first published 2026-09-10, with its 0.2.0 commit dated 2026-10-19 and changelog release dated 2026-10-20 | Select. A concrete new infrastructure release, distinct from the existing V4.1-Flash model story. The article avoids conflating commit and release dates. |
| Exa 3.0 | Official announcement 2026-10-19; current feature documentation and pricing | Select. Search-result context selection and a cheaper API tier, with vendor claims qualified. |
| Muse Glimmer technical report | Model launched 2026-08-10; arXiv submission 2026-10-17; Meta research listing 2026-10-19 | Select as a research explainer, explicitly preserving the August release date. Distinct from Spark/Wonder and the existing Muse privacy report. |
| MultiLangBench and COBOL migration evaluation | OpenAI publication 2026-10-19; public evaluation repository | Select. Different evaluation methods and their interpretation for older codebases. |
| Anthropic OSS Scanner | Original service launch 2026-10-08; newer AlphaSignal coverage | Skip this batch. Its headline's 880 critical findings conflicts with its body: 77 critical plus 803 high, model-rated. No verified primary follow-up for that total. |
| XYEval | Original paper 2026-09-20; current AlphaSignal coverage | Skip. Current coverage is not a new paper, and the four selected angles are fresher. |
| ORACLE-SWE | Original preprint 2026-04-09; v3 2026-10-15 | Reserve. Requires careful distinction between ideal oracle information and signals a real agent can obtain. |
| Meta Prometheus | Engineering publication 2026-10-19 | Reserve. Useful infrastructure story; deferred to keep this extra batch focused and avoid another Meta article. |

## Evidence and review

| Post | Original evidence and material review |
| --- | --- |
| `deepseek-deepinfer-nyilt-kiszolgalomotor.md` | [DeepInfer](https://github.com/deepseek-ai/DeepInfer), [recipe](https://github.com/deepseek-ai/deepseek-recipe), [recipe 0.2.0 commit](https://github.com/deepseek-ai/deepseek-recipe/commit/93b0fd229cc9ffa6b1a8c63d42b0bf741bbec170). Checked actual licenses, offline scope, SM100/Ascend 950 hardware, omitted serving infrastructure, request conversion and caller-owned tool execution. No full API-parity claim. |
| `exa-3-kereses-dynamic-highlights.md` | [Announcement](https://exa.ai/blog/exa-3), [Dynamic Highlights](https://exa.ai/blog/dynamic-highlights), [pricing](https://exa.ai/pricing). The 95% token reduction is Exa's claim against full-page text, not total application cost. $4/$7 per 1,000 Lite/Auto requests applies up to ten results; extra-result/service fees remain explicit. Eight-evaluation comparison is vendor-reported. |
| `meta-muse-glimmer-helyi-ugynokmodell.md` | [Launch](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model), [paper/history](https://arxiv.org/abs/2610.24628), [model card](https://huggingface.co/meta-models/Muse-Glimmer-30B) and actual license file. Preserved launch versus research dates. 24/32 GB are specified quantized hardware targets. The 74.9 to 233.4 tokens/s result is attributed to Meta's K-Quant-17GB + DFlash, RTX 5090, llama.cpp, batch-one greedy-decoding measurement; it is not end-to-end agent latency. |
| `openai-multilangbench-regi-programnyelvek.md` | [OpenAI publication](https://openai.com/index/low-resource-programming-languages/), [MultiLangBench](https://github.com/openai/MultiLangBench). Distinguished 87.4% average test-pass rate from the separate 97.9% all-hidden-tests COBOL migration result. The repository's routine 272-case subset is distinguished from approximately 24,000 converted cases. Neither score establishes production migration reliability. |

All four credit their specific AlphaSignal discovery article and cite original evidence. Writers applied magazine-writing, technical-review and humanizer, followed by a final fact comparison. A separate agent reviewed DeepInfer, Exa and Muse; the publishing agent reviewed MultiLangBench against the original OpenAI article and repository. The review's qualifications were incorporated: Muse is an arXiv preprint, its throughput is averaged over varied prompts with batch size one, and recipe's commit date is not presented as an unambiguous release date. All four are ready. No human review, hands-on model test or independent benchmark reproduction is claimed.

## Validation

- Inspected all 105 existing October posts, today's completed daily record and a repository-wide search for DeepInfer, MultiLangBench, Glimmer and Exa 3.0. No prior same-event post found.
- Static YAML/schema checks passed for all four: required fields, supported categories, existing exact tags, date/month agreement, deterministic ASCII slugs, explicit finished visibility, real source links, no placeholders/citation tokens or trailing whitespace.
- Final body word counts: DeepInfer 286; Exa 286; Muse 299; MultiLangBench 270.
- Local runtime: Node v24.19.0. Public `git clone` failed because the environment could not connect to its network proxy; source files were read through the connected GitHub app.
- Dependency installation attempted with `npm ci --ignore-scripts --no-audit --no-fund --fetch-retries=0 --fetch-timeout=15000`; failed with `EPERM` connecting to the proxy while fetching an npm package. Local `npm run check` and `npm run build` are **not run** because required dependencies could not be installed. Static checks are not a substitute claim for those commands.
- No application code, dependencies, existing articles, assets, skills or deployment workflow are included in the publication changes. No confidential project data is used.

## Publication ledger

All four files under `src/content/posts/2026-10/`, the four source-policy updates and this record were published atomically in [`60bd704468d12e158495c4829bcd991e7171751a`](https://github.com/bpstr/petaflop/commit/60bd704468d12e158495c4829bcd991e7171751a). Main advanced from the inspected head with a non-forced expected-head update. GitHub's commit inventory confirmed exactly those nine paths; every file was fetched back from main and matched both its validated content and expected Git blob hash.

| Article | Verified blob SHA |
| --- | --- |
| DeepInfer | `cc08d545bee332595e2519cd83df8805a7f61cb1` |
| Exa 3.0 | `95796920e413f948106d65b60beaaedd4085cff5` |
| Muse Glimmer | `0133b7d33a93e42f71663daeae4ae4e190419ee1` |
| MultiLangBench | `1ec601e4d5795468af5615849d6f690082f3c579` |

[GitHub Pages run 39454208537](https://github.com/bpstr/petaflop/actions/runs/39454208537), for that exact article commit, completed successfully. Its build and deploy jobs both reported success; the final workflow status was observed at 2026-10-20T16:05:13Z. This establishes the remote build/deployment outcome; it does not claim that local npm checks ran.

Both existing task prompts were fetched after updating and matched the intended AlphaSignal instructions exactly, with their previous timing and enabled state preserved. The manual batch is complete. The daily edition's record, quota and coverage checkpoint remain unchanged.
