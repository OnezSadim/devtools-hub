"use client";
import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("m³/s");
  const [to, setTo] = useState("m³/min");

  const factors: Record<string, number> = {
    "m³/s": 1.0,
    "m³/min": 0.0166667,
    "m³/h": 0.000277778,
    "L/s": 0.001,
    "L/min": 1.66667e-05,
    "L/h": 2.77778e-07,
    "mL/s": 1e-06,
    "GPM (US)": 6.30902e-05,
    "GPH (US)": 1.0515e-06,
    "CFM": 0.000471947,
    "CFS": 0.0283168,
  };

  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * factors[from]) / factors[to]
    : null;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Volumetric Flow Rate Converter</h1>
        <p className="text-gray-400 mb-6">Convert volumetric flow rates: m³/s, L/min, GPM, CFM, and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={val}
            onChange={e => setVal(e.target.value)}
            placeholder="Enter value"
            className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white">
          <option value="m³/s">m³/s</option>
          <option value="m³/min">m³/min</option>
          <option value="m³/h">m³/h</option>
          <option value="L/s">L/s</option>
          <option value="L/min">L/min</option>
          <option value="L/h">L/h</option>
          <option value="mL/s">mL/s</option>
          <option value="GPM (US)">GPM (US)</option>
          <option value="GPH (US)">GPH (US)</option>
          <option value="CFM">CFM</option>
          <option value="CFS">CFS</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white">
          <option value="m³/s">m³/s</option>
          <option value="m³/min">m³/min</option>
          <option value="m³/h">m³/h</option>
          <option value="L/s">L/s</option>
          <option value="L/min">L/min</option>
          <option value="L/h">L/h</option>
          <option value="mL/s">mL/s</option>
          <option value="GPM (US)">GPM (US)</option>
          <option value="GPH (US)">GPH (US)</option>
          <option value="CFM">CFM</option>
          <option value="CFS">CFS</option>
              </select>
            </div>
          </div>
          {result !== null && (
            <div className="p-4 bg-gray-800 rounded border border-gray-700">
              <span className="text-2xl font-mono text-green-400">
                {val} {from} = {result.toPrecision(6)} {to}
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
