import { useEffect, useState } from 'react'
import StatusCard from '../components/StatusCard.jsx'
import { fetchLatestVisionResult, getApiBaseUrl } from '../api/visionApi.js'

export default function DashboardPage() {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [lastFetchMs, setLastFetchMs] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchOnce = async () => {
      try {
        const data = await fetchLatestVisionResult()
        if (!isMounted) return
        setResult(data)
        setError(null)
        setLastFetchMs(Date.now())
      } catch (e) {
        if (!isMounted) return
        setError(e)
      }
    }

    // initial
    fetchOnce()

    // poll every 1s
    const id = setInterval(fetchOnce, 1000)

    return () => {
      isMounted = false
      clearInterval(id)
    }
  }, [])

  const base = getApiBaseUrl()

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>🧊💊 Medicine Fridge Kiosk (Lab)</h1>
        <div style={styles.meta}>
          <span>API: {base}</span>
          <span>Last fetch: {lastFetchMs ? new Date(lastFetchMs).toLocaleTimeString('ko-KR') : '-'}</span>
        </div>
      </header>

      <main style={styles.main}>
        <StatusCard result={result} error={error} />

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Postman/curl 테스트</h2>
          <div style={styles.code}>
            <div>POST {base}/api/vision/results</div>
            <pre style={styles.pre}>{JSON.stringify(
              {
                label: 'INSULIN',
                confidence: 0.92,
                bbox: [10, 20, 200, 220],
                source: 'postman'
              },
              null,
              2
            )}</pre>
          </div>
        </section>
      </main>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f6f7f9',
    padding: 16
  },
  header: {
    marginBottom: 16
  },
  title: {
    margin: 0
  },
  meta: {
    marginTop: 6,
    display: 'flex',
    gap: 12,
    color: '#555',
    flexWrap: 'wrap'
  },
  main: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 16,
    maxWidth: 820
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: 12,
    padding: 16,
    background: 'white'
  },
  cardTitle: { margin: '0 0 12px 0' },
  code: { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
  pre: {
    marginTop: 10,
    padding: 12,
    background: '#111',
    color: '#eee',
    borderRadius: 10,
    overflowX: 'auto'
  }
}
