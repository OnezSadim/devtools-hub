"use client";
import { useState } from "react";
export default function DividendCalculator() {
  const [shares, setShares] = useState("");
  const [price, setPrice] = useState("");
  const [dividend, setDividend] = useState("");
  const [freq, setFreq] = useState("4");
  const [result, setResult] = useState<any>(null);
  function calculate() {
    const s = parseFloat(shares);
    const p = parseFloat(price);
    const d = parseFloat(dividend);
    const f = parseInt(freq);
    if (!s || !p || !d) return;
    const annualDividend = d * f;
    const annualIncome = s * annualDividend;
    const yieldPct = (annualDividend / p) * 100;
    setResult({ annualIncome: annualIncome.toFixed(2), monthly: (annualIncome/12).toFixed(2), yieldPct: yieldPct.toFixed(2) });
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Dividend Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate dividend income and yield</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Number of Shares</label><input type="number" value={shares} onChange={e=>setShares(e.target.value)} className="w-full bg-gray-800 rounded p-3" placeholder="100" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Share Price ($)</label><input type="number" value={price} onChange={e=>setPrice(e.target.value)} className="w-full bg-gray-800 rounded p-3" placeholder="50" step="0.01" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Dividend Per Share Per Payment ($)</label><input type="number" value={dividend} onChange={e=>setDividend(e.target.value)} className="w-full bg-gray-800 rounded p-3" placeholder="0.50" step="0.01" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Payment Frequency</label><select value={freq} onChange={e=>setFreq(e.target.value)} className="w-full bg-gray-800 rounded p-3"><option value="1">Annual</option><option value="2">Semi-Annual</option><option value="4">Quarterly</option><option value="12">Monthly</option></select></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold">Calculate</button>
        </div>
        {result && <div className="mt-6 bg-gray-800 rounded-xl p-6 space-y-3">
          <div className="flex justify-between"><span className="text-gray-400">Annual Dividend Income</span><span className="text-2xl font-bold text-green-400">${result.annualIncome}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Monthly Income</span><span className="font-semibold">${result.monthly}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Dividend Yield</span><span className="font-semibold text-blue-400">{result.yieldPct}%</span></div>
        </div>}
      </div>
    </main>
  );
}