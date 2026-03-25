"use client";
import { useState } from "react";
export default function SoundLevelCalculator() {
  const P0 = 20e-6;
  const [mode, setMode] = useState<"ptodb"|"dbtop">("ptodb");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const descriptions = [
    {db:0,label:"Threshold of hearing"},{db:10,label:"Rustling leaves"},{db:30,label:"Quiet library"},
    {db:60,label:"Normal conversation"},{db:85,label:"Heavy traffic (hearing damage threshold)"},
    {db:110,label:"Rock concert"},{db:130,label:"Threshold of pain"},{db:140,label:"Jet engine"}
  ];
  const calc = () => {
    const v = parseFloat(input);
    if (isNaN(v)) { setResult("Invalid input"); return; }
    if (mode === "ptodb") {
      if (v <= 0) { setResult("Pressure must be positive"); return; }
      const db = 20 * Math.log10(v / P0);
      setResult(db.toFixed(2) + " dB");
    } else {
      const p = P0 * Math.pow(10, v / 20);
      setResult(p.toExponential(4) + " Pa");
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Sound Level Calculator</h1>
        <p className="text-gray-400 mb-8">Convert between sound pressure (Pa) and decibels (dB SPL)</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2">
            <button onClick={()=>setMode("ptodb")} className={"flex-1 py-2 rounded font-semibold " + (mode==="ptodb"?"bg-blue-600":"bg-gray-800")}>Pressure → dB</button>
            <button onClick={()=>setMode("dbtop")} className={"flex-1 py-2 rounded font-semibold " + (mode==="dbtop"?"bg-blue-600":"bg-gray-800")}>dB → Pressure</button>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">{mode==="ptodb"?"Sound Pressure (Pa)":"Sound Level (dB)"}</label>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="ptodb"?"e.g. 0.02":"e.g. 60"} className="w-full bg-gray-800 rounded px-3 py-2 text-white" />
          </div>
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2 font-semibold">Calculate</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4 text-2xl font-bold text-blue-400">{result}</div>
          )}
        </div>
        <div className="mt-6 bg-gray-900 rounded-xl p-4">
          <p className="font-semibold text-gray-300 mb-3">Reference Sound Levels</p>
          <div className="space-y-1">
            {descriptions.map(d=><div key={d.db} className="flex justify-between text-sm"><span className="text-gray-400">{d.label}</span><span className="text-blue-400 font-mono">{d.db} dB</span></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
