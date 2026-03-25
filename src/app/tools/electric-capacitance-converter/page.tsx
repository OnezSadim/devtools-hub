"use client";
import { useState } from "react";

const units = ["Farad", "Millifarad", "Microfarad", "Nanofarad", "Picofarad", "Kilofarad", "Abfarad", "Statfarad"];
const toBase: Record<string, number> = {"Farad": 1, "Millifarad": 0.001, "Microfarad": 1e-06, "Nanofarad": 1e-09, "Picofarad": 1e-12, "Kilofarad": 1000.0, "Abfarad": 1000000000.0, "Statfarad": 1.11265e-12};

export default function ElectricCapacitanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * toBase[from] / toBase[to]).toPrecision(6)
    : "";
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Capacitance Converter</h1>
        <p className="text-gray-400 mb-6">Convert between electric capacitance units instantly.</p>
        <div className="space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)}
            placeholder="Enter value" className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white">
                {units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white">
                {units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>
          {result !== "" && (
            <div className="p-4 bg-blue-900/30 border border-blue-700 rounded text-xl font-mono">
              {val} {from} = {result} {to}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
