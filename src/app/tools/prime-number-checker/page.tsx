"use client";
import { useState } from "react";
export default function PrimeChecker() {
  const [num, setNum] = useState('');
  const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
  const n = parseInt(num);
  const result = !isNaN(n) && n > 0 ? isPrime(n) : null;
  const nextPrimes = !isNaN(n) ? Array.from({length: 10}, (_, i) => n + i + 1).filter(x => isPrime(x)).slice(0, 5) : [];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Prime Number Checker</h1>
        <p className="text-gray-400 mb-8">Check if a number is prime and find nearby primes.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={num} onChange={e => setNum(e.target.value)} placeholder="Enter a number" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white text-xl" />
          {result !== null && <div className={"rounded-lg p-6 text-center text-2xl font-bold " + (result ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300')}>
            {n} is {result ? '' : 'NOT '} a prime number
          </div>}
          {nextPrimes.length > 0 && <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">Next primes after {n}:</p>
            <div className="flex gap-2 flex-wrap">{nextPrimes.map(p => <span key={p} className="bg-blue-900 text-blue-300 px-3 py-1 rounded">{p}</span>)}</div>
          </div>}
        </div>
      </div>
    </main>
  );
}