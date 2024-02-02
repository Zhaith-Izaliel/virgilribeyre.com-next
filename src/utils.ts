/**
 * Get the browser language
 * @returns the browser language
 */
export default function getBrowserLang(): string {
  if (navigator.languages !== undefined) {
    return navigator.languages[0];
  }
  return navigator.language;
}
