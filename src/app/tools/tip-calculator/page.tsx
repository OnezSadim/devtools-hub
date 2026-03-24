"use client";
import { useState } from "react";
export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("18");
  const [people, setPeople] = useState("1");
  const tipAmt = bill ? (Number(bill) * Number(tip) / 100) : 0;
  const total = bill ? (Number(bill) + tipAmt) : 0;
  const perPerson = people && Number(people) > 0 ? total / Number(people) : total;
  const tipPer = people && Number(people) > 0 ? tipAmt / Number(people) : tipAmt;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">Tip Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate tip and split the bill.</p>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Bill Amount ($)</label>
            <input type="number" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-xl" placeholder="0.00" value={bill} onChange={e=>setBill(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Tip: {tip}%</label>
            <div className="flex gap-2 flex-wrap">
              {["10","15","18","20","25"].map(t => (
                <button key={t} onClick={()=>setTip(t)} className={`px-4 py-2 rounded-lg font-medium ${tip===t?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{t}%</button>
              ))}
              <input type="number" className="w-20 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" value={tip} onChange={e=>setTip(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Split between (people)</label>
            <input type="number" min="1" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3" value={people} onChange={e=>setPeople(e.target.value)} />
          </div>
          <div className="border-t border-gray-700 pt-4 space-y-3">
            <div className="flex justify-between"><span className="text-gray-400">Tip amount</span><span className="font-semibold">${tipAmt.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Total</span><span className="font-semibold">${total.toFixed(2)}</span></div>
            <div className="flex justify-between text-xl"><span>Per person</span><span className="font-bold text-green-400">${perPerson.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400">Tip per person</span><span>${tipPer.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}