"use client";
import { useState } from "react";
export default function PercentageDifference() {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const a = parseFloat(v1); const b = parseFloat(v2);
  const diff = (!isNaN(a) && !isNaN(b) && a !== 0) ? ((b-a)/Math.abs(a))*100 : null;
  const absDiff = (!isNaN(a) && !isNaN(b)) ? Math.abs(b-a) : null;
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8 max-w-xl mx-auto">
    <h1 className="text-3xl font-bold mb-2">Percentage Difference Calculator</h1>
    <p className="text-gray-400 mb-6">Calculate the percentage change between two values.</p>
    <div className="flex gap-3 mb-6">
      <div className="flex-1"><label className="block text-sm text-gray-400 mb-1">Original Value</label><input className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white" type="number" value={v1} onChange={e=>setV1(e.target.value)} placeholder="100" /></div>
      <div className="flex-1"><label className="block text-sm text-gray-400 mb-1">New Value</label><input className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white" type="number" value={v2} onChange={e=>setV2(e.target.value)} placeholder="125" /></div>
    </div>
    {diff !== null && <div className="space-y-2">
      <div className={"rounded p-4 text-center " + (diff >= 0 ? "bg-green-900" : "bg-red-900")}><div className="text-sm opacity-70">Percentage Change</div><div className="text-3xl font-bold">{diff >= 0 ? "+" : ""}{diff.toFixed(2)}%</div></div>
      <div className="bg-gray-800 rounded p-3 flex justify-between"><span className="text-gray-400">Absolute Difference</span><span className="font-mono">{absDiff!.toFixed(4)}</span></div>
    </div>}
  </div>);
}
