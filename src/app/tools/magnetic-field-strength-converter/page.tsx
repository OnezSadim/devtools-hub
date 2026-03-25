"use client";
import { useState } from "react";

const units = ["Ampere per meter (A/m)", "Oersted (Oe)", "Kiloampere per meter (kA/m)", "Milliampere per meter (mA/m)"];
const factors: Record<string, number> = {"Ampere per meter (A/m)": 1, "Oersted (Oe)": 79.5774715459, "Kiloampere per meter (kA/m)": 1000, "Milliampere per meter (mA/m)": 0.001};

export default function MagneticFieldStrengthConverterPage() {
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1]);
  const [value, setValue] = useState("");
  const result = value === "" ? "" : String((parseFloat(value) * factors[fromUnit]) / factors[toUnit]);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Magnetic Field Strength Converter</h1>
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