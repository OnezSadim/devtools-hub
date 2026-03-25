"use client";
import { useState } from "react";
export default function CarnotEfficiencyCalculator() {
  const [th, setTh] = useState("");
  const [tc, setTc] = useState("");
  const [unit, setUnit] = useState("K");
  const [result, setResult] = useState<{efficiency:number,work:string}|null>(null);
  const toKelvin = (v: number) => unit==="C" ? v+273.15 : unit==="F" ? (v-32)*5/9+273.15 : v;
  const calculate = () => {
    const Th = toKelvin(parseFloat(th)), Tc = toKelvin(parseFloat(tc));
    if (isNaN(Th)||isNaN(Tc)||Th<=0||Tc<=0||Tc>=Th){setResult(null);return;}
    const eff = 1 - Tc/Th;
    setResult({efficiency:eff*100, work:"For every 100 J input: " + (eff*100).toFixed(2) + " J max work, " + (Tc/Th*100).toFixed(2) + " J rejected"});
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Carnot Efficiency Calculator</h1>
        <p className="text-gray-400 mb-6">Maximum theoretical efficiency: η = 1 - T_cold/T_hot</p>
        <div className="flex gap-2 mb-4">
          {["K","C","F"].map(u=><button key={u} onClick={()=>setUnit(u)} className={"px-4 py-2 rounded font-semibold " + (unit===u?"bg-blue-600":"bg-gray-700")}>{u}</button>)}
        </div>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Hot Reservoir Temperature T_hot ({unit})</label><input type="number" value={th} onChange={e=>setTh(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" placeholder="e.g. 500" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Cold Reservoir Temperature T_cold ({unit})</label><input type="number" value={tc} onChange={e=>setTc(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" placeholder="e.g. 300" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
          {result && (
            <div className="bg-gray-800 rounded p-4 space-y-2">
              <div className="text-center">
                <span className="text-4xl font-bold text-green-400">{result.efficiency.toFixed(2)}%</span>
                <p className="text-gray-400 text-sm mt-1">Maximum Carnot Efficiency</p>
              </div>
              <p className="text-gray-300 text-sm text-center">{result.work}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
