"use client";
import { useState } from "react";
export default function LoanCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);
  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (!p || !r || !n) return;
    const monthly = (p * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
    const total = monthly * n;
    setResult({ monthly: monthly.toFixed(2), total: total.toFixed(2), interest: (total-p).toFixed(2) });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Loan Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate monthly payments, total cost, and interest for any loan.</p>
        <div className="space-y-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Loan Amount ($)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} placeholder="10000" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Annual Interest Rate (%)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="5.5" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Loan Term (years)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={years} onChange={e=>setYears(e.target.value)} placeholder="5" /></div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold mb-6">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 space-y-2">
          <div className="flex justify-between"><span className="text-gray-400">Monthly Payment</span><span className="font-bold text-green-400">${result.monthly}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Total Payment</span><span className="font-bold">${result.total}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Total Interest</span><span className="font-bold text-red-400">${result.interest}</span></div>
        </div>}
      </div>
    </div>
  );
}
