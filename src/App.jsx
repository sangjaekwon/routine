import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Features from './components/Features.jsx'
import SignupForm from './components/SignupForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // CTA 클릭 시 신청 폼으로 부드럽게 스크롤
  const scrollToSignup = () => {
    const el = document.getElementById('signup')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // 폼 첫 입력란으로 포커스 살짝 유도
      window.setTimeout(() => {
        document.getElementById('contact')?.focus({ preventScroll: true })
      }, 600)
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F8FC]">
      <Header onCtaClick={scrollToSignup} />
      <main>
        <Hero onCtaClick={scrollToSignup} />
        <Problem />
        <Features />
        <SignupForm />
      </main>
      <Footer />
    </div>
  )
}
