"use client";
import { useState } from "react";
const factors: Record<string,number> = {Pa:1,hPa:100,kPa:1000,MPa:1000000,bar:100000,atm:101325,psi:6894.76,mmHg:133.322};
export default function PressureConverter() {
  const [val,setVal]=useState("");
  const [from,setFrom]=useState("Pa");
  const n=parseFloat(val);
  const units=Object.keys(factors);
  const inPa=isNaN(n)?null:n*factors[from];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Pressure Converter</h1>
      <p className="text-gray-400 mb-6">Convert between Pa, hPa, kPa, MPa, bar, atm, psi, mmHg</p>
      <div className="flex gap-2 mb-4">
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" className="flex-1 bg-gray-800 rounded p-3 text-white" />
        <select value={from} onChange={e=>setFrom(e.target.value)} className="bg-gray-800 rounded p-3 text-white">{units.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      {inPa!==null && <div className="space-y-2">{units.filter(u=>u!==from).map(u=><div key={u} className="bg-gray-800 rounded p-3"><span className="text-gray-400">{u}: </span><span className="text-green-400 font-mono">{(inPa/factors[u]).toFixed(6)}</span></div>)}</div>}
    </main>
  );
}