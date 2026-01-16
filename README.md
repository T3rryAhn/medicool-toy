# 🧊💊 Smart Medicine Fridge Lab (React + FastAPI)

의약품 냉장고 주제의 **기술 검증용 미니 연습 레포**입니다.  
실제 센서/카메라 연동 전 단계에서, **가상 센서 이벤트(Postman)** 와 **키오스크 UI(React)** 흐름을 빠르게 확인하는 것이 목적입니다.

## 목표
- FastAPI가 가상 센서 이벤트를 수신하고(POST)
- React가 현재 상태를 조회해(GET) 화면에 반영하는지 확인
- 라즈베리파이5(리눅스)에 올릴 수 있는 최소 구성 검증

> 본 레포는 완성 제품이 아니라 “기술 확인용”이며, 기능 범위를 최소화합니다.

## 구성
- `frontend/` : React 키오스크 UI
- `backend/` : FastAPI API 서버 (in-memory 상태 저장)

## 빠른 실행
### 1) Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # (Windows는 .venv\Scripts\activate)
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```
