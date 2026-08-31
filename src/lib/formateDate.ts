// src/lib/formatDate.ts

export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
) {
  const value =
    typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? new Date(`${date}T12:00:00`)
      : new Date(date);

  return new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...options,
  })
    .format(value)
    .replace(' р.', '');
}
