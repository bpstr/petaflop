# Technology ecosystem watch — 2026-11-20

- Started: 2026-11-20T07:39:51Z.
- Previous successful weekly checkpoint: `2026-11-13T07:55:37Z`.
- Coverage: `2026-11-12T19:55:37Z` through `2026-11-20T07:39:51Z`, including a 12-hour overlap.
- Inspected main: `0c197d5fa6df693bd0facf72df26d67df05820f9`.
- Live GitHub repository read and push permission confirmed; tree, commit, non-forced expected-head ref update and workflow-run reads are available.
- Earlier weekly posts for this date: none. Scan: complete. Edition: complete; three posts verified and deployed.
- Format: three dedicated developer articles.
- Write scope: three NEW article paths below and this NEW weekly record only.

## Instructions and duplicate checks

Read the live root instructions, assistant guide, editorial policy, news-publishing brief, daily workflow, run template, skill index, schema and categories. Explicitly applied magazine-writing, technical-review, humanizer, provenance and publication-review guidance. No nested `AGENTS.md` exists. No visual was considered or added.

Inspected the November 13 weekly checkpoint, all completed daily records from November 14 through November 20 and recent posts. The daily edition already covered GPT-Live-1.1, Gemini Mac control, Hermes Enterprise, Hy4, Claude linked billing, Gemini Tasks, Gemini 4 Neon, Vibe Desktop and multiple agent-runtime stories. Repository search found no article for discounted OpenAI background completion windows, Gemini Tool Retrieval or Devin Security Threats. All three slugs and the weekly-record path were absent after refreshing main.

## Discovery and selection

