"use client";
import { useState } from "react";

const units = [
      { name: 'Newton', factor: 1.0 },
      { name: 'Kilonewton', factor: 1000.0 },
      { name: 'Meganewton', factor: 1000000.0 },
      { name: 'Dyne', factor: 1e-05 },
      { name: 'Pound-force', factor: 4.448222 },
      { name: 'Kilogram-force', factor: 9.80665 },
      { name: 'Ounce-force', factor: 0.278014 },
      { name: 'Poundal', factor: 0.138255 }
    ];

export default function ForceConverterPage() {
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
        <h1 className="text-3xl font-bold mb-2">Force Converter</h1>
        <p className="text-gray-400 mb-8">Convert between force units: newtons, kilonewtons, pound-force, dyne, kgf, and more.</p>
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
