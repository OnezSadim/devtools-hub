"use client";
import { useState } from "react";

const UNITS: string[] = ["pascal-second", "poise", "centipoise", "millipascal-second", "pound-force-second/ft2"];
const TO_BASE: Record<string, number> = {"pascal-second": 1, "poise": 0.1, "centipoise": 0.001, "millipascal-second": 0.001, "pound-force-second/ft2": 47.8803};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  const sel = "bg-gray-700 text-white rounded px-2 py-1 text-sm";
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-2">Dynamic Viscosity Converter</h1>
      <p className="text-gray-400 mb-6">Convert between dynamic viscosity units.</p>
      <div className="bg-gray-800 rounded-xl p-6 max-w-lg space-y-4">
        <div className="flex gap-2 items-center">
          <input className="flex-1 bg-gray-700 rounded px-3 py-2 text-sm" value={val} onChange={e => setVal(e.target.value)} placeholder="Value" />
          <select className={sel} value={from} onChange={e => setFrom(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 bg-gray-700 rounded px-3 py-2 text-sm min-h-[36px]">{convert()}</div>
          <select className={sel} value={to} onChange={e => setTo(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        </div>
      </div>
    </main>
  );
}
