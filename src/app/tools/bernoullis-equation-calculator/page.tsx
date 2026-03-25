"use client";
import { useState } from "react";
export default function BernoullisEquationCalculator() {
  const [p1, setP1] = useState("");
  const [v1, setV1] = useState("");
  const [h1, setH1] = useState("");
  const [p2, setP2] = useState("");
  const [v2, setV2] = useState("");
  const [h2, setH2] = useState("");
  const [rho, setRho] = useState("1000");
  const [result, setResult] = useState("");
  const g = 9.81;
  const calculate = () => {
    const p1n = parseFloat(p1), v1n = parseFloat(v1), h1n = parseFloat(h1);
    const v2n = parseFloat(v2), h2n = parseFloat(h2), rhoN = parseFloat(rho);
    if ([p1n,v1n,h1n,v2n,h2n,rhoN].some(isNaN)) { setResult("Fill all fields"); return; }
    const p2n = p1n + 0.5*rhoN*(v1n*v1n - v2n*v2n) + rhoN*g*(h1n - h2n);
    setResult("P2 = " + p2n.toFixed(2) + " Pa");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Bernoulli&apos;s Equation Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate pressure using Bernoulli&apos;s principle for fluid flow.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {[["P1 (Pa)",p1,setP1],["V1 (m/s)",v1,setV1],["H1 (m)",h1,setH1],["V2 (m/s)",v2,setV2],["H2 (m)",h2,setH2],["Density (kg/m³)",rho,setRho]].map(([label,val,setter])=>(
            <div key={label}>
              <label className="block text-sm text-gray-400 mb-1">{label}</label>
              <input type="number" value={val} onChange={e=>setter(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
            </div>
          ))}
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate P2</button>
        {result && <div className="bg-gray-800 rounded p-4 text-center text-xl font-bold text-green-400">{result}</div>}
      </div>
    </main>
  );
}
