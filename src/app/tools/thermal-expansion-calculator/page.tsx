"use client";
import { useState } from "react";
export default function ThermalExpansionCalculator() {
  const [initialLength, setInitialLength] = useState("");
  const [coefficient, setCoefficient] = useState("");
  const [deltaT, setDeltaT] = useState("");
  const [mode, setMode] = useState("linear");
  const [result, setResult] = useState("");
  const calculate = () => {
    const L = parseFloat(initialLength), a = parseFloat(coefficient), dt = parseFloat(deltaT);
    if (isNaN(L) || isNaN(a) || isNaN(dt)) { setResult("Enter valid numbers"); return; }
    if (mode === "linear") {
      const dL = L * a * dt;
      setResult("ΔL = " + dL.toExponential(4) + " m | Final: " + (L + dL).toFixed(6) + " m");
    } else {
      const dV = L * 3 * a * dt;
      setResult("ΔV = " + dV.toExponential(4) + " m³ | Final: " + (L + dV).toFixed(6) + " m³");
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thermal Expansion Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate how materials expand with temperature</p>
        <div className="flex gap-2 mb-4">
          {["linear","volumetric"].map(m=><button key={m} onClick={()=>setMode(m)} className={"px-4 py-2 rounded font-semibold " + (mode===m?"bg-blue-600":"bg-gray-700")}>{m.charAt(0).toUpperCase()+m.slice(1)}</button>)}
        </div>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">{mode==="linear"?"Initial Length (m)":"Initial Volume (m³)"}</label><input type="number" value={initialLength} onChange={e=>setInitialLength(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Thermal Expansion Coefficient (1/K)</label><input type="number" value={coefficient} onChange={e=>setCoefficient(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" placeholder="e.g. 12e-6 for steel" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Temperature Change ΔT (K)</label><input type="number" value={deltaT} onChange={e=>setDeltaT(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
