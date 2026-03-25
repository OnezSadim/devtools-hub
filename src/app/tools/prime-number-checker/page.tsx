"use client";
import { useState } from "react";
export default function PrimeNumberChecker() {
  const [num, setNum] = useState("");
  const [primes, setPrimes] = useState<number[]>([]);
  const isPrime = (n: number) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
  };
  const sieve = (max: number) => {
    const arr = Array.from({length: max+1}, (_,i)=>i).filter(n=>isPrime(n));
    return arr;
  };
  const n = parseInt(num);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Prime Number Checker</h1>
        <p className="text-gray-400 mb-8">Check if a number is prime and find primes in a range</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-4">
          <input type="number" value={num} onChange={e=>setNum(e.target.value)} placeholder="Enter a number" className="w-full bg-gray-800 rounded px-3 py-2 mb-4 outline-none focus:ring-2 ring-blue-500" />
          {num && !isNaN(n) && (
            <div className={`p-4 rounded-lg text-center text-xl font-bold ${isPrime(n)?'bg-green-900 text-green-300':'bg-red-900 text-red-300'}`}>
              {n} is {isPrime(n)?'':'not '}a prime number
            </div>
          )}
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">Primes up to 100</h2>
          <div className="flex flex-wrap gap-2">
            {sieve(100).map(p=><span key={p} className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-sm font-mono">{p}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}