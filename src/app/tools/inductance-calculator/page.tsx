"use client";
import { useState } from "react";
export default function InductanceCalculator() {
  const [turns, setTurns] = useState("");
  const [length, setLength] = useState("");
  const [area, setArea] = useState("");
  const [ur, setUr] = useState("1");
  const [result, setResult] = useState<string | null>(null);
  const u0 = 4 * Math.PI * 1e-7;
  function calculate() {
    const N = parseFloat(turns);
    const l = parseFloat(length);
    const A = parseFloat(area);
    const mu = parseFloat(ur) || 1;
    if (isNaN(N) || isNaN(l) || isNaN(A) || l === 0) { setResult("Invalid input"); return; }
    const L = mu * u0 * N * N * A / l;
    setResult(L.toExponential(4) + " H (Henries)");
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Inductance Calculator</h1>
        <p className="text-gray-400 mb-6">Solenoid inductance: L = μ₀·μᵣ·N²·A/l</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Number of Turns N</label>
            <input type="number" value={turns} onChange={e => setTurns(e.target.value)} placeholder="e.g. 100" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Coil Length l (meters)</label>
            <input type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="e.g. 0.1" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Cross-section Area A (m²)</label>
            <input type="number" value={area} onChange={e => setArea(e.target.value)} placeholder="e.g. 0.001" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Relative Permeability μᵣ (default: 1 for air)</label>
            <input type="number" value={ur} onChange={e => setUr(e.target.value)} placeholder="1" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-orange-600 hover:bg-orange-700 rounded-lg py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-gray-400">L = </span><span className="text-2xl font-bold text-orange-400">{result}</span></div>}
        </div>
      </div>
    </main>
  );
}
