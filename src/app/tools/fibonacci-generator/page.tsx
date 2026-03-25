"use client";
import { useState } from "react";
export default function FibonacciGenerator() {
  const [n, setN] = useState('');
  const fib = (count: number) => {
    const seq = [0, 1];
    for (let i = 2; i < count; i++) seq.push(seq[i-1] + seq[i-2]);
    return seq.slice(0, count);
  };
  const count = Math.min(Math.max(parseInt(n) || 0, 1), 50);
  const sequence = n ? fib(count) : [];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fibonacci Generator</h1>
        <p className="text-gray-400 mb-8">Generate Fibonacci sequence up to N terms (max 50).</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Number of terms (1-50)</label><input type="number" value={n} onChange={e => setN(e.target.value)} min="1" max="50" placeholder="e.g. 10" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          {sequence.length > 0 && <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex flex-wrap gap-2">{sequence.map((num, i) => <span key={i} className="bg-blue-900 text-blue-300 px-3 py-1 rounded font-mono text-sm">{num.toString()}</span>)}</div>
          </div>}
        </div>
      </div>
    </main>
  );
}