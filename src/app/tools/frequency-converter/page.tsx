"use client";
import { useState } from "react";

export default function FrequencyConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Hz");
  const [to, setTo] = useState("kHz");

  const toBase: Record<string, number> = {
    "Hz": 1,
    "kHz": 1000,
    "MHz": 1000000,
    "GHz": 1000000000,
    "THz": 1000000000000,
    "rpm": 0.01667,
  };

  const result = value !== "" ? (parseFloat(value) * toBase[from] / toBase[to]).toLocaleString(undefined, {maximumSignificantDigits: 8}) : "";

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Frequency Converter</h1>
        <p className="text-gray-400 mb-8">Convert between frequency units.</p>
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
          <option value="Hz">Hz</option>
          <option value="kHz">kHz</option>
          <option value="MHz">MHz</option>
          <option value="GHz">GHz</option>
          <option value="THz">THz</option>
          <option value="rpm">rpm</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="Hz">Hz</option>
          <option value="kHz">kHz</option>
          <option value="MHz">MHz</option>
          <option value="GHz">GHz</option>
          <option value="THz">THz</option>
          <option value="rpm">rpm</option>
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
