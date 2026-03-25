"use client";
import { useState } from "react";

export default function SoundLevelConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Decibel (dB)");
  const [to, setTo] = useState("Bel (B)");
  const [result, setResult] = useState<number | null>(null);

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    let toBase = 0;
    switch (from) {
      case "Decibel (dB)": toBase = v * 1.0; break;
      case "Bel (B)": toBase = v * 10.0; break;
      case "Neper (Np)": toBase = v * 8.685889638; break;
      case "Millidecibel (mdB)": toBase = v * 0.001; break;
    }
    let result = 0;
    switch (to) {
FROM_      case "Decibel (dB)": toBase = v * 1.0; break;
      case "Bel (B)": toBase = v * 10.0; break;
      case "Neper (Np)": toBase = v * 8.685889638; break;
      case "Millidecibel (mdB)": toBase = v * 0.001; break;
    }
    setResult(result);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Sound Level Converter</h1>
        <p className="text-gray-400 mb-6">Convert between sound level units: decibel, bel, neper, and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded px-4 py-2 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Decibel (dB)">Decibel (dB)</option>
          <option value="Bel (B)">Bel (B)</option>
          <option value="Neper (Np)">Neper (Np)</option>
          <option value="Millidecibel (mdB)">Millidecibel (mdB)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Decibel (dB)">Decibel (dB)</option>
          <option value="Bel (B)">Bel (B)</option>
          <option value="Neper (Np)">Neper (Np)</option>
          <option value="Millidecibel (mdB)">Millidecibel (mdB)</option>
              </select>
            </div>
          </div>
          <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Convert</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4 text-xl font-bold text-green-400">
              {value} {from} = {result.toExponential ? result.toPrecision(6) : result} {to}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
