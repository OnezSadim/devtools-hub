"use client";
import { useState } from "react";

const units = {
  "Ohm (Ω)": 1,
  "Milliohm (mΩ)": 0.001,
  "Microohm (µΩ)": 0.000001,
  "Kiloohm (kΩ)": 1000,
  "Megaohm (MΩ)": 1000000,
  "Gigaohm (GΩ)": 1000000000,
};

export default function ResistanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Ohm (Ω)");
  const base = parseFloat(val) * (units[from] || 1);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Resistance Converter</h1>
      <p className="text-gray-400 mb-6">Convert between electrical resistance units: Ohm, kΩ, MΩ, and more.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-xl">
        <div className="flex gap-3 mb-6">
          <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" className="flex-1 bg-gray-800 rounded px-3 py-2 text-white" />
          <select value={from} onChange={e=>setFrom(e.target.value)} className="bg-gray-800 rounded px-3 py-2 text-white">
            {Object.keys(units).map(u=><option key={u}>{u}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          {Object.entries(units).map(([u,f])=>(
            <div key={u} className="flex justify-between bg-gray-800 rounded px-4 py-2">
              <span className="text-gray-400">{u}</span>
              <span className="font-mono text-green-400">{val ? (base/f).toPrecision(6) : "—"}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
