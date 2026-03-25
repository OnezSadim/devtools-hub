"use client";
import { useState } from "react";

export default function HeatTransferCalculator() {
  const [mode, setMode] = useState<'conduction'|'convection'|'radiation'>('conduction');
  const [inputs, setInputs] = useState<Record<string,string>>({});
  const [result, setResult] = useState<string|null>(null);

  const set = (k: string, v: string) => setInputs(p => ({...p, [k]: v}));

  const calculate = () => {
    if (mode === 'conduction') {
      const k = parseFloat(inputs.k||'0');
      const A = parseFloat(inputs.A||'0');
      const dT = parseFloat(inputs.dT||'0');
      const dx = parseFloat(inputs.dx||'1');
      if (!k||!A||!dT||!dx) { setResult('Fill all fields'); return; }
      setResult(`Q = ${(k * A * dT / dx).toFixed(4)} W`);
    } else if (mode === 'convection') {
      const h = parseFloat(inputs.h||'0');
      const A = parseFloat(inputs.A||'0');
      const dT = parseFloat(inputs.dT||'0');
      if (!h||!A||!dT) { setResult('Fill all fields'); return; }
      setResult(`Q = ${(h * A * dT).toFixed(4)} W`);
    } else {
      const eps = parseFloat(inputs.eps||'0');
      const A = parseFloat(inputs.A||'0');
      const T = parseFloat(inputs.T||'0');
      if (!eps||!A||!T) { setResult('Fill all fields'); return; }
      const sigma = 5.67e-8;
      setResult(`Q = ${(eps * sigma * A * Math.pow(T,4)).toExponential(4)} W`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Heat Transfer Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate conduction, convection, and radiation heat transfer.</p>
        <div className="flex gap-2 mb-6">
          {(["conduction","convection","radiation"] as const).map(m => (
            <button key={m} onClick={() => { setMode(m); setInputs({}); setResult(null); }}
              className={`px-4 py-2 rounded capitalize text-sm font-medium ${
                mode===m ? 'bg-orange-600' : 'bg-gray-800 hover:bg-gray-700'}`}>{m}</button>
          ))}
        </div>
        <div className="space-y-3 mb-4">
          {mode === 'conduction' && (<>
            <div><label className="text-sm text-gray-400">Thermal Conductivity k (W/m·K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.k||''} onChange={e=>set('k',e.target.value)} placeholder="237"/></div>
            <div><label className="text-sm text-gray-400">Area A (m²)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.A||''} onChange={e=>set('A',e.target.value)} placeholder="1"/></div>
            <div><label className="text-sm text-gray-400">Temperature Diff ΔT (K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.dT||''} onChange={e=>set('dT',e.target.value)} placeholder="50"/></div>
            <div><label className="text-sm text-gray-400">Thickness Δx (m)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.dx||''} onChange={e=>set('dx',e.target.value)} placeholder="0.01"/></div>
          </>)}
          {mode === 'convection' && (<>
            <div><label className="text-sm text-gray-400">Convection Coeff h (W/m²·K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.h||''} onChange={e=>set('h',e.target.value)} placeholder="25"/></div>
            <div><label className="text-sm text-gray-400">Area A (m²)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.A||''} onChange={e=>set('A',e.target.value)} placeholder="1"/></div>
            <div><label className="text-sm text-gray-400">Temperature Diff ΔT (K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.dT||''} onChange={e=>set('dT',e.target.value)} placeholder="30"/></div>
          </>)}
          {mode === 'radiation' && (<>
            <div><label className="text-sm text-gray-400">Emissivity ε (0–1)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.eps||''} onChange={e=>set('eps',e.target.value)} placeholder="0.9"/></div>
            <div><label className="text-sm text-gray-400">Area A (m²)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.A||''} onChange={e=>set('A',e.target.value)} placeholder="1"/></div>
            <div><label className="text-sm text-gray-400">Temperature T (K)</label><input className="w-full mt-1 bg-gray-800 rounded px-3 py-2 text-white" value={inputs.T||''} onChange={e=>set('T',e.target.value)} placeholder="300"/></div>
          </>)}
        </div>
        <button onClick={calculate} className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded font-semibold">Calculate</button>
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-xl font-mono text-center">{result}</div>}
        <div className="mt-6 text-xs text-gray-500">
          <p>Conduction: Q = k·A·ΔT/Δx &nbsp;|&nbsp; Convection: Q = h·A·ΔT &nbsp;|&nbsp; Radiation: Q = ε·σ·A·T⁴</p>
        </div>
      </div>
    </main>
  );
}
