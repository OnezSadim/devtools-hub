"use client";
import { useState } from "react";

export default function BernoulliCalculator() {
  const [p1, setP1] = useState("");
  const [v1, setV1] = useState("");
  const [h1, setH1] = useState("");
  const [p2, setP2] = useState("");
  const [h2, setH2] = useState("");
  const [density, setDensity] = useState("1000");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const rho = parseFloat(density);
    const P1 = parseFloat(p1);
    const V1 = parseFloat(v1);
    const H1 = parseFloat(h1);
    const P2 = parseFloat(p2);
    const H2 = parseFloat(h2);
    const g = 9.81;
    if ([rho, P1, V1, H1, P2, H2].some(isNaN)) {
      setResult("Please fill all fields");
      return;
    }
    // P1 + 0.5*rho*v1^2 + rho*g*h1 = P2 + 0.5*rho*v2^2 + rho*g*h2
    const lhs = P1 + 0.5 * rho * V1 * V1 + rho * g * H1;
    const rhs_without_v2 = P2 + rho * g * H2;
    const v2sq = (2 * (lhs - rhs_without_v2)) / rho;
    if (v2sq < 0) { setResult("No real solution — check inputs"); return; }
    const v2 = Math.sqrt(v2sq);
    setResult(`V2 = ${v2.toFixed(4)} m/s`);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Bernoulli&#39;s Equation Calculator</h1>
        <p className="text-gray-400 mb-6">Solve for fluid velocity at point 2 using Bernoulli&#39;s principle.</p>
        <div className="space-y-3">
          {[{label:"Fluid Density (kg/m³)",val:density,set:setDensity},{label:"Pressure at P1 (Pa)",val:p1,set:setP1},{label:"Velocity at V1 (m/s)",val:v1,set:setV1},{label:"Height h1 (m)",val:h1,set:setH1},{label:"Pressure at P2 (Pa)",val:p2,set:setP2},{label:"Height h2 (m)",val:h2,set:setH2}].map(({label,val,set}) => (
            <div key={label}>
              <label className="block text-sm text-gray-300 mb-1">{label}</label>
              <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" value={val} onChange={e=>set(e.target.value)} placeholder="0" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-2">Calculate V2</button>
          {result && <div className="mt-4 p-4 bg-gray-800 rounded text-lg font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
