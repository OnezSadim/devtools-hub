"use client";
import { useState } from "react";

export default function ReynoldsCalculator() {
  const [velocity, setVelocity] = useState("");
  const [length, setLength] = useState("");
  const [viscosity, setViscosity] = useState("");
  const [density, setDensity] = useState("");
  const [result, setResult] = useState<{re: number; type: string} | null>(null);

  const calculate = () => {
    const v = parseFloat(velocity);
    const L = parseFloat(length);
    const mu = parseFloat(viscosity);
    const rho = parseFloat(density);
    if ([v, L, mu, rho].some(isNaN) || mu === 0) {
      return;
    }
    const Re = (rho * v * L) / mu;
    const type = Re < 2300 ? "Laminar Flow" : Re < 4000 ? "Transitional Flow" : "Turbulent Flow";
    setResult({ re: Re, type });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Reynolds Number Calculator</h1>
        <p className="text-gray-400 mb-6">Determine laminar or turbulent fluid flow</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {[["Velocity (m/s)", velocity, setVelocity],["Characteristic Length (m)", length, setLength],["Dynamic Viscosity (Pa·s)", viscosity, setViscosity],["Fluid Density (kg/m³)", density, setDensity]].map(([label, val, setter]) => (
            <div key={label as string}>
              <label className="block text-sm text-gray-400 mb-1">{label as string}</label>
              <input type="number" value={val as string} onChange={e => (setter as Function)(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Calculate</button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4 space-y-2">
              <p className="text-center font-mono text-2xl text-green-400">Re = {result.re.toFixed(1)}</p>
              <p className="text-center text-lg font-semibold" style={{color: result.re < 2300 ? "#34d399" : result.re < 4000 ? "#fbbf24" : "#f87171"}}>{result.type}</p>
            </div>
          )}
        </div>
        <div className="mt-4 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p>Re &lt; 2300: Laminar | 2300-4000: Transitional | &gt;4000: Turbulent</p>
        </div>
      </div>
    </main>
  );
}
