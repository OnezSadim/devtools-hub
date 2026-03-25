"use client";
import { useState } from "react";
export default function OhmsLawCalculator() {
  const [solve, setSolve] = useState("voltage");
  const [v, setV] = useState("");
  const [i, setI] = useState("");
  const [r, setR] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const vn = parseFloat(v), inn = parseFloat(i), rn = parseFloat(r);
    if (solve === "voltage" && !isNaN(inn) && !isNaN(rn)) setResult("V = " + (inn * rn).toFixed(4) + " V");
    else if (solve === "current" && !isNaN(vn) && !isNaN(rn) && rn !== 0) setResult("I = " + (vn / rn).toFixed(4) + " A");
    else if (solve === "resistance" && !isNaN(vn) && !isNaN(inn) && inn !== 0) setResult("R = " + (vn / inn).toFixed(4) + " Ω");
    else setResult("Invalid inputs");
  };
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Ohm's Law Calculator</h1>
      <p className="text-gray-400 mb-4">Calculate V, I, or R using V = IR</p>
      <div className="mb-4">
        <label className="block text-sm mb-1">Solve for</label>
        <select value={solve} onChange={e => setSolve(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2">
          <option value="voltage">Voltage (V)</option>
          <option value="current">Current (I)</option>
          <option value="resistance">Resistance (R)</option>
        </select>
      </div>
      {solve !== "voltage" && <div className="mb-4"><label className="block text-sm mb-1">Voltage (V)</label><input type="number" value={v} onChange={e => setV(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder="Volts" /></div>}
      {solve !== "current" && <div className="mb-4"><label className="block text-sm mb-1">Current (A)</label><input type="number" value={i} onChange={e => setI(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder="Amperes" /></div>}
      {solve !== "resistance" && <div className="mb-4"><label className="block text-sm mb-1">Resistance (Ω)</label><input type="number" value={r} onChange={e => setR(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder="Ohms" /></div>}
      <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">Calculate</button>
      {result && <div className="mt-4 p-4 bg-gray-800 rounded text-xl font-mono text-green-400">{result}</div>}
    </div>
  );
}
