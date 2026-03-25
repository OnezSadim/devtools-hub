"use client";
import { useState } from "react";

function stats(nums) {
  if (!nums.length) return {};
  const sorted = [...nums].sort((a,b)=>a-b);
  const mean = nums.reduce((a,b)=>a+b,0)/nums.length;
  const mid = Math.floor(sorted.length/2);
  const median = sorted.length%2 ? sorted[mid] : (sorted[mid-1]+sorted[mid])/2;
  const freq = {};
  nums.forEach(n=>{ freq[n]=(freq[n]||0)+1; });
  const maxF = Math.max(...Object.values(freq));
  const mode = Object.keys(freq).filter(k=>freq[k]===maxF).join(", ");
  const variance = nums.reduce((a,b)=>a+(b-mean)**2,0)/nums.length;
  const std = Math.sqrt(variance);
  return { mean: mean.toFixed(4), median, mode, std: std.toFixed(4), min: sorted[0], max: sorted[sorted.length-1], count: nums.length };
}

export default function MeanMedianMode() {
  const [input, setInput] = useState("");
  const nums = input.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n)&&n!=="");
  const s = stats(nums);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Mean, Median & Mode Calculator</h1>
        <p className="text-gray-400 mb-6">Enter numbers separated by commas or spaces.</p>
        <textarea className="w-full bg-gray-800 rounded p-3 mb-6 text-white h-24" placeholder="e.g. 1, 2, 3, 4, 5" value={input} onChange={e=>setInput(e.target.value)} />
        {nums.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(s).map(([k,v])=>(
              <div key={k} className="bg-gray-800 rounded p-3">
                <div className="text-gray-400 text-sm capitalize">{k}</div>
                <div className="text-xl font-mono font-bold">{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}