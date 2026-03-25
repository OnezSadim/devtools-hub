"use client";
import { useState } from "react";

const units = ["cd/m2", "nit", "fL", "L", "sb"];
const toBase = {"cd/m2": 1, "nit": 1, "fL": 3.42626, "L": 3183.1, "sb": 10000};

export default function LuminanceConverterPage() {
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
      <h1 className="text-3xl font-bold mb-2">Luminance Converter</h1>
      <p className="text-gray-400 mb-6">Convert between luminance units instantly.</p>
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
