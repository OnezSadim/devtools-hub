'use client'

import { useState } from 'react'

function checkStrength(pw: string) {
  const checks = [
    { label: 'At least 8 characters', pass: pw.length >= 8 },
    { label: 'At least 12 characters', pass: pw.length >= 12 },
    { label: 'Uppercase letters', pass: /[A-Z]/.test(pw) },
    { label: 'Lowercase letters', pass: /[a-z]/.test(pw) },
    { label: 'Numbers', pass: /[0-9]/.test(pw) },
    { label: 'Special characters', pass: /[^A-Za-z0-9]/.test(pw) },
    { label: 'No common patterns', pass: !/(?:password|123456|qwerty|abc)/i.test(pw) },
  ]
  const score = checks.filter(c => c.pass).length
  const label = score <= 2 ? 'Very Weak' : score <= 3 ? 'Weak' : score <= 4 ? 'Fair' : score <= 5 ? 'Strong' : 'Very Strong'
  const color = score <= 2 ? 'bg-red-500' : score <= 3 ? 'bg-orange-500' : score <= 4 ? 'bg-yellow-500' : score <= 5 ? 'bg-blue-500' : 'bg-green-500'
  return { checks, score, label, color }
}

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const { checks, score, label, color } = checkStrength(password)

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Password Strength Checker</h1>
        <p className="text-gray-400 mb-6">Check how strong and secure your password is.</p>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="relative mb-4">
            <input
              type={show ? 'text' : 'password'}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:border-blue-500 pr-16"
              placeholder="Enter password to check..."
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={() => setShow(!show)} className="absolute right-4 top-4 text-gray-400 hover:text-white text-sm">{show ? 'Hide' : 'Show'}</button>
          </div>
          {password && (
            <>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Strength</span>
                <span className="text-sm font-semibold">{label}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                <div className={`h-3 rounded-full transition-all ${color}`} style={{ width: (score / 7 * 100) + '%' }} />
              </div>
              <div className="space-y-2">
                {checks.map(({ label, pass }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className={pass ? 'text-green-400' : 'text-gray-600'}>{pass ? '✓' : '✗'}</span>
                    <span className={`text-sm ${pass ? 'text-gray-300' : 'text-gray-500'}`}>{label}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
