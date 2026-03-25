"use client";
import { useState } from "react";
export default function CurrencyExchangeCalculator() {
  const rates: Record<string,number> = { USD:1, EUR:0.92, GBP:0.79, JPY:149.5, CAD:1.36, AUD:1.53, CHF:0.88, CNY:7.24, INR:83.1, MXN:17.1, BRL:4.97, KRW:1325, SGD:1.34 };
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const result = (parseFloat(amount)||0) / rates[from] * rates[to];
  const currencies = Object.keys(rates);
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Currency Exchange Calculator</h1>
      <p className="text-xs text-gray-500">Approximate rates (not live). For reference only.</p>
      <div><label className="block text-sm mb-1">Amount</label>
        <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700"/></div>
      <div className="flex gap-3 items-center">
        <div className="flex-1"><label className="block text-sm mb-1">From</label>
          <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            {currencies.map(c=><option key={c}>{c}</option>)}
          </select></div>
        <button onClick={()=>{const t=from; setFrom(to); setTo(t);}} className="mt-5 p-2 bg-gray-700 rounded hover:bg-gray-600">⇄</button>
        <div className="flex-1"><label className="block text-sm mb-1">To</label>
          <select value={to} onChange={e=>setTo(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            {currencies.map(c=><option key={c}>{c}</option>)}
          </select></div>
      </div>
      <div className="bg-gray-800 rounded p-4 text-center">
        <div className="text-sm text-gray-400">{amount} {from} =</div>
        <div className="text-3xl font-bold text-green-400 mt-1">{result.toFixed(4)} {to}</div>
        <div className="text-sm text-gray-500 mt-1">Rate: 1 {from} = {(rates[to]/rates[from]).toFixed(4)} {to}</div>
      </div>
    </div>
  );
}