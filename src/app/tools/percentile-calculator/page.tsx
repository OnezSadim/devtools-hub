"use client";
import { useState } from "react";

export default function PercentileCalculator() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<{percentile:number,rank:number,count:number}|null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const nums = input.split(/[,\s]+/).map(s=>s.trim()).filter(Boolean).map(Number);
    const v = Number(value);
    if (nums.some(isNaN)||nums.length===0){setError("Enter valid numbers.");return;}
    if (isNaN(v)){setError("Enter a valid value.");return;}
    const sorted = [...nums].sort((a,b)=>a-b);
    const below = sorted.filter(n=>n<v).length;
    const percentile = (below/sorted.length)*100;
    setResult({percentile,rank:below+1,count:sorted.length});
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Percentile Calculator</h1>
        <p className="text-gray-400 mb-6">Find the percentile rank of a value within a dataset.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Dataset (comma or space separated)</label>
            <textarea className="w-full bg-gray-800 rounded-lg p-3 text-white font-mono text-sm resize-none h-20 focus:outline-none focus:ring-2 focus:ring-green-500" value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. 10, 25, 30, 45, 50, 65, 80" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value to find percentile of</label>
            <input type="number" className="w-full bg-gray-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500" value={value} onChange={e=>setValue(e.target.value)} placeholder="e.g. 45" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button onClick={calculate} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium">Calculate</button>
          {result && (
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[{label:"Percentile",value:result.percentile.toFixed(1)+"%"},{label:"Rank",value:result.rank+" of "+result.count},{label:"Dataset Size",value:result.count}].map(r=>(
                <div key={r.label} className="bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-400">{r.label}</div>
                  <div className="text-xl font-bold text-green-400">{r.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
