"use client";
import { useState } from "react";

export default function StandardDeviationCalculator() {
  const [input, setInput] = useState("");
  const [popSample, setPopSample] = useState<"population"|"sample">("sample");
  const [results, setResults] = useState<{sd:number,variance:number,mean:number,count:number}|null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const nums = input.split(/[,\s]+/).map(s=>s.trim()).filter(Boolean).map(Number);
    if (nums.some(isNaN)||nums.length<2){setError("Enter at least 2 valid numbers.");return;}
    const mean = nums.reduce((a,b)=>a+b,0)/nums.length;
    const denom = popSample==="population"?nums.length:nums.length-1;
    const variance = nums.reduce((sum,n)=>sum+Math.pow(n-mean,2),0)/denom;
    setResults({sd:Math.sqrt(variance),variance,mean,count:nums.length});
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Standard Deviation Calculator</h1>
        <p className="text-gray-400 mb-6">Compute standard deviation and variance for population or sample data.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Numbers (comma or space separated)</label>
            <textarea className="w-full bg-gray-800 rounded-lg p-3 text-white font-mono text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-purple-500" value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. 2, 4, 4, 4, 5, 5, 7, 9" />
          </div>
          <div className="flex gap-4">
            {(["sample","population"] as const).map(t=>(
              <button key={t} onClick={()=>setPopSample(t)} className={"px-4 py-2 rounded-lg text-sm font-medium "+(popSample===t?"bg-purple-600":"bg-gray-800 hover:bg-gray-700")}>
                {t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button onClick={calculate} className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-medium">Calculate</button>
          {results && (
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[{label:"Std Deviation",value:results.sd.toFixed(6)},{label:"Variance",value:results.variance.toFixed(6)},{label:"Mean",value:results.mean.toFixed(6)},{label:"Count",value:results.count}].map(r=>(
                <div key={r.label} className="bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-400">{r.label}</div>
                  <div className="text-xl font-bold text-purple-400">{r.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
