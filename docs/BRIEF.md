# Petaflop.hu Project Brief

## Executive Summary

Petaflop.hu is a Hungarian AI magazine focused on fast, practical coverage of AI news, product releases, tooling, tutorials, interviews, and community/event updates. The first version should be a static, GitHub-hosted Astro site that can publish a high volume of content while remaining simple to operate with AI-assisted editorial workflows.

The product should serve Hungarian readers who are either beginners or a mixed general audience interested in understanding what is happening in AI and which tools are worth trying. The core value proposition is timely Hungarian-language coverage of the latest AI releases and practical guidance, presented under a memorable brand name: "petaflop" signals scale, computing power, and modern AI.

## Background

The current repository is already an Astro-based Hungarian AI news blog. The MVP should build on the existing static-site architecture and content collections rather than introducing a complex backend.

The intended editorial engine is AI-agent-assisted publishing, with an expected cadence of 5-10 posts per day. This has implications for developer handoff: workflows should prioritize structured content, repeatable publishing, easy content review, search/discovery, and low operational overhead.

## Audience

Primary audience:

- Hungarian readers who want to keep up with AI news.
- Beginners who need clear explanations without heavy technical assumptions.
- A mixed audience of professionals, creators, founders, marketers, developers, and curious readers.

Reader needs:

- Understand the latest AI product releases and market changes quickly.
- Discover useful AI tools.
- Learn how to apply AI tools through tutorials and how-to content.
- Follow Hungarian-relevant AI events, community updates, and interviews.

Tone:

- Hungarian-language first.
- Clear, factual, concise, and accessible.
- Practical rather than hype-driven.

## Goals

Business/product goals:

- Establish Petaflop.hu as a frequently updated Hungarian AI news destination.
- Publish timely coverage of AI releases and tooling updates.
- Grow traffic as the primary early success metric.
- Prepare the site for monetization through Google AdSense, sponsored posts, and affiliate links.

User goals:

- See what is new in AI every day.
- Understand why a release, tool, or trend matters.
- Find useful AI tools in a browsable toolkit.
- Subscribe to a newsletter for ongoing updates.
- Comment on articles.

## MVP Scope

The MVP should be a static website hosted through GitHub-compatible static hosting. It should avoid server-side application features unless they are provided by external services or static-compatible integrations.

Must-have MVP features:

- Blog/news post publishing.
- Content pages and structured editorial content.
- Toolkit or AI tool directory.
- Newsletter subscription entry point.
- Comment functionality.
- Static deployment flow suitable for GitHub hosting.
- Monetization-ready layout areas for future Google AdSense, sponsored posts, and affiliate links.

Content pillars:

- Daily AI news.
- AI tool reviews.
- Tutorials and how-to guides.
- Interviews.
- Event and community posts.

Publishing expectation:

- 5-10 posts per day.
- Content produced or assisted by AI agents.
- Editorial workflow should support frequent updates and review.

## Out of Scope for MVP

- Custom backend application.
- User accounts.
- Native paid membership system.
- Dynamic forum or full community platform.
- Complex personalization.
- Custom CMS unless needed later.
- Non-static infrastructure that would prevent simple GitHub hosting.

## Functional Requirements

### Posts

The site should support publishing Hungarian articles with metadata suitable for listing pages, feeds, SEO, and social sharing.

Expected post types:

- News item.
- Tool review.
- Tutorial/how-to.
- Interview.
- Event/community update.
- Sponsored post.

Recommended metadata:

- Title.
- Date.
- Summary.
- Tags.
- Draft/hidden status.
- Cover image.
- Source links for factual news.
- Optional content type.
- Optional sponsorship/affiliate disclosure fields.

### Homepage

The homepage should make the site feel like an active AI magazine. It should prioritize recent posts and allow readers to quickly scan what changed recently.

Expected sections:

- Latest posts.
- Highlighted or featured story.
- Tool recommendations or featured tools.
- Newsletter subscription block.
- Navigation to categories/tags/toolkit.

### Toolkit

The toolkit should be a browsable directory of AI tools. It should help readers discover practical tools by category.

Expected capabilities:

- Tool entries with name, provider, URL, description, category, and featured status.
- Category-based browsing.
- Clear outbound links.
- Affiliate-link readiness where appropriate.

### Newsletter

The MVP should include a newsletter subscribe component or page. The exact provider is still open, but the frontend should be ready to embed or link to a provider such as Mailchimp, Buttondown, Beehiiv, ConvertKit, or another service.

Requirements:

