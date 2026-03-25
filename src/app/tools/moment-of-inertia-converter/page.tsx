"use client";
import { useState } from "react";

const UNITS: string[] = ["kg·m2", "kg·cm2", "g·cm2", "lb·ft2", "lb·in2", "slug·ft2"];
const TO_BASE: Record<string, number> = {"kg·m2": 1, "kg·cm2": 0.0001, "g·cm2": 1e-07, "lb·ft2": 0.0421401, "lb·in2": 0.00029264, "slug·ft2": 1.35582};

export default function MomentOfInertiaConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Moment of Inertia Converter</h1>
      <div className="bg-gray-900 rounded-xl p-6 max-w-xl">
        <input className="w-full bg-gray-800 rounded p-3 mb-4 text-white" placeholder="Enter value" value={val} onChange={e => setVal(e.target.value)} />
        <div className="flex gap-4 mb-4">
          <select className="flex-1 bg-gray-800 rounded p-3 text-white" value={from} onChange={e => setFrom(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
          <span className="self-center text-gray-400">to</span>
          <select className="flex-1 bg-gray-800 rounded p-3 text-white" value={to} onChange={e => setTo(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        </div>
        {val && <div className="bg-gray-800 rounded p-4 text-2xl font-mono text-green-400">{convert()} {to}</div>}
      </div>
    </main>
  );
}
