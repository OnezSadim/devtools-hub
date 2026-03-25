"use client";
import { useState } from "react";

export default function ReynoldsCalculator() {
  const [velocity, setVelocity] = useState("");
  const [length, setLength] = useState("");
  const [viscosity, setViscosity] = useState("");
  const [density, setDensity] = useState("");
  const [result, setResult] = useState<{re: number; flow: string} | null>(null);

  const calculate = () => {
    const v = parseFloat(velocity);
    const L = parseFloat(length);
    const mu = parseFloat(viscosity);
    const rho = parseFloat(density);
    if ([v,L,mu,rho].some(isNaN) || mu === 0) { return; }
    const Re = (rho * v * L) / mu;
    const flow = Re < 2300 ? "Laminar" : Re < 4000 ? "Transitional" : "Turbulent";
    setResult({re: Re, flow});
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Reynolds Number Calculator</h1>
        <p className="text-gray-400 mb-6">Determine if flow is laminar, transitional, or turbulent.</p>
        <div className="space-y-3">
          {[{label:"Fluid Velocity (m/s)",val:velocity,set:setVelocity},{label:"Characteristic Length (m)",val:length,set:setLength},{label:"Dynamic Viscosity (Pa·s)",val:viscosity,set:setViscosity},{label:"Fluid Density (kg/m³)",val:density,set:setDensity}].map(({label,val,set}) => (
            <div key={label}>
              <label className="block text-sm text-gray-300 mb-1">{label}</label>
              <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" value={val} onChange={e=>set(e.target.value)} placeholder="0" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-2">Calculate</button>
          {result && (
            <div className="mt-4 p-4 bg-gray-800 rounded space-y-2">
              <p className="text-lg font-mono">Re = {result.re.toFixed(2)}</p>
              <p className="text-xl font-bold" style={{color: result.flow==="Laminar" ? "#4ade80" : result.flow==="Turbulent" ? "#f87171" : "#facc15"}}>{result.flow} Flow</p>
              <p className="text-xs text-gray-400">Re &lt; 2300: Laminar | 2300-4000: Transitional | &gt; 4000: Turbulent</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
