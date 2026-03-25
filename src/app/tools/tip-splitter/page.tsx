"use client";
import { useState } from "react";
export default function TipSplitter() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("18");
  const [people, setPeople] = useState("2");
  const total = parseFloat(bill)||0;
  const tipPct = parseFloat(tip)||0;
  const n = parseInt(people)||1;
  const tipAmt = total * tipPct / 100;
  const grandTotal = total + tipAmt;
  const perPerson = grandTotal / n;
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Tip Splitter</h1>
      <div><label className="block text-sm mb-1">Bill Amount ($)</label>
        <input type="number" value={bill} onChange={e=>setBill(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700" placeholder="0.00"/></div>
      <div><label className="block text-sm mb-2">Tip Percentage: {tip}%</label>
        <div className="flex gap-2 mb-2">{["10","15","18","20","25"].map(p=>(
          <button key={p} onClick={()=>setTip(p)} className={"px-3 py-1 rounded text-sm "+(tip===p?"bg-blue-600":"bg-gray-700")}>{p}%</button>
        ))}</div>
        <input type="range" min="0" max="50" value={tip} onChange={e=>setTip(e.target.value)} className="w-full"/></div>
      <div><label className="block text-sm mb-1">Number of People</label>
        <input type="number" value={people} onChange={e=>setPeople(e.target.value)} min="1" className="w-full p-2 rounded bg-gray-800 border border-gray-700"/></div>
      <div className="bg-gray-800 rounded p-4 grid grid-cols-2 gap-3">
        <div className="text-center"><div className="text-sm text-gray-400">Tip Amount</div><div className="font-bold text-yellow-400">${tipAmt.toFixed(2)}</div></div>
        <div className="text-center"><div className="text-sm text-gray-400">Total</div><div className="font-bold">${grandTotal.toFixed(2)}</div></div>
        <div className="col-span-2 text-center border-t border-gray-700 pt-3"><div className="text-sm text-gray-400">Per Person</div><div className="text-2xl font-bold text-green-400">${perPerson.toFixed(2)}</div></div>
      </div>
    </div>
  );
}