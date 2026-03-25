"use client";
import { useState } from "react";
export default function ElectricFieldCalculator() {
  const [charge, setCharge] = useState("");
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const k = 8.9875e9;
  function calculate() {
    const q = parseFloat(charge);
    const r = parseFloat(distance);
    if (isNaN(q) || isNaN(r) || r === 0) { setResult("Invalid input"); return; }
    const E = k * Math.abs(q) / (r * r);
    setResult(E.toExponential(4) + " N/C");
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Field Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate electric field strength E = kQ/r²</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Charge Q (Coulombs)</label>
            <input type="number" value={charge} onChange={e => setCharge(e.target.value)} placeholder="e.g. 1e-6" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Distance r (meters)</label>
            <input type="number" value={distance} onChange={e => setDistance(e.target.value)} placeholder="e.g. 0.1" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-gray-400">E = </span><span className="text-2xl font-bold text-blue-400">{result}</span></div>}
        </div>
      </div>
    </main>
  );
}
