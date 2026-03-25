"use client";
import { useState } from "react";

export default function DecibelCalculator() {
  const [mode, setMode] = useState<"toDb"|"fromDb">("toDb");
  const [ratio, setRatio] = useState("");
  const [db, setDb] = useState("");
  const [type, setType] = useState<"power"|"amplitude">("power");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (mode === "toDb") {
      const r = parseFloat(ratio);
      if (isNaN(r)||r<=0) { setResult("Enter positive ratio"); return; }
      const dbVal = type==="power" ? 10*Math.log10(r) : 20*Math.log10(r);
      setResult(`${dbVal.toFixed(4)} dB`);
    } else {
      const dbv = parseFloat(db);
      if (isNaN(dbv)) { setResult("Enter dB value"); return; }
      const ratioVal = type==="power" ? Math.pow(10,dbv/10) : Math.pow(10,dbv/20);
      setResult(`Ratio = ${ratioVal.toFixed(6)}`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Decibel (dB) Calculator</h1>
        <p className="text-gray-400 mb-6">Convert ratios to/from decibels</p>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setMode("toDb")} className={`px-4 py-2 rounded ${mode==="toDb"?"bg-blue-600":"bg-gray-800"}`}>Ratio → dB</button>
          <button onClick={()=>setMode("fromDb")} className={`px-4 py-2 rounded ${mode==="fromDb"?"bg-blue-600":"bg-gray-800"}`}>dB → Ratio</button>
        </div>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setType("power")} className={`px-4 py-2 rounded text-sm ${type==="power"?"bg-purple-600":"bg-gray-800"}`}>Power (10×log)</button>
          <button onClick={()=>setType("amplitude")} className={`px-4 py-2 rounded text-sm ${type==="amplitude"?"bg-purple-600":"bg-gray-800"}`}>Amplitude (20×log)</button>
        </div>
        {mode==="toDb" ? (
          <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Ratio</label><input value={ratio} onChange={e=>setRatio(e.target.value)} className="w-full bg-gray-800 rounded p-3" /></div>
        ) : (
          <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Decibels (dB)</label><input value={db} onChange={e=>setDb(e.target.value)} className="w-full bg-gray-800 rounded p-3" /></div>
        )}
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Calculate</button>
        {result && <div className="mt-4 bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
