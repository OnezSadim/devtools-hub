"use client";
import { useState } from "react";
const UNITS = [
  { value: "F_m", label: "Farad/meter (F/m)", factor: 1 },
  { value: "mF_m", label: "Millifarad/meter (mF/m)", factor: 0.001 },
  { value: "uF_m", label: "Microfarad/meter (μF/m)", factor: 1e-06 },
  { value: "nF_m", label: "Nanofarad/meter (nF/m)", factor: 1e-09 },
  { value: "pF_m", label: "Picofarad/meter (pF/m)", factor: 1e-12 },
  { value: "F_cm", label: "Farad/centimeter (F/cm)", factor: 100 },
  { value: "F_mm", label: "Farad/millimeter (F/mm)", factor: 1000 },
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
      <h1 className="text-3xl font-bold mb-2">Permittivity Converter</h1>
      <p className="text-gray-400 mb-6">Convert between permittivity units: F/m, pF/m, nF/m, uF/m, F/cm, F/mm.</p>
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