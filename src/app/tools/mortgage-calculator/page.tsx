"use client";
import { useState } from "react";
export default function MortgageCalculator() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const p = parseFloat(loan);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (isNaN(p) || isNaN(r) || isNaN(n) || n === 0) { setResult("Please enter valid numbers."); return; }
    let monthly: number;
    if (r === 0) { monthly = p / n; } else { monthly = p * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1); }
    const total = monthly * n;
    const interest = total - p;
    setResult(`Monthly Payment: $${monthly.toFixed(2)}\nTotal Payment: $${total.toFixed(2)}\nTotal Interest: $${interest.toFixed(2)}`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Mortgage Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your monthly mortgage payment, total payment, and interest.</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Loan Amount ($)</label><input type="number" value={loan} onChange={e=>setLoan(e.target.value)} placeholder="e.g. 300000" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Annual Interest Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="e.g. 6.5" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Loan Term (years)</label><input type="number" value={years} onChange={e=>setYears(e.target.value)} placeholder="e.g. 30" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
        </div>
        {result && <div className="mt-6 bg-gray-800 rounded p-4 whitespace-pre-line text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
