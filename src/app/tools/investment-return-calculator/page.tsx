"use client";
import { useState } from "react";
export default function InvestmentReturnCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [monthly, setMonthly] = useState("");
  const p = parseFloat(principal) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseFloat(years) || 0) * 12;
  const m = parseFloat(monthly) || 0;
  const futureValue = r > 0 ? p * Math.pow(1+r,n) + m * (Math.pow(1+r,n)-1)/r : p + m*n;
  const totalContributions = p + m*n;
  const totalInterest = futureValue - totalContributions;
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-md mx-auto"><h1 className="text-3xl font-bold mb-2">Investment Return Calculator</h1><p className="text-gray-400 mb-6">Calculate compound interest growth</p><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Initial Investment ($)</label><input type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="10000"/></div><div><label className="block text-sm text-gray-400 mb-1">Annual Return Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="7"/></div><div><label className="block text-sm text-gray-400 mb-1">Time Period (years)</label><input type="number" value={years} onChange={e=>setYears(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="10"/></div><div><label className="block text-sm text-gray-400 mb-1">Monthly Contribution ($)</label><input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="500"/></div><div className="bg-gray-800 rounded-lg p-4 space-y-2"><div className="flex justify-between"><span className="text-gray-400">Total Contributions</span><span>${totalContributions.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div><div className="flex justify-between"><span className="text-gray-400">Total Interest Earned</span><span className="text-green-400">${totalInterest.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div><div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Future Value</span><span className="font-bold text-xl text-blue-400">${futureValue.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div></div></div></div></div>);
}