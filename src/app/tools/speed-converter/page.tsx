"use client";
import { useState } from "react";

export default function SpeedConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("m/s");
  const [to, setTo] = useState("km/h");

  const toBase: Record<string, number> = {
    "m/s": 1,
    "km/h": 0.27778,
    "mph": 0.44704,
    "knot": 0.51444,
    "ft/s": 0.3048,
    "Mach": 340.29,
  };

  const result = value !== "" ? (parseFloat(value) * toBase[from] / toBase[to]).toLocaleString(undefined, {maximumSignificantDigits: 8}) : "";

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Speed Converter</h1>
        <p className="text-gray-400 mb-8">Convert between speed and velocity units.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={value} onChange={e => setValue(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" placeholder="Enter value" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="m/s">m/s</option>
          <option value="km/h">km/h</option>
          <option value="mph">mph</option>
          <option value="knot">knot</option>
          <option value="ft/s">ft/s</option>
          <option value="Mach">Mach</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="m/s">m/s</option>
          <option value="km/h">km/h</option>
          <option value="mph">mph</option>
          <option value="knot">knot</option>
          <option value="ft/s">ft/s</option>
          <option value="Mach">Mach</option>
              </select>
            </div>
          </div>
          {result !== "" && (
            <div className="bg-gray-800 rounded-lg px-4 py-3">
              <span className="text-2xl font-mono font-bold text-green-400">{result}</span>
              <span className="text-gray-400 ml-2">{to}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
