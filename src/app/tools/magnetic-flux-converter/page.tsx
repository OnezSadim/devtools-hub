"use client";
import { useState } from "react";

const UNITS: Record<string, number> = {
  "Wb": 1.0,
  "mWb": 0.001,
  "uWb": 1e-06,
  "Mx (maxwell)": 1e-08,
  "kWb": 1000.0,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Wb");
  const [to, setTo] = useState("mWb");
  const result = val && !isNaN(Number(val)) ? (Number(val) * UNITS[from] / UNITS[to]).toFixed(6) : "";
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Magnetic Flux Converter</h1>
      <div className="max-w-md space-y-4">
        <input className="w-full bg-gray-800 rounded p-2" type="number" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <select className="w-full bg-gray-800 rounded p-2" value={from} onChange={e => setFrom(e.target.value)}>
          <option value="Wb">Wb</option>
          <option value="mWb">mWb</option>
          <option value="uWb">uWb</option>
          <option value="Mx (maxwell)">Mx (maxwell)</option>
          <option value="kWb">kWb</option>
        </select>
        <select className="w-full bg-gray-800 rounded p-2" value={to} onChange={e => setTo(e.target.value)}>
          <option value="Wb">Wb</option>
          <option value="mWb">mWb</option>
          <option value="uWb">uWb</option>
          <option value="Mx (maxwell)">Mx (maxwell)</option>
          <option value="kWb">kWb</option>
        </select>
        {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono">{result} {to}</div>}
      </div>
    </main>
  );
}