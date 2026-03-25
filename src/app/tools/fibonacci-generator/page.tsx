"use client";
import { useState } from "react";
export default function FibonacciGenerator() {
  const [count, setCount] = useState(10);
  const fib = (n: number) => {
    const seq = [0, 1];
    for (let i = 2; i < n; i++) seq.push(seq[i-1] + seq[i-2]);
    return seq.slice(0, n);
  };
  const sequence = fib(Math.min(Math.max(count, 1), 50));
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fibonacci Generator</h1>
        <p className="text-gray-400 mb-8">Generate Fibonacci sequence up to N terms</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <label className="block text-sm text-gray-400 mb-1">Number of terms (1-50)</label>
          <input type="number" value={count} min={1} max={50} onChange={e=>setCount(parseInt(e.target.value)||1)} className="w-full bg-gray-800 rounded px-3 py-2 mb-6 outline-none focus:ring-2 ring-blue-500" />
          <div className="flex flex-wrap gap-2 mb-4">
            {sequence.map((n,i)=>(
              <div key={i} className="bg-gray-800 rounded px-3 py-2 text-center">
                <div className="text-xs text-gray-500">F({i})</div>
                <div className="font-mono text-sm">{n.toString()}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 rounded p-3 font-mono text-sm text-gray-300 break-all">
            [{sequence.join(", ")}]
          </div>
        </div>
      </div>
    </div>
  );
}