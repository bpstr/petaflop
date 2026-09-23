---
name: editorial-visuals
description: Plan, source, caption, and review Petaflop article illustrations, screenshots, technical diagrams, and charts. Use whenever adding or changing article images to check explanatory value, accuracy, rights, attribution, accessibility, mobile readability, and compatibility with the Astro content schema.
metadata:
  version: "1.0.0"
---

# Editorial visuals

Choose visuals to help the reader understand the story. This skill does not require an image for every post and does not grant permission to use copyrighted material or paid generation services.

## Decide what the visual must do

Write a one-sentence purpose before sourcing or drawing. Use a real screenshot to show an actual interface or workflow, a diagram to explain components and relationships, or a chart to compare verified measurements. A conceptual illustration can establish the subject or mood but must not masquerade as documentary evidence. Omit a visual that only repeats the headline or decorates a brief with a generic robot or glowing brain.

For a substantial article, record the intended placement and the specific explanation the visual adds in the [story brief](../magazine-writing/templates/story-brief.md). There is no fixed images-per-word quota.

## Preserve accuracy

Screenshots need a known product/version or capture date and honest context. Use a controlled or authorized account, remove private data with clearly indicated redaction, and avoid presenting a vendor demonstration as our test. Do not generate a fake interface to prove feature availability. If a mockup genuinely helps an explainer, label it as a mockup and keep it separate from product evidence.

Diagrams need correct labels, direction, boundaries, and a legend when symbols are not obvious. Mark proposed architecture as proposed. Do not draw a feature or relationship the sources do not support. Prefer a simple static diagram over decorative complexity or a dependency added just for rendering.

Charts need traceable data, units, date/version, method, and attribution. Show comparable series and distinguish estimates from observations. Start bar-chart value axes at zero; explain a nonzero scale where another chart type legitimately uses one. Avoid 3D distortion and misleading time intervals. Do not copy a vendor chart without understanding what it measures or verifying reuse terms. Never invent datapoints to fill a graph.

Label generated or conceptual illustrations in a visible Hungarian caption, for example `AI-val készített illusztráció; nem termékfelület.` Do not create photorealistic depictions that could be mistaken for evidence of a real reported event. Generated images are not exempt from factual, privacy, or rights review.

## Source and credit deliberately

Use owned or commissioned assets, assets with an applicable license, or press assets whose documented terms permit the intended use. Search-result visibility is not permission. Inspect the original asset page and terms; a software repository's license does not necessarily cover a logo, screenshot, or embedded third-party image.

Record creator, original source URL, license or permission and its URL, access date, intended use, and modifications. Follow required credit wording and placement. Credit is not a substitute for permission. If rights remain unresolved, choose another asset or omit it rather than making a legal assumption.

A caption should explain the visible subject and relevant limitation or context, then give source/credit and modification or generation disclosure where needed. Keep required credit visible to readers, not only in an internal note. Do not apply the site's content license to a third-party image that has different terms.

## Make the meaning accessible

Write concise alternative text for the image's role in this article, not a list of incidental pixels. Decorative images may use empty alt text. For a functional linked image, ensure the link has an accessible name describing its destination or action; empty image alt alone is not enough for an otherwise unnamed link.

A complex chart or diagram needs its important information in nearby text, and a table or fuller description when necessary. Alt text alone should not try to carry an entire dataset. Do not encode the only distinction in color. Check label contrast, reading order, legibility at phone widths, and light/dark backgrounds. Captions provide context; they do not replace an appropriate text alternative.

## Fit the actual repository

Store assets under `public/static/posts/` with descriptive, lowercase names, optionally grouped by article. Reference them as `/static/posts/...`; do not hotlink third-party hosts by default. Prefer a well-compressed supported format and appropriate dimensions. Inspect the actual exported asset, not merely a generation prompt. SVGs must be static and reviewed for scripts, external requests, embedded secrets, and unsafe markup.

The current post schema has only a `cover` string for image metadata. Do not invent `coverAlt`, `credit`, or `caption` fields and assume the renderer will use them. Put meaningful figures in the article body using supported Markdown/HTML with alt text and a visible caption. A cover must not be the sole carrier of essential information; include any needed explanation and credit in the article. If the existing renderer cannot meet a required accessibility or attribution condition, omit that use or explicitly request a scoped rendering change.

Check the production path, crop, caption, loading behavior, and responsive appearance with the current site. Do not claim a visual inspection occurred when only source text was reviewed. When rendering tools are unavailable, report the gap.

## Deliverable

Return the asset choice or `no image`, purpose, source/rights record, caption, alt text or text-equivalent plan, exact repository path, and observed validation. Block misleading visuals, exposed private information, unresolved rights, broken paths, or inaccessible essential information. The publisher must skip the asset rather than allow its absence to trigger fabricated replacement art.

See the [research baseline](../magazine-writing/references/research.md) for W3C, AP, and attribution guidance.
