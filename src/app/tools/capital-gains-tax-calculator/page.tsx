"use client";
import { useState } from "react";
export default function CapitalGainsTax() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [holdingPeriod, setHoldingPeriod] = useState("long");
  const [income, setIncome] = useState("");
  const [result, setResult] = useState(null);
  function calculate() {
    const pp = parseFloat(purchasePrice);
    const sp = parseFloat(salePrice);
    const inc = parseFloat(income) || 0;
    if (isNaN(pp) || isNaN(sp)) return;
    const gain = sp - pp;
    let rate = 0;
    if (holdingPeriod === "short") {
      if (inc <= 11600) rate = 0.10;
      else if (inc <= 47150) rate = 0.12;
      else if (inc <= 100525) rate = 0.22;
      else if (inc <= 191950) rate = 0.24;
      else if (inc <= 243725) rate = 0.32;
      else if (inc <= 609350) rate = 0.35;
      else rate = 0.37;
    } else {
      if (inc <= 47025) rate = 0;
      else if (inc <= 518900) rate = 0.15;
      else rate = 0.20;
    }
    const tax = gain > 0 ? gain * rate : 0;
    setResult({ gain, rate, tax, netProceeds: sp - tax });
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Capital Gains Tax Calculator</h1>
        <p className="text-gray-400 mb-6">Estimate US federal capital gains tax on investments.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Purchase Price ($)</label>
            <input type="number" value={purchasePrice} onChange={e=>setPurchasePrice(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="10000" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Sale Price ($)</label>
            <input type="number" value={salePrice} onChange={e=>setSalePrice(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="15000" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Holding Period</label>
            <select value={holdingPeriod} onChange={e=>setHoldingPeriod(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
              <option value="long">Long-term (&gt;1 year)</option>
              <option value="short">Short-term (&le;1 year)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Annual Income ($) — for rate bracket</label>
            <input type="number" value={income} onChange={e=>setIncome(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" placeholder="75000" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        </div>
        {result && (
          <div className="mt-6 bg-gray-800 rounded p-4 space-y-2">
            <div className="flex justify-between"><span className="text-gray-400">Capital Gain</span><span className={result.gain>=0?"text-green-400":"text-red-400"}>${result.gain.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Tax Rate</span><span>{(result.rate*100).toFixed(0)}%</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Tax Owed</span><span className="text-red-400">${result.tax.toFixed(2)}</span></div>
            <div className="flex justify-between border-t border-gray-700 pt-2"><span className="font-semibold">Net Proceeds</span><span className="text-green-400 font-bold">${result.netProceeds.toFixed(2)}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}
