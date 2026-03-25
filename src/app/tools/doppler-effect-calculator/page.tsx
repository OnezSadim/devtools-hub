"use client";
import { useState } from "react";
export default function DopplerEffectCalculator() {
  const [fs, setFs] = useState("");
  const [vs, setVs] = useState("");
  const [vo, setVo] = useState("");
  const [v, setV] = useState("343");
  const [result, setResult] = useState("");
  const calc = () => {
    const fsv = parseFloat(fs), vsv = parseFloat(vs), vov = parseFloat(vo), vv = parseFloat(v);
    if (!isNaN(fsv) && !isNaN(vsv) && !isNaN(vov) && !isNaN(vv)) {
      const fo = fsv * (vv + vov) / (vv + vsv);
      setResult("Observed Frequency: " + fo.toFixed(4) + " Hz");
    } else setResult("Enter valid values.");
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Doppler Effect Calculator</h1>
      <p className="text-gray-400 mb-6">f₀ = fₛ × (v + v₀) / (v + vₛ)</p>
      <label className="block mb-2 text-gray-300">Source Frequency (Hz)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={fs} onChange={e=>setFs(e.target.value)} placeholder="e.g. 500" />
      <label className="block mb-2 text-gray-300">Source Velocity (m/s, + away)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={vs} onChange={e=>setVs(e.target.value)} placeholder="e.g. 0" />
      <label className="block mb-2 text-gray-300">Observer Velocity (m/s, + toward)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={vo} onChange={e=>setVo(e.target.value)} placeholder="e.g. 0" />
      <label className="block mb-2 text-gray-300">Speed of Sound (m/s)</label>
      <input className="w-full bg-gray-800 rounded p-2 mb-4" value={v} onChange={e=>setV(e.target.value)} />
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold" onClick={calc}>Calculate</button>
      {result && <div className="mt-6 p-4 bg-gray-800 rounded text-green-400 font-mono">{result}</div>}
    </main>
  );
}
