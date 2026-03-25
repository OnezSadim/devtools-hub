"use client";
import { useState } from "react";

const units = [
  { label: "Farad (F)", value: "F" },
  { label: "Millifarad (mF)", value: "mF" },
  { label: "Microfarad (uF)", value: "uF" },
  { label: "Nanofarad (nF)", value: "nF" },
  { label: "Picofarad (pF)", value: "pF" },
  { label: "Abfarad", value: "abF" },
  { label: "Statfarad", value: "statF" },
];

const toBase: Record<string, number> = {
  "F": 1,
  "mF": 0.001,
  "uF": 1e-06,
  "nF": 1e-09,
  "pF": 1e-12,
  "abF": 1000000000.0,
  "statF": 1.11265e-12,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  }
  const sel = "bg-gray-700 text-white rounded px-2 py-1 text-sm";
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Electric Capacitance Converter</h1>
      <p className="text-gray-400 mb-6">Convert between electric capacitance units instantly.</p>
      <div className="bg-gray-800 rounded-xl p-6 max-w-lg space-y-4">
        <div className="flex gap-2 items-center">
          <input value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" className="flex-1 bg-gray-700 rounded px-3 py-2 text-sm" />
          <select value={from} onChange={e => setFrom(e.target.value)} className={sel}>
            {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </div>
        <div className="text-center text-gray-400">=</div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 bg-gray-700 rounded px-3 py-2 text-sm min-h-[36px]">{convert()}</div>
          <select value={to} onChange={e => setTo(e.target.value)} className={sel}>
            {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
