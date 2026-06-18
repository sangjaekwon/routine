import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

export default function Header({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" aria-label="교대핏 홈" className="shrink-0">
          <Logo />
        </a>

        <button type="button" onClick={onCtaClick} className="btn-primary !px-5 !py-2.5">
          출시 알림 신청
        </button>
      </div>
    </header>
  )
}
