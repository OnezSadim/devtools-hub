"use client";
import { useState } from "react";
const UNITS = [
  { value: "C_m3", label: "Coulomb/m³ (C/m³)", factor: 1 },
  { value: "mC_m3", label: "Millicoulomb/m³ (mC/m³)", factor: 0.001 },
  { value: "uC_m3", label: "Microcoulomb/m³ (μC/m³)", factor: 1e-06 },
  { value: "nC_m3", label: "Nanocoulomb/m³ (nC/m³)", factor: 1e-09 },
  { value: "C_cm3", label: "Coulomb/cm³ (C/cm³)", factor: 1000000.0 },
  { value: "C_mm3", label: "Coulomb/mm³ (C/mm³)", factor: 1000000000.0 },
];
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0].value);
  const [to, setTo] = useState(UNITS[1].value);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    const f = UNITS.find(u => u.value === from)?.factor ?? 1;
    const t = UNITS.find(u => u.value === to)?.factor ?? 1;
    return (n * f / t).toPrecision(6);
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Volume Charge Density Converter</h1>
      <p className="text-gray-400 mb-6">Convert between volume charge density units: C/m3, mC/m3, uC/m3, nC/m3, C/cm3, C/mm3.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg">
        <input className="w-full bg-gray-800 rounded p-2 mb-3 text-white" placeholder="Enter value" value={val} onChange={e => setVal(e.target.value)} />
        <div className="flex gap-2 mb-3">
          <select className="flex-1 bg-gray-800 rounded p-2 text-white" value={from} onChange={e => setFrom(e.target.value)}>
            {UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
          <span className="self-center text-gray-400">to</span>
          <select className="flex-1 bg-gray-800 rounded p-2 text-white" value={to} onChange={e => setTo(e.target.value)}>
            {UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </div>
        <div className="bg-gray-800 rounded p-3 text-xl font-mono">{convert() || "—"}</div>
      </div>
    </main>
  );
}