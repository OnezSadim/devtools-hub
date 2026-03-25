"use client";
import { useState } from "react";
export default function LensFocalLengthCalculator() {
  const [do_, setDo] = useState("");
  const [di, setDi] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const doV = parseFloat(do_), diV = parseFloat(di);
    if (isNaN(doV) || isNaN(diV) || doV === 0 || diV === 0) { setResult("Please enter valid non-zero distances."); return; }
    const f = 1 / (1/doV + 1/diV);
    const m = -diV / doV;
    setResult(`Focal length: ${f.toFixed(4)} cm | Magnification: ${m.toFixed(4)}x`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Lens Focal Length Calculator</h1>
        <p className="text-gray-400 mb-6">Thin lens equation: 1/f = 1/d₀ + 1/dᵢ</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Object Distance d₀ (cm)</label><input value={do_} onChange={e=>setDo(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" placeholder="e.g. 30" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Image Distance dᵢ (cm)</label><input value={di} onChange={e=>setDi(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" placeholder="e.g. 60" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-lg font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
