"use client";
import { useState } from "react";
export default function PipeFlowCalculator() {
  const [f, setF] = useState("");
  const [L, setL] = useState("");
  const [D, setD] = useState("");
  const [v, setV] = useState("");
  const [result, setResult] = useState("");
  const g = 9.81;
  const calculate = () => {
    const fn = parseFloat(f), Ln = parseFloat(L), Dn = parseFloat(D), vn = parseFloat(v);
    if ([fn,Ln,Dn,vn].some(isNaN) || Dn === 0) { setResult("Invalid input"); return; }
    const hf = fn * (Ln/Dn) * (vn*vn)/(2*g);
    setResult("Head Loss = " + hf.toFixed(4) + " m");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Pipe Flow Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate head loss using the Darcy-Weisbach equation.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        {[["Friction Factor (f)",f,setF],["Pipe Length (m)",L,setL],["Pipe Diameter (m)",D,setD],["Flow Velocity (m/s)",v,setV]].map(([label,val,setter])=>(
          <div key={label}>
            <label className="block text-sm text-gray-400 mb-1">{label}</label>
            <input type="number" value={val} onChange={e=>setter(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
        ))}
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-center text-xl font-bold text-green-400">{result}</div>}
      </div>
    </main>
  );
}
