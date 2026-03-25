"use client";
import { useState } from "react";

export default function FibonacciSequence() {
  const [n, setN] = useState(10);
  const fibs: bigint[] = [];
  let a = 0n, b = 1n;
  for (let i = 0; i < Math.min(n, 100); i++) { fibs.push(a); [a, b] = [b, a + b]; }
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fibonacci Sequence Generator</h1>
        <p className="text-gray-400 mb-6">Generate Fibonacci numbers up to the nth term.</p>
        <div className="flex items-center gap-4 mb-6">
          <label className="text-gray-300">Number of terms:</label>
          <input type="number" min={1} max={100} value={n} onChange={e=>setN(Math.min(100,Math.max(1,parseInt(e.target.value)||1)))} className="w-24 bg-gray-800 rounded px-3 py-2 text-center" />
        </div>
        <div className="bg-gray-900 rounded p-4 font-mono text-sm max-h-96 overflow-y-auto">
          {fibs.map((f,i)=><div key={i} className="flex gap-4 py-1 border-b border-gray-800"><span className="text-gray-500 w-8">{i+1}.</span><span className="text-green-400">{f.toString()}</span></div>)}
        </div>
        <button onClick={()=>navigator.clipboard.writeText(fibs.map(f=>f.toString()).join(', '))} className="mt-3 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Copy All</button>
      </div>
    </div>
  );
}
