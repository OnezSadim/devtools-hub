"use client";
import { useState } from "react";
export default function PercentageCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const pct = (val, total) => total ? ((val/total)*100).toFixed(2) : "";
  const ofPct = (pct, total) => total ? ((pct/100)*total).toFixed(2) : "";
  const change = (old_, new_) => old_ ? (((new_-old_)/old_)*100).toFixed(2) : "";
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Percentage Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate percentages, changes, and more.</p>
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-3">What % is A of B?</h2>
            <div className="flex items-center gap-3">
              <input type="number" className="w-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" placeholder="A" value={a} onChange={e=>setA(e.target.value)} />
              <span className="text-gray-400">is what % of</span>
              <input type="number" className="w-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" placeholder="B" value={b} onChange={e=>setB(e.target.value)} />
              {a&&b&&<span className="text-xl font-bold text-blue-400">= {pct(Number(a),Number(b))}%</span>}
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-3">A% of B =?</h2>
            <div className="flex items-center gap-3">
              <input type="number" className="w-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" placeholder="%" value={a} onChange={e=>setA(e.target.value)} />
              <span className="text-gray-400">% of</span>
              <input type="number" className="w-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" placeholder="B" value={b} onChange={e=>setB(e.target.value)} />
              {a&&b&&<span className="text-xl font-bold text-green-400">= {ofPct(Number(a),Number(b))}</span>}
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-3">% change from A to B</h2>
            <div className="flex items-center gap-3">
              <input type="number" className="w-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" placeholder="From" value={a} onChange={e=>setA(e.target.value)} />
              <span className="text-gray-400">to</span>
              <input type="number" className="w-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" placeholder="To" value={b} onChange={e=>setB(e.target.value)} />
              {a&&b&&<span className={`text-xl font-bold ${Number(change(Number(a),Number(b)))>=0?"text-green-400":"text-red-400"}`}>{Number(change(Number(a),Number(b)))>=0?"+":""}{change(Number(a),Number(b))}%</span>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}