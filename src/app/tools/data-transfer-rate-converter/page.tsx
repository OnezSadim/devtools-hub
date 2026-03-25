"use client";
import { useState } from "react";

const UNITS: string[] = ["bit-per-second", "kilobit-per-second", "megabit-per-second", "gigabit-per-second", "terabit-per-second", "byte-per-second", "kilobyte-per-second", "megabyte-per-second", "gigabyte-per-second"];
const TO_BASE: Record<string, number> = {"bit-per-second": 1, "kilobit-per-second": 1000.0, "megabit-per-second": 1000000.0, "gigabit-per-second": 1000000000.0, "terabit-per-second": 1000000000000.0, "byte-per-second": 8, "kilobyte-per-second": 8000.0, "megabyte-per-second": 8000000.0, "gigabyte-per-second": 8000000000.0};

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
      <h1 className="text-3xl font-bold mb-6">Data Transfer Rate Converter</h1>
      <div className="max-w-xl space-y-4">
        <input className="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <select className={sel} value={from} onChange={e => setFrom(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        <select className={sel} value={to} onChange={e => setTo(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        <div className="bg-gray-800 p-4 rounded text-xl font-mono">{convert() || "—"}</div>
      </div>
    </main>
  );
}
