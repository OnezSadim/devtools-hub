"use client";
import { useState } from "react";

export default function ViscosityCalculator() {
  const [shearStress, setShearStress] = useState("");
  const [shearRate, setShearRate] = useState("");
  const [density, setDensity] = useState("");
  const [result, setResult] = useState<{mu: number; nu?: number} | null>(null);

  const fluids = [
    {name:"Water 20°C", mu:"0.001002", rho:"998"},
    {name:"Air 20°C", mu:"0.0000181", rho:"1.204"},
    {name:"Honey", mu:"10", rho:"1400"},
    {name:"Motor Oil", mu:"0.1", rho:"870"},
  ];

  const calculate = () => {
    const tau = parseFloat(shearStress);
    const gamma = parseFloat(shearRate);
    const rho = parseFloat(density);
    if (isNaN(tau) || isNaN(gamma) || gamma === 0) return;
    const mu = tau / gamma;
    const nu = isNaN(rho) || rho === 0 ? undefined : mu / rho;
    setResult({mu, nu});
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Dynamic Viscosity Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate μ = τ / (du/dy). Optionally find kinematic viscosity ν = μ/ρ.</p>
        <div className="flex flex-wrap gap-2 mb-4">{fluids.map(f => <button key={f.name} onClick={()=>{setShearStress(""); setShearRate(""); setDensity(f.rho); setResult(null);}} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs">{f.name} (μ≈{f.mu})</button>)}</div>
        <div className="space-y-3">
          {[{label:"Shear Stress τ (Pa)",val:shearStress,set:setShearStress},{label:"Shear Rate du/dy (1/s)",val:shearRate,set:setShearRate},{label:"Density ρ (kg/m³) — optional",val:density,set:setDensity}].map(({label,val,set}) => (
            <div key={label}>
              <label className="block text-sm text-gray-300 mb-1">{label}</label>
              <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" value={val} onChange={e=>set(e.target.value)} placeholder="0" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Calculate</button>
          {result && (
            <div className="mt-4 p-4 bg-gray-800 rounded space-y-1 font-mono">
              <p>Dynamic Viscosity μ = {result.mu.toExponential(4)} Pa·s</p>
              {result.nu !== undefined && <p>Kinematic Viscosity ν = {result.nu.toExponential(4)} m²/s</p>}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
