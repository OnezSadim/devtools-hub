"use client";
import { useState } from "react";
const BRACKETS_2024 = [
  {min:0,max:11600,rate:0.10},
  {min:11600,max:47150,rate:0.12},
  {min:47150,max:100525,rate:0.22},
  {min:100525,max:191950,rate:0.24},
  {min:191950,max:243725,rate:0.32},
  {min:243725,max:609350,rate:0.35},
  {min:609350,max:Infinity,rate:0.37},
];
export default function TaxBracketCalculator() {
  const [income, setIncome] = useState("");
  const inc = parseFloat(income) || 0;
  let tax = 0;
  let marginalRate = 0;
  const breakdown = [];
  for(const b of BRACKETS_2024){
    if(inc <= b.min) break;
    const taxable = Math.min(inc, b.max) - b.min;
    const bracketTax = taxable * b.rate;
    tax += bracketTax;
    marginalRate = b.rate;
    breakdown.push({rate:b.rate,taxable,tax:bracketTax});
  }
  const effective = inc > 0 ? (tax/inc)*100 : 0;
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-md mx-auto"><h1 className="text-3xl font-bold mb-2">Tax Bracket Calculator</h1><p className="text-gray-400 mb-6">2024 US Federal Income Tax (Single filer)</p><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Annual Income ($)</label><input type="number" value={income} onChange={e=>setIncome(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="75000"/></div>{inc > 0 && <div className="space-y-3"><div className="bg-gray-800 rounded-lg p-4 space-y-2"><div className="flex justify-between"><span className="text-gray-400">Marginal Rate</span><span className="text-yellow-400">{(marginalRate*100).toFixed(0)}%</span></div><div className="flex justify-between"><span className="text-gray-400">Effective Rate</span><span className="text-green-400">{effective.toFixed(2)}%</span></div><div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Total Tax</span><span className="font-bold text-xl text-blue-400">${tax.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div><div className="flex justify-between"><span className="text-gray-400">After-Tax Income</span><span>${(inc-tax).toLocaleString(undefined,{maximumFractionDigits:0})}</span></div></div><div className="space-y-1">{breakdown.map((b,i)=><div key={i} className="flex justify-between text-sm bg-gray-800 px-3 py-2 rounded"><span className="text-gray-400">{(b.rate*100).toFixed(0)}% bracket</span><span>${b.tax.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div>)}</div></div>}</div></div></div>);
}