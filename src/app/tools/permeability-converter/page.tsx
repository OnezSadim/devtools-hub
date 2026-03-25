"use client";
import { useState } from "react";
const UNITS = [
  { value: "H_m", label: "Henry/meter (H/m)", factor: 1 },
  { value: "mH_m", label: "Millihenry/meter (mH/m)", factor: 0.001 },
  { value: "uH_m", label: "Microhenry/meter (μH/m)", factor: 1e-06 },
  { value: "nH_m", label: "Nanohenry/meter (nH/m)", factor: 1e-09 },
  { value: "pH_m", label: "Picohenry/meter (pH/m)", factor: 1e-12 },
  { value: "H_cm", label: "Henry/centimeter (H/cm)", factor: 100 },
  { value: "H_mm", label: "Henry/millimeter (H/mm)", factor: 1000 },
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
      <h1 className="text-3xl font-bold mb-2">Permeability Converter</h1>
      <p className="text-gray-400 mb-6">Convert between magnetic permeability units: H/m, mH/m, uH/m, nH/m, H/cm, H/mm.</p>
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