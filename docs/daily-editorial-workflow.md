# Daily five-post editorial workflow

Effective 2026-10-06. This extends [news-publishing.md](news-publishing.md), which retains the detailed sourcing, write-scope, format, freshness, and publication rules. Start at root [AGENTS.md](../AGENTS.md).

## One edition, one schedule

Use the existing ChatGPT task at 08:00 Europe/Budapest. All stages run inside one task. Do not add per-story schedules or a GitHub Actions cron; the existing Pages workflow deploys main pushes.

Five new posts is the intended outcome and maximum per Budapest date, including retries. Read today's record and live posts first and compute remaining slots. If five verified posts already exist, report completion without creating articles or a redundant commit. Independently requested manual articles do not consume this job's quota unless assigned to the edition.

## 1. Editor: inspect and discover

Read all live instructions and required repository skills, schema, categories, recent posts and run records. Confirm GitHub access. Use the coverage overlap and freshness windows in news-publishing.md.

Build about 12 distinct leads across these lanes:

| Lane | Useful angles |
| --- | --- |
| Models and product news | Consequential releases, capabilities, access changes, limitations |
| Creative and viral AI | Original demos, surprising uses, verified successes or failures |
| Agents and developer tools | Coding, automation, open-source and integration changes |
| Research and mechanisms | What an experiment demonstrated and why it matters |
| Real-world consequences | Adoption, safety, security, economics, hardware and trends |

Aim for at least four lanes and three unrelated organizations/creator groups in the final five; normally no more than two stories about one provider. These are diversity preferences, not permission to publish weak stories. Record justified exceptions. Never split one announcement into several posts to meet the target. Inspect the previous seven editions for repetitive coverage and neglected subjects.

Search across providers, original creators and community discovery surfaces. Verify original provenance and observable dated traction before calling something viral. Otherwise report the interesting event without a virality claim.

## 2. Researcher: establish evidence and rank

For credible candidates record an event key (entity + capability/event + original date), primary URL, event/source dates, reader angle and evidence gaps. Open sources; snippets and votes are not verification.

Rank eligible candidates from 0–2 each on freshness, reader consequence, novelty, evidence strength and shareability of the supported angle. Scores rank candidates only; reject unsupported central claims regardless of score. Shareability means concrete surprise or usefulness, not invented popularity.

Select five distinct stories and three backups. A reserve may be a current-source explainer of a question appearing in recent discussion, explicitly presented as explanation rather than a new launch. Explain why it matters now and deduplicate it against existing coverage.

Maintain a compact claim ledger: claim, exact URL/section/version, evidence type and limitation. Check contradictory evidence for substantive comparisons. Verify material access, region, license, price, date and benchmark claims. Never use private connector or project information as public source material.

## 3. Writer: draft the edition

Apply magazine-writing. Give each article one angle, a supported headline and useful summary. Use the lengths in news-publishing.md. Prepare five complete posts before the preferred atomic publication.

Write original natural Hungarian with varied openings and appropriate depth. Preserve exact identifiers, attribution and caveats. Use correct publication dates, month folders, categories, existing tag casing, deterministic slugs and real Markdown citations. Research papers, vendor demos, documented capabilities and independent tests must remain distinguishable.

## 4. Reviewer: challenge, edit, recheck

Execute separate passes; reading a skill alone is not review:

1. Technical-review: compare material claims to evidence; mark blocker / qualification / checked.
2. Editorial review: check headline accuracy, reader value, freshness and duplication within the edition and past coverage.
3. Humanizer: improve Hungarian prose while preserving facts, dates, numbers, attribution and uncertainty.
4. Final evidence comparison and schema/metadata validation after editing.

Mark each post ready or hold with a reason. Give a blocked candidate one focused repair attempt, then replace it with a researched backup. Review up to three backups; if slots remain, conduct one additional targeted discovery pass of up to five leads in underrepresented lanes. Continue past individual failed sources and drafts.

If fewer than five qualify after that process, publish the ready subset and record the shortfall, replacement attempts and actionable blockers. Never invent a fifth article. These are responsibility stages, not a requirement for subprocesses or multiple agents. Do not claim independent or human review unless it happened.

## 5. Publisher: validate and commit

Validate live schema, categories/tags, date/month, unique event and slug, sources, supported title, appropriate length, visibility and absence of placeholders. Run repository checks when execution is available; otherwise record unavailable checks and actual static validation honestly.

Immediately before publication refresh main and today's record, recompute capacity/deduplication, and preserve concurrent edits. Prefer one atomic commit containing ready posts and a record marked pending verification. Update main using a non-forced expected-head lease. If it fails, reread changes and recompute before rebuilding; never overwrite a competing run.

For sequential writes, checkpoint each verified post before proceeding. After an ambiguous response, fetch the path/ref before retrying. Matching content is success; conflicting content must not be overwritten. If a partial publication lacks a record, reconcile actual post paths, events and commits before filling remaining slots. Do not create suffixed duplicate slugs.

Fetch every added article from main and compare exact content. Inspect the deployment run for the article commit SHA. Distinguish committed, readback verified, deployment pending, failed and deployed. Use bounded checks; report pending rather than polling indefinitely. A deployment failure does not authorize replacement copies or infrastructure changes.

## 6. Recorder: retain evidence and report

Use [templates/daily-news-run.md](templates/daily-news-run.md). Preserve earlier same-day attempts. Store compact selection decisions, evidence, rejected event keys, post paths, remaining slots, actual checks, commit SHAs and deployment observations; no full source transcripts.

Five-post completion requires five verified writes. A researched shortfall can be a complete scan with a partial edition; record both states. Advance the successful coverage checkpoint only after the scan and all intended ready-post writes are verified. Never advance on access failure, interrupted research or ambiguous writes. Retry missing slots using live deduplication; do not compensate tomorrow by exceeding five.

Return published Hungarian titles/links, count out of five, commit, actual checks/deployment state and any shortfall. Do not schedule a separate report or recovery run.

## Acceptance scenarios

- Clean run: five distinct ready stories, one batch, five readbacks, observed deployment or honestly pending.
- Failed claim: hold candidate, review backup, complete five when evidence permits.
- Retry after two writes: recognize them and create at most three more.
- Concurrent main change: rejected expected-head lease, refresh, preserve changes, recompute and retry.
- Lost response: inspect main before retry; no duplicate slug shortcut.
- Four qualified after replacement discovery: publish four with an explicit shortfall.
- Already complete today: no article writes or redundant commit.
- Failed deployment: retain verified posts and report failure without republishing.
