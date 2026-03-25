"use client";
import { useState } from "react";

const units = ["newton-meter", "kilonewton-meter", "millinewton-meter", "foot-pound", "inch-pound", "kilogram-force-meter", "ounce-force-inch", "dyne-centimeter"];
const toBase: Record<string, number> = {"newton-meter": 1, "kilonewton-meter": 1000.0, "millinewton-meter": 0.001, "foot-pound": 1.35582, "inch-pound": 0.112985, "kilogram-force-meter": 9.80665, "ounce-force-inch": 0.00706155, "dyne-centimeter": 1e-07};

export default function Page() {
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
      <h1 className="text-3xl font-bold mb-6">Torque Converter</h1>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input className="w-full bg-gray-800 rounded p-2" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" />
        <select className="w-full bg-gray-800 rounded p-2" value={from} onChange={e => setFrom(e.target.value)}>{units.map(u => <option key={u}>{u}</option>)}</select>
        <select className="w-full bg-gray-800 rounded p-2" value={to} onChange={e => setTo(e.target.value)}>{units.map(u => <option key={u}>{u}</option>)}</select>
        <div className="text-2xl font-mono text-green-400">{convert() || "—"} {to}</div>
      </div>
    </main>
  );
}
