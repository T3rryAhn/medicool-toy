const DEFAULT_BASE = 'http://localhost:8000'

export function getApiBaseUrl() {
  return import.meta.env.VITE_API_BASE_URL || DEFAULT_BASE
}

export async function fetchLatestVisionResult() {
  const base = getApiBaseUrl()
  const res = await fetch(`${base}/api/vision/latest`)
  if (!res.ok) {
    throw new Error(`API Error ${res.status}`)
  }
  // null or object
  return res.json()
}
