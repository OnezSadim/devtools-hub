"use client";
import { useState } from "react";

const UNITS: Record<string, number> = {
  "C": 1.0,
  "mC": 0.001,
  "uC": 1e-06,
  "nC": 1e-09,
  "pC": 1e-12,
  "kC": 1000.0,
  "Ah": 3600.0,
  "mAh": 3.6,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("C");
  const [to, setTo] = useState("mC");
  const result = val && !isNaN(Number(val)) ? (Number(val) * UNITS[from] / UNITS[to]).toFixed(6) : "";
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Electric Charge Converter</h1>
      <div className="max-w-md space-y-4">
        <input className="w-full bg-gray-800 rounded p-2" type="number" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <select className="w-full bg-gray-800 rounded p-2" value={from} onChange={e => setFrom(e.target.value)}>
          <option value="C">C</option>
          <option value="mC">mC</option>
          <option value="uC">uC</option>
          <option value="nC">nC</option>
          <option value="pC">pC</option>
          <option value="kC">kC</option>
          <option value="Ah">Ah</option>
          <option value="mAh">mAh</option>
        </select>
        <select className="w-full bg-gray-800 rounded p-2" value={to} onChange={e => setTo(e.target.value)}>
          <option value="C">C</option>
          <option value="mC">mC</option>
          <option value="uC">uC</option>
          <option value="nC">nC</option>
          <option value="pC">pC</option>
          <option value="kC">kC</option>
          <option value="Ah">Ah</option>
          <option value="mAh">mAh</option>
        </select>
        {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono">{result} {to}</div>}
      </div>
    </main>
  );
}