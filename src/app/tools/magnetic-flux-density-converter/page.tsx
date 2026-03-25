"use client";
import { useState } from "react";

const UNITS: string[] = ["tesla", "millitesla", "microtesla", "nanotesla", "gauss", "milligauss", "weber-per-sq-meter"];
const TO_BASE: Record<string, number> = {"tesla": 1, "millitesla": 0.001, "microtesla": 1e-06, "nanotesla": 1e-09, "gauss": 0.0001, "milligauss": 1e-07, "weber-per-sq-meter": 1};

export default function Page() {
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
      <h1 className="text-3xl font-bold mb-2">Magnetic Flux Density Converter</h1>
      <p className="text-gray-400 mb-6">Convert between magnetic flux density units instantly.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
        <div className="flex gap-4">
          <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 bg-gray-800 rounded-lg px-3 py-2">{UNITS.map(u => <option key={u}>{u}</option>)}</select>
          <span className="self-center text-gray-400">to</span>
          <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 bg-gray-800 rounded-lg px-3 py-2">{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        </div>
        {val && <div className="text-2xl font-mono text-green-400">{convert()} {to}</div>}
      </div>
    </main>
  );
}
