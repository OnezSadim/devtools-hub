"use client";
import { useState } from "react";
export default function IdealGasLawCalculator() {
  const [solve, setSolve] = useState("P");
  const [P, setP] = useState("");
  const [V, setV] = useState("");
  const [n, setN] = useState("");
  const [T, setT] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const R = 8.314;
  const calc = () => {
    const pv = parseFloat(P), vv = parseFloat(V), nv = parseFloat(n), tv = parseFloat(T);
    if (solve === "P") {
      if (isNaN(vv)||isNaN(nv)||isNaN(tv)) { setResult("Enter V, n, T"); return; }
      setResult(`P = ${(nv*R*tv/vv).toFixed(4)} Pa`);
    } else if (solve === "V") {
      if (isNaN(pv)||isNaN(nv)||isNaN(tv)) { setResult("Enter P, n, T"); return; }
      setResult(`V = ${(nv*R*tv/pv).toFixed(6)} m³`);
    } else if (solve === "n") {
      if (isNaN(pv)||isNaN(vv)||isNaN(tv)) { setResult("Enter P, V, T"); return; }
      setResult(`n = ${(pv*vv/(R*tv)).toFixed(4)} mol`);
    } else {
      if (isNaN(pv)||isNaN(vv)||isNaN(nv)) { setResult("Enter P, V, n"); return; }
      setResult(`T = ${(pv*vv/(nv*R)).toFixed(2)} K`);
    }
  };
  const fields = [
    {label:"Pressure P (Pa)", val:P, set:setP, skip:"P"},
    {label:"Volume V (m³)", val:V, set:setV, skip:"V"},
    {label:"Moles n (mol)", val:n, set:setN, skip:"n"},
    {label:"Temperature T (K)", val:T, set:setT, skip:"T"},
  ];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Ideal Gas Law Calculator</h1>
      <p className="text-gray-400 mb-6">PV = nRT &mdash; solve for any variable</p>
      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-1">Solve for:</label>
        <div className="flex gap-2">
          {["P","V","n","T"].map(v => (
            <button key={v} onClick={()=>setSolve(v)}
              className={`px-4 py-2 rounded font-semibold ${solve===v?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{v}</button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {fields.filter(f=>f.skip!==solve).map(f=>(
          <div key={f.skip}><label className="block text-sm text-gray-400 mb-1">{f.label}</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2" value={f.val} onChange={e=>f.set(e.target.value)} /></div>
        ))}
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono text-green-400">{result}</div>}
      </div>
    </main>
  );
}
