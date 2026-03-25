"use client";
import { useState } from "react";

export default function PipeFlowCalculator() {
  const [diameter, setDiameter] = useState("");
  const [velocity, setVelocity] = useState("");
  const [density, setDensity] = useState("1000");
  const [result, setResult] = useState<{Q: number; mass: number; area: number} | null>(null);

  const calculate = () => {
    const d = parseFloat(diameter);
    const v = parseFloat(velocity);
    const rho = parseFloat(density);
    if ([d, v, rho].some(isNaN)) return;
    const r = d / 2;
    const area = Math.PI * r * r;
    const Q = area * v;
    const mass = rho * Q;
    setResult({ Q, mass, area });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pipe Flow Rate Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate flow rate through a circular pipe</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {[["Pipe Diameter (m)", diameter, setDiameter],["Flow Velocity (m/s)", velocity, setVelocity],["Fluid Density (kg/m³)", density, setDensity]].map(([label, val, setter]) => (
            <div key={label as string}>
              <label className="block text-sm text-gray-400 mb-1">{label as string}</label>
              <input type="number" value={val as string} onChange={e => (setter as Function)(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Calculate</button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4 space-y-2 text-sm">
              <p>Cross-sectional Area: <span className="text-green-400 font-mono">{result.area.toFixed(6)} m²</span></p>
              <p>Volumetric Flow Rate: <span className="text-green-400 font-mono text-lg">{result.Q.toFixed(4)} m³/s</span></p>
              <p>Mass Flow Rate: <span className="text-green-400 font-mono text-lg">{result.mass.toFixed(3)} kg/s</span></p>
            </div>
          )}
        </div>
        <div className="mt-4 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-mono">Q = A × v = πr² × v</p>
        </div>
      </div>
    </main>
  );
}
