"use client";
import { useState } from "react";

const units = [
  { label: "mol/L", value: "moll" },
  { label: "mmol/L", value: "mmoll" },
  { label: "mol/m³", value: "molm3" },
  { label: "mmol/m³", value: "mmolm3" },
  { label: "µmol/L", value: "umoll" },
];

const toBase: Record<string, number> = {
  "moll": 1.0,
  "mmoll": 0.001,
  "molm3": 0.001,
  "mmolm3": 1e-06,
  "umoll": 1e-06,
};

export default function MolarConcentrationConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  }
  const sel = "bg-gray-800 text-white rounded px-3 py-2 border border-gray-600";
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Molar Concentration Converter</h1>
      <p className="text-gray-400 mb-6">Convert between molar concentration units instantly.</p>
      <div className="bg-gray-800 rounded-xl p-6 max-w-lg space-y-4">
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600" />
        <div className="flex gap-4">
          <select value={from} onChange={e=>setFrom(e.target.value)} className={sel}>
            {units.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
          <span className="text-gray-400 self-center">to</span>
          <select value={to} onChange={e=>setTo(e.target.value)} className={sel}>
            {units.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </div>
        {val && <div className="text-2xl font-bold text-blue-400">{convert()} {units.find(u=>u.value===to)?.label}</div>}
      </div>
    </main>
  );
}
