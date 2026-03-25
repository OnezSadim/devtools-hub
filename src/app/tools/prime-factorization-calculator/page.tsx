"use client";
import { useState } from "react";
export default function PrimeFactorizationCalculator() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);
  function factorize() {
    let n = parseInt(num);
    if (isNaN(n) || n < 2) { setResult({error:"Enter a number >= 2"}); return; }
    if (n > 1e12) { setResult({error:"Number too large (max 10^12)"}); return; }
    const factors = [];
    for (let d = 2; d * d <= n; d++) {
      while (n % d === 0) { factors.push(d); n = Math.floor(n / d); }
    }
    if (n > 1) factors.push(n);
    const counts = {};
    factors.forEach(f => counts[f] = (counts[f]||0)+1);
    setResult({ factors, counts, isPrime: factors.length === 1 });
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Prime Factorization Calculator</h1>
        <p className="text-gray-400 mb-6">Decompose any number into its prime factors.</p>
        <div className="flex gap-2 mb-4">
          <input type="number" value={num} onChange={e=>setNum(e.target.value)} onKeyDown={e=>e.key==="Enter"&&factorize()} className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="360" />
          <button onClick={factorize} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Factorize</button>
        </div>
        {result && (
          <div className="bg-gray-800 rounded p-4">
            {result.error ? <p className="text-red-400">{result.error}</p> : (
              <div className="space-y-3">
                <div className="text-center text-xl font-mono">
                  {num} = {Object.entries(result.counts).map(([p,e],i)=>(
                    <span key={p}>{i>0?" × ":""}{p}{e>1?<sup>{e}</sup>:""}</span>
                  ))}
                </div>
                {result.isPrime ? <p className="text-center text-yellow-400">{num} is a prime number!</p> : (
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Prime factors (with multiplicity):</p>
                    <div className="flex flex-wrap gap-2">
                      {result.factors.map((f,i)=>(
                        <span key={i} className="bg-blue-900 text-blue-200 px-3 py-1 rounded font-mono">{f}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
