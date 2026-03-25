"use client";
import { useState } from "react";

const units: string[] = ["lumen", "candela-steradian", "kilolumen", "milliLumen"];
const toBase: Record<string, number> = {"lumen": 1, "candela-steradian": 1, "kilolumen": 1000, "milliLumen": 0.001};

export default function LuminousFluxConverterPage() {
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
      <h1 className="text-3xl font-bold mb-6">Luminous Flux Converter</h1>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input className="w-full bg-gray-800 rounded p-2" value={val} onChange={e => setVal(e.target.value)} placeholder="Value" />
        <div className="flex gap-4">
          <select className="flex-1 bg-gray-800 rounded p-2" value={from} onChange={e => setFrom(e.target.value)}>{units.map(u => <option key={u}>{u}</option>)}</select>
          <select className="flex-1 bg-gray-800 rounded p-2" value={to} onChange={e => setTo(e.target.value)}>{units.map(u => <option key={u}>{u}</option>)}</select>
        </div>
        <div className="bg-gray-800 rounded p-3 text-xl font-mono">{convert() || "—"}</div>
      </div>
    </main>
  );
}
