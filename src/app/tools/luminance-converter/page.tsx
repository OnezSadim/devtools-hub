"use client";
import { useState } from "react";

const units = [
  { label: "Candela/m² (nit)", factor: 1 },
  { label: "Kilocandela/m²", factor: 1000 },
  { label: "Candela/cm²", factor: 10000 },
  { label: "Foot-lambert", factor: 3.42626 },
  { label: "Lambert", factor: 3183.1 },
  { label: "Stilb", factor: 10000 },
];

export default function LuminanceConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(value);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Luminance Converter</h1>
        <p className="text-gray-400 mb-6">Convert between luminance units (nits, foot-lamberts, etc.).</p>
        <input className="w-full bg-gray-800 rounded p-3 mb-4 text-white" type="number" placeholder="Enter value" value={value} onChange={e=>setValue(e.target.value)} />
        <select className="w-full bg-gray-800 rounded p-3 mb-6 text-white" value={from} onChange={e=>setFrom(Number(e.target.value))}>
          {units.map((u,i)=><option key={i} value={i}>{u.label}</option>)}
        </select>
        <div className="space-y-2">
          {units.map((u,i)=>{
            const result = isNaN(num) ? "" : ((num * units[from].factor) / u.factor).toFixed(6);
            return <div key={i} className="bg-gray-800 rounded p-3 flex justify-between"><span className="text-gray-400">{u.label}</span><span className="font-mono">{result}</span></div>;
          })}
        </div>
      </div>
    </main>
  );
}