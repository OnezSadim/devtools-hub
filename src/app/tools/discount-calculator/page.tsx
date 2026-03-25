"use client";
import { useState } from "react";
export default function DiscountCalculator() {
  const [original, setOriginal] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("0");
  const discountAmt = original && discount ? parseFloat(original)*parseFloat(discount)/100 : 0;
  const afterDiscount = original ? parseFloat(original) - discountAmt : 0;
  const taxAmt = afterDiscount * parseFloat(tax||0) / 100;
  const final = afterDiscount + taxAmt;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Discount Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate discounted price, savings, and final cost with optional tax.</p>
        <div className="space-y-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Original Price ($)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={original} onChange={e=>setOriginal(e.target.value)} placeholder="100" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Discount (%)</label>
            <div className="flex gap-2 mb-2">
              {["5","10","15","20","25","50"].map(d=>(
                <button key={d} onClick={()=>setDiscount(d)} className={`px-2 py-1 rounded text-sm ${discount===d?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{d}%</button>
              ))}
            </div>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={discount} onChange={e=>setDiscount(e.target.value)} placeholder="20" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Tax Rate (%) optional</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={tax} onChange={e=>setTax(e.target.value)} placeholder="0" /></div>
        </div>
        {original && discount && <div className="bg-gray-800 rounded p-4 space-y-2">
          <div className="flex justify-between"><span className="text-gray-400">You Save</span><span className="font-bold text-green-400">${discountAmt.toFixed(2)}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">After Discount</span><span className="font-bold">${afterDiscount.toFixed(2)}</span></div>
          {parseFloat(tax)>0 && <div className="flex justify-between"><span className="text-gray-400">Tax ({tax}%)</span><span className="font-bold">${taxAmt.toFixed(2)}</span></div>}
          <div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Final Price</span><span className="font-bold text-xl">${final.toFixed(2)}</span></div>
        </div>}
      </div>
    </div>
  );
}
