"use client";
import { useState } from "react";

const units = {
  "Tesla (T)": 1,
  "Millitesla (mT)": 0.001,
  "Microtesla (µT)": 0.000001,
  "Gauss (G)": 0.0001,
  "Milligauss (mG)": 0.0000001,
  "Weber/m²": 1,
};

export default function MagneticFieldConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Tesla (T)");
  const base = parseFloat(val) * (units[from] || 1);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Magnetic Field Converter</h1>
      <p className="text-gray-400 mb-6">Convert between magnetic flux density units: Tesla, Gauss, and more.</p>
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
