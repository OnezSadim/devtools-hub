"use client";
import { useState } from "react";
export default function StatisticsCalculator() {
  const [input, setInput] = useState("");
  const [stats, setStats] = useState(null);
  function calculate() {
    const nums = input.split(/[,
\s]+/).map(Number).filter(n=>!isNaN(n)&&n!==undefined);
    if (!nums.length) return;
    const n = nums.length;
    const mean = nums.reduce((a,b)=>a+b,0)/n;
    const sorted = [...nums].sort((a,b)=>a-b);
    const median = n%2===0?(sorted[n/2-1]+sorted[n/2])/2:sorted[Math.floor(n/2)];
    const freq = {}; nums.forEach(x=>{freq[x]=(freq[x]||0)+1;});
    const maxF = Math.max(...Object.values(freq));
    const mode = Object.keys(freq).filter(k=>freq[k]===maxF).join(", ");
    const variance = nums.reduce((s,x)=>s+(x-mean)**2,0)/n;
    const stddev = Math.sqrt(variance);
    const min = sorted[0], max = sorted[n-1];
    const range = max - min;
    setStats({n,mean:mean.toFixed(4),median:median.toFixed(4),mode,stddev:stddev.toFixed(4),variance:variance.toFixed(4),min,max,range});
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Statistics Calculator</h1>
        <p className="text-gray-400 mb-6">Mean, median, mode, standard deviation and more</p>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={5} placeholder="Enter numbers separated by commas, spaces, or newlines" className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-4 font-mono" />
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold mb-4">Calculate</button>
        {stats && (
          <div className="bg-gray-800 rounded p-4 grid grid-cols-2 gap-3">
            {Object.entries(stats).map(([k,v])=>(
              <div key={k} className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400 capitalize">{k.replace(/_/g," ")}</div>
                <div className="text-lg font-mono text-green-400">{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}