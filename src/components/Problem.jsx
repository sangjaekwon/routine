import Reveal from './Reveal.jsx'

/**
 * 공감 섹션 — 사용자 조사에서 드러난 교대근무자의 실제 페인포인트
 */
const pains = [
  {
    emoji: '🔀',
    text: '근무가 바뀔 때마다 잠을 언제 자야 할지 매번 헷갈려요.',
  },
  {
    emoji: '🛌',
    text: '쉬는 날에도 다음 근무를 위해 수면 패턴을 맞춰야 해요.',
  },
  {
    emoji: '🔔',
    text: '데이·이브닝·나이트마다 필요한 알림이 다 달라요.',
  },
  {
    emoji: '⏳',
    text: '루틴을 따로 기록하고 관리할 시간도 여유도 없어요.',
  },
]

export default function Problem() {
  return (
    <section className="container-page py-14 sm:py-16 lg:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-600">교대근무자라면 공감하실 거예요</p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
          문제는 운동도 식사도 아닌,
          <br className="hidden sm:block" /> 무너지는 <span className="text-brand-600">수면</span>이었습니다.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
          교대핏은 교대근무자 인터뷰에서 가장 많이 들은 이야기에서 출발했어요.
        </p>
      </Reveal>

      <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
        {pains.map((pain, i) => (
          <Reveal
            as="li"
            key={pain.text}
            delay={i * 90}
            className="flex items-start gap-3.5 rounded-3xl border border-slate-100 bg-white p-5 shadow-soft"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-xl">
              {pain.emoji}
            </span>
            <p className="pt-1.5 text-[15px] font-medium leading-relaxed text-ink-700">
              "{pain.text}"
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
