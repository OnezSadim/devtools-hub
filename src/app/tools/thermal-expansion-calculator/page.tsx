"use client";
import { useState } from "react";

const MATERIALS: Record<string,[number,string]> = {
  "Aluminum": [23.1e-6, "Metal"],
  "Copper": [17e-6, "Metal"],
  "Steel": [12e-6, "Metal"],
  "Iron": [11.8e-6, "Metal"],
  "Glass": [8.5e-6, "Non-metal"],
  "Concrete": [12e-6, "Non-metal"],
  "PVC": [52e-6, "Polymer"],
  "Custom": [0, "Custom"],
};

export default function ThermalExpansionCalculator() {
  const [material, setMaterial] = useState("Aluminum");
  const [customAlpha, setCustomAlpha] = useState("");
  const [L0, setL0] = useState("");
  const [dT, setDT] = useState("");
  const [result, setResult] = useState<{dL:number,Lf:number,dV:number}|null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const alpha = material === "Custom" ? parseFloat(customAlpha)*1e-6 : MATERIALS[material][0];
    const l0 = parseFloat(L0);
    const dt = parseFloat(dT);
    if (!alpha||isNaN(l0)||isNaN(dt)) { setError("Fill all fields"); setResult(null); return; }
    const dL = alpha * l0 * dt;
    const Lf = l0 + dL;
    const dV = 3 * alpha * Math.pow(l0,3) * dt;
    setResult({ dL, Lf, dV });
    setError("");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thermal Expansion Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate how materials expand or contract with temperature change.</p>
        <div className="space-y-3 mb-4">
          <div>
            <label className="text-sm text-gray-400">Material</label>
            <select className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={material} onChange={e=>setMaterial(e.target.value)}>
              {Object.keys(MATERIALS).map(m=><option key={m}>{m}</option>)}
            </select>
          </div>
          {material === "Custom" && (
            <div><label className="text-sm text-gray-400">Custom α (×10⁻⁶ /K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={customAlpha} onChange={e=>setCustomAlpha(e.target.value)} placeholder="e.g. 15"/></div>
          )}
          <div><label className="text-sm text-gray-400">Initial Length L₀ (m)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={L0} onChange={e=>setL0(e.target.value)} placeholder="1.0"/></div>
          <div><label className="text-sm text-gray-400">Temperature Change ΔT (°C or K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={dT} onChange={e=>setDT(e.target.value)} placeholder="100"/></div>
        </div>
        {material !== "Custom" && <p className="text-xs text-gray-500 mb-3">α = {(MATERIALS[material][0]*1e6).toFixed(1)} × 10⁻⁶ /K ({MATERIALS[material][1]})</p>}
        <button onClick={calculate} className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded font-semibold">Calculate</button>
        {error && <div className="mt-3 text-red-400 text-sm">{error}</div>}
        {result && (
          <div className="mt-4 space-y-2">
            <div className="p-3 bg-gray-800 rounded"><span className="text-gray-400 text-sm">Length Change ΔL:</span><div className="text-xl font-mono">{result.dL.toFixed(6)} m</div></div>
            <div className="p-3 bg-gray-800 rounded"><span className="text-gray-400 text-sm">Final Length Lf:</span><div className="text-xl font-mono">{result.Lf.toFixed(6)} m</div></div>
            <div className="p-3 bg-gray-800 rounded"><span className="text-gray-400 text-sm">Volume Change ΔV (cube):</span><div className="text-xl font-mono">{result.dV.toExponential(4)} m³</div></div>
          </div>
        )}
        <div className="mt-6 text-xs text-gray-500">ΔL = α · L₀ · ΔT &nbsp;|&nbsp; ΔV ≈ 3α · V₀ · ΔT</div>
      </div>
    </main>
  );
}
