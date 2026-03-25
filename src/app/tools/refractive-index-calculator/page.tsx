"use client";
import { useState } from "react";
export default function RefractiveIndexCalculator() {
  const [speed, setSpeed] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const C = 299792458;
  const calculate = () => {
    const v = parseFloat(speed);
    if (isNaN(v) || v <= 0 || v > C) { setResult("Please enter a valid speed (> 0 and ≤ c)."); return; }
    const n = C / v;
    setResult(`Refractive index n = ${n.toFixed(6)}`);
  };
  const commonMaterials = [{name:"Vacuum",n:1.0},{name:"Air",n:1.0003},{name:"Water",n:1.333},{name:"Glass",n:1.5},{name:"Diamond",n:2.417}];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Refractive Index Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate n = c / v, where c = 299,792,458 m/s</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Speed of Light in Medium (m/s)</label><input value={speed} onChange={e=>setSpeed(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" placeholder="e.g. 200000000" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center text-lg font-mono">{result}</div>}
        </div>
        <div className="mt-6"><h2 className="text-lg font-semibold mb-2">Common Materials</h2><div className="grid grid-cols-2 gap-2">{commonMaterials.map(m=><div key={m.name} className="bg-gray-800 rounded p-2 text-sm"><span className="text-gray-400">{m.name}:</span> n = {m.n}</div>)}</div></div>
      </div>
    </main>
  );
}
