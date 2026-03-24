"use client";
import { useState } from "react";
export default function NumberFormatter() {
  const [input, setInput] = useState("");
  const [locale, setLocale] = useState("en-US");
  const [style, setStyle] = useState("decimal");
  const [currency, setCurrency] = useState("USD");
  const [decimals, setDecimals] = useState(2);
  const format = () => {
    try {
      const n = parseFloat(input);
      if (isNaN(n)) return "Invalid number";
      const opts: Intl.NumberFormatOptions = { style, minimumFractionDigits: decimals, maximumFractionDigits: decimals };
      if (style === "currency") opts.currency = currency;
      return new Intl.NumberFormat(locale, opts).format(n);
    } catch { return "Error"; }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Number Formatter</h1>
      <p className="text-gray-400 mb-6">Format numbers with locale, currency, and decimal options.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Number</label>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="1234567.89" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Locale</label>
          <select value={locale} onChange={e=>setLocale(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white">
            <option value="en-US">en-US (US English)</option>
            <option value="en-GB">en-GB (British)</option>
            <option value="de-DE">de-DE (German)</option>
            <option value="fr-FR">fr-FR (French)</option>
            <option value="ja-JP">ja-JP (Japanese)</option>
            <option value="zh-CN">zh-CN (Chinese)</option>
            <option value="ar-SA">ar-SA (Arabic)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Style</label>
          <select value={style} onChange={e=>setStyle(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white">
            <option value="decimal">Decimal</option>
            <option value="currency">Currency</option>
            <option value="percent">Percent</option>
          </select>
        </div>
        {style === "currency" && (
          <div>
            <label className="block text-sm text-gray-400 mb-1">Currency</label>
            <select value={currency} onChange={e=>setCurrency(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white">
              <option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option>
              <option value="JPY">JPY</option><option value="CNY">CNY</option><option value="CAD">CAD</option>
            </select>
          </div>
        )}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Decimal Places: {decimals}</label>
          <input type="range" min={0} max={6} value={decimals} onChange={e=>setDecimals(Number(e.target.value))} className="w-full" />
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-800 rounded max-w-3xl">
        <p className="text-sm text-gray-400 mb-1">Formatted:</p>
        <p className="text-2xl font-mono text-green-400">{input ? format() : "Enter a number above"}</p>
      </div>
    </main>
  );
}