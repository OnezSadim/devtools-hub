"use client";
import { useState } from "react";
export default function MagneticFluxCalculator() {
  const [B, setB] = useState("");
  const [area, setArea] = useState("");
  const [angle, setAngle] = useState("0");
  const [result, setResult] = useState<string | null>(null);
  function calculate() {
    const b = parseFloat(B);
    const a = parseFloat(area);
    const theta = parseFloat(angle) * Math.PI / 180;
    if (isNaN(b) || isNaN(a)) { setResult("Invalid input"); return; }
    const flux = b * a * Math.cos(theta);
    setResult(flux.toExponential(4) + " Wb (Webers)");
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Magnetic Flux Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate magnetic flux Φ = B·A·cos(θ)</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Magnetic Field B (Tesla)</label>
            <input type="number" value={B} onChange={e => setB(e.target.value)} placeholder="e.g. 0.5" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Area A (m²)</label>
            <input type="number" value={area} onChange={e => setArea(e.target.value)} placeholder="e.g. 0.01" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Angle θ (degrees)</label>
            <input type="number" value={angle} onChange={e => setAngle(e.target.value)} placeholder="0" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-gray-400">Φ = </span><span className="text-2xl font-bold text-purple-400">{result}</span></div>}
        </div>
      </div>
    </main>
  );
}
