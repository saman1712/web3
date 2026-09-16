/** Format a toman amount the same way the original menu does (Persian grouping). */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export function toFaDigits(value: number | string): string {
  const map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(value).replace(/\d/g, (d) => map[Number(d)]);
}
