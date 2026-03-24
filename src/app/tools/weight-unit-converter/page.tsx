"use client";
import { useState } from "react";
export default function WeightUnitConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("kilogram");
  const toKg: Record<string,number> = { kilogram:1, gram:0.001, milligram:0.000001, pound:0.453592, ounce:0.0283495, ton:1000, "short ton":907.185, stone:6.35029 };
  const units = Object.keys(toKg);
  const n = parseFloat(val);
  const inKg = isNaN(n) ? null : n * toKg[from];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Weight Unit Converter</h1>
      <p className="text-gray-400 mb-4">Convert between kilograms, pounds, ounces, and more.</p>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 p-2 bg-gray-800 rounded text-white" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value..." />
        <select className="p-2 bg-gray-800 rounded text-white" value={from} onChange={e => setFrom(e.target.value)}>{units.map(u => <option key={u} value={u}>{u}</option>)}</select>
      </div>
      {inKg !== null && (
        <div className="grid grid-cols-2 gap-3">
          {units.map(u => (
            <div key={u} className="bg-gray-800 p-4 rounded">
              <div className="text-gray-400 text-sm capitalize">{u}</div>
              <div className="text-white font-mono">{(inKg / toKg[u]).toFixed(6)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}