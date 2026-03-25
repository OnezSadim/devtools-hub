"use client";
import { useState } from "react";
export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("18");
  const [people, setPeople] = useState("1");
  const tipAmt = bill ? (parseFloat(bill) * parseFloat(tip) / 100) : 0;
  const total = bill ? parseFloat(bill) + tipAmt : 0;
  const perPerson = people ? total / parseFloat(people) : total;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Tip Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate tip amount and split the bill between people.</p>
        <div className="space-y-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Bill Amount ($)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={bill} onChange={e=>setBill(e.target.value)} placeholder="50.00" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Tip Percentage</label>
            <div className="flex gap-2 mb-2">
              {["10","15","18","20","25"].map(p=>(
                <button key={p} onClick={()=>setTip(p)} className={`px-3 py-1 rounded text-sm ${tip===p?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{p}%</button>
              ))}
            </div>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={tip} onChange={e=>setTip(e.target.value)} /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Number of People</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={people} onChange={e=>setPeople(e.target.value)} min="1" /></div>
        </div>
        {bill && <div className="bg-gray-800 rounded p-4 space-y-2">
          <div className="flex justify-between"><span className="text-gray-400">Tip Amount</span><span className="font-bold text-yellow-400">${tipAmt.toFixed(2)}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Total Bill</span><span className="font-bold">${total.toFixed(2)}</span></div>
          <div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Per Person</span><span className="font-bold text-green-400 text-xl">${perPerson.toFixed(2)}</span></div>
        </div>}
      </div>
    </div>
  );
}
