"use client";
import { useState } from "react";
export default function CapitalGainsCalculator() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [shares, setShares] = useState("");
  const [holdingYears, setHoldingYears] = useState("1");
  const [taxRate, setTaxRate] = useState("15");
  const [result, setResult] = useState<any>(null);
  const calculate = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const qty = parseFloat(shares);
    const rate = parseFloat(taxRate) / 100;
    if (isNaN(buy) || isNaN(sell) || isNaN(qty)) return;
    const gain = (sell - buy) * qty;
    const tax = gain > 0 ? gain * rate : 0;
    const net = gain - tax;
    setResult({ gain, tax, net, isLoss: gain < 0 });
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Capital Gains Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate tax on investment profits</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Buy Price ($)</label><input type="number" value={buyPrice} onChange={e=>setBuyPrice(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-white" placeholder="10.00" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Sell Price ($)</label><input type="number" value={sellPrice} onChange={e=>setSellPrice(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-white" placeholder="15.00" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Number of Shares</label><input type="number" value={shares} onChange={e=>setShares(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-white" placeholder="100" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Holding Period</label><select value={holdingYears} onChange={e=>setHoldingYears(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-white"><option value="0">Short-term (&lt;1 year)</option><option value="1">Long-term (&gt;1 year)</option></select></div>
          <div><label className="block text-sm text-gray-400 mb-1">Tax Rate (%)</label><input type="number" value={taxRate} onChange={e=>setTaxRate(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-white" placeholder="15" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">Calculate</button>
        </div>
        {result && (
          <div className="mt-6 bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between"><span className="text-gray-400">Capital Gain/Loss</span><span className={result.isLoss ? "text-red-400 font-bold" : "text-green-400 font-bold"}>${result.gain.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Tax Owed</span><span className="text-yellow-400 font-bold">${result.tax.toFixed(2)}</span></div>
            <div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-white font-semibold">Net Profit</span><span className={result.net < 0 ? "text-red-400 font-bold text-lg" : "text-green-400 font-bold text-lg"}>${result.net.toFixed(2)}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}
