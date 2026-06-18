import Reveal from './Reveal.jsx'

/**
 * 핵심 기능 카드 3개
 * "직접 기록하는 루틴 앱이 아니라, 근무표를 넣으면 자동으로 알려주는 서비스"라는 핵심 가치 전달
 */
const features = [
  {
    emoji: '📅',
    title: '근무표만 입력하면 끝',
    desc: '데이·이브닝·나이트 근무표를 한 번만 넣으면, 따로 기록할 필요 없이 일정이 알아서 짜여요.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    emoji: '⏰',
    title: '근무별 맞춤 알림',
    desc: '근무 시작 시각에 맞춰 언제 자고 언제 일어날지, 출근 준비 시간까지 자동으로 알려드려요.',
    accent: 'from-indigo-500 to-violet-600',
  },
  {
    emoji: '🔄',
    title: '쉬는 날도 자동 조정',
    desc: '오프 날에도 다음 근무 패턴에 맞춰 수면 시간을 조정해, 무너진 리듬을 다시 잡아드려요.',
    accent: 'from-emerald-500 to-teal-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="container-page scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-600">교대핏이 해주는 일</p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
          기록하지 마세요. <span className="text-brand-600">맡기세요.</span>
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
          루틴을 직접 관리할 시간이 없는 교대근무자를 위해, 꼭 필요한 것만 자동으로 챙겨드려요.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 120} className="h-full">
            <article className="group relative flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${feature.accent} text-2xl shadow-[0_10px_24px_rgba(37,99,235,0.22)]`}
              >
                {feature.emoji}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{feature.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-500">{feature.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
