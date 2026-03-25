"use client";
import { useState } from "react";

const factors: Record<string, number> = {
  "kg/m3": 1.0,
  "g/cm3": 1000.0,
  "g/L": 1.0,
  "mg/mL": 1.0,
  "kg/L": 1000.0,
  "lb/ft3": 16.0185,
  "lb/in3": 27679.9,
  "oz/in3": 1729.99,
  "lb/gal": 119.826
};

export default function DensityConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("kg/m3");
  const [to, setTo] = useState("g/cm3");
  const result = val !== "" ? (parseFloat(val) * factors[from] / factors[to]).toFixed(8).replace(/\.?0+$/, "") : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Density Converter</h1>
        <p className="text-gray-400 mb-6">Convert between density units: kg/m³, g/cm³, lb/ft³, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="kg/m3">kg/m3</option>
          <option value="g/cm3">g/cm3</option>
          <option value="g/L">g/L</option>
          <option value="mg/mL">mg/mL</option>
          <option value="kg/L">kg/L</option>
          <option value="lb/ft3">lb/ft3</option>
          <option value="lb/in3">lb/in3</option>
          <option value="oz/in3">oz/in3</option>
          <option value="lb/gal">lb/gal</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="kg/m3">kg/m3</option>
          <option value="g/cm3">g/cm3</option>
          <option value="g/L">g/L</option>
          <option value="mg/mL">mg/mL</option>
          <option value="kg/L">kg/L</option>
          <option value="lb/ft3">lb/ft3</option>
          <option value="lb/in3">lb/in3</option>
          <option value="oz/in3">oz/in3</option>
          <option value="lb/gal">lb/gal</option>
              </select>
            </div>
          </div>
          {result !== "" && <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-2xl font-mono text-center">{result} {to}</div>}
        </div>
      </div>
    </main>
  );
}
