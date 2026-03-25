"use client";
import { useState } from "react";

const UNITS: Record<string, number> = {
  "C/kg": 1.0,
  "R (roentgen)": 0.000258,
  "mR": 2.58e-07,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("C/kg");
  const [to, setTo] = useState("R (roentgen)");
  const result = val && !isNaN(Number(val)) ? (Number(val) * UNITS[from] / UNITS[to]).toFixed(6) : "";
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Radiation Exposure Converter</h1>
      <div className="max-w-md space-y-4">
        <input className="w-full bg-gray-800 rounded p-2" type="number" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <select className="w-full bg-gray-800 rounded p-2" value={from} onChange={e => setFrom(e.target.value)}>
          <option value="C/kg">C/kg</option>
          <option value="R (roentgen)">R (roentgen)</option>
          <option value="mR">mR</option>
        </select>
        <select className="w-full bg-gray-800 rounded p-2" value={to} onChange={e => setTo(e.target.value)}>
          <option value="C/kg">C/kg</option>
          <option value="R (roentgen)">R (roentgen)</option>
          <option value="mR">mR</option>
        </select>
        {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono">{result} {to}</div>}
      </div>
    </main>
  );
}