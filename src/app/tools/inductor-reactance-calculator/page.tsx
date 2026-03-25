
"use client";
import { useState } from "react";
export default function InductorReactance() {
  const [f, setF] = useState("");
  const [l, setL] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const F = parseFloat(f), L = parseFloat(l);
    if (isNaN(F) || isNaN(L)) { setResult("Enter valid numbers"); return; }
    const xl = 2 * Math.PI * F * L;
    setResult("Inductive Reactance Xₗ = " + xl.toFixed(4) + " Ω");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Inductor Reactance Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate Xₗ = 2πfL</p>
      <div className="bg-gray-900 rounded-xl p-6 space-y-4">
        <div><label className="block text-sm text-gray-400 mb-1">Frequency (Hz)</label><input type="number" value={f} onChange={e => setF(e.target.value)} placeholder="e.g. 60" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Inductance (H)</label><input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="e.g. 0.01" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" /></div>
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Calculate</button>
        {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-xl font-mono text-green-400">{result}</div>}
      </div>
    </main>
  );
}
