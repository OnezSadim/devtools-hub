"use client";
import { useState } from "react";
export default function CurrencyConverter() {
  const rates = { USD:1, EUR:0.92, GBP:0.79, JPY:149.5, CAD:1.36, AUD:1.53, CHF:0.88, CNY:7.24, INR:83.1, MXN:17.2, BRL:5.0, KRW:1325, SGD:1.34, HKD:7.82, NOK:10.6, SEK:10.4, DKK:6.88, NZD:1.63, ZAR:18.9, AED:3.67 };
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const result = amount ? (parseFloat(amount) / rates[from] * rates[to]).toFixed(4) : "";
  const currencies = Object.keys(rates);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Currency Converter</h1>
        <p className="text-gray-400 mb-2">Convert between 20 major world currencies.</p>
        <p className="text-xs text-gray-500 mb-6">Note: Rates are approximate and for reference only. Not for financial decisions.</p>
        <div className="space-y-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Amount</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={amount} onChange={e=>setAmount(e.target.value)} /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-400 mb-1">From</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" value={from} onChange={e=>setFrom(e.target.value)}>
                {currencies.map(c=><option key={c} value={c}>{c}</option>)}
              </select></div>
            <div><label className="block text-sm text-gray-400 mb-1">To</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" value={to} onChange={e=>setTo(e.target.value)}>
                {currencies.map(c=><option key={c} value={c}>{c}</option>)}
              </select></div>
          </div>
        </div>
        {amount && <div className="bg-gray-800 rounded p-6 text-center">
          <div className="text-gray-400 mb-2">{amount} {from} =</div>
          <div className="text-4xl font-bold text-green-400">{result} {to}</div>
          <div className="text-gray-500 text-sm mt-2">1 {from} = {(1/rates[from]*rates[to]).toFixed(4)} {to}</div>
        </div>}
      </div>
    </div>
  );
}
