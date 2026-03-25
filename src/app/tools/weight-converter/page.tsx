"use client";
import { useState } from "react";
const factors: Record<string,number> = {mg:0.000001,g:0.001,kg:1,tonne:1000,oz:0.0283495,lb:0.453592,stone:6.35029};
export default function WeightConverter() {
  const [val,setVal]=useState("");
  const [from,setFrom]=useState("kg");
  const n=parseFloat(val);
  const units=Object.keys(factors);
  const inKg=isNaN(n)?null:n*factors[from];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Weight Converter</h1>
      <p className="text-gray-400 mb-6">Convert between mg, g, kg, tonne, oz, lb, stone</p>
      <div className="flex gap-2 mb-4">
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" className="flex-1 bg-gray-800 rounded p-3 text-white" />
        <select value={from} onChange={e=>setFrom(e.target.value)} className="bg-gray-800 rounded p-3 text-white">{units.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      {inKg!==null && <div className="space-y-2">{units.filter(u=>u!==from).map(u=><div key={u} className="bg-gray-800 rounded p-3"><span className="text-gray-400">{u}: </span><span className="text-green-400 font-mono">{(inKg/factors[u]).toFixed(6)}</span></div>)}</div>}
    </main>
  );
}