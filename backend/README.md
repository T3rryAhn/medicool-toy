# Backend (FastAPI)

임베디드(카메라/인식)에서 올라오는 "인식 결과"를 받아서 in-memory로 최신 1건만 저장하고, 프론트가 조회할 수 있게 제공합니다.

## 실행

    python -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

## 주요 엔드포인트
- GET /api/health
- POST /api/vision/results
- GET /api/vision/latest

## 구조
- app/main.py: FastAPI 진입점
- app/api: 라우터
- app/schemas: Pydantic 스키마(요청/응답)
- app/services: 저장/조회 로직 (현재는 메모리)
- app/core: 설정
