"use client";
import { useState } from "react";

const units = ["Weber (Wb)", "Milliweber (mWb)", "Microweber (uWb)", "Maxwell (Mx)", "Tesla sq meter (T m2)"];
const factors: Record<string, number> = {"Weber (Wb)": 1, "Milliweber (mWb)": 0.001, "Microweber (uWb)": 1e-06, "Maxwell (Mx)": 1e-08, "Tesla sq meter (T m2)": 1.0};

export default function MagneticFluxConverterPage() {
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1]);
  const [value, setValue] = useState("");
  const result = value === "" ? "" : String((parseFloat(value) * factors[fromUnit]) / factors[toUnit]);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Magnetic Flux Converter</h1>
      <div className="max-w-xl bg-gray-900 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Value</label>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" placeholder="Enter value" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">From</label>
            <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">To</label>
            <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        {result !== "" && (
          <div className="bg-gray-800 rounded p-4 text-center">
            <p className="text-2xl font-mono text-green-400">{result}</p>
            <p className="text-sm text-gray-400 mt-1">{toUnit}</p>
          </div>
        )}
      </div>
    </main>
  );
}