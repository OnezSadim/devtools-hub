"use client";
import { useState } from "react";
export default function ProfitMargin() {
  const [revenue, setRevenue] = useState('');
  const [cost, setCost] = useState('');
  const [result, setResult] = useState<{gross: string, net: string, profit: string} | null>(null);
  const calculate = () => {
    const r = parseFloat(revenue), c = parseFloat(cost);
    if (!isNaN(r) && !isNaN(c) && r > 0) {
      const profit = r - c;
      setResult({ gross: ((profit / r) * 100).toFixed(2), net: profit.toFixed(2), profit: profit.toFixed(2) });
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Profit Margin Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate gross and net profit margins.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Revenue ($)</label><input type="number" value={revenue} onChange={e => setRevenue(e.target.value)} placeholder="e.g. 10000" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Total Cost ($)</label><input type="number" value={cost} onChange={e => setCost(e.target.value)} placeholder="e.g. 6000" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="text-center"><span className="text-gray-400">Gross Margin: </span><span className="text-2xl font-bold text-green-400">{result.gross}%</span></div>
            <div className="text-center"><span className="text-gray-400">Net Profit: </span><span className="text-xl font-bold text-blue-400">${result.net}</span></div>
          </div>}
        </div>
      </div>
    </main>
  );
}