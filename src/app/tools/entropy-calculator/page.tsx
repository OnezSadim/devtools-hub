"use client";
import { useState } from "react";
export default function EntropyCalculator() {
  const [mode, setMode] = useState("heat");
  const [heat, setHeat] = useState("");
  const [temp, setTemp] = useState("");
  const [n, setN] = useState("");
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [result, setResult] = useState("");
  const R = 8.314;
  const calculate = () => {
    if (mode === "heat") {
      const Q = parseFloat(heat), T = parseFloat(temp);
      if (isNaN(Q)||isNaN(T)||T<=0){setResult("Enter valid values");return;}
      setResult("ΔS = " + (Q/T).toFixed(4) + " J/K");
    } else {
      const nv = parseFloat(n), T1 = parseFloat(t1), T2 = parseFloat(t2);
      if (isNaN(nv)||isNaN(T1)||isNaN(T2)||T1<=0||T2<=0){setResult("Enter valid values");return;}
      setResult("ΔS = " + (nv*R*Math.log(T2/T1)).toFixed(4) + " J/K");
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Entropy Change Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate entropy change for thermodynamic processes</p>
        <div className="flex gap-2 mb-4">
          {[{id:"heat",label:"ΔS = Q/T"},{id:"ideal",label:"Ideal Gas"}].map(m=><button key={m.id} onClick={()=>{setMode(m.id);setResult("");}} className={"px-4 py-2 rounded font-semibold " + (mode===m.id?"bg-blue-600":"bg-gray-700")}>{m.label}</button>)}
        </div>
        {mode==="heat" ? (
          <div className="space-y-4">
            <div><label className="block text-sm text-gray-400 mb-1">Heat Transfer Q (J)</label><input type="number" value={heat} onChange={e=>setHeat(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Temperature T (K)</label><input type="number" value={temp} onChange={e=>setTemp(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          </div>
        ) : (
          <div className="space-y-4">
            <div><label className="block text-sm text-gray-400 mb-1">Moles of Gas (n)</label><input type="number" value={n} onChange={e=>setN(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Initial Temperature T₁ (K)</label><input type="number" value={t1} onChange={e=>setT1(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Final Temperature T₂ (K)</label><input type="number" value={t2} onChange={e=>setT2(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2 text-white" /></div>
          </div>
        )}
        <button onClick={calculate} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 mt-4 text-center text-xl font-mono">{result}</div>}
      </div>
    </main>
  );
}
