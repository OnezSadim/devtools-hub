"use client";
import { useState } from "react";

export default function ThermalExpansionCalculator() {
  const [mode, setMode] = useState("linear");
  const [L0, setL0] = useState("");
  const [alpha, setAlpha] = useState("");
  const [dT, setDT] = useState("");
  const [result, setResult] = useState("");

  const calc = () => {
    try {
      const l = parseFloat(L0), a = parseFloat(alpha), dt = parseFloat(dT);
      if (mode === "linear") {
        const dL = a * l * dt;
        setResult(`ΔL = ${dL.toExponential(4)} m
Final length = ${(l+dL).toExponential(4)} m`);
      } else {
        const dV = 3 * a * l * dt;
        setResult(`ΔV = ${dV.toExponential(4)} m³
Final volume = ${(l+dV).toExponential(4)} m³`);
      }
    } catch { setResult("Invalid input"); }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thermal Expansion Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate linear or volumetric thermal expansion of materials.</p>
        <div className="flex gap-2 mb-6">
          {["linear","volumetric"].map(m => (
            <button key={m} onClick={() => { setMode(m); setResult(""); }}
              className={"px-4 py-2 rounded capitalize " + (mode===m ? "bg-orange-600" : "bg-gray-800 hover:bg-gray-700")}>{m}</button>
          ))}
        </div>
        <div className="space-y-3">
          <input className="w-full bg-gray-800 p-3 rounded" placeholder={mode==="linear" ? "Initial length L₀ (m)" : "Initial volume V₀ (m³)"} value={L0} onChange={e=>setL0(e.target.value)} />
          <input className="w-full bg-gray-800 p-3 rounded" placeholder="Coefficient of expansion α (1/K)" value={alpha} onChange={e=>setAlpha(e.target.value)} />
          <input className="w-full bg-gray-800 p-3 rounded" placeholder="Temperature change ΔT (K)" value={dT} onChange={e=>setDT(e.target.value)} />
          <p className="text-gray-500 text-sm">Common α values: Steel 12e-6, Aluminum 23e-6, Copper 17e-6, Glass 8.5e-6</p>
          <button onClick={calc} className="w-full bg-orange-600 hover:bg-orange-700 p-3 rounded font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 p-4 rounded text-green-400 font-mono whitespace-pre">{result}</div>}
        </div>
      </div>
    </main>
  );
}