| Event / original date | Evidence | Decision |
| --- | --- | --- |
| OpenAI discounted background completion windows / Nov. 16 | [changelog](https://developers.openai.com/api/docs/changelog), [background guide](https://developers.openai.com/api/docs/guides/background), [pricing](https://developers.openai.com/api/docs/pricing) | Selected for a dedicated post. Public beta, supported models, 2h/8h targets, 30%/40% model-token discounts, shared limits, cache separation and temporary-storage consequence are explicit. |
| Gemini API Tool Retrieval / Nov. 19 | [Google](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/), [MCP docs](https://ai.google.dev/gemini-api/docs/mcp) | Selected for a dedicated post. Preview status, model support, server/client retrieval, remote MCP behavior and billing are documented; no independent accuracy result is claimed. |
| Devin Security Threats / Nov. 19 | [Cognition launch](https://devin.ai/blog/nginx2root-java4shell-threats), [Devin Security](https://devin.ai/security) | Selected for a dedicated post. Managed and custom threats, repository scanning, auto-triage, pull requests and portable skills are concrete. Missing price, host matrix and accuracy metrics remain explicit. |
| Genie 4 in Gemini API / Nov. 19 | [Google](https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/) | Hold. API availability is new, but Petaflop already explained Genie 4 in October and the new short announcement omits a specific model identifier, quota, price and updated reliability limits. |
| MCP file-transfer extension / Nov. 10 | [draft](https://github.com/modelcontextprotocol/experimental-ext-file-uploads/blob/main/specification/draft/file-uploads.md) | Hold. Still explicitly draft and awaiting a reference implementation; not presented as a stable or broadly implemented standard. |
| MCP Apps 2.1 / Nov. 10, MCP servers 2.4 / Nov. 11, A2A Go 2.8 / Nov. 6, AG-UI Nov. 10 | Canonical release pages | Rejected for this edition after date and overlap checks. They predate the checkpoint/overlap or were already assessed in the previous weekly run; no later material protocol release was established. |
| AgentRun / checked Nov. 7 | [project](https://agentrun.ai/) and [server reference](https://agentrun.ai/docs/server-reference) | Rejected as outside the window; current multi-harness support is useful but no fresh release event was established. |
| Anthropic/Claude, xAI/Grok and Meta Muse | Official release notes/news plus completed daily records | No uncovered API or protocol event beat the selected slate. Muse was verified as Meta's personal agent; its Australia, retail and permission stories were already covered daily. |

### AlphaSignal and newsroom checks

AlphaSignal was the first stop. Opened [Latest](https://alphasignal.ai/), [Editorial](https://alphasignal.ai/editorial), [Archive](https://alphasignal.ai/archive), the [newsletter landing page](https://newsletter.alphasignal.ai/) and the accessible November 20 issue. Latest supplied the selected Tool Retrieval and Devin Security leads; both were followed to original material. It also surfaced already-covered GPT-Live-1.1, Gemini Mac, Hermes Enterprise, Hy4 and Antigravity, plus an early Sakana security group, AgentRun, research papers and local tooling. Editorial supplied useful security, context and agent-evaluation themes but no stronger dated release. No AlphaSignal ranking, engagement count or unsupported technical claim entered an article.

Also inspected official OpenAI, Anthropic/Claude, Google/Gemini, xAI/Grok and Meta Muse channels, canonical MCP/A2A/AG-UI/Agent Skills repositories, and current TechCrunch, The Verge and Reuters technology discovery. OpenAI's official scan supplied the selected background-window release. Anthropic's current Platform notes exposed no newer qualifying API event; Grok Build changes were maintenance-level; Muse's fresh events were already covered daily. No inaccessible or paywalled claim entered an article.

## Evidence and review

| Article | Claim / evidence / caveat | Review outcome |
| --- | --- | --- |
| OpenAI background windows | Official guide and pricing establish public-beta status, supported models, request fields, discounts, rate-limit pool, cache boundary and temporary storage. | Ready. Completion windows are targets, not latency guarantees; the percentages are model-token discounts, not total-workflow savings. |
| Gemini Tool Retrieval | Google's announcement establishes the preview, `tool_search`, deferred schemas, client/server modes, MCP support, model floor and billing. | Ready. Retrieval is not described as authorization, independent accuracy proof or a new MCP specification. |
| Devin Security Threats | Cognition's product material establishes the managed index, custom threats, Agentic MapReduce scans, auto-triage, pull requests and portable Markdown skills. | Ready. Vendor claims are separated from measured results; price, coverage and accuracy gaps are explicit. |

Magazine-writing assigned one practical reader question to each article. Technical review compared event dates, status, supported models or integrations, pricing/limits and migration or operational consequences against primary evidence. Editorial review checked novelty, daily overlap, titles and proportional format. Humanizer removed promotional phrasing while preserving qualifications and identifiers. Final evidence comparison rechecked material claims after prose editing. No product trial, API call, security scan or benchmark reproduction is claimed.

## Publication ledger

| Event key | Post path / title | State | Commit / readback |
| --- | --- | --- | --- |
| openai-background-windows | `src/content/posts/2026-11/openai-hatterfeladat-kedvezmenyes-ablak.md` — Kivárással olcsóbb lett a hosszú OpenAI API-feladat | verified | `641080cdb0b3d58f4441f08c28babe83412c61c9`; exact blob `df5cfc263ce78f88987f4d37eb5725ab5d72943c` |
| gemini-tool-retrieval | `src/content/posts/2026-11/gemini-api-tool-retrieval.md` — Nem kell minden eszköz sémáját betöltenie a Gemini-ügynöknek | verified | `641080cdb0b3d58f4441f08c28babe83412c61c9`; exact blob `edf94b04af7ccb50e10d30b566e05a7fc8770056` |
| devin-security-threats | `src/content/posts/2026-11/devin-security-threats.md` — A friss sebezhetőségből egy kattintással indít kódfelmérést a Devin | verified | `641080cdb0b3d58f4441f08c28babe83412c61c9`; exact blob `e89a54e62d54628fc1791f226b08f9341ed02ad8` |

## Validation and deployment

- Static validation passed: supported frontmatter, existing category, `2026-11-20` dates and month folder, unique ASCII slugs, real source links, explicit finished visibility and no placeholders. Body words excluding frontmatter and source lines: OpenAI 236; Gemini 271; Devin 250.
- Node v24.22.3. `npm ci --ignore-scripts --no-audit --no-fund` succeeded.
- `npm run check`: exit 0; 48 files, 0 errors, 0 warnings, one existing Zod deprecation hint.
- `npm run build`: exit 0; 602 pages. All three article routes and exact titles were generated. Existing markdown-plugin deprecation, tag-route collision and robots-file warnings remain; unrelated files were not changed.
- Article batch: [`641080cdb0b3d58f4441f08c28babe83412c61c9`](https://github.com/bpstr/petaflop/commit/641080cdb0b3d58f4441f08c28babe83412c61c9). Main advanced from the inspected SHA with a non-forced expected-head update.
- The article commit contains exactly the three NEW article files and this NEW weekly record: four additions, no modification or deletion.
- All four files were fetched from the article commit and matched the validated UTF-8 contents exactly. Verified publication count: 3.
- Exact article commit [GitHub Pages run 44697087328](https://github.com/bpstr/petaflop/actions/runs/44697087328) completed successfully; the build and deploy jobs succeeded and the run's head SHA matches the article commit.
- All three public routes loaded after deployment with their exact titles, article bodies and source links visible. Deployment state: deployed and live; repository and public-route verification complete.
- This completion update changes only the weekly record; deployment evidence refers to the exact article batch above.

Successful coverage checkpoint: **2026-11-20T07:45:17Z**, advanced after the complete scan, exact main readback of all intended publications, successful exact-SHA deployment and live-route verification.
