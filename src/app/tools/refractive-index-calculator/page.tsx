"use client";
import { useState } from "react";
export default function RefractiveIndexCalculator() {
  const [c, setC] = useState("299792458");
  const [v, setV] = useState("");
  const [n, setN] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const cv = parseFloat(c), vv = v ? parseFloat(v) : NaN, nv = n ? parseFloat(n) : NaN;
    if (isNaN(cv)) { setResult("Invalid speed of light"); return; }
    if (!isNaN(vv)) {
      setResult("Refractive index n = " + (cv/vv).toFixed(6));
    } else if (!isNaN(nv)) {
      setResult("Speed of light in medium = " + (cv/nv).toFixed(2) + " m/s");
    } else {
      setResult("Enter phase velocity or refractive index");
    }
  };
  const presets = [{label:"Vacuum",n:"1.000"},{label:"Air",n:"1.0003"},{label:"Water",n:"1.333"},{label:"Glass",n:"1.500"},{label:"Diamond",n:"2.417"}];
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Refractive Index Calculator</h1>
        <p className="text-gray-400 mb-6">n = c / v — Calculate refractive index from phase velocity or vice versa.</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {presets.map(p => <button key={p.label} onClick={() => setN(p.n)} className="bg-gray-700 hover:bg-gray-600 rounded px-3 py-1 text-sm">{p.label} (n={p.n})</button>)}
        </div>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div><label className="block text-sm text-gray-400 mb-1">Speed of Light c (m/s)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={c} onChange={e => setC(e.target.value)} /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Phase Velocity v (m/s)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={v} onChange={e => setV(e.target.value)} placeholder="leave blank to solve" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Refractive Index n</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={n} onChange={e => setN(e.target.value)} placeholder="leave blank to solve" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-medium">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-lg font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
