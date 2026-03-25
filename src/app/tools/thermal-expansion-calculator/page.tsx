"use client";
import { useState } from "react";
export default function ThermalExpansionCalculator() {
  const [L0, setL0] = useState("");
  const [alpha, setAlpha] = useState("");
  const [deltaT, setDeltaT] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calc = () => {
    const l = parseFloat(L0), a = parseFloat(alpha), dt = parseFloat(deltaT);
    if (isNaN(l) || isNaN(a) || isNaN(dt)) { setResult("Enter valid numbers"); return; }
    const dL = l * a * dt;
    const Lf = l + dL;
    setResult(`ΔL = ${dL.toExponential(4)} m | L_final = ${Lf.toFixed(6)} m`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Thermal Expansion Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate linear thermal expansion: ΔL = L₀αΔT</p>
      <div className="space-y-4">
        <div><label className="block text-sm text-gray-400 mb-1">Initial Length L₀ (m)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={L0} onChange={e=>setL0(e.target.value)} placeholder="e.g. 1.0" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Coefficient of Expansion α (1/K)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={alpha} onChange={e=>setAlpha(e.target.value)} placeholder="e.g. 11.7e-6 for steel" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Temperature Change ΔT (K)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={deltaT} onChange={e=>setDeltaT(e.target.value)} placeholder="e.g. 50" /></div>
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-lg font-mono text-green-400">{result}</div>}
      </div>
    </main>
  );
}
