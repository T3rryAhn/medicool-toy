# API Contract (Minimal)

Base URL: http://localhost:8000

## GET /api/health

Response

    { "ok": true }

## POST /api/vision/results

설명: 임베디드(카메라/인식)에서 결과를 서버로 전송

Request

    {
      "label": "INSULIN",
      "confidence": 0.92,
      "bbox": [10, 20, 200, 220],
      "source": "embedded"
    }

Response

    { "accepted": true }

## GET /api/vision/latest

설명: 최신 인식 결과 1건 조회 (없으면 null)

Response (결과 있을 때)

    {
      "ts": "2026-01-16T09:00:00+09:00",
      "label": "INSULIN",
      "confidence": 0.92,
      "bbox": [10, 20, 200, 220],
      "source": "embedded"
    }

Response (아직 없을 때)

    null
