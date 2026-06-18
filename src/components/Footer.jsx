import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[15px] font-semibold text-ink-700">
              교대근무자의 수면 패턴을 더 가볍게.
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-400">
              근무표 기반으로 취침·기상·출근 준비 알림을 자동으로 맞춰주는 교대근무자 전용 서비스
            </p>
          </div>

          {/* 임시 회사 정보 */}
          <div className="text-[12.5px] leading-relaxed text-ink-400">
            <p className="mb-2 font-semibold text-ink-500">교대핏 (가칭)</p>
            <p>상호 : 주식회사 교대핏 · 대표 : 홍길동</p>
            <p>사업자등록번호 : 000-00-00000</p>
            <p>주소 : 서울특별시 ○○구 ○○로 00, 0층</p>
            <p>문의 : hello@gyodaefit.kr</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-ink-400">
            © {new Date().getFullYear()} 교대핏. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 text-[12px] text-ink-400" aria-label="법적 고지">
            <a href="#" className="transition-colors hover:text-brand-600">
              이용약관
            </a>
            <span className="text-slate-200">|</span>
            <a href="#" className="font-medium text-ink-500 transition-colors hover:text-brand-600">
              개인정보처리방침
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
