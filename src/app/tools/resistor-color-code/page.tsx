
"use client";
import { useState } from "react";
const COLORS = ["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Gray","White"];
const MULT = [1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000];
const TOLS: Record<string,string> = {Gold:"±5%",Silver:"±10%",None:"±20%"};
export default function ResistorColor() {
  const [b1, setB1] = useState("Brown");
  const [b2, setB2] = useState("Black");
  const [b3, setB3] = useState("Red");
  const [tol, setTol] = useState("Gold");
  const r = (COLORS.indexOf(b1) * 10 + COLORS.indexOf(b2)) * MULT[COLORS.indexOf(b3)];
  const fmt = (v: number) => v >= 1e6 ? (v/1e6).toFixed(2)+" MΩ" : v >= 1e3 ? (v/1e3).toFixed(2)+" kΩ" : v+" Ω";
  const sel = (val: string, set: (v:string)=>void) => (
    <select value={val} onChange={e => set(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2">
      {COLORS.map(c => <option key={c}>{c}</option>)}
    </select>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Resistor Color Code</h1>
      <p className="text-gray-400 mb-6">Decode 4-band resistor color codes</p>
      <div className="bg-gray-900 rounded-xl p-6 space-y-4">
        <div><label className="block text-sm text-gray-400 mb-1">Band 1 (1st digit)</label>{sel(b1, setB1)}</div>
        <div><label className="block text-sm text-gray-400 mb-1">Band 2 (2nd digit)</label>{sel(b2, setB2)}</div>
        <div><label className="block text-sm text-gray-400 mb-1">Band 3 (multiplier)</label>{sel(b3, setB3)}</div>
        <div><label className="block text-sm text-gray-400 mb-1">Band 4 (tolerance)</label>
          <select value={tol} onChange={e => setTol(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2">
            {Object.keys(TOLS).map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-3xl font-mono text-green-400">{fmt(r)}</div>
          <div className="text-gray-400 mt-1">{TOLS[tol]}</div>
        </div>
      </div>
    </main>
  );
}
