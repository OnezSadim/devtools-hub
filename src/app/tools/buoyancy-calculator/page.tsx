"use client";
import { useState } from "react";

export default function BuoyancyCalculator() {
  const [volume, setVolume] = useState("");
  const [fluidDensity, setFluidDensity] = useState("1000");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const V = parseFloat(volume);
    const rho = parseFloat(fluidDensity);
    const g = 9.81;
    if (isNaN(V) || isNaN(rho)) return;
    const Fb = rho * g * V;
    setResult(`Buoyant Force = ${Fb.toFixed(2)} N`);
  };

  const presets = [{name:"Water",d:"1000"},{name:"Seawater",d:"1025"},{name:"Air",d:"1.225"},{name:"Mercury",d:"13600"}];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Buoyancy Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate the buoyant force using Archimedes’ principle</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Submerged Volume (m³)</label>
            <input type="number" value={volume} onChange={e => setVolume(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Fluid Density (kg/m³)</label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {presets.map(p => (
                <button key={p.name} onClick={() => setFluidDensity(p.d)}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">{p.name}</button>
              ))}
            </div>
            <input type="number" value={fluidDensity} onChange={e => setFluidDensity(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-xl font-mono text-green-400">{result}</div>}
        </div>
        <div className="mt-4 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-mono">Fᵇ = ρ × g × V</p>
        </div>
      </div>
    </main>
  );
}
