"use client";
import { useState } from "react";

export default function FluidPressureCalculator() {
  const [depth, setDepth] = useState("");
  const [density, setDensity] = useState("1000");
  const [atm, setAtm] = useState("101325");
  const [result, setResult] = useState<{total: number; hydrostatic: number} | null>(null);

  const calculate = () => {
    const h = parseFloat(depth);
    const rho = parseFloat(density);
    const P0 = parseFloat(atm);
    const g = 9.81;
    if ([h, rho, P0].some(isNaN)) return;
    const hydrostatic = rho * g * h;
    const total = P0 + hydrostatic;
    setResult({ total, hydrostatic });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fluid Pressure Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate hydrostatic pressure at depth</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {[["Depth (m)", depth, setDepth],["Fluid Density (kg/m³)", density, setDensity],["Atmospheric Pressure (Pa)", atm, setAtm]].map(([label, val, setter]) => (
            <div key={label as string}>
              <label className="block text-sm text-gray-400 mb-1">{label as string}</label>
              <input type="number" value={val as string} onChange={e => (setter as Function)(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Calculate</button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4 space-y-2">
              <p className="text-gray-400">Hydrostatic: <span className="text-green-400 font-mono">{result.hydrostatic.toFixed(2)} Pa</span></p>
              <p className="text-gray-400">Total Pressure: <span className="text-green-400 font-mono text-xl">{result.total.toFixed(2)} Pa</span></p>
              <p className="text-gray-400">= <span className="text-green-400 font-mono">{(result.total / 101325).toFixed(3)} atm</span></p>
            </div>
          )}
        </div>
        <div className="mt-4 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-mono">P = P₀ + ρgh</p>
        </div>
      </div>
    </main>
  );
}
