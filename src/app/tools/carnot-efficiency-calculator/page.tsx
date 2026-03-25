"use client";
import { useState } from "react";
export default function CarnotEfficiencyCalculator() {
  const [Th, setTh] = useState("");
  const [Tc, setTc] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calc = () => {
    const th = parseFloat(Th), tc = parseFloat(Tc);
    if (isNaN(th) || isNaN(tc)) { setResult("Enter valid numbers"); return; }
    if (tc >= th) { setResult("Cold reservoir must be cooler than hot reservoir"); return; }
    const eta = (1 - tc / th) * 100;
    setResult(`Carnot Efficiency = ${eta.toFixed(2)}%`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Carnot Efficiency Calculator</h1>
      <p className="text-gray-400 mb-6">Maximum efficiency: η = 1 - Tᴄ/Tₕ (temperatures in Kelvin)</p>
      <div className="space-y-4">
        <div><label className="block text-sm text-gray-400 mb-1">Hot Reservoir Tₕ (K)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={Th} onChange={e=>setTh(e.target.value)} placeholder="e.g. 500" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Cold Reservoir Tᴄ (K)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={Tc} onChange={e=>setTc(e.target.value)} placeholder="e.g. 300" /></div>
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono text-green-400">{result}</div>}
      </div>
    </main>
  );
}
