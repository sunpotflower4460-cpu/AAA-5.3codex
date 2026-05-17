const DAY_MS = 1000 * 60 * 60 * 24;

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const formatUpdatedAt = (updatedAt: string, locale: 'ja' | 'en' = 'ja'): string => {
  const date = new Date(updatedAt);

  if (Number.isNaN(date.getTime())) {
    return updatedAt;
  }

  const now = new Date();
  const diffDays = Math.floor((startOfDay(now).getTime() - startOfDay(date).getTime()) / DAY_MS);

  if (diffDays === 0) {
    return locale === 'ja' ? '今日' : 'Today';
  }

  if (diffDays === 1) {
    return locale === 'ja' ? '昨日' : 'Yesterday';
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};
