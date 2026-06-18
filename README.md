# 교대핏 (GyodaeFit) — 랜딩페이지

교대근무자를 위한 **수면 자동화 서비스** 랜딩페이지입니다.
서비스의 핵심은 "루틴 관리 앱"이 아니라, **근무표를 넣으면 데이·이브닝·나이트에 맞춰 취침·기상·출근 준비 알림을 자동으로 맞춰주는 서비스**입니다.

## 기술 스택

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- 폰트: **Pretendard** (CDN) / system font fallback

## 실행 방법

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 페이지 구조

| 섹션 | 컴포넌트 | 설명 |
| --- | --- | --- |
| Header | `Header.jsx` | 로고(좌) + "출시 알림 신청" 버튼(우), 스크롤 시 배경 표시 |
| Hero | `Hero.jsx` / `PhoneMockup.jsx` | 좌측 강한 카피 + 우측 앱 화면 목업(자동 수면 스케줄) |
| 공감 | `Problem.jsx` | 사용자 조사 기반 페인포인트 4가지 |
| 핵심 기능 | `Features.jsx` | 카드 3개 (근무표 입력 / 맞춤 알림 / 쉬는 날 자동 조정) |
| 신청 폼 | `SignupForm.jsx` | 이름·연락처·직군·근무형태·동의 + 제출 시 성공 메시지 |
| Footer | `Footer.jsx` | 서비스명·문구·임시 회사 정보·약관 링크 |

## 디자인 토큰

- 메인 컬러: `#2563EB` (Tailwind `brand-600`)
- 배경: `#F6F8FC` / 카드: white
- 카드 radius: 20px 이상 (`rounded-2xl`~`rounded-3xl`)
- 그림자: 은은한 커스텀 (`shadow-soft`, `shadow-card`, `shadow-float`)

> 디자인 토큰과 애니메이션은 `tailwind.config.js`, 공통 컴포넌트 클래스(`btn-primary`, `field-input` 등)는 `src/index.css`에 정의되어 있습니다.

## 폼 동작

폼은 별도 백엔드 연동 없이 클라이언트에서 동작합니다.
- 필수값 미입력 시 인라인 에러 메시지 표시
- 모든 항목 입력 + 동의 시 제출하면 성공 화면으로 전환
  - 메시지: **"신청이 완료되었습니다. 출시 소식을 가장 먼저 알려드릴게요."**
- 실제 서비스 연동 시 `SignupForm.jsx`의 `handleSubmit`에서 API 호출만 추가하면 됩니다.

## 반응형

모바일(1열) · 태블릿 · 데스크톱(2열) 브레이크포인트를 모두 고려했습니다.
