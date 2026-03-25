"use client";
import { useState } from "react";

const units = ["Henry (H)", "Millihenry (mH)", "Microhenry (uH)", "Nanohenry (nH)", "Kilohenry (kH)", "Picohenry (pH)"];
const factors: Record<string, number> = {"Henry (H)": 1, "Millihenry (mH)": 0.001, "Microhenry (uH)": 1e-06, "Nanohenry (nH)": 1e-09, "Kilohenry (kH)": 1000, "Picohenry (pH)": 1e-12};

export default function InductanceConverterPage() {
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1]);
  const [value, setValue] = useState("");
  const result = value === "" ? "" : String((parseFloat(value) * factors[fromUnit]) / factors[toUnit]);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Inductance Converter</h1>
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