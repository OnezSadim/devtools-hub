"use client";
import { useState } from "react";
const factors: Record<string,number> = {ml:0.001,l:1,"m³":1000,"cm³":0.001,"fl oz":0.0295735,cup:0.236588,pint:0.473176,quart:0.946353,gallon:3.78541};
export default function VolumeConverter() {
  const [val,setVal]=useState("");
  const [from,setFrom]=useState("l");
  const n=parseFloat(val);
  const units=Object.keys(factors);
  const inL=isNaN(n)?null:n*factors[from];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Volume Converter</h1>
      <p className="text-gray-400 mb-6">Convert between ml, liters, m³, fl oz, cups, pints, quarts, gallons</p>
      <div className="flex gap-2 mb-4">
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" className="flex-1 bg-gray-800 rounded p-3 text-white" />
        <select value={from} onChange={e=>setFrom(e.target.value)} className="bg-gray-800 rounded p-3 text-white">{units.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      {inL!==null && <div className="space-y-2">{units.filter(u=>u!==from).map(u=><div key={u} className="bg-gray-800 rounded p-3"><span className="text-gray-400">{u}: </span><span className="text-green-400 font-mono">{(inL/factors[u]).toFixed(6)}</span></div>)}</div>}
    </main>
  );
}