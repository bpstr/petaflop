/** Clay palette rotation for category badges, tags, and feature cards. */
const BADGE_COLORS = ['pink', 'teal', 'lavender', 'peach', 'ochre'] as const;

export type BadgeColor = (typeof BADGE_COLORS)[number];

/** Deterministic color for the nth item in a cycling badge/card sequence. */
export function badgeColor(index: number): BadgeColor {
  return BADGE_COLORS[((index % BADGE_COLORS.length) + BADGE_COLORS.length) % BADGE_COLORS.length];
}

/** `badge-{color}` class name for the nth item in a cycling sequence. */
export function badgeClass(index: number): string {
  return `badge-${badgeColor(index)}`;
}

/** `feature-card-{color}` class name for the nth item in a cycling sequence. */
export function featureCardClass(index: number): string {
  return `feature-card-${badgeColor(index)}`;
}
