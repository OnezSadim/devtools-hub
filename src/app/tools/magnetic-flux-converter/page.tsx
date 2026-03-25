"use client";
import { useState } from "react";

const units = [
  { label: "Weber (Wb)", value: "Wb" },
  { label: "Milliweber (mWb)", value: "mWb" },
  { label: "Maxwell (Mx)", value: "Mx" },
  { label: "Tesla square meter (T·m²)", value: "Tm2" },
  { label: "Volt second (V·s)", value: "Vs" },
  { label: "Unit pole", value: "unitpole" },
];

const toBase: Record<string, number> = {
  "Wb": 1,
  "mWb": 0.001,
  "Mx": 1e-08,
  "Tm2": 1,
  "Vs": 1,
  "unitpole": 1.2566e-07,
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
      <h1 className="text-3xl font-bold mb-2">Magnetic Flux Converter</h1>
      <p className="text-gray-400 mb-6">Convert between magnetic flux units instantly.</p>
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
