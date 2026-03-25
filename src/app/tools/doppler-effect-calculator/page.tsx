"use client";
import { useState } from "react";
export default function DopplerEffectCalculator() {
  const [fs, setFs] = useState("");
  const [v, setV] = useState("343");
  const [vs, setVs] = useState("0");
  const [vr, setVr] = useState("0");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const fsv = parseFloat(fs), vv = parseFloat(v), vsv = parseFloat(vs), vrv = parseFloat(vr);
    if ([fsv,vv,vsv,vrv].some(isNaN)) { setResult("Please enter valid numbers"); return; }
    const fo = fsv * (vv + vrv) / (vv + vsv);
    setResult("Observed frequency: " + fo.toFixed(4) + " Hz");
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Doppler Effect Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate observed frequency when source or observer is moving.</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div><label className="block text-sm text-gray-400 mb-1">Source Frequency fₛ (Hz)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={fs} onChange={e => setFs(e.target.value)} placeholder="e.g. 440" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Speed of Sound v (m/s)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={v} onChange={e => setV(e.target.value)} /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Source Velocity vₛ (m/s, + away from observer)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={vs} onChange={e => setVs(e.target.value)} /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Observer Velocity vᵣ (m/s, + toward source)</label>
            <input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={vr} onChange={e => setVr(e.target.value)} /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-medium">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-lg font-mono">{result}</div>}
        </div>
      </div>
    </div>
  );
}
