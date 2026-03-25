"use client";
import { useState } from "react";

const UNITS: string[] = ["kg/m3", "g/cm3", "g/mL", "kg/L", "lb/ft3", "lb/in3", "oz/in3"];
const TO_BASE: Record<string, number> = {"kg/m3": 1.0, "g/cm3": 1000.0, "g/mL": 1000.0, "kg/L": 1000.0, "lb/ft3": 16.0185, "lb/in3": 27679.9, "oz/in3": 1729.99};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  const sel = "bg-gray-800 text-white rounded px-3 py-2 border border-gray-600";
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Density Converter</h1>
      <p className="text-gray-400 mb-6">Convert between density units instantly.</p>
      <div className="bg-gray-800 rounded-xl p-6 max-w-lg space-y-4">
        <input className="w-full bg-gray-700 rounded px-3 py-2 text-white" placeholder="Enter value" value={val} onChange={e => setVal(e.target.value)} />
        <div className="flex gap-3">
          <select className={sel} value={from} onChange={e => setFrom(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
          <span className="self-center text-gray-400">to</span>
          <select className={sel} value={to} onChange={e => setTo(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        </div>
        {val && <div className="text-2xl font-mono text-green-400">{convert()} {to}</div>}
      </div>
    </div>
  );
}
