"use client";
import { useState } from "react";

const UNITS: Record<string, number> = {
  "Sv": 1.0,
  "mSv": 0.001,
  "uSv": 1e-06,
  "rem": 0.01,
  "mrem": 1e-05,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Sv");
  const [to, setTo] = useState("mSv");
  const result = val && !isNaN(Number(val)) ? (Number(val) * UNITS[from] / UNITS[to]).toFixed(6) : "";
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Radiation Equivalent Dose Converter</h1>
      <div className="max-w-md space-y-4">
        <input className="w-full bg-gray-800 rounded p-2" type="number" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
        <select className="w-full bg-gray-800 rounded p-2" value={from} onChange={e => setFrom(e.target.value)}>
          <option value="Sv">Sv</option>
          <option value="mSv">mSv</option>
          <option value="uSv">uSv</option>
          <option value="rem">rem</option>
          <option value="mrem">mrem</option>
        </select>
        <select className="w-full bg-gray-800 rounded p-2" value={to} onChange={e => setTo(e.target.value)}>
          <option value="Sv">Sv</option>
          <option value="mSv">mSv</option>
          <option value="uSv">uSv</option>
          <option value="rem">rem</option>
          <option value="mrem">mrem</option>
        </select>
        {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono">{result} {to}</div>}
      </div>
    </main>
  );
}