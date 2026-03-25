
"use client";
import { useState } from "react";
export default function OhmsLaw() {
  const [solve, setSolve] = useState("voltage");
  const [v, setV] = useState("");
  const [i, setI] = useState("");
  const [r, setR] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const V = parseFloat(v), I = parseFloat(i), R = parseFloat(r);
    if (solve === "voltage" && !isNaN(I) && !isNaN(R)) setResult("Voltage = " + (I * R).toFixed(4) + " V");
    else if (solve === "current" && !isNaN(V) && !isNaN(R) && R !== 0) setResult("Current = " + (V / R).toFixed(4) + " A");
    else if (solve === "resistance" && !isNaN(V) && !isNaN(I) && I !== 0) setResult("Resistance = " + (V / I).toFixed(4) + " Ω");
    else setResult("Check inputs");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Ohm's Law Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate V, I, or R using V = I × R</p>
      <div className="bg-gray-900 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Solve for</label>
          <select value={solve} onChange={e => setSolve(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2">
            <option value="voltage">Voltage (V)</option>
            <option value="current">Current (I)</option>
            <option value="resistance">Resistance (R)</option>
          </select>
        </div>
        {solve !== "voltage" && <div><label className="block text-sm text-gray-400 mb-1">Voltage (V)</label><input type="number" value={v} onChange={e => setV(e.target.value)} placeholder="Volts" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" /></div>}
        {solve !== "current" && <div><label className="block text-sm text-gray-400 mb-1">Current (A)</label><input type="number" value={i} onChange={e => setI(e.target.value)} placeholder="Amps" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" /></div>}
        {solve !== "resistance" && <div><label className="block text-sm text-gray-400 mb-1">Resistance (Ω)</label><input type="number" value={r} onChange={e => setR(e.target.value)} placeholder="Ohms" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" /></div>}
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Calculate</button>
        {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-xl font-mono text-green-400">{result}</div>}
      </div>
    </main>
  );
}
