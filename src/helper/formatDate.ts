export function formatDate(isoString: string, locale: string) {
  const date = new Date(isoString);
  const formattedDate = date.toLocaleDateString(locale);
  return formattedDate;
}
