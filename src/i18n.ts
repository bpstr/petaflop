import { COPYRIGHT_LICENSE_NOTICES } from './i18n-licenses';

export const TRANSLATIONS = {
  en: {
    htmlLang: 'en',
    pageHome: 'Home',
    pageArchive: 'Archive',
    pageTags: 'Tags',
    pageTagPrefix: 'Tag',
    navHome: 'Home',
    navTools: 'Tools',
    navArchive: 'Archive',
    navTags: 'Tags',
    navAbout: 'About',
    pageAbout: 'About',
    navMenu: 'Menu',
    skipToContent: 'Skip to main content',
    mainNavigation: 'Main navigation',
    toc: 'Contents',
    headingAnchorLabel: (text: string) => `Link to “${text}”`,
    tagPostCount: (count: number) => `${count} posts`,
    allTags: 'All tags',
    noPosts: 'No posts yet.',
    noArchive: 'No archive yet.',
    noTags: 'No tags yet.',
    tagsListHeading: 'Tags',
    readAllArchive: 'View full archive',
    pageFeed: 'Feed',
    feedIntro:
      'Subscribe with an RSS / Atom reader to receive new posts. This site is fully static and requires no account or JavaScript.',
    feedRssUrlLabel: 'RSS URL',
    feedAtomUrlLabel: 'Atom URL',
    recentPosts: 'Recent posts',
    feedDescription: 'RSS / Atom subscription information',
    rssSubscribe: 'RSS Feed',
    backToTop: 'Back to top',
    codeBlockLabel: 'Code block',
    codeBlockLanguageLabel: (language: string) => `Code block, language ${language}`,
    diffAddedLineLabel: 'Added line: ',
    diffRemovedLineLabel: 'Removed line: ',
    tableScrollRegionLabel: (caption: string) => `Horizontally scrollable table: ${caption}`,
    tableScrollRegionFallbackLabel: 'Horizontally scrollable table',
    tableCaptionPrefix: 'Table: ',
    footnoteRefLabel: (number: string) => `Footnote ${number}`,
    footnoteBackrefLabel: (number: string) => `Back to footnote ${number} reference`,
    taskCompletedLabel: (task: string) => `Completed task: ${task}`,
    taskIncompleteLabel: (task: string) => `Incomplete task: ${task}`,
    prevPost: 'Previous post',
    nextPost: 'Next post',
    copyrightAdditionalNote:
      'This content is protected by the selected license. When reusing or quoting, keep the author attribution and original link.',
    copyrightFormatTemplate: (title: string, author: string, url: string) =>
      `Title: ${title}\nAuthor: ${author}\nOriginal link: <a href="${url}">${url}</a>`,
    copyrightLicenseNotices: COPYRIGHT_LICENSE_NOTICES.en,
  },
} as const;

export type Locale = keyof typeof TRANSLATIONS;

export function t(locale: Locale) {
  return TRANSLATIONS[locale] ?? TRANSLATIONS.en;
}
