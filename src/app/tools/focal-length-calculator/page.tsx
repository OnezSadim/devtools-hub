"use client";
import { useState } from "react";
export default function FocalLengthCalculator() {
  const [n, setN] = useState("1.5");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [result, setResult] = useState("");
  function calc() {
    const nv = parseFloat(n), r1v = parseFloat(r1), r2v = parseFloat(r2);
    if (isNaN(nv) || isNaN(r1v) || isNaN(r2v)) { setResult("Enter all values."); return; }
    const inv_f = (nv - 1) * (1/r1v - 1/r2v);
    if (inv_f === 0) { setResult("Flat lens — infinite focal length."); return; }
    const f = 1/inv_f;
    setResult("Focal length f: " + f.toFixed(4) + " m (" + (f*1000).toFixed(2) + " mm)");
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Focal Length Calculator</h1>
        <p className="text-gray-400 mb-6">Lensmaker equation: 1/f = (n-1)(1/R1 - 1/R2)</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          {[{label:"Refractive Index n",val:n,set:setN},{label:"Radius of Curvature R1 (m)",val:r1,set:setR1},{label:"Radius of Curvature R2 (m)",val:r2,set:setR2}].map(({label,val,set})=>(
            <div key={label}><label className="block text-sm text-gray-400 mb-1">{label}</label><input value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          ))}
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
