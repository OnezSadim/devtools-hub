"use client";
import { useState } from "react";

const MATERIALS: Record<string,number> = {
  "Water": 4186,
  "Ice": 2090,
  "Steam": 2010,
  "Aluminum": 897,
  "Copper": 385,
  "Iron": 444,
  "Gold": 129,
  "Lead": 128,
  "Air (dry)": 1005,
  "Ethanol": 2440,
  "Custom": 0,
};

export default function SpecificHeatCalculator() {
  const [solve, setSolve] = useState<"Q"|"m"|"c"|"dT">("Q");
  const [material, setMaterial] = useState("Water");
  const [vals, setVals] = useState<Record<string,string>>({});
  const [result, setResult] = useState<string|null>(null);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setVals(p=>({...p,[k]:v}));

  const getC = () => material === "Custom" ? parseFloat(vals.c||"0") : MATERIALS[material];

  const calculate = () => {
    const Q = parseFloat(vals.Q||"0");
    const m = parseFloat(vals.m||"0");
    const c = getC();
    const dT = parseFloat(vals.dT||"0");
    if (solve==="Q") {
      if (!m||!c||!dT) { setError("Fill m, c, ΔT"); return; }
      setResult(`Q = ${(m*c*dT).toFixed(2)} J`);
    } else if (solve==="m") {
      if (!Q||!c||!dT) { setError("Fill Q, c, ΔT"); return; }
      setResult(`m = ${(Q/(c*dT)).toFixed(4)} kg`);
    } else if (solve==="c") {
      if (!Q||!m||!dT) { setError("Fill Q, m, ΔT"); return; }
      setResult(`c = ${(Q/(m*dT)).toFixed(2)} J/(kg·K)`);
    } else {
      if (!Q||!m||!c) { setError("Fill Q, m, c"); return; }
      setResult(`ΔT = ${(Q/(m*c)).toFixed(4)} K`);
    }
    setError("");
  };

  const labels: Record<string,string> = { Q:"Heat Energy Q (J)", m:"Mass m (kg)", c:"Specific Heat c (J/kg·K)", dT:"Temp Change ΔT (K)" };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Specific Heat Calculator</h1>
        <p className="text-gray-400 mb-6">Solve for Q, mass, specific heat, or temperature change using Q = mcΔT.</p>
        <div className="mb-4">
          <label className="text-sm text-gray-400">Solve for</label>
          <div className="flex gap-2 mt-1">
            {(["Q","m","c","dT"] as const).map(s=>(
              <button key={s} onClick={()=>{ setSolve(s); setVals({}); setResult(null); }}
                className={`px-3 py-1.5 rounded text-sm font-medium ${solve===s?"bg-orange-600":"bg-gray-800 hover:bg-gray-700"}`}>{s=="dT"?"ΔT":s}</button>
            ))}
          </div>
        </div>
        <div className="space-y-3 mb-4">
          <div>
            <label className="text-sm text-gray-400">Material</label>
            <select className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={material} onChange={e=>setMaterial(e.target.value)}>
              {Object.keys(MATERIALS).map(m=><option key={m}>{m}</option>)}
            </select>
          </div>
          {["Q","m","c","dT"].filter(k => k !== solve).map(k => (
            (k !== "c" || material === "Custom") ?
            <div key={k}><label className="text-sm text-gray-400">{labels[k]}</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={vals[k]||""} onChange={e=>set(k,e.target.value)}/></div>
            : <div key={k} className="p-3 bg-gray-800 rounded text-sm">c ({material}) = <span className="text-orange-300 font-mono">{MATERIALS[material]} J/(kg·K)</span></div>
          ))}
        </div>
        <button onClick={calculate} className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded font-semibold">Calculate</button>
        {error && <div className="mt-3 text-red-400 text-sm">{error}</div>}
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-xl font-mono text-center">{result}</div>}
        <div className="mt-6 text-xs text-gray-500">Formula: Q = m · c · ΔT</div>
      </div>
    </main>
  );
}
