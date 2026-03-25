"use client";
import { useState } from "react";

function factorize(n: number): number[] {
  const factors: number[] = [];
  for (let d = 2; d * d <= n; d++) { while (n % d === 0) { factors.push(d); n /= d; } }
  if (n > 1) factors.push(n);
  return factors;
}

export default function PrimeFactorization() {
  const [input, setInput] = useState('360');
  const num = parseInt(input);
  const valid = !isNaN(num) && num >= 2 && num <= 10000000;
  const factors = valid ? factorize(num) : [];
  const unique = [...new Set(factors)];
  const expression = unique.map(p => { const exp = factors.filter(f=>f===p).length; return exp > 1 ? `${p}^${exp}` : `${p}`; }).join(' × ');
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Prime Factorization</h1>
        <p className="text-gray-400 mb-6">Break any number into its prime factors.</p>
        <input type="number" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter a number (2–10,000,000)" className="w-full bg-gray-800 rounded px-4 py-3 mb-4 text-lg" />
        {valid ? (
          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4"><p className="text-gray-400 text-sm mb-1">Prime Factors</p><p className="text-2xl font-mono text-green-400">{factors.join(' × ')}</p></div>
            <div className="bg-gray-900 rounded p-4"><p className="text-gray-400 text-sm mb-1">Exponential Form</p><p className="text-2xl font-mono text-blue-400">{expression}</p></div>
            <div className="bg-gray-900 rounded p-4"><p className="text-gray-400 text-sm mb-1">Is Prime?</p><p className="text-xl font-bold">{factors.length === 1 ? '✅ Yes, it is prime!' : `❌ No (${factors.length} prime factors)`}</p></div>
          </div>
        ) : <p className="text-red-400">{input ? 'Enter a valid number between 2 and 10,000,000' : 'Enter a number above'}</p>}
      </div>
    </div>
  );
}
