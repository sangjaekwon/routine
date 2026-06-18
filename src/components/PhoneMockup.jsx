/**
 * 앱 화면 목업 — 근무표 기반 자동 수면 스케줄 UI
 * "근무표를 넣으면 취침·기상·출근 준비 시간이 자동으로 잡힌다"는 핵심 가치를 시각화
 */

const schedule = [
  { icon: '🛏️', label: '취침 권장', time: 'PM 02:30', tone: 'sleep' },
  { icon: '⏰', label: '기상 알림', time: 'PM 09:00', tone: 'wake' },
  { icon: '🚿', label: '출근 준비', time: 'PM 09:15', tone: 'prep' },
  { icon: '🚗', label: '출근 시간', time: 'PM 09:40', tone: 'go' },
]

const toneMap = {
  sleep: 'bg-indigo-50 text-indigo-600',
  wake: 'bg-amber-50 text-amber-600',
  prep: 'bg-sky-50 text-sky-600',
  go: 'bg-emerald-50 text-emerald-600',
}

function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`relative w-[260px] rounded-[42px] border border-slate-200/80 bg-white p-3 shadow-[0_30px_70px_rgba(15,23,42,0.18)] ${className}`}
    >
      {/* 노치 */}
      <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-slate-900/90" />
      <div className="overflow-hidden rounded-[32px] bg-gradient-to-b from-[#f4f7ff] to-white">
        {children}
      </div>
    </div>
  )
}

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      {/* 배경 광원 */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[60px] bg-gradient-to-tr from-brand-100/70 via-brand-50 to-transparent blur-2xl" />

      {/* 메인 폰 */}
      <PhoneFrame className="animate-floaty">
        <div className="px-5 pb-6 pt-9">
          {/* 상태바 */}
          <div className="flex items-center justify-between text-[11px] font-medium text-ink-400">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-3 rounded-sm bg-ink-400/60" />
              <span className="inline-block h-2 w-3 rounded-sm bg-ink-400/60" />
              <span className="inline-block h-2.5 w-5 rounded-[3px] border border-ink-400/60" />
            </span>
          </div>

          {/* 인사 */}
          <div className="mt-4">
            <p className="text-xs text-ink-500">안녕하세요, 지은님 👋</p>
            <p className="mt-0.5 text-[15px] font-bold text-ink-900">오늘의 수면 플랜이에요</p>
          </div>

          {/* 다음 근무 카드 */}
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-4 text-white shadow-[0_12px_28px_rgba(37,99,235,0.35)]">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide">
                다음 근무
              </span>
              <span className="text-[10px] text-white/80">D-0 · 오늘</span>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="text-[22px] font-extrabold leading-none">나이트</p>
                <p className="mt-1 text-xs text-white/85">22:00 – 08:00</p>
              </div>
              <span className="text-2xl">🌙</span>
            </div>
          </div>

          {/* 자동 스케줄 */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-[13px] font-bold text-ink-900">자동 생성된 일정</p>
            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-600">
              AUTO
            </span>
          </div>

          <div className="mt-2.5 space-y-2">
            {schedule.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl text-base ${toneMap[item.tone]}`}
                >
                  {item.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-semibold text-ink-900">{item.label}</p>
                </div>
                <p className="text-[12px] font-bold text-ink-700">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>

      {/* 떠 있는 알림 카드 */}
      <div className="absolute -right-2 top-10 w-[210px] animate-floaty-slow rounded-2xl border border-slate-100 bg-white/95 p-3.5 shadow-[0_18px_40px_rgba(15,23,42,0.16)] backdrop-blur sm:-right-6 lg:-right-10">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-indigo-50 text-lg">
            💤
          </span>
          <div className="min-w-0">
            <p className="text-[12px] font-bold text-ink-900">곧 취침 시간이에요</p>
            <p className="truncate text-[11px] text-ink-500">30분 뒤 알림 · 나이트 근무 대비</p>
          </div>
        </div>
      </div>

      {/* 떠 있는 '쉬는 날' 카드 */}
      <div className="absolute -left-2 bottom-8 w-[190px] animate-floaty rounded-2xl border border-slate-100 bg-white/95 p-3.5 shadow-[0_18px_40px_rgba(15,23,42,0.16)] backdrop-blur sm:-left-5 lg:-left-12">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-50 text-lg">
            ✅
          </span>
          <div className="min-w-0">
            <p className="text-[12px] font-bold text-ink-900">쉬는 날도 자동 조정</p>
            <p className="truncate text-[11px] text-ink-500">다음 근무 패턴에 맞춰서</p>
          </div>
        </div>
      </div>
    </div>
  )
}
