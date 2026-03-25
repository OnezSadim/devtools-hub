"use client";
import { useState } from "react";
export default function ResonanceFrequencyCalculator() {
  const [mode, setMode] = useState<"lc"|"string"|"pipe">("lc");
  const [l, setL] = useState("");
  const [c, setC] = useState("");
  const [length, setLength] = useState("");
  const [tension, setTension] = useState("");
  const [mu, setMu] = useState("");
  const [open, setOpen] = useState(true);
  const [n, setN] = useState("1");
  const [result, setResult] = useState<string | null>(null);
  const calc = () => {
    const harmonic = parseInt(n) || 1;
    if (mode === "lc") {
      const lv = parseFloat(l);
      const cv = parseFloat(c);
      if (isNaN(lv)||isNaN(cv)||lv<=0||cv<=0) { setResult("Invalid"); return; }
      const f = 1/(2*Math.PI*Math.sqrt(lv*cv));
      setResult(`f = ${f.toExponential(4)} Hz`);
    } else if (mode === "string") {
      const T = parseFloat(tension);
      const muv = parseFloat(mu);
      const Lv = parseFloat(length);
      if (isNaN(T)||isNaN(muv)||isNaN(Lv)||T<=0||muv<=0||Lv<=0) { setResult("Invalid"); return; }
      const v = Math.sqrt(T/muv);
      const f = harmonic*v/(2*Lv);
      setResult(`Wave speed: ${v.toFixed(2)} m/s
f${harmonic} = ${f.toFixed(2)} Hz`);
    } else {
      const Lv = parseFloat(length);
      if (isNaN(Lv)||Lv<=0) { setResult("Invalid"); return; }
      const v = 343;
      const f = open ? harmonic*v/(2*Lv) : (2*harmonic-1)*v/(4*Lv);
      setResult(`f${harmonic} = ${f.toFixed(2)} Hz (${open?"open":"closed"} pipe, v=343 m/s)`);
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Resonance Frequency Calculator</h1>
        <p className="text-gray-400 mb-8">LC circuits, vibrating strings, and acoustic pipes</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2">
            {(["lc","string","pipe"] as const).map(m=><button key={m} onClick={()=>setMode(m)} className={"flex-1 py-2 rounded font-semibold capitalize " + (mode===m?"bg-blue-600":"bg-gray-800")}>{m=="lc"?"LC Circuit":m=="string"?"String":"Pipe"}</button>)}
          </div>
          {mode==="lc" && (<>
            <div><label className="block text-sm text-gray-400 mb-1">Inductance L (H)</label><input value={l} onChange={e=>setL(e.target.value)} placeholder="e.g. 0.001" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Capacitance C (F)</label><input value={c} onChange={e=>setC(e.target.value)} placeholder="e.g. 0.0001" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          </>)}
          {mode==="string" && (<>
            <div><label className="block text-sm text-gray-400 mb-1">Length (m)</label><input value={length} onChange={e=>setLength(e.target.value)} placeholder="e.g. 0.65" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Tension (N)</label><input value={tension} onChange={e=>setTension(e.target.value)} placeholder="e.g. 80" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Linear Density μ (kg/m)</label><input value={mu} onChange={e=>setMu(e.target.value)} placeholder="e.g. 0.003" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Harmonic n</label><input value={n} onChange={e=>setN(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          </>)}
          {mode==="pipe" && (<>
            <div><label className="block text-sm text-gray-400 mb-1">Pipe Length (m)</label><input value={length} onChange={e=>setLength(e.target.value)} placeholder="e.g. 0.5" className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
            <div className="flex gap-2">
              <button onClick={()=>setOpen(true)} className={"flex-1 py-2 rounded font-semibold " + (open?"bg-blue-600":"bg-gray-800")}>Open Pipe</button>
              <button onClick={()=>setOpen(false)} className={"flex-1 py-2 rounded font-semibold " + (!open?"bg-blue-600":"bg-gray-800")}>Closed Pipe</button>
            </div>
            <div><label className="block text-sm text-gray-400 mb-1">Harmonic n</label><input value={n} onChange={e=>setN(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          </>)}
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2 font-semibold">Calculate</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4">
              {result.split("
").map((line,i)=><div key={i} className={i===0?"text-2xl font-bold text-blue-400":"text-gray-300 mt-1"}>{line}</div>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