- Visible subscribe entry point.
- Clear Hungarian copy.
- Static-compatible implementation.
- No custom email backend in MVP.

### Comments

The MVP should include comments through a static-site-compatible third-party service.

Candidate approaches:

- Giscus, using GitHub Discussions.
- Utterances, using GitHub Issues.
- Hosted comment provider if preferred later.

Recommended default for a GitHub-hosted static MVP:

- Giscus, because it keeps comments close to GitHub and avoids a custom backend.

### Monetization Readiness

The MVP does not need to fully monetize on day one, but should avoid structural choices that make monetization difficult.

Planned monetization:

- Google AdSense.
- Sponsored posts.
- Affiliate links.

Developer considerations:

- Reserve layout positions where ads can be added later without redesigning the site.
- Add a clear path for sponsored post labeling.
- Support affiliate links in tool entries and articles.
- Ensure disclosures can be displayed in Hungarian when needed.

## Non-Functional Requirements

Performance:

- Static pages should load quickly.
- Avoid unnecessary client-side JavaScript.
- Optimize for frequent content publishing.

SEO:

- Clean URLs.
- RSS/feed support.
- Sitemap support.
- Descriptive metadata for posts and pages.
- Hungarian language configuration.

Maintainability:

- Preserve existing Astro content collection patterns.
- Keep content easy for AI agents and editors to create.
- Avoid broad theme rewrites during MVP work.

Accessibility:

- Semantic HTML.
- Readable typography.
- Keyboard-accessible navigation.
- Sufficient color contrast.

Operations:

- Build and deploy from GitHub.
- Keep Node.js requirement aligned with the repository: Node.js >=22.12.0.
- Validate Astro/content changes with `npm run check`.
- Run `npm run build` before completing broader route, layout, feed, config, or deployment changes.

## Editorial Workflow Assumptions

Because the target cadence is 5-10 posts per day, the site should support a lightweight but consistent editorial pipeline.

Recommended workflow:

- AI agents draft posts from verified sources.
- Drafts are saved with `draft: true` until reviewed.
- Human editor checks factual accuracy, tone, title, summary, links, and disclosures.
- Published posts include source links where factual claims depend on current announcements or reports.
- Tags are kept consistent for long-term discovery.

Current editorial rule:

- News and time-sensitive AI coverage must be verified against current primary or reputable sources before publishing.

## Success Metrics

Primary MVP success metric:

- Traffic.

Recommended supporting metrics:

- Daily and monthly unique visitors.
- Page views per article.
- Returning visitor rate.
- Search traffic growth.
- Newsletter conversion rate.
- Top-performing content categories.
- Tool directory outbound clicks.
- Comment activity.

## Risks and Constraints

High publishing volume:

- 5-10 posts per day can create quality, duplication, and fact-checking risks. The implementation should make drafts, metadata, source links, and review status easy to manage.

Static hosting:

- Comments, newsletter signup, analytics, ads, and search may require external services or static-compatible integrations.

Monetization:

- Google AdSense approval may depend on content quality, privacy policy, cookie consent, traffic, and site maturity.
- Sponsored and affiliate content require visible disclosure.

Content trust:

- AI news changes quickly. Posts should use exact dates and source links, especially for releases, pricing, benchmarks, regulations, and company announcements.

## Developer Handoff Notes

The senior developer should review the existing Astro implementation and propose a detailed technical specification for:

- Information architecture.
- Content collection schema updates.
- Homepage layout.
- Post templates and content-type handling.
- Toolkit directory behavior.
- Newsletter provider integration options.
- Comment provider integration, likely Giscus.
- Ad and sponsored-content readiness.
- SEO/feed/sitemap coverage.
- GitHub-hosted static deployment flow.
- Editorial workflow support for AI-agent-generated drafts.

The specification should distinguish between:

- MVP implementation.
- Near-term improvements after launch.
- Later dynamic/community features that would require backend services.

## Open Questions

- Which GitHub static hosting path should be used: GitHub Pages, Vercel connected to GitHub, or another static host?
- Which newsletter provider should be used?
- Should comments be mandatory at launch, or can they launch shortly after the first static version?
- Should the toolkit support ratings, tags, affiliate links, or only basic directory entries for MVP?
- Should sponsored posts be a distinct content type or a metadata flag on normal posts?
- What analytics platform should measure traffic?
- Is there an existing brand identity, logo, typography direction, or should the current theme remain mostly unchanged?
- Who performs final editorial approval before publishing AI-agent-generated content?
