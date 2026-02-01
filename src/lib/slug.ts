/**
 * Generate a URL-friendly slug from a string
 * @param text - The text to slugify
 * @returns A URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Replace spaces with -
    .replace(/\s+/g, '-')
    // Remove all non-word chars (except -)
    .replace(/[^\w\-]+/g, '')
    // Replace multiple - with single -
    .replace(/\-\-+/g, '-')
    // Remove - from start and end
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
