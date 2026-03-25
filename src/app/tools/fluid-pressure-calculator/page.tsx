"use client";
import { useState } from "react";

export default function FluidPressureCalculator() {
  const [depth, setDepth] = useState("");
  const [density, setDensity] = useState("1000");
  const [atm, setAtm] = useState("101325");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const h = parseFloat(depth);
    const rho = parseFloat(density);
    const P0 = parseFloat(atm);
    const g = 9.81;
    if ([h,rho,P0].some(isNaN)) return;
    const P = P0 + rho * g * h;
    setResult(`Total Pressure = ${P.toFixed(2)} Pa (${(P/1000).toFixed(4)} kPa)`);
  };

  const presets = [{name:"Water",rho:"1000"},{name:"Seawater",rho:"1025"},{name:"Mercury",rho:"13600"},{name:"Oil",rho:"800"}];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fluid Pressure Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate hydrostatic pressure P = P₀ + ρgh at a given depth.</p>
        <div className="flex gap-2 mb-4">{presets.map(p => <button key={p.name} onClick={() => setDensity(p.rho)} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm">{p.name}</button>)}</div>
        <div className="space-y-3">
          {[{label:"Depth (m)",val:depth,set:setDepth},{label:"Fluid Density (kg/m³)",val:density,set:setDensity},{label:"Surface Pressure (Pa)",val:atm,set:setAtm}].map(({label,val,set}) => (
            <div key={label}>
              <label className="block text-sm text-gray-300 mb-1">{label}</label>
              <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" value={val} onChange={e=>set(e.target.value)} />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Calculate</button>
          {result && <div className="mt-4 p-4 bg-gray-800 rounded text-lg font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
