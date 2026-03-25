"use client";
import { useState } from "react";
export default function FlowRateCalculator() {
  const [area, setArea] = useState("");
  const [velocity, setVelocity] = useState("");
  const [density, setDensity] = useState("");
  const [result, setResult] = useState<{Q:string,m:string}|null>(null);
  const calculate = () => {
    const A = parseFloat(area), v = parseFloat(velocity), rho = parseFloat(density);
    if ([A,v].some(isNaN)) { setResult(null); return; }
    const Q = A * v;
    const mDot = isNaN(rho) ? null : rho * Q;
    setResult({ Q: Q.toFixed(4) + " m³/s", m: mDot !== null ? mDot.toFixed(4) + " kg/s" : "N/A" });
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Flow Rate Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate volumetric and mass flow rate through a cross-section.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Cross-sectional Area (m²)</label>
          <input type="number" value={area} onChange={e=>setArea(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Flow Velocity (m/s)</label>
          <input type="number" value={velocity} onChange={e=>setVelocity(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Fluid Density (kg/m³, optional)</label>
          <input type="number" value={density} onChange={e=>setDensity(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        {result && (
          <div className="bg-gray-800 rounded p-4 space-y-2">
            <div className="text-green-400 font-bold">Volumetric: {result.Q}</div>
            <div className="text-blue-400 font-bold">Mass Flow: {result.m}</div>
          </div>
        )}
      </div>
    </main>
  );
}
