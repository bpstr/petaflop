# Research behind Petaflop's editorial skills

Reviewed on 2026-09-23. These are original summaries of primary guidance, followed by Petaflop's implementation choices. They are not copies of the source manuals or a claim that one universal magazine-writing formula exists.

## Reporting, context, and accountability

[SPJ's Code of Ethics](https://www.spj.org/spj-code-of-ethics/) emphasizes verification, original evidence, identifiable sourcing, context, independence, and visible corrections. For Petaflop, this informs the claim ledger, source-motive checks, explicit distinction between announcement and observation, and correction policy. A fast or short format does not lower the factual bar.

[AP's Telling the Story standards](https://www.ap.org/about/news-values-and-principles/telling-the-story/) address attribution, faithful quotations, original reporting, visual accuracy, and corrections. They inform our rules against invented testing, misleading screenshots, uncredited source material, and data distorted for a prettier chart. Petaflop's generated-illustration labeling and technical review workflow are local implementation choices, not a claim that AP endorses them.

## Leads, structure, and reader interest

[Purdue OWL's How to Write a Lead](https://owl.purdue.edu/owl/subject_specific_writing/journalism_and_journalistic_writing/writing_leads.html) explains how a specific opening establishes direction and a promise the story must fulfill. Its discussion of audience, concrete detail, and different lead types informs our requirement to choose a reader and angle before drafting. A real anecdote can work when its relevance becomes clear promptly; invented color cannot.

[Purdue OWL's Inverted Pyramid Structure](https://owl.purdue.edu/owl/subject_specific_writing/journalism_and_journalistic_writing/the_inverted_pyramid.html) provides a useful structure for news that prioritizes the central information. We use that for briefs without forcing features, explainers, and guides into the same shape. Suggested article lengths are Petaflop planning defaults, not externally validated quality thresholds.

## Developer-facing tone and examples

[Google's developer documentation voice and tone guide](https://developers.google.com/style/tone) favors approachable, respectful, useful explanation over either dry formality or promotional entertainment. This supports a Hungarian magazine voice that introduces unfamiliar terms while respecting a developer's competence. English idioms and punctuation conventions are not copied mechanically into Hungarian.

[Google's code-sample guidance](https://developers.google.com/style/code-samples) supports explaining a sample's purpose and presenting readable code with clear treatment of omissions. Petaflop adds its own publication requirements: record relevant versions, prerequisites, permissions, execution status, and limitations. Source review is not a substitute for executing an example when claiming it was tested.

The detailed review questions about API surfaces, cost units, model evaluations, licenses, and operational boundaries are Petaflop's technical editorial checklist. They are not claims that every listed condition applies to every tool. A particular article still needs current primary evidence about its subject.

## Illustrations and accessibility

[W3C WAI's Images Tutorial](https://www.w3.org/WAI/tutorials/images/) distinguishes images by their purpose, including informative, decorative, and functional uses. [Its complex-images guidance](https://www.w3.org/WAI/tutorials/images/complex/) explains the need for fuller text equivalents for detailed charts and diagrams. These inform our context-specific alt text, named image links, and nearby explanations of essential visual information.

[Creative Commons' recommended attribution practices](https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution) explain crediting the work and creator, linking the source and license, and identifying adaptations. We use a provenance record and visible credit. The exact asset's license or permission remains decisive; attribution alone does not establish permission, and these notes are not individualized legal advice.

## Skills and prose editing

The [Agent Skills specification](https://agentskills.io/specification) defines a skill directory with `SKILL.md`, discovery metadata, and optional supporting material. We use short entry points with linked templates and references and explicit reading instructions for clients that do not discover them. No client-independent automatic execution is assumed.

[Humanizer](https://github.com/blader/humanizer) supplies a prose-editing pattern catalogue and a preserve-the-meaning workflow. The exact revision, MIT license, and intentional local changes are recorded in [the provenance note](../../humanizer/UPSTREAM.md). Humanizer is an editorial aid, not empirical proof of authorship or a factual-validation tool.

## Application and maintenance

The skills turn these ideas into a repeatable sequence: choose an angle, collect evidence, draft for the reader, review technical claims and visuals, edit the prose, then check factual preservation and publication validity. The [story brief](../templates/story-brief.md), [publication review](../templates/publication-review.md), and [review cases](review-cases.md) make the expected behavior concrete without requiring boilerplate in every published article.

Revisit sources when their guidance changes or a repeated editorial failure exposes a gap. Refresh product documentation and prices for each article independently of this research review date. Keep source summaries brief, retain attribution, and distinguish newly verified guidance from an unchanged editorial preference.
