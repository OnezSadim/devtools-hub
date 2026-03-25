"use client";
import { useState } from "react";

const units = ["cubic-meter-per-second", "liter-per-second", "liter-per-minute", "liter-per-hour", "gallon-per-minute", "gallon-per-hour", "cubic-foot-per-minute", "cubic-foot-per-hour"];
const toBase: Record<string, number> = {"cubic-meter-per-second": 1, "liter-per-second": 0.001, "liter-per-minute": 1.6666666666666667e-05, "liter-per-hour": 2.7777777777777776e-07, "gallon-per-minute": 6.30902e-05, "gallon-per-hour": 1.04987e-06, "cubic-foot-per-minute": 0.000471947, "cubic-foot-per-hour": 7.86578e-06};

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
      <h1 className="text-3xl font-bold mb-6">Flow Rate Converter</h1>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input className="w-full bg-gray-800 rounded p-2" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" />
        <select className="w-full bg-gray-800 rounded p-2" value={from} onChange={e => setFrom(e.target.value)}>{units.map(u => <option key={u}>{u}</option>)}</select>
        <select className="w-full bg-gray-800 rounded p-2" value={to} onChange={e => setTo(e.target.value)}>{units.map(u => <option key={u}>{u}</option>)}</select>
        <div className="text-2xl font-mono text-green-400">{convert() || "—"} {to}</div>
      </div>
    </main>
  );
}
