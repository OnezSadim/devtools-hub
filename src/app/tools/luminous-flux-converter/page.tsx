"use client";
import { useState } from "react";
export default function Page() {
  const units: string[] = ["lumen", "candela-steradian"];
  const toBase: Record<string, number> = {"lumen": 1, "candela-steradian": 1};
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const [val, setVal] = useState("");
  const result = val === "" ? "" : ((parseFloat(val) * toBase[from]) / toBase[to]).toPrecision(6);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Luminous Flux Converter</h1>
      <p className="text-gray-400 mb-6">Convert between luminous flux units instantly.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Value</label>
          <input type="number" value={val} onChange={e => setVal(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" placeholder="Enter value" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">From</label>
            <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">To</label>
            <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        {result !== "" && (
          <div className="bg-gray-800 rounded p-4 text-center">
            <span className="text-2xl font-bold text-green-400">{result}</span>
            <span className="text-gray-400 ml-2">{to}</span>
          </div>
        )}
      </div>
    </main>
  );
}