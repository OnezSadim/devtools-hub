"use client";
import { useState } from "react";
export default function ReynoldsNumberCalculator() {
  const [density, setDensity] = useState("");
  const [velocity, setVelocity] = useState("");
  const [length, setLength] = useState("");
  const [viscosity, setViscosity] = useState("");
  const [result, setResult] = useState("");
  const calculate = () => {
    const rho = parseFloat(density), v = parseFloat(velocity);
    const l = parseFloat(length), mu = parseFloat(viscosity);
    if ([rho,v,l,mu].some(isNaN) || mu === 0) { setResult("Invalid input"); return; }
    const Re = (rho * v * l) / mu;
    let regime = Re < 2300 ? "Laminar" : Re < 4000 ? "Transitional" : "Turbulent";
    setResult("Re = " + Re.toFixed(2) + " (" + regime + ")");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Reynolds Number Calculator</h1>
      <p className="text-gray-400 mb-6">Determine if fluid flow is laminar, transitional, or turbulent.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        {[["Density (kg/m³)",density,setDensity],["Velocity (m/s)",velocity,setVelocity],["Characteristic Length (m)",length,setLength],["Dynamic Viscosity (Pa·s)",viscosity,setViscosity]].map(([label,val,setter])=>(
          <div key={label}>
            <label className="block text-sm text-gray-400 mb-1">{label}</label>
            <input type="number" value={val} onChange={e=>setter(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
        ))}
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-center text-xl font-bold text-green-400">{result}</div>}
      </div>
    </main>
  );
}
