"use client";
import { useState } from "react";

export default function ZScoreCalculator() {
  const [mode, setMode] = useState<"single"|"dataset">("single");
  const [x, setX] = useState("");
  const [mean, setMean] = useState("");
  const [sd, setSd] = useState("");
  const [dataset, setDataset] = useState("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult("");
    if (mode==="single") {
      const xv=Number(x),mv=Number(mean),sv=Number(sd);
      if(isNaN(xv)||isNaN(mv)||isNaN(sv)||sv===0){setError("Enter valid X, mean, and non-zero SD.");return;}
      setResult("Z-Score: "+((xv-mv)/sv).toFixed(4));
    } else {
      const nums=dataset.split(/[,\s]+/).map(s=>s.trim()).filter(Boolean).map(Number);
      if(nums.some(isNaN)||nums.length<2){setError("Enter at least 2 valid numbers.");return;}
      const m=nums.reduce((a,b)=>a+b,0)/nums.length;
      const variance=nums.reduce((s,n)=>s+Math.pow(n-m,2),0)/(nums.length-1);
      const stddev=Math.sqrt(variance);
      const scores=nums.map((n,i)=>"x"+(i+1)+"="+n+" → z="+((n-m)/stddev).toFixed(3));
      setResult(scores.join("\n"));
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Z-Score Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate standardized z-scores for individual values or entire datasets.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-3">
            {(["single","dataset"] as const).map(m=>(
              <button key={m} onClick={()=>setMode(m)} className={"px-4 py-2 rounded-lg text-sm font-medium "+(mode===m?"bg-orange-600":"bg-gray-800 hover:bg-gray-700")}>
                {m==="single"?"Single Value":"Full Dataset"}
              </button>
            ))}
          </div>
          {mode==="single" ? (
            <div className="grid grid-cols-3 gap-3">
              {[{label:"Value (x)",val:x,set:setX},{label:"Mean (μ)",val:mean,set:setMean},{label:"Std Dev (σ)",val:sd,set:setSd}].map(f=>(
                <div key={f.label}>
                  <label className="block text-xs text-gray-400 mb-1">{f.label}</label>
                  <input type="number" className="w-full bg-gray-800 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" value={f.val} onChange={e=>f.set(e.target.value)} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Dataset</label>
              <textarea className="w-full bg-gray-800 rounded-lg p-3 text-white font-mono text-sm resize-none h-20 focus:outline-none focus:ring-2 focus:ring-orange-500" value={dataset} onChange={e=>setDataset(e.target.value)} placeholder="e.g. 2, 4, 4, 4, 5, 5, 7, 9" />
            </div>
          )}
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button onClick={calculate} className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-lg font-medium">Calculate</button>
          {result && <pre className="bg-gray-800 rounded-lg p-4 text-orange-300 font-mono text-sm whitespace-pre-wrap">{result}</pre>}
        </div>
      </div>
    </main>
  );
}
