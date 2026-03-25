"use client";
import { useState } from "react";

const units = [
  { label: "Lux (lx)", value: "lx" },
  { label: "Foot-candle (fc)", value: "fc" },
  { label: "Phot (ph)", value: "ph" },
  { label: "Millilux (mlx)", value: "mlx" },
  { label: "Kilolux (klx)", value: "klx" },
  { label: "Nox", value: "nox" },
];

const toBase: Record<string, number> = {
  "lx": 1,
  "fc": 10.7639,
  "ph": 10000,
  "mlx": 0.001,
  "klx": 1000,
  "nox": 0.001,
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
      <h1 className="text-3xl font-bold mb-6">Illuminance Converter</h1>
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
