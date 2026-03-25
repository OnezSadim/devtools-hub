"use client";
import { useState } from "react";
export default function OhmsLawCalculator() {
  const [V, setV] = useState("");
  const [I, setI] = useState("");
  const [R, setR] = useState("");
  const [result, setResult] = useState<string | null>(null);
  function calculate() {
    const v = parseFloat(V);
    const i = parseFloat(I);
    const r = parseFloat(R);
    const known = [!isNaN(v), !isNaN(i), !isNaN(r)].filter(Boolean).length;
    if (known < 2) { setResult("Enter any two values"); return; }
    if (!isNaN(i) && !isNaN(r)) setResult("V = " + (i * r).toFixed(4) + " V");
    else if (!isNaN(v) && !isNaN(r) && r !== 0) setResult("I = " + (v / r).toFixed(4) + " A");
    else if (!isNaN(v) && !isNaN(i) && i !== 0) setResult("R = " + (v / i).toFixed(4) + " Ω");
    else setResult("Cannot calculate with these values");
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ohm&#39;s Law Calculator</h1>
        <p className="text-gray-400 mb-6">Enter any two values to calculate the third (V = I × R)</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Voltage V (Volts)</label>
            <input type="number" value={V} onChange={e => setV(e.target.value)} placeholder="leave blank to calculate" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Current I (Amperes)</label>
            <input type="number" value={I} onChange={e => setI(e.target.value)} placeholder="leave blank to calculate" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Resistance R (Ohms)</label>
            <input type="number" value={R} onChange={e => setR(e.target.value)} placeholder="leave blank to calculate" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-yellow-600 hover:bg-yellow-700 rounded-lg py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-2xl font-bold text-yellow-400">{result}</div>}
        </div>
      </div>
    </main>
  );
}
