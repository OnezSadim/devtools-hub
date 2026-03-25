"use client";
import { useState } from "react";
export default function RetirementSavingsCalculator() {
  const [current, setCurrent] = useState("");
  const [monthly, setMonthly] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<null|number>(null);
  function calc() {
    const P=parseFloat(current)||0, m=parseFloat(monthly)||0, r=parseFloat(rate)/100/12, n=parseFloat(years)*12;
    if (!r||!n) return;
    const future = P*Math.pow(1+r,n) + m*((Math.pow(1+r,n)-1)/r);
    setResult(future);
  }
  return (
    <div className="max-w-lg mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Retirement Savings Calculator</h1>
      <div className="grid grid-cols-2 gap-3">
        {[["Current Savings ($)",current,setCurrent],["Monthly Contribution ($)",monthly,setMonthly],["Annual Return (%)",rate,setRate],["Years to Retire",years,setYears]].map(([l,v,s]:any)=>(
          <div key={l}><label className="block text-sm mb-1">{l}</label>
          <input type="number" value={v} onChange={e=>s(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700"/></div>
        ))}
      </div>
      <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Calculate</button>
      {result !== null && <div className="bg-gray-800 rounded p-4 text-center">
        <div className="text-sm text-gray-400">Estimated Retirement Savings</div>
        <div className="text-3xl font-bold text-green-400 mt-1">${result.toLocaleString(undefined,{maximumFractionDigits:0})}</div>
      </div>}
    </div>
  );
}