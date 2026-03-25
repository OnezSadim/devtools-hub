"use client";
import { useState } from "react";
export default function MortgagePaymentCalculator() {
  const [home, setHome] = useState("");
  const [down, setDown] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<null|{monthly:number,total:number,interest:number}>(null);
  function calc() {
    const p = parseFloat(home) - parseFloat(down);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (!p || !r || !n) return;
    const m = p * (r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
    setResult({ monthly: m, total: m*n, interest: m*n - p });
  }
  return (
    <div className="max-w-lg mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Mortgage Payment Calculator</h1>
      <div className="grid grid-cols-2 gap-3">
        {[["Home Price ($)",home,setHome],["Down Payment ($)",down,setDown],["Annual Rate (%)",rate,setRate],["Loan Term (years)",years,setYears]].map(([label,val,setter]:any)=>(
          <div key={label}><label className="block text-sm mb-1">{label}</label>
          <input type="number" value={val} onChange={e=>setter(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700" /></div>
        ))}
      </div>
      <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Calculate</button>
      {result && <div className="bg-gray-800 rounded p-4 space-y-2">
        <div className="flex justify-between"><span>Monthly Payment</span><span className="font-bold text-green-400">${result.monthly.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Total Payment</span><span>${result.total.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Total Interest</span><span className="text-red-400">${result.interest.toFixed(2)}</span></div>
      </div>}
    </div>
  );
}