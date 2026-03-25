"use client";
import { useState } from "react";

export default function DopplerEffectCalculator() {
  const [fs, setFs] = useState("");
  const [v, setV] = useState("343");
  const [vs, setVs] = useState("0");
  const [vo, setVo] = useState("0");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const fsv=parseFloat(fs),vv=parseFloat(v),vsv=parseFloat(vs),vov=parseFloat(vo);
    if ([fsv,vv,vsv,vov].some(isNaN)) { setResult("Enter valid numbers"); return; }
    const fo = fsv * (vv + vov) / (vv + vsv);
    setResult(`Observed frequency fₒ = ${fo.toFixed(4)} Hz`);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Doppler Effect Calculator</h1>
        <p className="text-gray-400 mb-6">fₒ = fₛ × (v + vₒ) / (v + vₛ)</p>
        {[
          ["Source frequency fₛ (Hz)",fs,setFs],
          ["Speed of sound v (m/s)",v,setV],
          ["Observer velocity vₒ (m/s, + toward source)",vo,setVo],
          ["Source velocity vₛ (m/s, + away from observer)",vs,setVs]
        ].map(([lbl,val,set])=>(
          <div key={lbl as string} className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">{lbl as string}</label>
            <input value={val as string} onChange={e=>(set as (v:string)=>void)(e.target.value)} className="w-full bg-gray-800 rounded p-3" />
          </div>
        ))}
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Calculate</button>
        {result && <div className="mt-4 bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
