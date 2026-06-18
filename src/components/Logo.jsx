/**
 * 교대핏 로고 (텍스트 + 심볼)
 * 심볼: 둥근 블루 배지 안의 초승달 + 시계 바늘 → "수면 + 시간 자동화"를 상징
 */
export default function Logo({ className = '', mark = true, tone = 'default' }) {
  const textColor = tone === 'invert' ? 'text-white' : 'text-ink-900'

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {mark && (
        <span className="grid h-9 w-9 place-items-center rounded-[12px] bg-gradient-to-br from-brand-500 to-brand-700 shadow-[0_6px_16px_rgba(37,99,235,0.35)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* 초승달 */}
            <path
              d="M20.5 14.2A8 8 0 1 1 11 4.2a6.4 6.4 0 0 0 9.5 10z"
              fill="white"
              fillOpacity="0.95"
            />
            {/* 시계 바늘 포인트 */}
            <circle cx="9.2" cy="9.4" r="1.5" fill="#2563EB" />
          </svg>
        </span>
      )}
      <span className={`text-[20px] font-extrabold tracking-tight ${textColor}`}>
        교대<span className="text-brand-600">핏</span>
      </span>
    </span>
  )
}
