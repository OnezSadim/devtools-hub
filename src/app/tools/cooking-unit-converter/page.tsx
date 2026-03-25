"use client";
import { useState } from "react";
const conversions: Record<string, number> = { tsp: 1, tbsp: 3, fl_oz: 6, cup: 48, pint: 96, quart: 192, gallon: 768, ml: 0.2029, liter: 202.9 };
const labels: Record<string, string> = { tsp: 'Teaspoon', tbsp: 'Tablespoon', fl_oz: 'Fluid Ounce', cup: 'Cup', pint: 'Pint', quart: 'Quart', gallon: 'Gallon', ml: 'Milliliter', liter: 'Liter' };
export default function CookingConverter() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('cup');
  const [to, setTo] = useState('ml');
  const result = parseFloat(value) ? ((parseFloat(value) * conversions[from]) / conversions[to]).toFixed(4) : '';
  const units = Object.keys(conversions);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Cooking Unit Converter</h1>
        <p className="text-gray-400 mb-8">Convert between cooking measurement units.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Amount</label><input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="e.g. 2" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-400 mb-1">From</label><select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white">{units.map(u => <option key={u} value={u}>{labels[u]}</option>)}</select></div>
            <div><label className="block text-sm text-gray-400 mb-1">To</label><select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white">{units.map(u => <option key={u} value={u}>{labels[u]}</option>)}</select></div>
          </div>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-3xl font-bold text-blue-400">{result}</span><span className="text-gray-400 ml-2">{labels[to]}</span></div>}
        </div>
      </div>
    </main>
  );
}