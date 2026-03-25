"use client";
import { useState } from "react";

export default function FlowRateCalculator() {
  const [area, setArea] = useState("");
  const [velocity, setVelocity] = useState("");
  const [density, setDensity] = useState("");
  const [diameter, setDiameter] = useState("");
  const [result, setResult] = useState<{Q: number; mdot?: number} | null>(null);

  const calculateFromDiameter = () => {
    const d = parseFloat(diameter);
    if (!isNaN(d)) setArea(String((Math.PI * (d/2)**2).toFixed(6)));
  };

  const calculate = () => {
    const A = parseFloat(area);
    const v = parseFloat(velocity);
    const rho = parseFloat(density);
    if (isNaN(A) || isNaN(v)) return;
    const Q = A * v;
    const mdot = isNaN(rho) ? undefined : rho * Q;
    setResult({Q, mdot});
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Flow Rate Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate Q = A × v and optional mass flow rate ṁ = ρQ.</p>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Pipe Diameter (m) — optional helper</label>
            <div className="flex gap-2">
              <input className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" value={diameter} onChange={e=>setDiameter(e.target.value)} placeholder="0.05" />
              <button onClick={calculateFromDiameter} className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm">→ Area</button>
            </div>
          </div>
          {[{label:"Cross-sectional Area (m²)",val:area,set:setArea},{label:"Flow Velocity (m/s)",val:velocity,set:setVelocity},{label:"Fluid Density (kg/m³) — optional",val:density,set:setDensity}].map(({label,val,set}) => (
            <div key={label}>
              <label className="block text-sm text-gray-300 mb-1">{label}</label>
              <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" value={val} onChange={e=>set(e.target.value)} placeholder="0" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Calculate</button>
          {result && (
            <div className="mt-4 p-4 bg-gray-800 rounded space-y-1 font-mono">
              <p>Volumetric Flow Rate Q = {result.Q.toFixed(6)} m³/s</p>
              <p>= {(result.Q * 1000).toFixed(4)} L/s</p>
              {result.mdot !== undefined && <p>Mass Flow Rate ṁ = {result.mdot.toFixed(4)} kg/s</p>}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
