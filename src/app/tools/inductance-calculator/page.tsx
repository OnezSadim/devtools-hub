"use client";
import { useState } from "react";
export default function InductanceCalc() {
  const [freq, setFreq] = useState("");
  const [ind, setInd] = useState("");
  const [result, setResult] = useState("");
  const calculate = () => {
    const f = parseFloat(freq), l = parseFloat(ind);
    if (isNaN(f) || isNaN(l)) { setResult("Enter both frequency and inductance."); return; }
    const xl = 2 * Math.PI * f * l;
    setResult("XL = " + xl.toFixed(4) + " Ω");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Inductance Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate inductive reactance: X&#8343; = 2πfL</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Frequency (Hz)</label>
            <input type="number" value={freq} onChange={e=>setFreq(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Inductance (H)</label>
            <input type="number" value={ind} onChange={e=>setInd(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono text-green-400">{result}</div>}
        </div>
      </div>
    </main>
  );
}
