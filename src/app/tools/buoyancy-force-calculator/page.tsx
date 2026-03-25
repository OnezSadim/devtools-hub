"use client";
import { useState } from "react";
export default function BuoyancyForceCalculator() {
  const [rhoFluid, setRhoFluid] = useState("1000");
  const [volume, setVolume] = useState("");
  const [result, setResult] = useState("");
  const g = 9.81;
  const calculate = () => {
    const rho = parseFloat(rhoFluid), V = parseFloat(volume);
    if ([rho,V].some(isNaN)) { setResult("Invalid input"); return; }
    const Fb = rho * g * V;
    setResult("Buoyant Force = " + Fb.toFixed(2) + " N");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Buoyancy Force Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate the buoyant force on a submerged or floating object.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Fluid Density (kg/m³)</label>
          <input type="number" value={rhoFluid} onChange={e=>setRhoFluid(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Submerged Volume (m³)</label>
          <input type="number" value={volume} onChange={e=>setVolume(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-center text-xl font-bold text-green-400">{result}</div>}
      </div>
    </main>
  );
}
