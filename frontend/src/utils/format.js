export function formatTs(ts) {
  if (!ts) return '-'
  const d = new Date(ts)
  if (Number.isNaN(d.getTime())) return ts
  return d.toLocaleString('ko-KR', { hour12: false })
}

export function formatPercent(v) {
  if (v === null || v === undefined) return '-'
  return `${Math.round(v * 100)}%`
}
