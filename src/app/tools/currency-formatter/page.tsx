"use client";
import { useState } from "react";
export default function CurrencyFormatter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [locale, setLocale] = useState("en-US");
  const currencies = ["USD","EUR","GBP","JPY","CHF","CAD","AUD","CNY","INR","BRL"];
  const locales = ["en-US","en-GB","de-DE","fr-FR","ja-JP","zh-CN","ar-SA"];
  const n = parseFloat(amount);
  const formatted = isNaN(n) ? "" : new Intl.NumberFormat(locale, { style: "currency", currency }).format(n);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Currency Formatter</h1>
      <p className="text-gray-400 mb-4">Format numbers as currency in any locale.</p>
      <input className="w-full p-2 bg-gray-800 rounded text-white mb-2" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
      <div className="flex gap-2 mb-4">
        <select className="flex-1 p-2 bg-gray-800 rounded text-white" value={currency} onChange={e => setCurrency(e.target.value)}>{currencies.map(c => <option key={c} value={c}>{c}</option>)}</select>
        <select className="flex-1 p-2 bg-gray-800 rounded text-white" value={locale} onChange={e => setLocale(e.target.value)}>{locales.map(l => <option key={l} value={l}>{l}</option>)}</select>
      </div>
      {formatted && <div className="bg-gray-800 p-6 rounded text-center text-3xl text-green-400 font-mono">{formatted}</div>}
    </div>
  );
}