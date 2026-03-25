"use client";
import { useState } from "react";
export default function SavingsCalculator() {
  const [initial, setInitial] = useState("");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const p = parseFloat(initial) || 0;
    const m = parseFloat(monthly) || 0;
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (isNaN(r) || isNaN(n) || n <= 0) { setResult("Please enter valid numbers."); return; }
    let total: number;
    if (r === 0) { total = p + m * n; } else { total = p * Math.pow(1+r,n) + m * (Math.pow(1+r,n)-1) / r; }
    const contributed = p + m * n;
    const interest = total - contributed;
    setResult(`Future Value: $${total.toFixed(2)}\nTotal Contributed: $${contributed.toFixed(2)}\nInterest Earned: $${interest.toFixed(2)}`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Savings Calculator</h1>
        <p className="text-gray-400 mb-6">See how your savings grow with regular contributions over time.</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Initial Savings ($)</label><input type="number" value={initial} onChange={e=>setInitial(e.target.value)} placeholder="e.g. 5000" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Monthly Contribution ($)</label><input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} placeholder="e.g. 200" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Annual Interest Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="e.g. 4" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Time (years)</label><input type="number" value={years} onChange={e=>setYears(e.target.value)} placeholder="e.g. 20" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
        </div>
        {result && <div className="mt-6 bg-gray-800 rounded p-4 whitespace-pre-line text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
