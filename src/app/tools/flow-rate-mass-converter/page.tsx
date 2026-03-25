"use client";
import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("kg/s");
  const [to, setTo] = useState("kg/min");

  const factors: Record<string, number> = {
    "kg/s": 1.0,
    "kg/min": 0.0166667,
    "kg/h": 0.000277778,
    "g/s": 0.001,
    "g/min": 1.66667e-05,
    "mg/s": 1e-06,
    "lb/s": 0.453592,
    "lb/min": 0.00755987,
    "lb/h": 0.000125998,
    "oz/s": 0.0283495,
    "ton/h (metric)": 0.277778,
  };

  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * factors[from]) / factors[to]
    : null;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Mass Flow Rate Converter</h1>
        <p className="text-gray-400 mb-6">Convert mass flow rates between kg/s, g/s, lb/s, lb/min, and more.</p>
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
          <option value="kg/s">kg/s</option>
          <option value="kg/min">kg/min</option>
          <option value="kg/h">kg/h</option>
          <option value="g/s">g/s</option>
          <option value="g/min">g/min</option>
          <option value="mg/s">mg/s</option>
          <option value="lb/s">lb/s</option>
          <option value="lb/min">lb/min</option>
          <option value="lb/h">lb/h</option>
          <option value="oz/s">oz/s</option>
          <option value="ton/h (metric)">ton/h (metric)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white">
          <option value="kg/s">kg/s</option>
          <option value="kg/min">kg/min</option>
          <option value="kg/h">kg/h</option>
          <option value="g/s">g/s</option>
          <option value="g/min">g/min</option>
          <option value="mg/s">mg/s</option>
          <option value="lb/s">lb/s</option>
          <option value="lb/min">lb/min</option>
          <option value="lb/h">lb/h</option>
          <option value="oz/s">oz/s</option>
          <option value="ton/h (metric)">ton/h (metric)</option>
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
