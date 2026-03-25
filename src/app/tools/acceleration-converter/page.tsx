"use client";
import { useState } from "react";

export default function AccelerationConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("m/s²");
  const [to, setTo] = useState("ft/s²");

  const toBase: Record<string, number> = {
    "m/s²": 1,
    "ft/s²": 0.3048,
    "g": 9.80665,
    "Gal": 0.01,
    "in/s²": 0.0254,
    "km/h/s": 0.27778,
  };

  const result = value !== "" ? (parseFloat(value) * toBase[from] / toBase[to]).toLocaleString(undefined, {maximumSignificantDigits: 8}) : "";

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Acceleration Converter</h1>
        <p className="text-gray-400 mb-8">Convert between acceleration units.</p>
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
          <option value="m/s²">m/s²</option>
          <option value="ft/s²">ft/s²</option>
          <option value="g">g</option>
          <option value="Gal">Gal</option>
          <option value="in/s²">in/s²</option>
          <option value="km/h/s">km/h/s</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="m/s²">m/s²</option>
          <option value="ft/s²">ft/s²</option>
          <option value="g">g</option>
          <option value="Gal">Gal</option>
          <option value="in/s²">in/s²</option>
          <option value="km/h/s">km/h/s</option>
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
