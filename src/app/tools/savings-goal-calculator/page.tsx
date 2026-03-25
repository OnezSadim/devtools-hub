"use client";
import { useState } from "react";
export default function SavingsGoalCalculator() {
  const [goal, setGoal] = useState("");
  const [saved, setSaved] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const g = parseFloat(goal) || 0;
  const s = parseFloat(saved) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12;
  const n = (parseFloat(years) || 0) * 12;
  const remaining = Math.max(0, g - s);
  const monthlyNeeded = n > 0 && r > 0 ? remaining * r / (Math.pow(1+r,n)-1) : n > 0 ? remaining/n : 0;
  const pct = g > 0 ? Math.min(100, (s/g)*100) : 0;
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-md mx-auto"><h1 className="text-3xl font-bold mb-2">Savings Goal Calculator</h1><p className="text-gray-400 mb-6">Find out how much to save monthly</p><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Savings Goal ($)</label><input type="number" value={goal} onChange={e=>setGoal(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="50000"/></div><div><label className="block text-sm text-gray-400 mb-1">Already Saved ($)</label><input type="number" value={saved} onChange={e=>setSaved(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="5000"/></div><div><label className="block text-sm text-gray-400 mb-1">Annual Interest Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="4"/></div><div><label className="block text-sm text-gray-400 mb-1">Time to Goal (years)</label><input type="number" value={years} onChange={e=>setYears(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="5"/></div><div className="bg-gray-800 rounded-lg p-4 space-y-3"><div><div className="flex justify-between text-sm mb-1"><span className="text-gray-400">Progress</span><span>{pct.toFixed(1)}%</span></div><div className="w-full bg-gray-700 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width:pct+"%"}}></div></div></div><div className="flex justify-between"><span className="text-gray-400">Still Needed</span><span>${remaining.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div><div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Monthly Savings Needed</span><span className="font-bold text-xl text-blue-400">${monthlyNeeded.toFixed(2)}</span></div></div></div></div></div>);
}