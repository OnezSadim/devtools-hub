"use client";
import { useState } from "react";
export default function ResonanceFrequencyCalculator() {
  const [L, setL] = useState("");
  const [C, setC] = useState("");
  const [result, setResult] = useState("");
  const calc = () => {
    const lv = parseFloat(L), cv = parseFloat(C);
    if (!isNaN(lv) && !isNaN(cv) && lv > 0 && cv > 0) {
      const f = 1 / (2 * Math.PI * Math.sqrt(lv * cv));
      setResult("Resonance Frequency: " + f.toFixed(4) + " Hz");
    } else setResult("Enter valid positive values.");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Resonance Frequency Calculator</h1>
      <p className="text-gray-400 mb-6">f = 1 / (2π√(LC))</p>
      <label className="block mb-2 text-gray-300">Inductance L (H)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={L} onChange={e=>setL(e.target.value)} placeholder="e.g. 0.001" />
      <label className="block mb-2 text-gray-300">Capacitance C (F)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={C} onChange={e=>setC(e.target.value)} placeholder="e.g. 0.000001" />
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold" onClick={calc}>Calculate</button>
      {result && <div className="mt-6 p-4 bg-gray-800 rounded text-green-400 font-mono">{result}</div>}
    </main>
  );
}
