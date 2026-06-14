/**
 * Minimal className combiner — joins truthy class strings with a single space.
 * Avoids an extra dependency for a project of this size.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
