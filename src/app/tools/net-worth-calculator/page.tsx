'use client'
import { useState } from 'react'

export default function NetWorthCalculatorPage() {
  const [result, setResult] = useState('')

  return (
    <div className='min-h-screen bg-gray-950 text-white p-8'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold mb-2'>Net Worth Calculator</h1>
        <p className='text-gray-400 mb-8'>Calculate your net worth by subtracting liabilities from assets.</p>
        <div className='bg-gray-900 rounded-xl p-6 border border-gray-800'>
          <p className='text-gray-300'>Calculator coming soon.</p>
        </div>
        {result && <div className='mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-700'><p>{result}</p></div>}
      </div>
    </div>
  )
}
