"use client";
import { useState } from "react";

const units = [
  { label: "Henry (H)", value: "H" },
  { label: "Millihenry (mH)", value: "mH" },
  { label: "Microhenry (uH)", value: "uH" },
  { label: "Nanohenry (nH)", value: "nH" },
  { label: "Kilohenry (kH)", value: "kH" },
  { label: "Abhenry", value: "abH" },
  { label: "Stathenry", value: "statH" },
];

const toBase: Record<string, number> = {
  "H": 1,
  "mH": 0.001,
  "uH": 1e-06,
  "nH": 1e-09,
  "kH": 1000.0,
  "abH": 1e-09,
  "statH": 898755000000.0,
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
      <h1 className="text-3xl font-bold mb-2">Electric Inductance Converter</h1>
      <p className="text-gray-400 mb-6">Convert between electric inductance units instantly.</p>
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
