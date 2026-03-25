"use client";
import { useState } from "react";
export default function InductorEnergyCalculator() {
  const [l, setL] = useState("");
  const [i, setI] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const ln = parseFloat(l), inn = parseFloat(i);
    if (isNaN(ln) || isNaN(inn)) { setResult("Invalid inputs"); return; }
    const energy = 0.5 * ln * inn * inn;
    setResult("E = " + energy.toExponential(4) + " J");
  };
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Inductor Energy Calculator</h1>
      <p className="text-gray-400 mb-4">E = ½ × L × I²</p>
      <div className="mb-4"><label className="block text-sm mb-1">Inductance L (H)</label><input type="number" value={l} onChange={e => setL(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder="Henries" /></div>
      <div className="mb-4"><label className="block text-sm mb-1">Current I (A)</label><input type="number" value={i} onChange={e => setI(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" placeholder="Amperes" /></div>
      <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">Calculate</button>
      {result && <div className="mt-4 p-4 bg-gray-800 rounded text-xl font-mono text-green-400">{result}</div>}
    </div>
  );
}
