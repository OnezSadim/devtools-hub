"use client";
import { useState } from "react";
export default function HeatTransferCalculator() {
  const [mass, setMass] = useState("");
  const [specificHeat, setSpecificHeat] = useState("");
  const [deltaT, setDeltaT] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calc = () => {
    const m = parseFloat(mass), c = parseFloat(specificHeat), dt = parseFloat(deltaT);
    if (isNaN(m) || isNaN(c) || isNaN(dt)) { setResult("Enter valid numbers"); return; }
    const Q = m * c * dt;
    setResult(`Q = ${Q.toFixed(4)} J`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Heat Transfer Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate heat energy using Q = mcΔT</p>
      <div className="space-y-4">
        <div><label className="block text-sm text-gray-400 mb-1">Mass (kg)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={mass} onChange={e=>setMass(e.target.value)} placeholder="e.g. 2" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Specific Heat (J/kg·K)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={specificHeat} onChange={e=>setSpecificHeat(e.target.value)} placeholder="e.g. 4186 for water" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Temperature Change ΔT (K)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={deltaT} onChange={e=>setDeltaT(e.target.value)} placeholder="e.g. 10" /></div>
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono text-green-400">{result}</div>}
      </div>
    </main>
  );
}
