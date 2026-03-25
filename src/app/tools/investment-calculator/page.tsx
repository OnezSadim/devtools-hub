"use client";
import { useState } from "react";
export default function InvestmentCalculator() {
  const [principal, setPrincipal] = useState("");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);
  const calculate = () => {
    const p = parseFloat(principal) || 0;
    const m = parseFloat(monthly) || 0;
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (!n || !rate) return;
    const futureP = p * Math.pow(1+r, n);
    const futureM = r > 0 ? m * ((Math.pow(1+r,n)-1)/r) : m*n;
    const total = futureP + futureM;
    const invested = p + m*n;
    setResult({ total: total.toFixed(2), invested: invested.toFixed(2), gains: (total-invested).toFixed(2) });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Investment Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate compound interest growth with monthly contributions.</p>
        <div className="space-y-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Initial Investment ($)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} placeholder="1000" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Monthly Contribution ($)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} placeholder="100" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Annual Return Rate (%)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="7" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Investment Period (years)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={years} onChange={e=>setYears(e.target.value)} placeholder="10" /></div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold mb-6">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 space-y-2">
          <div className="flex justify-between"><span className="text-gray-400">Total Invested</span><span className="font-bold">${result.invested}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Investment Gains</span><span className="font-bold text-green-400">${result.gains}</span></div>
          <div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Final Value</span><span className="font-bold text-green-400 text-xl">${result.total}</span></div>
        </div>}
      </div>
    </div>
  );
}
