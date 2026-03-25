"use client";
import { useState } from "react";
export default function VatReverseCalculator() {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("20");
  const [mode, setMode] = useState("add");
  const [result, setResult] = useState(null);
  function calculate() {
    const p = parseFloat(price);
    const r = parseFloat(rate) / 100;
    if (isNaN(p) || isNaN(r)) return;
    if (mode === "add") {
      const vatAmount = p * r;
      setResult({ net: p, vat: vatAmount, gross: p + vatAmount });
    } else {
      const net = p / (1 + r);
      const vatAmount = p - net;
      setResult({ net, vat: vatAmount, gross: p });
    }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">VAT Reverse Calculator</h1>
        <p className="text-gray-400 mb-6">Add or remove VAT from any price instantly.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Price</label>
            <input type="number" value={price} onChange={e=>setPrice(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="100" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">VAT Rate (%)</label>
            <div className="flex gap-2 flex-wrap">
              {["5","10","15","20","21","23","25"].map(r=>(
                <button key={r} onClick={()=>setRate(r)} className={"px-3 py-1 rounded text-sm "+(rate===r?"bg-blue-600":"bg-gray-700 hover:bg-gray-600")}>{r}%</button>
              ))}
              <input type="number" value={rate} onChange={e=>setRate(e.target.value)} className="w-20 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm" placeholder="Custom" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Mode</label>
            <div className="flex gap-2">
              <button onClick={()=>setMode("add")} className={"flex-1 py-2 rounded "+(mode==="add"?"bg-blue-600":"bg-gray-700 hover:bg-gray-600")}>Add VAT</button>
              <button onClick={()=>setMode("remove")} className={"flex-1 py-2 rounded "+(mode==="remove"?"bg-blue-600":"bg-gray-700 hover:bg-gray-600")}>Remove VAT</button>
            </div>
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        </div>
        {result && (
          <div className="mt-6 bg-gray-800 rounded p-4 space-y-2">
            <div className="flex justify-between"><span className="text-gray-400">Net (ex-VAT)</span><span>${result.net.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">VAT Amount</span><span className="text-yellow-400">${result.vat.toFixed(2)}</span></div>
            <div className="flex justify-between border-t border-gray-700 pt-2"><span className="font-semibold">Gross (inc-VAT)</span><span className="text-green-400 font-bold">${result.gross.toFixed(2)}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}
