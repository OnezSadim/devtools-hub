
"use client";
import { useState } from "react";
export default function PowerFactor() {
  const [v, setV] = useState("");
  const [i, setI] = useState("");
  const [phi, setPhi] = useState("");
  const [result, setResult] = useState<{p:string,q:string,s:string,pf:string}|null>(null);
  const calc = () => {
    const V = parseFloat(v), I = parseFloat(i), angle = parseFloat(phi) * Math.PI / 180;
    if (isNaN(V) || isNaN(I) || isNaN(angle)) { setResult(null); return; }
    const S = V * I;
    const P = S * Math.cos(angle);
    const Q = S * Math.sin(angle);
    const pf = Math.cos(angle);
    setResult({ p: P.toFixed(2)+" W", q: Q.toFixed(2)+" VAR", s: S.toFixed(2)+" VA", pf: pf.toFixed(4) });
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Power Factor Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate real, reactive, and apparent power</p>
      <div className="bg-gray-900 rounded-xl p-6 space-y-4">
        <div><label className="block text-sm text-gray-400 mb-1">Voltage (V)</label><input type="number" value={v} onChange={e => setV(e.target.value)} placeholder="Volts" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Current (A)</label><input type="number" value={i} onChange={e => setI(e.target.value)} placeholder="Amps" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" /></div>
        <div><label className="block text-sm text-gray-400 mb-1">Phase Angle (degrees)</label><input type="number" value={phi} onChange={e => setPhi(e.target.value)} placeholder="e.g. 30" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2" /></div>
        <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Calculate</button>
        {result && (
          <div className="bg-gray-800 rounded-lg p-4 space-y-2 font-mono">
            <div className="text-green-400">Real Power (P): {result.p}</div>
            <div className="text-yellow-400">Reactive Power (Q): {result.q}</div>
            <div className="text-blue-400">Apparent Power (S): {result.s}</div>
            <div className="text-purple-400">Power Factor: {result.pf}</div>
          </div>
        )}
      </div>
    </main>
  );
}
