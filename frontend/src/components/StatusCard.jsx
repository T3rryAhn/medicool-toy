import { formatPercent, formatTs } from '../utils/format.js'

export default function StatusCard({ result, error }) {
  const box = result?.bbox?.length === 4 ? result.bbox.join(', ') : '-'

  return (
    <section style={styles.card}>
      <h2 style={styles.cardTitle}>Latest Vision Result</h2>

      {error ? (
        <div style={styles.error}>Error: {String(error)}</div>
      ) : null}

      <div style={styles.row}>
        <span style={styles.label}>Updated</span>
        <span style={styles.value}>{formatTs(result?.ts)}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Label</span>
        <span style={styles.value}>{result?.label ?? '-'}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Confidence</span>
        <span style={styles.value}>{formatPercent(result?.confidence)}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>BBox</span>
        <span style={styles.value}>{box}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Source</span>
        <span style={styles.value}>{result?.source ?? '-'}</span>
      </div>

      <p style={styles.hint}>
        서버로 POST /api/vision/results 를 보내면 이 화면이 갱신됩니다.
      </p>
    </section>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: 12,
    padding: 16,
    background: 'white'
  },
  cardTitle: { margin: '0 0 12px 0' },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 0',
    borderBottom: '1px dashed #eee'
  },
  label: { color: '#666' },
  value: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
  hint: { marginTop: 12, color: '#666', fontSize: 13 },
  error: { marginBottom: 10, color: '#b00020' }
}
