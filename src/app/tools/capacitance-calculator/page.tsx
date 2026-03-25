"use client";
import { useState } from "react";
export default function CapacitanceCalculator() {
  const [area, setArea] = useState("");
  const [distance, setDistance] = useState("");
  const [er, setEr] = useState("1");
  const [result, setResult] = useState<string | null>(null);
  const e0 = 8.854e-12;
  function calculate() {
    const a = parseFloat(area);
    const d = parseFloat(distance);
    const epsilon = parseFloat(er) || 1;
    if (isNaN(a) || isNaN(d) || d === 0) { setResult("Invalid input"); return; }
    const C = epsilon * e0 * a / d;
    setResult(C.toExponential(4) + " F (Farads)");
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Capacitance Calculator</h1>
        <p className="text-gray-400 mb-6">Parallel plate capacitor: C = ε₀·εᵣ·A/d</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Plate Area A (m²)</label>
            <input type="number" value={area} onChange={e => setArea(e.target.value)} placeholder="e.g. 0.01" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Plate Separation d (meters)</label>
            <input type="number" value={distance} onChange={e => setDistance(e.target.value)} placeholder="e.g. 0.001" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Relative Permittivity εᵣ (default: 1 for air)</label>
            <input type="number" value={er} onChange={e => setEr(e.target.value)} placeholder="1" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700 rounded-lg py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-gray-400">C = </span><span className="text-2xl font-bold text-green-400">{result}</span></div>}
        </div>
      </div>
    </main>
  );
}
