"use client";
import { useState } from "react";

const units = [
  { label: "Watt (W)", factor: 1 },
  { label: "Kilowatt (kW)", factor: 1000 },
  { label: "Megawatt (MW)", factor: 1e6 },
  { label: "Horsepower (hp)", factor: 745.7 },
  { label: "BTU/hour", factor: 0.29307 },
  { label: "Foot-pound/second", factor: 1.35582 },
];

export default function PowerConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(value);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Power Converter</h1>
        <p className="text-gray-400 mb-6">Convert between power units instantly.</p>
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