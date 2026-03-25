"use client";
import { useState } from "react";

const units = ["A/m", "Oe", "kA/m", "mA/m"];
const toBase = {"A/m": 1, "Oe": 79.5775, "kA/m": 1000, "mA/m": 0.001};

export default function MagneticFieldStrengthConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Magnetic Field Strength Converter</h1>
      <p className="text-gray-400 mb-6">Convert between magnetic field strength units instantly.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input className="w-full bg-gray-800 rounded p-2" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <div className="flex gap-2">
          <select className="flex-1 bg-gray-800 rounded p-2" value={from} onChange={e => setFrom(e.target.value)}>{units.map(u => <option key={u}>{u}</option>)}</select>
          <span className="self-center">to</span>
          <select className="flex-1 bg-gray-800 rounded p-2" value={to} onChange={e => setTo(e.target.value)}>{units.map(u => <option key={u}>{u}</option>)}</select>
        </div>
        <div className="bg-gray-800 rounded p-3 text-xl font-mono">{convert() || "—"}</div>
      </div>
    </main>
  );
}
