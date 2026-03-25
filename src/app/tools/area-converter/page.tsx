"use client";
import { useState } from "react";
const factors: Record<string,number> = {"mm²":0.000001,"cm²":0.0001,"m²":1,"km²":1000000,"hectare":10000,"acre":4046.86,"ft²":0.092903,"yd²":0.836127};
export default function AreaConverter() {
  const [val,setVal]=useState("");
  const [from,setFrom]=useState("m²");
  const n=parseFloat(val);
  const units=Object.keys(factors);
  const inM2=isNaN(n)?null:n*factors[from];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Area Converter</h1>
      <p className="text-gray-400 mb-6">Convert between mm², cm², m², km², hectares, acres, ft², yd²</p>
      <div className="flex gap-2 mb-4">
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" className="flex-1 bg-gray-800 rounded p-3 text-white" />
        <select value={from} onChange={e=>setFrom(e.target.value)} className="bg-gray-800 rounded p-3 text-white">{units.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      {inM2!==null && <div className="space-y-2">{units.filter(u=>u!==from).map(u=><div key={u} className="bg-gray-800 rounded p-3"><span className="text-gray-400">{u}: </span><span className="text-green-400 font-mono">{(inM2/factors[u]).toFixed(6)}</span></div>)}</div>}
    </main>
  );
}