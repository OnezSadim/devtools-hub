"use client";
import { useState } from "react";

export default function EntropyCalculator() {
  const [mode, setMode] = useState<"isothermal"|"heating">("isothermal");
  const [vals, setVals] = useState<Record<string,string>>({});
  const [result, setResult] = useState<string|null>(null);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setVals(p=>({...p,[k]:v}));

  const calculate = () => {
    if (mode === "isothermal") {
      const Q = parseFloat(vals.Q||"0");
      const T = parseFloat(vals.T||"0");
      if (!Q||!T) { setError("Fill all fields"); setResult(null); return; }
      if (T <= 0) { setError("Temperature must be > 0 K"); setResult(null); return; }
      setResult(`ΔS = ${(Q/T).toFixed(6)} J/K`);
    } else {
      const m = parseFloat(vals.m||"0");
      const c = parseFloat(vals.c||"0");
      const T1 = parseFloat(vals.T1||"0");
      const T2 = parseFloat(vals.T2||"0");
      if (!m||!c||!T1||!T2) { setError("Fill all fields"); setResult(null); return; }
      if (T1<=0||T2<=0) { setError("Temperatures must be > 0 K"); setResult(null); return; }
      const dS = m * c * Math.log(T2/T1);
      setResult(`ΔS = ${dS.toFixed(6)} J/K`);
    }
    setError("");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Entropy Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate entropy change for thermodynamic processes.</p>
        <div className="flex gap-2 mb-6">
          {(["isothermal","heating"] as const).map(m=>(
            <button key={m} onClick={()=>{ setMode(m); setVals({}); setResult(null); setError(""); }}
              className={`px-4 py-2 rounded text-sm font-medium capitalize ${mode===m?"bg-orange-600":"bg-gray-800 hover:bg-gray-700"}`}>{m=="isothermal"?"Isothermal Process":"Heating/Cooling"}</button>
          ))}
        </div>
        <div className="space-y-3 mb-4">
          {mode === "isothermal" ? (<>
            <div><label className="text-sm text-gray-400">Heat Added Q (J)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={vals.Q||""} onChange={e=>set("Q",e.target.value)} placeholder="1000"/></div>
            <div><label className="text-sm text-gray-400">Temperature T (K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={vals.T||""} onChange={e=>set("T",e.target.value)} placeholder="300"/></div>
          </>) : (<>
            <div><label className="text-sm text-gray-400">Mass m (kg)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={vals.m||""} onChange={e=>set("m",e.target.value)} placeholder="1"/></div>
            <div><label className="text-sm text-gray-400">Specific Heat c (J/kg·K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={vals.c||""} onChange={e=>set("c",e.target.value)} placeholder="4186"/></div>
            <div><label className="text-sm text-gray-400">Initial Temp T₁ (K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={vals.T1||""} onChange={e=>set("T1",e.target.value)} placeholder="273"/></div>
            <div><label className="text-sm text-gray-400">Final Temp T₂ (K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={vals.T2||""} onChange={e=>set("T2",e.target.value)} placeholder="373"/></div>
          </>)}
        </div>
        <button onClick={calculate} className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded font-semibold">Calculate</button>
        {error && <div className="mt-3 text-red-400 text-sm">{error}</div>}
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-xl font-mono text-center">{result}</div>}
        <div className="mt-6 text-xs text-gray-500">
          Isothermal: ΔS = Q/T &nbsp;|&nbsp; Heating: ΔS = m·c·ln(T₂/T₁)
        </div>
      </div>
    </main>
  );
}
