"use client";
import { useState } from "react";

const UNITS: string[] = ["gray", "milligray", "microgray", "rad", "millirad", "joule-per-kilogram", "sievert", "millisievert"];
const TO_BASE: Record<string, number> = {"gray": 1, "milligray": 0.001, "microgray": 1e-06, "rad": 0.01, "millirad": 1e-05, "joule-per-kilogram": 1, "sievert": 1, "millisievert": 0.001};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  const sel = "bg-gray-800 text-white p-2 rounded border border-gray-600 w-full";
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Absorbed Dose Converter</h1>
      <div className="max-w-xl space-y-4">
        <input className="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <select className={sel} value={from} onChange={e => setFrom(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        <select className={sel} value={to} onChange={e => setTo(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        <div className="bg-gray-800 p-4 rounded text-xl font-mono">{convert() || "—"}</div>
      </div>
    </main>
  );
}
