"use client";
import { useState } from "react";
export default function DopplerEffectCalculator() {
  const [fs, setFs] = useState("");
  const [v, setV] = useState("343");
  const [vs, setVs] = useState("");
  const [vo, setVo] = useState("");
  const [approach, setApproach] = useState(true);
  const [result, setResult] = useState<string | null>(null);
  const calc = () => {
    const fsv = parseFloat(fs);
    const vv = parseFloat(v);
    const vsv = parseFloat(vs) || 0;
    const vov = parseFloat(vo) || 0;
    if (isNaN(fsv) || isNaN(vv) || fsv<=0 || vv<=0) { setResult("Invalid input"); return; }
    const sign = approach ? 1 : -1;
    const fo = fsv * (vv + sign*vov) / (vv - sign*vsv);
    const shift = fo - fsv;
    setResult(`Observed Frequency: ${fo.toFixed(2)} Hz
Frequency Shift: ${shift>=0?"+":""}${shift.toFixed(2)} Hz`);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Doppler Effect Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate the observed frequency when source or observer is moving</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Source Frequency (Hz)</label>
            <input value={fs} onChange={e=>setFs(e.target.value)} placeholder="e.g. 440" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Speed of Sound (m/s)</label>
            <input value={v} onChange={e=>setV(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Source Speed (m/s)</label>
              <input value={vs} onChange={e=>setVs(e.target.value)} placeholder="0" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Observer Speed (m/s)</label>
              <input value={vo} onChange={e=>setVo(e.target.value)} placeholder="0" className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={()=>setApproach(true)} className={"flex-1 py-2 rounded font-semibold " + (approach?"bg-blue-600":"bg-gray-800")}>Approaching</button>
            <button onClick={()=>setApproach(false)} className={"flex-1 py-2 rounded font-semibold " + (!approach?"bg-blue-600":"bg-gray-800")}>Receding</button>
          </div>
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2 font-semibold">Calculate</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4">
              {result.split("
").map((line,i)=><div key={i} className={i===0?"text-2xl font-bold text-blue-400":"text-gray-300 mt-1"}>{line}</div>)}
            </div>
          )}
        </div>
        <div className="mt-6 bg-gray-900 rounded-xl p-4 text-sm text-gray-400">
          <p className="font-semibold text-gray-300 mb-2">Formula</p>
          <p>f_o = f_s × (v ± v_o) / (v ∓ v_s)</p>
          <p className="mt-1">+ for approaching, − for receding</p>
        </div>
      </div>
    </div>
  );
}
