# Petaflop editorial policy

## Identity and scope

Petaflop is a Hungarian magazine about AI, technology, and the tools used to build software. It serves curious readers and working developers. Start with a concrete consequence the reader can understand, then add the technical detail needed to explain or evaluate it.

Coverage includes consumer AI features; models and research; coding agents, editors, SDKs, APIs, testing and debugging tools; open-source projects; databases, cloud infrastructure, security, performance, and relevant hardware. A technology story does not need an AI angle. It does need a useful capability, consequential change, well-supported explanation, or practical decision to investigate.

Do not force a numerical consumer/developer split. Consider the recent publishing mix so developer tools and broader technology receive sustained coverage without filling quotas. Vendor popularity and search interest can reveal questions, but do not establish importance or accuracy. Avoid rumor roundups, disguised advertisements, celebrity drama, and release-note rewrites with no reader value.

## Topics are different from formats

Preserve the existing section slugs and URLs. Use `hirek` for consequential news, `kiadasok` for releases, `tesztek` for clearly identified tests or evidence-based comparisons, `utmutatok` for instructional explanations, and `elemzesek` for analysis. AI, databases, developer tools, and hardware are subjects, not competing format categories.

Reuse existing exact tag casing; inspect current content before introducing a genuinely new tag. Tool-directory entries may include non-AI developer tools, using the current tool schema and supported categories. Do not create unsupported frontmatter or imply an entry is a tested recommendation.

## Formats and depth

The daily publisher remains a short-news service: normally 100–180 body words, up to 220 when an essential technical or research caveat needs space. It may cover any in-scope subject. It does not automatically become a tutorial publisher.

For separately requested work, these are starting points, not quotas: a focused explainer may need 400–800 words; a reported feature or technical comparison 800–1,500; a practical guide enough space for prerequisites, a working path, and limitations. Shorten or expand to fulfill the story's promise. Do not pad a brief into a feature or squeeze a necessary warning out of a word budget.

Lead with what changed or the problem being explained. Establish why it matters near the top. Define unfamiliar terminology at first useful mention without repeatedly teaching experts the basics. Put implementation details after the main finding; link extended reference material instead of reproducing an entire manual.

## Evidence and independence

Verify material claims against opened original sources. Keep event date, source publication/update date, and Petaflop publication date distinct. Search results, reposts, generated summaries, and existing Petaflop articles are discovery aids, not proof.

A vendor is authoritative about its documented release and commercial terms, not independent evidence of superiority. Attribute benchmark results, limitations, and commercial claims. Seek separate evidence or a counterexample for consequential comparisons. One original source can support an uncomplicated release brief; several outlets repeating it are still one underlying source.

Never fabricate interviews, quotations, testing, screenshots, sources, bylines, or user experience. Clearly distinguish an announcement, a documentation-based explanation, and work actually tested. Label analysis or opinion when the distinction matters. Disclose relevant sponsorship, affiliate relationships, or conflicts if present; do not invent them or add promotions without authorization.

Use original language. Quote only what is necessary, preserve meaning and attribution, and identify translated quotations where appropriate. Cite the source supporting the claim near the claim when ambiguity would otherwise remain. Short news ends with a compact `Forrás` or `Források` line; long pieces may use inline links and a short source list.

## Tone, visuals, and technical accuracy

Use [magazine-writing](../.agents/skills/magazine-writing/SKILL.md), [technical-review](../.agents/skills/technical-review/SKILL.md), [editorial-visuals](../.agents/skills/editorial-visuals/SKILL.md), and [humanizer](../.agents/skills/humanizer/SKILL.md). The goal is readable reporting with substance, not either vendor copy or a wall of implementation jargon.

An image must explain something, identify something relevant, or add useful visual context. It is optional. Keep provenance and required attribution visible; label conceptual or generated illustrations. Never use a fabricated product interface or chart as evidence. Review accessibility and mobile readability before publication.

Preserve real uncertainty, version boundaries, units, safety warnings, and licensing distinctions during every edit. Style preferences never override technical meaning.

## Publication, corrections, and authority

An unsupported central claim, a materially misleading title, fabricated testing, unsafe instructions, or unresolved image rights blocks publication of the affected story or asset. Fix it, narrow the claim, omit the asset, or hold the story. A legitimate uncertainty can remain when stated clearly and the article's conclusion does not depend on pretending it is resolved.

Preserve published URLs and original publication dates. For a factual correction, add a visible dated `Helyesbítés` explaining the corrected point; for a material later development, use a dated `Frissítés` or a new linked follow-up. Do not silently turn a documentation-based article into a purported hands-on review. Typographical cleanup does not require a correction note. Changes to existing articles require authorization appropriate to that workflow; the daily job reports discovered errors rather than expanding its own write scope.

AI-assisted production never justifies invented reporting. Be truthful about assistance and verification when describing the publication process, and label generated illustrative media. An assigned human review may only be claimed if it happened.

The skills guide editorial work; they do not grant permissions. The scheduled job's source of operational rules is [news-publishing.md](news-publishing.md). Keep that brief and its scheduler prompt aligned when scope changes. The existing schedule, daily cap, safe GitHub writes, and deployment checks remain separate from writing style.
