"use client";
import { useState } from "react";
const MATERIALS = [
  {name:"Water",c:4186},{name:"Aluminum",c:897},{name:"Iron",c:449},{name:"Copper",c:385},
  {name:"Gold",c:129},{name:"Silver",c:235},{name:"Ice",c:2090},{name:"Steam",c:2010},
  {name:"Glass",c:840},{name:"Wood",c:1700},
];
export default function SpecificHeatCalculator() {
  const [heat, setHeat] = useState("");
  const [mass, setMass] = useState("");
  const [deltaT, setDeltaT] = useState("");
  const [result, setResult] = useState("");
  const calculate = () => {
    const Q = parseFloat(heat), m = parseFloat(mass), dt = parseFloat(deltaT);
    if (isNaN(Q) || isNaN(m) || isNaN(dt) || m===0 || dt===0) { setResult("Enter valid non-zero numbers"); return; }
    setResult("c = " + (Q/(m*dt)).toFixed(2) + " J/(kg·K)");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Specific Heat Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate specific heat capacity: c = Q / (m·ΔT)</p>
        <div className="mb-4 bg-gray-800 rounded p-3">
          <p className="text-sm text-gray-400 mb-2">Common Materials (J/kg·K):</p>
          <div className="grid grid-cols-2 gap-1 text-xs">
            {MATERIALS.map(m=><span key={m.name} className="text-gray-300">{m.name}: {m.c}</span>)}
          </div>
        </div>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Heat Added Q (J)</label><input type="number" value={heat} onChange={e=>setHeat(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Mass (kg)</label><input type="number" value={mass} onChange={e=>setMass(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Temperature Change ΔT (K)</label><input type="number" value={deltaT} onChange={e=>setDeltaT(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-xl font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
