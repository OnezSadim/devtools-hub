"use client";
import { useState } from "react";

const units = [
  { label: "L/100km", toMpg: (v) => 235.214 / v, fromMpg: (v) => 235.214 / v },
  { label: "MPG (US)", toMpg: (v) => v, fromMpg: (v) => v },
  { label: "MPG (UK)", toMpg: (v) => v * 0.832674, fromMpg: (v) => v / 0.832674 },
  { label: "km/L", toMpg: (v) => v * 2.35214, fromMpg: (v) => v / 2.35214 },
];

export default function FuelEfficiencyConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(value);
  const mpg = isNaN(num) ? NaN : units[from].toMpg(num);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fuel Efficiency Converter</h1>
        <p className="text-gray-400 mb-6">Convert MPG, L/100km, km/L instantly.</p>
        <input className="w-full bg-gray-800 rounded p-3 mb-4 text-white" type="number" placeholder="Enter value" value={value} onChange={e=>setValue(e.target.value)} />
        <select className="w-full bg-gray-800 rounded p-3 mb-6 text-white" value={from} onChange={e=>setFrom(Number(e.target.value))}>
          {units.map((u,i)=><option key={i} value={i}>{u.label}</option>)}
        </select>
        <div className="space-y-2">
          {units.map((u,i)=>{
            const result = isNaN(mpg) ? "" : u.fromMpg(mpg).toFixed(4);
            return <div key={i} className="bg-gray-800 rounded p-3 flex justify-between"><span className="text-gray-400">{u.label}</span><span className="font-mono">{result}</span></div>;
          })}
        </div>
      </div>
    </main>
  );
}