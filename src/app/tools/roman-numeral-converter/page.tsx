'''use client'''
import { useState } from 'react'

export default function Page() {
  const [arabic, setArabic] = useState('2024')
  const [roman, setRoman] = useState('MMXXIV')

  const convert = () => {
    try {

      const num = parseInt(arabic, 10)
      if (isNaN(num) || num < 1 || num > 3999) { setRoman('Invalid (1-3999)'); return }
      const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
      const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
      let result = '', n = num
      for (let i = 0; i < vals.length; i++) { while (n >= vals[i]) { result += syms[i]; n -= vals[i] } }
      setRoman(result)

    } catch (e) {}
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
        <p className="text-gray-400 mb-8">Convert between Arabic numbers and Roman numerals</p>
        <div className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Arabic Number</label>
            <textarea
              value={arabic}
              onChange={e => setArabic(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Roman Numeral</label>
            <textarea
              value={roman}
              onChange={e => setRoman(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <button
            onClick={convert}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  )
}
