"use client";
import { useState } from "react";
export default function LensEquationCalculator() {
  const [f, setF] = useState("");
  const [do_, setDo] = useState("");
  const [di, setDi] = useState("");
  const [result, setResult] = useState("");
  function calc() {
    const fv = parseFloat(f), dov = parseFloat(do_), div = parseFloat(di);
    if (!isNaN(fv) && !isNaN(dov) && isNaN(div)) {
      const r = 1/(1/fv - 1/dov);
      setResult("Image distance: " + r.toFixed(4) + " m");
    } else if (!isNaN(fv) && isNaN(dov) && !isNaN(div)) {
      const r = 1/(1/fv - 1/div);
      setResult("Object distance: " + r.toFixed(4) + " m");
    } else if (isNaN(fv) && !isNaN(dov) && !isNaN(div)) {
      const r = 1/(1/dov + 1/div);
      setResult("Focal length: " + r.toFixed(4) + " m");
    } else {
      setResult("Enter exactly two values.");
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Lens Equation Calculator</h1>
        <p className="text-gray-400 mb-6">1/f = 1/do + 1/di — enter any two values</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Focal Length f (m)</label>
            <input value={f} onChange={e=>setF(e.target.value)} placeholder="leave blank to solve" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Object Distance do (m)</label>
            <input value={do_} onChange={e=>setDo(e.target.value)} placeholder="leave blank to solve" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Image Distance di (m)</label>
            <input value={di} onChange={e=>setDi(e.target.value)} placeholder="leave blank to solve" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
