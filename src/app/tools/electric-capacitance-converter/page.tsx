"use client";
import { useState } from "react";

const UNITS: string[] = ["farad", "millifarad", "microfarad", "nanofarad", "picofarad", "kilofarad"];
const TO_BASE: Record<string, number> = {"farad": 1, "millifarad": 0.001, "microfarad": 1e-06, "nanofarad": 1e-09, "picofarad": 1e-12, "kilofarad": 1000.0};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  const sel = "bg-gray-800 text-white border border-gray-600 rounded px-3 py-2";
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Electric Capacitance Converter</h1>
      <div className="bg-gray-800 rounded-xl p-6 max-w-lg space-y-4">
        <input className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <div className="flex gap-3">
          <select className={sel} value={from} onChange={e => setFrom(e.target.value)}>{UNITS.map(u => <option key={u} value={u}>{u}</option>)}</select>
          <span className="self-center text-gray-400">to</span>
          <select className={sel} value={to} onChange={e => setTo(e.target.value)}>{UNITS.map(u => <option key={u} value={u}>{u}</option>)}</select>
        </div>
        <div className="text-2xl font-mono text-green-400">{convert() || "—"}</div>
      </div>
    </main>
  );
}
