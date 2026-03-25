"use client";
import { useState } from "react";

export default function CarnotEfficiencyCalculator() {
  const [TH, setTH] = useState("");
  const [TC, setTC] = useState("");
  const [unit, setUnit] = useState<"K"|"C">("C");
  const [result, setResult] = useState<{eff:number,W:number|null}|null>(null);
  const [Qh, setQh] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    let th = parseFloat(TH);
    let tc = parseFloat(TC);
    if (isNaN(th)||isNaN(tc)) { setError("Enter both temperatures"); setResult(null); return; }
    if (unit === "C") { th += 273.15; tc += 273.15; }
    if (tc <= 0 || th <= 0) { setError("Temperatures must be > 0 K"); setResult(null); return; }
    if (tc >= th) { setError("Hot reservoir must be hotter than cold"); setResult(null); return; }
    const eff = 1 - tc/th;
    const qh = parseFloat(Qh);
    const W = !isNaN(qh) && qh > 0 ? eff * qh : null;
    setResult({ eff, W });
    setError("");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Carnot Efficiency Calculator</h1>
        <p className="text-gray-400 mb-6">Find the maximum theoretical efficiency of a heat engine operating between two temperatures.</p>
        <div className="flex gap-2 mb-4">
          {(["C","K"] as const).map(u=>(
            <button key={u} onClick={()=>setUnit(u)} className={`px-4 py-2 rounded text-sm font-medium ${unit===u?"bg-orange-600":"bg-gray-800 hover:bg-gray-700"}`}>°{u}</button>
          ))}
        </div>
        <div className="space-y-3 mb-4">
          <div><label className="text-sm text-gray-400">Hot Reservoir Temperature T_H ({unit=="C"?"°C":"K"})</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={TH} onChange={e=>setTH(e.target.value)} placeholder={unit=="C"?"500":"773"}/></div>
          <div><label className="text-sm text-gray-400">Cold Reservoir Temperature T_C ({unit=="C"?"°C":"K"})</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={TC} onChange={e=>setTC(e.target.value)} placeholder={unit=="C"?"25":"298"}/></div>
          <div><label className="text-sm text-gray-400">Heat Input Q_H (J) — optional</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={Qh} onChange={e=>setQh(e.target.value)} placeholder="e.g. 1000"/></div>
        </div>
        <button onClick={calculate} className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded font-semibold">Calculate</button>
        {error && <div className="mt-3 text-red-400 text-sm">{error}</div>}
        {result && (
          <div className="mt-4 space-y-2">
            <div className="p-4 bg-gray-800 rounded text-center"><div className="text-gray-400 text-sm mb-1">Carnot Efficiency</div><div className="text-4xl font-bold text-orange-400">{(result.eff*100).toFixed(2)}%</div></div>
            {result.W !== null && <div className="p-3 bg-gray-800 rounded"><span className="text-gray-400 text-sm">Max Work Output W:</span><div className="text-xl font-mono">{result.W.toFixed(2)} J</div></div>}
          </div>
        )}
        <div className="mt-6 text-xs text-gray-500">η = 1 − T_C / T_H &nbsp;(temperatures in Kelvin)</div>
      </div>
    </main>
  );
}
