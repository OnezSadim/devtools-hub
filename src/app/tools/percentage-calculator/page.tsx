"use client";
import { useState } from "react";
export default function PercentageCalculator() {
  const [val, setVal] = useState("");
  const [pct, setPct] = useState("");
  const result = val && pct ? (parseFloat(val) * parseFloat(pct) / 100).toFixed(4) : null;
  const reverse = val && pct ? (parseFloat(val) / parseFloat(pct) * 100).toFixed(4) : null;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Percentage Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate percentages quickly.</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <input className="bg-gray-800 rounded p-3" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" type="number" />
          <input className="bg-gray-800 rounded p-3" value={pct} onChange={e=>setPct(e.target.value)} placeholder="Percent %" type="number" />
        </div>
        {result && <div className="space-y-3">
          <div className="bg-gray-800 p-4 rounded"><span className="text-gray-400">{pct}% of {val} = </span><span className="text-green-400 font-bold text-xl">{result}</span></div>
          <div className="bg-gray-800 p-4 rounded"><span className="text-gray-400">{val} is what % of {pct}: </span><span className="text-blue-400 font-bold">{reverse}%</span></div>
        </div>}
      </div>
    </main>
  );
}