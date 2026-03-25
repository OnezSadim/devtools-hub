"use client";
import { useState } from "react";

const units = ["Wb", "mWb", "uWb", "Mx", "T*m2"];
const toBase = [1, 1000, 1000000.0, 100000000.0, 1];

export default function MagneticFluxConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  function convert(toIdx: number) {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[toIdx]).toPrecision(6);
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Magnetic Flux Converter</h1>
      <p className="text-gray-400 mb-6">Convert between magnetic flux units instantly.</p>
      <div className="flex gap-4 mb-6 flex-wrap">
        <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-48" />
        <select value={from} onChange={e => setFrom(Number(e.target.value))} className="bg-gray-800 border border-gray-700 rounded px-4 py-2">
          {units.map((u, i) => <option key={u} value={i}>{u}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {units.map((u, i) => (
          <div key={u} className="bg-gray-800 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">{u}</div>
            <div className="text-xl font-mono">{val ? convert(i) : "—"}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
