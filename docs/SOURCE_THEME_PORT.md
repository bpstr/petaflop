# Source theme port

Petaflop remains an Astro publication. The Ghost Source theme is used as the visual and structural baseline, while Ghost-specific Handlebars helpers, membership features, portal dialogs, and server-side pagination are replaced by Petaflop's existing Astro content collections and routes.

## Mapping

| Ghost Source | Petaflop Astro |
| --- | --- |
| `default.hbs` | `src/layouts/BaseLayout.astro` |
| navigation partial | navigation in `BaseLayout.astro` |
| post list partial | homepage feed in `src/pages/index.astro` |
| `partials/post-card.hbs` | `src/components/PostCard.astro` |
| `post.hbs` | `src/pages/posts/[...slug].astro` |
| `assets/css/screen.css` | `src/styles/source.css` |

## Preserved Petaflop behavior

- Astro content collections and Markdown articles
- existing category, tag, archive, feed, tool, and about routes
- SEO, Open Graph, canonical URLs, RSS, Atom, and analytics
- table of contents, related posts, previous/next navigation, and copyright block
- existing deployment model

## Deliberate differences from Ghost

- RSS subscription replaces Ghost Portal membership signup
- archive navigation replaces Ghost's search modal
- static generation replaces Ghost pagination and Content API helpers
- Petaflop categories remain visible as a horizontal publication section bar

The Source copyright and MIT license notice are retained in `THIRD_PARTY_NOTICES.md`.
