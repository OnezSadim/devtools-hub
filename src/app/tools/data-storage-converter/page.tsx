"use client";
import { useState } from "react";
const factors: Record<string,number> = {bit:1,byte:8,KB:8192,MB:8388608,GB:8589934592,TB:8796093022208,KiB:8192,MiB:8388608,GiB:8589934592};
export default function DataStorageConverter() {
  const [val,setVal]=useState("");
  const [from,setFrom]=useState("GB");
  const n=parseFloat(val);
  const units=Object.keys(factors);
  const inBits=isNaN(n)?null:n*factors[from];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Data Storage Converter</h1>
      <p className="text-gray-400 mb-6">Convert between bits, bytes, KB, MB, GB, TB, KiB, MiB, GiB</p>
      <div className="flex gap-2 mb-4">
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" className="flex-1 bg-gray-800 rounded p-3 text-white" />
        <select value={from} onChange={e=>setFrom(e.target.value)} className="bg-gray-800 rounded p-3 text-white">{units.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      {inBits!==null && <div className="space-y-2">{units.filter(u=>u!==from).map(u=><div key={u} className="bg-gray-800 rounded p-3"><span className="text-gray-400">{u}: </span><span className="text-green-400 font-mono">{(inBits/factors[u]).toFixed(6)}</span></div>)}</div>}
    </main>
  );
}