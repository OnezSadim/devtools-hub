"use client";
import { useState } from "react";

const factors: Record<string, number> = {
        "g_mol": 1,
        "kg_mol": 1000,
        "lb_mol": 453.592,
        "Da": 1.66054e-21,
        "u": 1.66054e-21,
        "mg_mol": 0.001
};

export default function MolarMassConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("g_mol");
  const [to, setTo] = useState("kg_mol");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "—";
    return ((num * factors[from]) / factors[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Molar Mass Converter</h1>
        <p className="text-gray-400 mb-8">Convert between molar mass units: g/mol, kg/mol, lb/mol, Da.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="g_mol">Gram per Mole (g/mol)</option>
          <option value="kg_mol">Kilogram per Mole (kg/mol)</option>
          <option value="lb_mol">Pound per Mole (lb/mol)</option>
          <option value="Da">Dalton (Da)</option>
          <option value="u">Unified Atomic Mass Unit (u)</option>
          <option value="mg_mol">Milligram per Mole (mg/mol)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="g_mol">Gram per Mole (g/mol)</option>
          <option value="kg_mol">Kilogram per Mole (kg/mol)</option>
          <option value="lb_mol">Pound per Mole (lb/mol)</option>
          <option value="Da">Dalton (Da)</option>
          <option value="u">Unified Atomic Mass Unit (u)</option>
          <option value="mg_mol">Milligram per Mole (mg/mol)</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-3 text-2xl font-mono">
            {value ? convert() : <span className="text-gray-500">Result</span>}
          </div>
        </div>
      </div>
    </main>
  );
}
