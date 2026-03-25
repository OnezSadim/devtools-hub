"use client";
import { useState } from "react";

export default function TriangleCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError(""); setResult(null);
    const A = parseFloat(a), B = parseFloat(b), C = parseFloat(c);
    if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
      setError("Enter valid positive side lengths."); return;
    }
    if (A + B <= C || A + C <= B || B + C <= A) {
      setError("Invalid triangle: sides do not satisfy triangle inequality."); return;
    }
    const perimeter = A + B + C;
    const s = perimeter / 2;
    const area = Math.sqrt(s * (s - A) * (s - B) * (s - C));
    const angleA = Math.acos((B * B + C * C - A * A) / (2 * B * C)) * 180 / Math.PI;
    const angleB = Math.acos((A * A + C * C - B * B) / (2 * A * C)) * 180 / Math.PI;
    const angleC = 180 - angleA - angleB;
    setResult({ perimeter: perimeter.toFixed(4), area: area.toFixed(4), angleA: angleA.toFixed(2), angleB: angleB.toFixed(2), angleC: angleC.toFixed(2) });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Triangle Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate area, perimeter, and angles from three side lengths (SSS).</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[["Side a", a, setA], ["Side b", b, setB], ["Side c", c, setC]].map(([label, val, setter]: any) => (
            <div key={label}>
              <label className="block text-sm text-gray-400 mb-1">{label}</label>
              <input type="number" value={val} onChange={e => setter(e.target.value)} placeholder="0" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
            </div>
          ))}
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Calculate</button>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {result && (
          <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between"><span className="text-gray-400">Perimeter</span><span className="font-mono text-green-400">{result.perimeter}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Area</span><span className="font-mono text-green-400">{result.area}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Angle A</span><span className="font-mono text-blue-400">{result.angleA}°</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Angle B</span><span className="font-mono text-blue-400">{result.angleB}°</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Angle C</span><span className="font-mono text-blue-400">{result.angleC}°</span></div>
          </div>
        )}
      </div>
    </main>
  );
}
