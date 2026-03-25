"use client";
import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("km/L");
  const [to, setTo] = useState("mpg (US)");

  const factors: Record<string, number> = {
    "km/L": 1.0,
    "mpg (US)": 2.35215,
    "mpg (UK)": 2.82481,
    "miles/L": 0.621371,
    "nautical mpg": 2.03904,
  };

  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * factors[from]) / factors[to]
    : null;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fuel Efficiency Converter</h1>
        <p className="text-gray-400 mb-6">Convert between fuel efficiency units: km/L, mpg (US), mpg (UK), miles per litre.</p>
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
          <option value="km/L">km/L</option>
          <option value="mpg (US)">mpg (US)</option>
          <option value="mpg (UK)">mpg (UK)</option>
          <option value="miles/L">miles/L</option>
          <option value="nautical mpg">nautical mpg</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white">
          <option value="km/L">km/L</option>
          <option value="mpg (US)">mpg (US)</option>
          <option value="mpg (UK)">mpg (UK)</option>
          <option value="miles/L">miles/L</option>
          <option value="nautical mpg">nautical mpg</option>
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
