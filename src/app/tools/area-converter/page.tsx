"use client";
import { useState } from "react";

const units = [
      { name: 'Square Meter', factor: 1.0 },
      { name: 'Square Kilometer', factor: 1000000.0 },
      { name: 'Square Centimeter', factor: 0.0001 },
      { name: 'Square Millimeter', factor: 1e-06 },
      { name: 'Square Mile', factor: 2589988.11 },
      { name: 'Square Yard', factor: 0.836127 },
      { name: 'Square Foot', factor: 0.092903 },
      { name: 'Square Inch', factor: 0.00064516 },
      { name: 'Acre', factor: 4046.856422 },
      { name: 'Hectare', factor: 10000.0 }
    ];

export default function AreaConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(units[0].name);
  const [to, setTo] = useState(units[1].name);

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";
    const fromUnit = units.find(u => u.name === from);
    const toUnit = units.find(u => u.name === to);
    if (!fromUnit || !toUnit) return "";
    return ((num * fromUnit.factor) / toUnit.factor).toPrecision(8);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Area Converter</h1>
        <p className="text-gray-400 mb-8">Convert between area units: square meters, square feet, acres, hectares, square miles, and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2">
                {units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2">
                {units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
              </select>
            </div>
          </div>
          {value && (
            <div className="bg-gray-800 rounded p-4 text-xl font-mono">
              {value} {from} = <span className="text-green-400">{convert()}</span> {to}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
