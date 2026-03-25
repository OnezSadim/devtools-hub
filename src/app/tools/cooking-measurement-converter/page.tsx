"use client";
import { useState } from "react";

const conversions: Record<string, Record<string, number>> = {
  volume: {
    tsp: 1, tbsp: 3, floz: 6, cup: 48, pint: 96, quart: 192, gallon: 768,
    ml: 0.2029, l: 202.9
  },
  weight: {
    g: 1, kg: 1000, oz: 28.3495, lb: 453.592
  }
};

export default function CookingMeasurementConverter() {
  const [category, setCategory] = useState("volume");
  const [fromUnit, setFromUnit] = useState("cup");
  const [toUnit, setToUnit] = useState("ml");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return setResult("Enter a valid number");
    const table = conversions[category];
    const base = v * table[fromUnit];
    const out = base / table[toUnit];
    setResult(`${v} ${fromUnit} = ${out.toFixed(4)} ${toUnit}`);
  };

  const units = Object.keys(conversions[category]);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Cooking Measurement Converter</h1>
        <p className="text-gray-400 mb-6">Convert between cooking units easily</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Category</label>
            <select value={category} onChange={e => { setCategory(e.target.value); setFromUnit(Object.keys(conversions[e.target.value])[0]); setToUnit(Object.keys(conversions[e.target.value])[1]); }} className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="volume">Volume</option>
              <option value="weight">Weight</option>
            </select>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Value</label>
              <input value={value} onChange={e => setValue(e.target.value)} placeholder="1" className="w-full bg-gray-800 rounded-lg px-3 py-2" />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
                {units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
                {units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>
          <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold">Convert</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-lg font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
