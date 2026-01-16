# Smart Medicine Fridge Lab (React + FastAPI)

의약품 냉장고 주제의 "기술 확인용" 미니 레포입니다.

이번 1차 목표는 딱 1가지입니다.
- 임베디드(카메라/인식) 쪽에서 인식 결과를 POST로 보내면(FastAPI)
- 프론트(React)가 최신 결과를 조회해 화면에 표시한다

실제 센서는 아직 연결하지 않고, Postman/curl로 가상 요청을 보내서 흐름만 확인합니다.

## 구성
- backend/ : FastAPI (in-memory로 최신 인식 결과만 저장)
- frontend/ : Vite + React (대시보드 1페이지)
- docs/ : 최소 API 계약

## 실행

### 1) Backend 실행

    cd backend
    python -m venv .venv
    # macOS/Linux
    source .venv/bin/activate
    # Windows PowerShell
    # .venv\Scripts\Activate.ps1

    pip install -r requirements.txt
    uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

- Swagger: http://localhost:8000/docs

### 2) Frontend 실행

    cd frontend
    npm install
    npm run dev

- Frontend: http://localhost:5173

## 테스트

### 1) 가상 인식 결과 POST

    curl -X POST http://localhost:8000/api/vision/results \
      -H "Content-Type: application/json" \
      -d '{"label":"INSULIN","confidence":0.92,"bbox":[10,20,200,220],"source":"postman"}'

### 2) 최신 결과 조회

    curl http://localhost:8000/api/vision/latest

자세한 내용은 docs/api-contract.md 참고.

## 범위
- 포함: 최신 인식 결과 1건 저장/조회 (in-memory)
- 제외: DB, 로그인, 실제 센서/카메라 연동, 배포 스크립트(추후 라즈베리용으로 별도)
