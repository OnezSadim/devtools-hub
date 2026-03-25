"use client";
import { useState } from "react";
export default function RadiationAbsorbedDoseConverterPage() {
  const units: string[] = ["Gray (Gy)", "Milligray (mGy)", "Rad", "Centigray (cGy)"];
  const toBase: Record<string, number> = {"Gray (Gy)": 1, "Milligray (mGy)": 0.001, "Rad": 0.01, "Centigray (cGy)": 0.01};
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
      <h1 className="text-3xl font-bold mb-2">Radiation Absorbed Dose Converter</h1>
      <p className="text-gray-400 mb-6">Convert between radiation absorbed dose units instantly.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input className="w-full bg-gray-800 rounded px-4 py-2 text-white" placeholder="Enter value" value={val} onChange={e => setVal(e.target.value)} />
        <div className="flex gap-4">
          <select className="flex-1 bg-gray-800 rounded px-3 py-2" value={from} onChange={e => setFrom(e.target.value)}>
            {units.map(u => <option key={u}>{u}</option>)}
          </select>
          <select className="flex-1 bg-gray-800 rounded px-3 py-2" value={to} onChange={e => setTo(e.target.value)}>
            {units.map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
        {val && <div className="bg-gray-800 rounded p-4 text-xl font-mono">{convert()} {to}</div>}
      </div>
    </main>
  );
}