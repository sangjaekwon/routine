import { useEffect, useRef, useState } from 'react'

/**
 * 스크롤 리빌 래퍼
 * 요소가 뷰포트에 들어오면 .is-visible 클래스를 붙여 페이드업 애니메이션을 트리거한다.
 * - as: 렌더링할 태그 (div, li, article 등)
 * - delay: stagger용 지연(ms)
 * - once: true면 한 번만 노출 후 관찰 해제 (기본값)
 * prefers-reduced-motion은 CSS에서 처리한다.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  once = true,
  className = '',
  style,
  children,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // IntersectionObserver 미지원 환경에서는 즉시 노출
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  )
}
