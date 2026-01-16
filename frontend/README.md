# Frontend (Vite + React)

키오스크 형태의 최소 UI:
- 최신 인식 결과(label/confidence/bbox/timestamp) 표시
- 1초마다 최신 결과를 조회(polling)해서 화면 업데이트

## 실행

    npm install
    npm run dev

## 환경변수
- .env.local을 만들어서 API 주소를 지정할 수 있습니다.

    VITE_API_BASE_URL=http://localhost:8000

(없으면 기본값은 http://localhost:8000)

## 구조
- src/pages: 화면 단위
- src/components: 재사용 UI
- src/api: FastAPI 통신
