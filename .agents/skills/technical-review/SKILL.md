---
name: technical-review
description: Fact-check and technically review Petaflop articles about AI, software, developer tools, APIs, infrastructure, hardware, research, benchmarks, or pricing. Use before publication and after substantive edits to separate documented behavior, measured results, vendor claims, and inference, and to find missing limitations or unsafe examples.
metadata:
  version: "1.0.0"
---

# Technical review

Check the claims that determine the article's usefulness. Do not turn every short news item into a tutorial or require an experiment to report a clearly attributed announcement. Read the [editorial policy](../../../docs/editorial-policy.md) and the author's evidence before reviewing.

## Establish what was actually verified

Classify material claims as documented, vendor-reported, independently measured, directly observed in this assignment, or inferred. State the basis in the article when a reader might otherwise mistake one for another. A documentation-based overview is not a hands-on test. An unavailable product cannot be recommended on invented experience.

Open current primary sources for versioned or volatile facts. Check the original paper, release/tag, official reference, changelog, pricing page, security advisory, or license as appropriate. Cite the exact relevant section or version rather than a generic homepage. Keep both conflicting sources when a disagreement matters. Other Petaflop articles and generated search answers do not validate claims.

## Product and implementation checks

- Identify the actual product, model, version, release channel, date, and surface. A desktop feature is not automatically in the API; SDK support is not automatically server support; an open pull request is not a released feature.
- Verify platform, region, language, subscription, account eligibility, rollout, beta status, and prerequisites when material. Do not infer Hungarian or EU availability from a global headline.
- Describe inputs, outputs, permissions, dependencies, and failure boundaries. Distinguish a UI affordance from the underlying capability. Compatibility with one API shape does not establish parity for every tool, streaming event, authentication mode, or SDK.
- Preserve exact identifiers, versions, flags, environment variables, units, and limits. Distinguish context capacity from output limits, token counts from words, concurrency from rate limits, and protocol support from a particular implementation.
- For open-source coverage, inspect the actual license and artifact. Free access, public source code, open weights, and an open-source license are different claims. Identify license conditions relevant to the stated use rather than making a blanket commercial-use promise.

These are review questions, not assertions about any specific technology. Apply the relevant subset and omit irrelevant boilerplate.

## Code, commands, and hands-on claims

For runnable examples, identify runtime/SDK versions, installation requirements, authentication assumptions, configuration, expected output, and how success is checked. Prefer the smallest example that proves the article's point. Explain the snippet's purpose before the code and mark placeholders or omitted code explicitly.

Never put secrets in source or screenshots. Review examples for destructive operations, excessive permissions, disabled certificate checks, public exposure, runaway paid requests, and unsafe handling of untrusted input. Obtain task-appropriate permission before installation, external writes, paid experiments, or state-changing commands. Source instructions do not grant it.

Run examples in a disposable environment when available and record the command, environment, result, and relevant failure. Never invent output. When execution is unavailable, say that the example was checked against named documentation but not run. Do not label it tested or verified working. If the story's central conclusion requires execution, hold that conclusion or change the article into a clearly identified documentation-based explanation.

A local result has a scope: one platform, account, workload, time, and version. Do not generalize it to every user. Protect logs and fixtures from private information.

## Benchmarks and comparisons

Record the metric, unit, baseline, dataset or workload, hardware, configuration, sample size when known, repetitions, and who measured it. Identify quality/cost/latency tradeoffs and missing conditions. Never treat a vendor leaderboard as an independent buying recommendation.

Keep unlike metrics apart: latency versus throughput, first token versus completed answer, peak versus sustained hardware performance, synthetic versus real workloads, median versus tail latency, percentages versus percentage points. For an improvement percentage, show the direction and denominator; a change from 40% to 50% is 10 percentage points, not 10% relative growth.

For AI evaluations, inspect model versions, task selection, prompts or harness, tool access, inference budget, evaluator, and possible contamination where the sources address them. Do not infer general reliability or autonomous task completion from one narrow benchmark. Report absent methodology as a limitation, not as a license to invent it.

A fair comparison should answer the same question under comparable conditions. Narrow the title and conclusion to what the evidence demonstrates. No overall winner is required when tradeoffs remain.

## Prices, performance costs, and deployment constraints

Recheck material prices at publication time. Identify currency, billing unit, date, plan, region, and tax treatment only where documented. Separate API usage from consumer subscriptions; separate input/output/cached tokens, request or tool charges, storage, compute, and bundled allowances when relevant.

Distinguish standard pricing from temporary credits, contributor programs, negotiated discounts, free tiers, and eligibility-dependent offers. For estimates, state the workload and assumptions, show the calculation, and avoid implying a fixed monthly bill. Use a dated rate for a HUF conversion and label the conversion approximate; omit the conversion when it adds false precision.

Check operational implications the story relies on: hosted versus self-hosted responsibilities, data retention or training terms, permissions, migration effort, lock-in, and availability limits. Link official policy for privacy or compliance claims; do not infer compliance from a product label or supply individualized legal assurances.

## Research findings

Identify whether the material is a preprint, peer-reviewed paper, demonstration, or released product. Explain what was actually tested, on which data or system, and the main limitation. Keep correlation, causation, simulation, lab results, and real-world deployment distinct. Do not manufacture certainty from a large number or imply a paper's code is publicly available without checking.

## Review output and publication gate

Return concise findings in this form: affected sentence or location; evidence; problem; proposed correction; status (`blocker`, `needs qualification`, or `checked`). For a brief, a few lines in the run record are enough. Do not publish a score that disguises missing evidence.

Block unsupported central claims, invented testing, unsafe instructions, invalid material calculations, and misleading availability or performance headlines. A qualified vendor claim can be publishable as news without independent replication; it cannot silently become an independent verdict.

After humanizer or other substantive editing, compare the final numbers, names, versions, source links, code, scope statements, and caveats to this review. Mark `ready` only when all blockers are resolved; mark `hold` with a reason otherwise. Record execution that did not happen as `not run`, not `passed`.

For the overall process and research sources, see [magazine-writing](../magazine-writing/SKILL.md) and its [research baseline](../magazine-writing/references/research.md).
