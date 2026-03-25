"use client";
import { useState } from "react";
export default function RetirementCalculator() {
  const [age, setAge] = useState(""); const [retireAge, setRetireAge] = useState("65");
  const [savings, setSavings] = useState(""); const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("7");
  const [result, setResult] = useState<{total:number,years:number}|null>(null);
  const calc = () => {
    const a=parseFloat(age),ra=parseFloat(retireAge),s=parseFloat(savings)||0,m=parseFloat(monthly)||0,r=parseFloat(rate)/100/12;
    if(!a||!ra||ra<=a) return;
    const months=(ra-a)*12;
    const futureCurrentSavings = s*Math.pow(1+r,months);
    const futureContributions = r===0 ? m*months : m*(Math.pow(1+r,months)-1)/r;
    setResult({total:Math.round(futureCurrentSavings+futureContributions),years:ra-a});
  };
  return (<div className="max-w-md mx-auto p-6"><h1 className="text-2xl font-bold mb-4 text-white">Retirement Calculator</h1><p className="text-gray-400 mb-4">Estimate your retirement savings.</p><div className="space-y-3 mb-4"><div className="grid grid-cols-2 gap-3"><div><label className="block text-sm text-gray-400 mb-1">Current Age</label><input type="number" value={age} onChange={e=>setAge(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" placeholder="30" /></div><div><label className="block text-sm text-gray-400 mb-1">Retirement Age</label><input type="number" value={retireAge} onChange={e=>setRetireAge(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" /></div></div><div><label className="block text-sm text-gray-400 mb-1">Current Savings ($)</label><input type="number" value={savings} onChange={e=>setSavings(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" placeholder="10000" /></div><div><label className="block text-sm text-gray-400 mb-1">Monthly Contribution ($)</label><input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" placeholder="500" /></div><div><label className="block text-sm text-gray-400 mb-1">Annual Return Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" /></div></div><button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium mb-4">Calculate</button>{result&&(<div className="bg-gray-800 rounded p-4 text-center"><div className="text-sm text-gray-400 mb-1">Projected savings after {result.years} years</div><div className="text-4xl font-bold text-green-400">${result.total.toLocaleString()}</div></div>)}</div>);
}
