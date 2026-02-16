export function getFormattedTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  const parts = [];
  if (h) parts.push(`${h} ${getHourLabel(h)}`);
  if (m) parts.push(`${m} ${getMinuteLabel(m)}`);

  return parts.join(', ');
}

function getHourLabel(h: number): string {
  if (h === 1) return 'час';
  if (h >= 2 && h <= 4) return 'часа';
  return 'часов';
}

function getMinuteLabel(m: number): string {
  if (m === 1) return 'минута';
  if (m >= 2 && m <= 4) return 'минуты';
  return 'минут';
}
