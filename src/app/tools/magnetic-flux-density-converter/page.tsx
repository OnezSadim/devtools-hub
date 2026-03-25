"use client";
import { useState } from "react";

const units = [
  { label: "Tesla (T)", value: "T" },
  { label: "Millitesla (mT)", value: "mT" },
  { label: "Microtesla (uT)", value: "uT" },
  { label: "Nanotesla (nT)", value: "nT" },
  { label: "Gauss (G)", value: "G" },
  { label: "Milligauss (mG)", value: "mG" },
];

const toBase: Record<string, number> = {
  "T": 1,
  "mT": 0.001,
  "uT": 1e-06,
  "nT": 1e-09,
  "G": 0.0001,
  "mG": 1e-07,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Magnetic Flux Density Converter</h1>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input className="w-full bg-gray-800 rounded p-3 text-white" placeholder="Enter value" value={val} onChange={e => setVal(e.target.value)} />
        <div className="flex gap-4">
          <select className="flex-1 bg-gray-800 rounded p-3" value={from} onChange={e => setFrom(e.target.value)}>
            {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
          <select className="flex-1 bg-gray-800 rounded p-3" value={to} onChange={e => setTo(e.target.value)}>
            {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </div>
        <div className="bg-gray-800 rounded p-4 text-2xl font-mono">{convert() || "0"}</div>
      </div>
    </main>
  );
}
