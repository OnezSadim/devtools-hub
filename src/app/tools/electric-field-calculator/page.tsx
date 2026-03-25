"use client";
import { useState } from "react";
export default function ElectricField() {
  const [mode, setMode] = useState("force");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const k = 8.9875e9;
  const calculate = () => {
    if (mode === "force") {
      const F = parseFloat(a), q = parseFloat(b);
      if (isNaN(F) || isNaN(q)) { setResult("Enter both values."); return; }
      setResult("E = " + (F/q).toExponential(4) + " N/C");
    } else {
      const Q = parseFloat(a), r = parseFloat(b);
      if (isNaN(Q) || isNaN(r)) { setResult("Enter both values."); return; }
      setResult("E = " + (k*Q/(r*r)).toExponential(4) + " N/C");
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Field Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate electric field strength.</p>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setMode("force")} className={"px-4 py-1 rounded " + (mode==="force"?"bg-blue-600":"bg-gray-700")}>E = F/q</button>
          <button onClick={()=>setMode("point")} className={"px-4 py-1 rounded " + (mode==="point"?"bg-blue-600":"bg-gray-700")}>E = kQ/r²</button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">{mode==="force"?"Force F (N)":"Charge Q (C)"}</label>
            <input type="number" value={a} onChange={e=>setA(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">{mode==="force"?"Charge q (C)":"Distance r (m)"}</label>
            <input type="number" value={b} onChange={e=>setB(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
          </div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-xl font-mono text-green-400">{result}</div>}
        </div>
      </div>
    </main>
  );
}
