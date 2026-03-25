"use client";
import { useState } from "react";

export default function MeanMedianModeCalculator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{mean:number,median:number,mode:number[],sum:number,count:number}|null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const nums = input.split(/[,\s]+/).map(s => s.trim()).filter(Boolean).map(Number);
    if (nums.some(isNaN) || nums.length === 0) { setError("Enter valid numbers separated by commas or spaces."); return; }
    const sorted = [...nums].sort((a,b) => a-b);
    const mean = nums.reduce((a,b)=>a+b,0)/nums.length;
    const mid = Math.floor(sorted.length/2);
    const median = sorted.length%2===0 ? (sorted[mid-1]+sorted[mid])/2 : sorted[mid];
    const freq: Record<number,number> = {};
    nums.forEach(n => { freq[n] = (freq[n]||0)+1; });
    const maxFreq = Math.max(...Object.values(freq));
    const mode = Object.keys(freq).filter(k=>freq[Number(k)]===maxFreq).map(Number);
    setResults({mean, median, mode, sum: nums.reduce((a,b)=>a+b,0), count: nums.length});
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Mean, Median & Mode Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate central tendency statistics for any dataset.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Enter numbers (comma or space separated)</label>
            <textarea className="w-full bg-gray-800 rounded-lg p-3 text-white font-mono text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500" value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. 4, 7, 13, 2, 7, 9" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button onClick={calculate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium">Calculate</button>
          {results && (
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[{label:"Mean",value:results.mean.toFixed(4)},{label:"Median",value:results.median.toFixed(4)},{label:"Mode",value:results.mode.join(", ")},{label:"Sum",value:results.sum},{label:"Count",value:results.count}].map(r=>(
                <div key={r.label} className="bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-400">{r.label}</div>
                  <div className="text-xl font-bold text-blue-400">{r.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
