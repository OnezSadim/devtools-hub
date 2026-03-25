"use client";
import { useState } from "react";
export default function SnellsLawCalculator() {
  const [n1, setN1] = useState("1");
  const [n2, setN2] = useState("1.5");
  const [theta1, setTheta1] = useState("");
  const [result, setResult] = useState("");
  function calc() {
    const n1v = parseFloat(n1), n2v = parseFloat(n2), t1 = parseFloat(theta1);
    if (isNaN(n1v) || isNaN(n2v) || isNaN(t1)) { setResult("Enter all values."); return; }
    const sinT2 = (n1v * Math.sin(t1 * Math.PI/180)) / n2v;
    if (Math.abs(sinT2) > 1) {
      setResult("Total internal reflection — no refracted ray.");
    } else {
      const t2 = Math.asin(sinT2) * 180/Math.PI;
      setResult("Refraction angle θ2: " + t2.toFixed(4) + "°");
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Snell&#39;s Law Calculator</h1>
        <p className="text-gray-400 mb-6">n1 sin(θ1) = n2 sin(θ2)</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          {[{label:"Index n1",val:n1,set:setN1},{label:"Index n2",val:n2,set:setN2},{label:"Incident Angle θ1 (°)",val:theta1,set:setTheta1}].map(({label,val,set})=>(
            <div key={label}>
              <label className="block text-sm text-gray-400 mb-1">{label}</label>
              <input value={val} onChange={e=>set(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
            </div>
          ))}
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
