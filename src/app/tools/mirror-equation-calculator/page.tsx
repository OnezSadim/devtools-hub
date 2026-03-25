"use client";
import { useState } from "react";
export default function MirrorEquationCalculator() {
  const [f, setF] = useState("");
  const [do_, setDo] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const fV = parseFloat(f), doV = parseFloat(do_);
    if (isNaN(fV) || isNaN(doV) || doV === 0) { setResult("Please enter valid values."); return; }
    const diV = 1 / (1/fV - 1/doV);
    const m = -diV / doV;
    const imageType = diV > 0 ? "Real" : "Virtual";
    setResult(`Image distance: ${diV.toFixed(4)} cm | Magnification: ${m.toFixed(4)}x | Type: ${imageType}`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Mirror Equation Calculator</h1>
        <p className="text-gray-400 mb-6">Mirror equation: 1/f = 1/d₀ + 1/dᵢ (use negative f for convex mirrors)</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Focal Length f (cm, negative for convex)</label><input value={f} onChange={e=>setF(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" placeholder="e.g. -20" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Object Distance d₀ (cm)</label><input value={do_} onChange={e=>setDo(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" placeholder="e.g. 30" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-lg font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
