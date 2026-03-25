"use client";
import { useState } from "react";
export default function TemperatureConverter() {
  const [val, setVal] = useState("");
  const n = parseFloat(val);
  const c = isNaN(n) ? null : val;
  const toC = (f: number) => ((f - 32) * 5/9).toFixed(4);
  const toF = (c: number) => (c * 9/5 + 32).toFixed(4);
  const toK = (c: number) => (c + 273.15).toFixed(4);
  const fromC = !isNaN(n) ? { f: toF(n), k: toK(n) } : null;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Temperature Converter</h1>
      <p className="text-gray-400 mb-6">Convert between Celsius, Fahrenheit, and Kelvin</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter Celsius" className="w-full bg-gray-800 rounded p-3 text-white mb-4" />
      {fromC && (
        <div className="space-y-2">
          <div className="bg-gray-800 rounded p-3"><span className="text-gray-400">Fahrenheit: </span><span className="text-green-400 font-mono">{fromC.f} °F</span></div>
          <div className="bg-gray-800 rounded p-3"><span className="text-gray-400">Kelvin: </span><span className="text-green-400 font-mono">{fromC.k} K</span></div>
        </div>
      )}
    </main>
  );
}