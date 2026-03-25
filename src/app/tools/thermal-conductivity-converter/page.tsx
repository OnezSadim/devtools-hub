"use client";
import { useState } from "react";

export default function ThermalConductivityConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("W/mK");
  const [to, setTo] = useState("BTU/h·ft·°F");
  const [result, setResult] = useState("");

  const conversions: Record<string, number> = {
    "W/mK": 1,
    "BTU/h·ft·°F": 1,
  };

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) { setResult("Invalid input"); return; }
    const base = num / (conversions[from] || 1);
    setResult((base * (conversions[to] || 1)).toFixed(6));
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thermal Conductivity Converter</h1>
        <p className="text-gray-400 mb-6">Convert thermal conductivity units for materials science and engineering.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            placeholder="Enter value" className="w-full bg-gray-800 rounded px-4 py-2" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded px-4 py-2 mt-1">
                {Object.keys(conversions).map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded px-4 py-2 mt-1">
                {Object.keys(conversions).map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
          </div>
          <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Convert</button>
          {result && <div className="bg-gray-800 rounded px-4 py-3 text-lg font-mono">{result} {to}</div>}
        </div>
      </div>
    </main>
  );
}
