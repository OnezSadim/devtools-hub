"use client";
import { useState } from "react";
export default function SnellsLawCalculator() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [angle1, setAngle1] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const n1v = parseFloat(n1), n2v = parseFloat(n2), a1 = parseFloat(angle1);
    if (isNaN(n1v) || isNaN(n2v) || isNaN(a1)) { setResult("Please enter valid numbers."); return; }
    const sinA2 = (n1v * Math.sin(a1 * Math.PI / 180)) / n2v;
    if (Math.abs(sinA2) > 1) { setResult("Total internal reflection — no refracted ray."); return; }
    const a2 = Math.asin(sinA2) * 180 / Math.PI;
    setResult(`Refracted angle: ${a2.toFixed(4)}°`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Snell's Law Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate refraction angles using Snell's Law: n₁·sin(θ₁) = n₂·sin(θ₂)</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Index of Refraction n₁</label><input value={n1} onChange={e=>setN1(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" placeholder="e.g. 1.0 (air)" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Index of Refraction n₂</label><input value={n2} onChange={e=>setN2(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" placeholder="e.g. 1.5 (glass)" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Incident Angle θ₁ (degrees)</label><input value={angle1} onChange={e=>setAngle1(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" placeholder="e.g. 30" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-lg font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
