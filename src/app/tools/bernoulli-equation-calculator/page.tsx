"use client";
import { useState } from "react";

export default function BernoulliCalculator() {
  const [p1, setP1] = useState("");
  const [v1, setV1] = useState("");
  const [h1, setH1] = useState("");
  const [v2, setV2] = useState("");
  const [h2, setH2] = useState("");
  const [density, setDensity] = useState("1000");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const P1 = parseFloat(p1);
    const V1 = parseFloat(v1);
    const H1 = parseFloat(h1);
    const V2 = parseFloat(v2);
    const H2 = parseFloat(h2);
    const rho = parseFloat(density);
    const g = 9.81;
    if ([P1, V1, H1, V2, H2, rho].some(isNaN)) {
      setResult("Please fill all fields");
      return;
    }
    const P2 = P1 + 0.5 * rho * (V1 * V1 - V2 * V2) + rho * g * (H1 - H2);
    setResult(`P2 = ${P2.toFixed(2)} Pa`);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Bernoulli Equation Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate fluid pressure using Bernoulli’s principle</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[["Fluid Density (kg/m³)", density, setDensity],["P1 - Pressure 1 (Pa)", p1, setP1],["V1 - Velocity 1 (m/s)", v1, setV1],["H1 - Height 1 (m)", h1, setH1],["V2 - Velocity 2 (m/s)", v2, setV2],["H2 - Height 2 (m)", h2, setH2]].map(([label, val, setter]) => (
              <div key={label as string}>
                <label className="block text-sm text-gray-400 mb-1">{label as string}</label>
                <input type="number" value={val as string} onChange={e => (setter as Function)(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" />
              </div>
            ))}
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">Calculate P2</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-xl font-mono text-green-400">{result}</div>}
        </div>
        <div className="mt-6 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-semibold text-gray-300 mb-2">Bernoulli Equation:</p>
          <p className="font-mono">P1 + ½ρv1² + ρgh1 = P2 + ½ρv2² + ρgh2</p>
        </div>
      </div>
    </main>
  );
}
