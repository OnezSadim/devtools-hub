"use client";
import { useState } from "react";
export default function MortgageCalculator() {
  const [home, setHome] = useState("");
  const [down, setDown] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("30");
  const [result, setResult] = useState(null);
  const calculate = () => {
    const p = parseFloat(home) - parseFloat(down || 0);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (!p || !r || !n) return;
    const monthly = (p * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
    const total = monthly * n;
    const downPct = ((parseFloat(down||0)/parseFloat(home))*100).toFixed(1);
    setResult({ monthly: monthly.toFixed(2), total: total.toFixed(2), interest: (total-p).toFixed(2), downPct });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Mortgage Calculator</h1>
        <p className="text-gray-400 mb-6">Estimate your monthly mortgage payment including principal and interest.</p>
        <div className="space-y-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Home Price ($)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={home} onChange={e=>setHome(e.target.value)} placeholder="300000" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Down Payment ($)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={down} onChange={e=>setDown(e.target.value)} placeholder="60000" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Annual Interest Rate (%)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="6.5" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Loan Term (years)</label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" value={years} onChange={e=>setYears(e.target.value)}>
              <option value="10">10 years</option><option value="15">15 years</option><option value="20">20 years</option><option value="30">30 years</option>
            </select></div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold mb-6">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 space-y-2">
          <div className="flex justify-between"><span className="text-gray-400">Monthly Payment</span><span className="font-bold text-green-400">${result.monthly}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Total Payment</span><span className="font-bold">${result.total}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Total Interest</span><span className="font-bold text-red-400">${result.interest}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Down Payment %</span><span className="font-bold">{result.downPct}%</span></div>
        </div>}
      </div>
    </div>
  );
}
