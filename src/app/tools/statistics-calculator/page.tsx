"use client";
import { useState } from "react";

export default function StatisticsCalculator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculate = () => {
    const nums = input.split(/[,
\s]+/).map(Number).filter(n => !isNaN(n) && n !== null);
    if (nums.length === 0) return;
    const n = nums.length;
    const sorted = [...nums].sort((a, b) => a - b);
    const mean = nums.reduce((a, b) => a + b, 0) / n;
    const median = n % 2 === 0 ? (sorted[n/2-1] + sorted[n/2]) / 2 : sorted[Math.floor(n/2)];
    const freq: Record<number, number> = {};
    nums.forEach(x => freq[x] = (freq[x] || 0) + 1);
    const maxFreq = Math.max(...Object.values(freq));
    const mode = Object.entries(freq).filter(([,v]) => v === maxFreq).map(([k]) => Number(k));
    const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);
    const range = sorted[n-1] - sorted[0];
    const q1 = sorted[Math.floor(n/4)];
    const q3 = sorted[Math.floor(3*n/4)];
    setResults({ n, mean: mean.toFixed(4), median, mode: mode.join(", "), stdDev: stdDev.toFixed(4), variance: variance.toFixed(4), min: sorted[0], max: sorted[n-1], range, q1, q3, sum: nums.reduce((a,b)=>a+b,0) });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Statistics Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate mean, median, mode, standard deviation, and more.</p>
        <textarea
          className="w-full h-32 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm mb-3"
          placeholder="Enter numbers separated by commas, spaces, or new lines&#10;e.g. 1, 2, 3, 4, 5"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold mb-6">Calculate</button>
        {results && (
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(results).map(([k, v]) => (
              <div key={k} className="bg-gray-900 rounded-lg p-3">
                <div className="text-gray-400 text-xs uppercase tracking-wide">{k.replace(/([A-Z])/g, " $1")}</div>
                <div className="text-xl font-mono font-bold text-blue-400">{String(v)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
