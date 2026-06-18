import PhoneMockup from './PhoneMockup.jsx'

const highlights = ['근무표 입력 한 번', '취침·기상 자동 계산', '근무별 맞춤 알림']

export default function Hero({ onCtaClick }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 부드러운 배경 그라데이션 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute left-[-10%] top-40 h-[360px] w-[360px] rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* 좌측: 카피 */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-soft">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            교대근무자를 위한 수면 자동화
          </span>

          <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.2] tracking-tight text-ink-900 sm:text-[2.6rem] lg:text-[3.1rem]">
            근무표만 넣으면,
            <br />
            <span className="text-brand-600">잠자는 시간</span>이
            <br className="hidden sm:block" /> 자동으로 맞춰집니다.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-500 sm:text-base lg:mx-0">
            데이, 이브닝, 나이트마다 달라지는 수면 패턴.
            <br className="hidden sm:block" />
            교대핏이 다음 근무에 맞춰 취침·기상·출근 준비 알림을
            <br className="hidden sm:block" /> 자동으로 잡아드려요.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button type="button" onClick={onCtaClick} className="btn-primary w-full sm:w-auto">
              출시 알림 신청하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <a href="#features" className="btn-ghost w-full sm:w-auto">
              기능 살펴보기
            </a>
          </div>

          {/* 체크 하이라이트 */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
            {highlights.map((text) => (
              <li key={text} className="flex items-center gap-1.5 text-sm font-medium text-ink-700">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="text-brand-600"
                >
                  <path
                    d="m5 13 4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* 우측: 앱 목업 */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
