"use client";
import { useState } from "react";
export default function DividendYieldCalculator() {
  const [price, setPrice] = useState("");
  const [annual, setAnnual] = useState("");
  const [shares, setShares] = useState("");
  const [result, setResult] = useState<null|{yield:number,annual_income:number,monthly_income:number}>(null);
  function calc() {
    const p=parseFloat(price), d=parseFloat(annual), s=parseFloat(shares)||1;
    if (!p||!d) return;
    const y = (d/p)*100;
    setResult({ yield: y, annual_income: d*s, monthly_income: d*s/12 });
  }
  return (
    <div className="max-w-lg mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dividend Yield Calculator</h1>
      <div className="grid grid-cols-2 gap-3">
        {[["Stock Price ($)",price,setPrice],["Annual Dividend ($)",annual,setAnnual],["Number of Shares",shares,setShares]].map(([l,v,s]:any)=>(
          <div key={l}><label className="block text-sm mb-1">{l}</label>
          <input type="number" value={v} onChange={e=>s(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700"/></div>
        ))}
      </div>
      <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Calculate</button>
      {result && <div className="bg-gray-800 rounded p-4 space-y-2">
        <div className="flex justify-between"><span>Dividend Yield</span><span className="font-bold text-green-400">{result.yield.toFixed(2)}%</span></div>
        <div className="flex justify-between"><span>Annual Income</span><span>${result.annual_income.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Monthly Income</span><span>${result.monthly_income.toFixed(2)}</span></div>
      </div>}
    </div>
  );
}