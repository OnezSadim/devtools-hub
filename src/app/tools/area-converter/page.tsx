"use client";
import { useState } from "react";

const units = [
  { label: "sq mm (mm²)", factor: 0.000001 },
  { label: "sq cm (cm²)", factor: 0.0001 },
  { label: "sq m (m²)", factor: 1 },
  { label: "hectare (ha)", factor: 10000 },
  { label: "sq km (km²)", factor: 1000000 },
  { label: "sq inch (in²)", factor: 0.00064516 },
  { label: "sq foot (ft²)", factor: 0.092903 },
  { label: "sq yard (yd²)", factor: 0.836127 },
  { label: "acre", factor: 4046.86 },
  { label: "sq mile (mi²)", factor: 2589988 },
];

export default function AreaConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(2);
  const [to, setTo] = useState(8);

  const result = value !== "" ? (parseFloat(value) * units[from].factor / units[to].factor).toPrecision(8) : "";

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Area Converter</h1>
        <p className="text-gray-400 mb-8">Convert between square meters, hectares, acres, square feet, square miles, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={value} onChange={e => setValue(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter value" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(Number(e.target.value))}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                {units.map((u, i) => <option key={i} value={i}>{u.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(Number(e.target.value))}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                {units.map((u, i) => <option key={i} value={i}>{u.label}</option>)}
              </select>
            </div>
          </div>
          {result !== "" && (
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">Result</p>
              <p className="text-2xl font-bold text-blue-400">{result} {units[to].label}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
