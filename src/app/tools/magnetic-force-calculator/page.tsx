"use client";
import { useState } from "react";
export default function MagneticForce() {
  const [q, setQ] = useState("");
  const [v, setV] = useState("");
  const [b, setB] = useState("");
  const [theta, setTheta] = useState("90");
  const [result, setResult] = useState("");
  const calculate = () => {
    const qn=parseFloat(q),vn=parseFloat(v),bn=parseFloat(b),th=parseFloat(theta);
    if ([qn,vn,bn,th].some(isNaN)) { setResult("Enter all values."); return; }
    const F = Math.abs(qn) * vn * bn * Math.sin(th * Math.PI / 180);
    setResult("F = " + F.toExponential(4) + " N");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Magnetic Force Calculator</h1>
        <p className="text-gray-400 mb-6">F = |q| × v × B × sin(θ)</p>
        <div className="space-y-4">
          {[["Charge q (C)",q,setQ],["Velocity v (m/s)",v,setV],["Magnetic Field B (T)",b,setB],["Angle θ (degrees)",theta,setTheta]].map(([label,val,setter]) => (
            <div key={label as string}>
              <label className="block text-sm text-gray-400 mb-1">{label as string}</label>
              <input type="number" value={val as string} onChange={e=>(setter as Function)(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
            </div>
          ))}
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono text-green-400">{result}</div>}
        </div>
      </div>
    </main>
  );
}
