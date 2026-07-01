import type { Locale } from './i18n';

/** Site configuration — edit this file to customize your blog. */
export const site = {
  /** Production URL (no trailing slash). */
  baseUrl: 'https://petaflop.hu',
  /** GitHub Pages subpath, e.g. "/repo-name". Leave empty for root deploy. */
  repoSubpath: '',
  title: 'Petaflop',
  description:
    'A Petaflop.hu a mesterséges intelligencia forradalmát mozgató hatalmas számítási teljesítményt vizsgálja..',
  author: 'petaflop.hu',
  /** UI language */
  language: 'hu' as Locale,
  maxPostsOnIndex: 8,
  copyright: {
    enable: true,
    type: 'CC_BY_NC_SA_4_0' as const,
    customText: '',
    showLicenseIcon: true,
    showStandardFormat: true,
    additionalNote: '',
  },
} as const;

export type SiteConfig = typeof site;
