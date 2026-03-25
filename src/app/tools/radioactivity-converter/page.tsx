"use client";
import { useState } from "react";

const UNITS: string[] = ["becquerel", "kilobecquerel", "megabecquerel", "gigabecquerel", "curie", "millicurie", "microcurie", "rutherford"];
const TO_BASE: Record<string, number> = {"becquerel": 1, "kilobecquerel": 1000.0, "megabecquerel": 1000000.0, "gigabecquerel": 1000000000.0, "curie": 37000000000.0, "millicurie": 37000000.0, "microcurie": 37000.0, "rutherford": 1000000.0};

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
      <h1 className="text-3xl font-bold mb-6">Radioactivity Converter</h1>
      <div className="max-w-xl space-y-4">
        <input className="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <select className={sel} value={from} onChange={e => setFrom(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        <select className={sel} value={to} onChange={e => setTo(e.target.value)}>{UNITS.map(u => <option key={u}>{u}</option>)}</select>
        <div className="bg-gray-800 p-4 rounded text-xl font-mono">{convert() || "—"}</div>
      </div>
    </main>
  );
}
