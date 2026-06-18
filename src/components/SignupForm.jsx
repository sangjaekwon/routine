import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'

const JOB_OPTIONS = ['간호사', '경찰', '소방관', '군인', '생산직', '보안직', '기타']
const SHIFT_OPTIONS = ['3교대', '2교대', '야간 고정', '불규칙 근무', '기타']

const benefits = [
  '출시 소식 가장 먼저 안내',
  '비공개 베타 테스트 우선 초대',
]

export default function SignupForm() {
  const [form, setForm] = useState({
    contact: '',
    job: '',
    shift: '',
    feedback: '',
    agree: false,
  })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [key]: value }))
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.contact.trim()) return setError('연락처를 입력해 주세요.')
    if (!form.job) return setError('직군을 선택해 주세요.')
    if (!form.shift) return setError('근무 형태를 선택해 주세요.')
    if (!form.agree) return setError('개인정보 수집 및 이용에 동의해 주세요.')

    setSubmitting(true)
    setError('')
    try {
      if (!isSupabaseConfigured) {
        throw new Error('Supabase 환경변수가 설정되지 않았습니다.')
      }

      const { error: insertError } = await supabase.from('signups').insert({
        contact: form.contact.trim(),
        job: form.job,
        shift: form.shift,
        feedback: form.feedback.trim() || null,
        agree: form.agree,
      })
      if (insertError) throw insertError

      setSubmitted(true)
    } catch (err) {
      console.error('[signup] 제출 실패:', err)
      setError('신청 중 문제가 발생했어요. 잠시 후 다시 시도해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="signup" className="container-page scroll-mt-20 py-14 sm:py-16 lg:py-20">
      <Reveal className="overflow-hidden rounded-[28px] border border-brand-100 bg-gradient-to-br from-[#eef3ff] via-[#f3f6ff] to-[#f8faff] shadow-card">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.85fr_1fr] lg:gap-12 lg:p-12">
          {/* 좌측: 카피 */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-soft">
              🚀 출시 준비 중
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-ink-900 sm:text-[1.9rem]">
              교대근무,
              <br />단 하루라도 덜 힘들게.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              교대근무자의 수면을 더 가볍게 만드는 서비스를 준비하고 있어요. 출시 소식과 베타 테스트
              안내를 가장 먼저 받아보세요.
            </p>

            <ul className="mt-6 space-y-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-ink-700">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-600 text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="m5 13 4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* 우측: 폼 / 성공 메시지 */}
          <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-7">
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-50">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">신청이 완료되었습니다</h3>
                <p className="mt-2 max-w-xs text-[14.5px] leading-relaxed text-ink-500">
                  출시 소식을 가장 먼저 알려드릴게요.
                  <br />
                  교대핏과 함께 더 가벼운 수면을 준비해요.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="contact" className="field-label">
                    연락처
                  </label>
                  <input
                    id="contact"
                    type="text"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.contact}
                    onChange={update('contact')}
                    placeholder="휴대폰 번호 또는 이메일"
                    className="field-input"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="job" className="field-label">
                      직군
                    </label>
                    <div className="relative">
                      <select
                        id="job"
                        value={form.job}
                        onChange={update('job')}
                        className={`field-input appearance-none pr-10 ${
                          form.job ? 'text-ink-900' : 'text-ink-400'
                        }`}
                      >
                        <option value="" disabled>
                          선택해 주세요
                        </option>
                        {JOB_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="text-ink-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <Chevron />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="shift" className="field-label">
                      근무 형태
                    </label>
                    <div className="relative">
                      <select
                        id="shift"
                        value={form.shift}
                        onChange={update('shift')}
                        className={`field-input appearance-none pr-10 ${
                          form.shift ? 'text-ink-900' : 'text-ink-400'
                        }`}
                      >
                        <option value="" disabled>
                          선택해 주세요
                        </option>
                        {SHIFT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="text-ink-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <Chevron />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="feedback" className="field-label">
                    서비스 의견 <span className="font-normal text-ink-400">(선택)</span>
                  </label>
                  <textarea
                    id="feedback"
                    rows={3}
                    value={form.feedback}
                    onChange={update('feedback')}
                    placeholder="이런 기능이 있으면 좋겠어요, 같은 의견을 자유롭게 남겨주세요."
                    className="field-input resize-none"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={update('agree')}
                    className="mt-0.5 shrink-0 cursor-pointer accent-brand-600"
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span className="text-[13px] leading-relaxed text-ink-500">
                    <span className="font-medium text-ink-700">[필수]</span> 개인정보 수집 및 이용에
                    동의합니다. 수집한 정보는 출시 알림 발송 목적으로만 사용됩니다.
                  </span>
                </label>

                {error && (
                  <p className="rounded-xl bg-red-50 px-3.5 py-2.5 text-[13px] font-medium text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full !py-3.5 text-[15px] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? '신청 중…' : '출시 알림 신청하기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Chevron() {
  return (
    <svg
      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
