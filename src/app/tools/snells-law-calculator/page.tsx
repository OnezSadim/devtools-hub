"use client";
import { useState } from "react";

export default function SnellsLawCalculator() {
  const [n1, setN1] = useState("1");
  const [n2, setN2] = useState("1.5");
  const [angle1, setAngle1] = useState("30");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const n1v = parseFloat(n1), n2v = parseFloat(n2), a1 = parseFloat(angle1);
    if ([n1v, n2v, a1].some(isNaN)) { setResult("Enter valid numbers"); return; }
    const sinA2 = (n1v / n2v) * Math.sin(a1 * Math.PI / 180);
    if (Math.abs(sinA2) > 1) { setResult("Total internal reflection — no refracted ray"); return; }
    const a2 = Math.asin(sinA2) * 180 / Math.PI;
    setResult(`Refraction angle θ₂ = ${a2.toFixed(4)}°`);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Snell&apos;s Law Calculator</h1>
        <p className="text-gray-400 mb-6">n₁ sin θ₁ = n₂ sin θ₂</p>
        {[["n₁ (refractive index 1)",n1,setN1],["n₂ (refractive index 2)",n2,setN2],["θ₁ incident angle (°)",angle1,setAngle1]].map(([lbl,val,set])=>(
          <div key={lbl as string} className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">{lbl as string}</label>
            <input value={val as string} onChange={e=>(set as (v:string)=>void)(e.target.value)} className="w-full bg-gray-800 rounded p-3" />
          </div>
        ))}
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Calculate</button>
        {result && <div className="mt-4 bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
