"use client";
import { useState } from "react";
export default function PrimeChecker() {
  const [num, setNum] = useState("");
  const isPrime = (n: number) => { if(n<2) return false; for(let i=2;i<=Math.sqrt(n);i++) if(n%i===0) return false; return true; };
  const n = parseInt(num);
  const result = num && !isNaN(n) ? isPrime(n) : null;
  const factors = num && !isNaN(n) && n>1 ? Array.from({length:n-1},(_,i)=>i+2).filter(i=>n%i===0) : [];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Prime Number Checker</h1>
        <p className="text-gray-400 mb-6">Check if a number is prime and find its factors.</p>
        <input className="w-full bg-gray-800 rounded p-3 mb-4" value={num} onChange={e=>setNum(e.target.value)} placeholder="Enter a number..." type="number" />
        {result !== null && <div className={`p-4 rounded text-lg font-bold mb-3 ${result?"bg-green-900 text-green-300":"bg-yellow-900 text-yellow-300"}`}>{n} is {result?"a prime number":"not a prime number"}</div>}
        {factors.length > 0 && <div className="bg-gray-800 p-4 rounded"><p className="text-gray-400 mb-2">Factors:</p><p className="font-mono">{factors.join(", ")}</p></div>}
      </div>
    </main>
  );
}