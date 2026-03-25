"use client";
import { useState } from "react";
export default function StefanBoltzmannCalculator() {
  const [area, setArea] = useState("");
  const [temp, setTemp] = useState("");
  const [emissivity, setEmissivity] = useState("1");
  const [result, setResult] = useState<string | null>(null);
  const SIGMA = 5.670374419e-8;
  const calc = () => {
    const A = parseFloat(area), T = parseFloat(temp), e = parseFloat(emissivity);
    if (isNaN(A) || isNaN(T) || isNaN(e)) { setResult("Enter valid numbers"); return; }
    const P = e * SIGMA * A * Math.pow(T, 4);
    setResult(`Power = ${P.toExponential(4)} W`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Stefan-Boltzmann Calculator</h1>
      <p className="text-gray-400 mb-6">Blackbody radiation: P = εσAT⁴</p>
      <div className="space-y-4">
        <div><label className="block text-sm text-gray-400 mb-1">Surface Area (m²)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={area} onChange={e=>setArea(e.target.value)} placeholder="e.g. 1.0" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Temperature (K)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={temp} onChange={e=>setTemp(e.target.value)} placeholder="e.g. 5778 (Sun)" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Emissivity (0-1)</label>
          <input className="w-full bg-gray-800 rounded px-3 py-2" value={emissivity} onChange={e=>setEmissivity(e.target.value)} placeholder="1 = perfect blackbody" /></div>
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono text-green-400">{result}</div>}
      </div>
    </main>
  );
}
