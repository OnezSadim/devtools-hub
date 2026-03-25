"use client";
import { useState } from "react";
export default function InflationCalculator() {
  const [amount, setAmount] = useState("");
  const [fromYear, setFromYear] = useState("2000");
  const [toYear, setToYear] = useState("2024");
  const [rate, setRate] = useState("3");
  const [result, setResult] = useState<number|null>(null);
  const calc = () => {
    const a=parseFloat(amount),r=parseFloat(rate)/100;
    const years=parseInt(toYear)-parseInt(fromYear);
    if(!a||isNaN(r)||isNaN(years)) return;
    setResult(a*Math.pow(1+r,years));
  };
  const years = Array.from({length:125},(_,i)=>1900+i);
  return (<div className="max-w-md mx-auto p-6"><h1 className="text-2xl font-bold mb-4 text-white">Inflation Calculator</h1><p className="text-gray-400 mb-4">Calculate the future value of money accounting for inflation.</p><div className="space-y-3 mb-4"><div><label className="block text-sm text-gray-400 mb-1">Amount ($)</label><input type="number" value={amount} onChange={e=>setAmount(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" placeholder="1000" /></div><div className="grid grid-cols-2 gap-3"><div><label className="block text-sm text-gray-400 mb-1">From Year</label><select value={fromYear} onChange={e=>setFromYear(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700">{years.map(y=>(<option key={y}>{y}</option>))}</select></div><div><label className="block text-sm text-gray-400 mb-1">To Year</label><select value={toYear} onChange={e=>setToYear(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700">{years.map(y=>(<option key={y}>{y}</option>))}</select></div></div><div><label className="block text-sm text-gray-400 mb-1">Annual Inflation Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700" /></div></div><button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium mb-4">Calculate</button>{result!==null&&(<div className="bg-gray-800 rounded p-4"><div className="text-sm text-gray-400">Equivalent value in {toYear}</div><div className="text-3xl font-bold text-green-400">${result.toFixed(2)}</div><div className="text-gray-400 text-sm mt-1">${amount} in {fromYear} = ${result.toFixed(2)} in {toYear}</div></div>)}</div>);
}
