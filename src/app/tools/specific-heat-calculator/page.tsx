"use client";
import { useState } from "react";

export default function SpecificHeatCalculator() {
  const [solve, setSolve] = useState("Q");
  const [Q, setQ] = useState("");
  const [m, setM] = useState("");
  const [c, setC] = useState("");
  const [dT, setDT] = useState("");
  const [result, setResult] = useState("");

  const presets: Record<string,number> = { Water: 4186, Aluminum: 900, Iron: 450, Copper: 385, Gold: 129, Ice: 2090, Steam: 2010 };

  const calc = () => {
    try {
      const qv = parseFloat(Q), mv = parseFloat(m), cv = parseFloat(c), dtv = parseFloat(dT);
      if (solve === "Q") setResult(`Q = ${(mv*cv*dtv).toFixed(4)} J`);
      else if (solve === "m") setResult(`m = ${(qv/(cv*dtv)).toFixed(4)} kg`);
      else if (solve === "c") setResult(`c = ${(qv/(mv*dtv)).toFixed(4)} J/(kg·K)`);
      else setResult(`ΔT = ${(qv/(mv*cv)).toFixed(4)} K`);
    } catch { setResult("Invalid input"); }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Specific Heat Calculator</h1>
        <p className="text-gray-400 mb-6">Q = mcΔT — solve for heat energy, mass, specific heat, or temperature change.</p>
        <div className="mb-4">
          <label className="text-gray-400 text-sm">Solve for:</label>
          <div className="flex gap-2 mt-1">
            {["Q","m","c","ΔT"].map((v,i) => (
              <button key={v} onClick={() => { setSolve(["Q","m","c","dT"][i]); setResult(""); }}
                className={"px-4 py-2 rounded font-mono " + (solve===["Q","m","c","dT"][i] ? "bg-red-600" : "bg-gray-800 hover:bg-gray-700")}>{v}</button>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="text-gray-400 text-sm">Presets (c):</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {Object.entries(presets).map(([name,val]) => (
              <button key={name} onClick={() => setC(String(val))}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">{name} ({val})</button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {solve !== "Q" && <input className="w-full bg-gray-800 p-3 rounded" placeholder="Heat Q (J)" value={Q} onChange={e=>setQ(e.target.value)} />}
          {solve !== "m" && <input className="w-full bg-gray-800 p-3 rounded" placeholder="Mass m (kg)" value={m} onChange={e=>setM(e.target.value)} />}
          {solve !== "c" && <input className="w-full bg-gray-800 p-3 rounded" placeholder="Specific heat c (J/kg·K)" value={c} onChange={e=>setC(e.target.value)} />}
          {solve !== "dT" && <input className="w-full bg-gray-800 p-3 rounded" placeholder="Temperature change ΔT (K)" value={dT} onChange={e=>setDT(e.target.value)} />}
          <button onClick={calc} className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 p-4 rounded text-green-400 font-mono">{result}</div>}
        </div>
      </div>
    </main>
  );
}
