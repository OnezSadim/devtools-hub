"use client";
import { useState } from "react";

export default function ScientificNotation() {
  const [standard, setStandard] = useState("");
  const [sci, setSci] = useState("");

  const handleStandard = (v) => {
    setStandard(v);
    const n = parseFloat(v);
    if (!isNaN(n)) setSci(n.toExponential());
    else setSci("");
  };

  const handleSci = (v) => {
    setSci(v);
    const n = parseFloat(v);
    if (!isNaN(n)) setStandard(n.toString());
    else setStandard("");
  };

  const n = parseFloat(standard);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Scientific Notation Converter</h1>
        <p className="text-gray-400 mb-6">Convert between standard and scientific notation.</p>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded p-4">
            <label className="text-gray-400 text-sm mb-1 block">Standard Notation</label>
            <input className="w-full bg-gray-700 rounded p-2 text-white" value={standard} onChange={e=>handleStandard(e.target.value)} placeholder="e.g. 0.0000123" />
          </div>
          <div className="text-center text-gray-500 text-2xl">⇅</div>
          <div className="bg-gray-800 rounded p-4">
            <label className="text-gray-400 text-sm mb-1 block">Scientific Notation</label>
            <input className="w-full bg-gray-700 rounded p-2 text-white" value={sci} onChange={e=>handleSci(e.target.value)} placeholder="e.g. 1.23e-5" />
          </div>
        </div>
        {!isNaN(n) && n !== 0 && (
          <div className="mt-6 bg-gray-800 rounded p-4 space-y-2">
            <div className="flex justify-between"><span className="text-gray-400">Exponential</span><span className="font-mono">{n.toExponential()}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Fixed (6 dec)</span><span className="font-mono">{n.toFixed(6)}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Precision (4 sig)</span><span className="font-mono">{n.toPrecision(4)}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}