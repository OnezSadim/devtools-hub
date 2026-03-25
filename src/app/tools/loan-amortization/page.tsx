"use client";
import { useState } from "react";
export default function LoanAmortization() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("3");
  const [result, setResult] = useState<any>(null);
  const calculate = () => {
    const p = parseFloat(principal), r = parseFloat(rate)/100/12, n = parseInt(years)*12;
    if (!p||!r||!n) return;
    const monthly = p*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
    setResult({ monthly: monthly.toFixed(2), total: (monthly*n).toFixed(2), interest: (monthly*n-p).toFixed(2) });
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Loan Amortization Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate monthly payments and total interest for any loan</p>
      <div className="max-w-lg space-y-4">
        <div><label className="text-gray-400 text-sm">Loan Amount ($)</label><input value={principal} onChange={e=>setPrincipal(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white mt-1" /></div>
        <div><label className="text-gray-400 text-sm">Annual Interest Rate (%)</label><input value={rate} onChange={e=>setRate(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white mt-1" /></div>
        <div><label className="text-gray-400 text-sm">Loan Term (years)</label><input value={years} onChange={e=>setYears(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white mt-1" /></div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded p-3">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 space-y-2"><div className="flex justify-between"><span className="text-gray-400">Monthly Payment</span><span className="text-green-400 font-bold text-xl">${result.monthly}</span></div><div className="flex justify-between"><span className="text-gray-400">Total Payment</span><span>${result.total}</span></div><div className="flex justify-between"><span className="text-gray-400">Total Interest</span><span className="text-red-400">${result.interest}</span></div></div>}
      </div>
    </main>
  );
}