"use client";
import { useState } from "react";
const COLORS: Record<string, number> = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, grey: 8, white: 9 };
const MULTIPLIERS: Record<string, number> = { black: 1, brown: 10, red: 100, orange: 1e3, yellow: 1e4, green: 1e5, blue: 1e6, violet: 1e7, grey: 1e8, white: 1e9, gold: 0.1, silver: 0.01 };
const TOLERANCE: Record<string, string> = { brown: "±1%", red: "±2%", orange: "±3%", yellow: "±4%", green: "±0.5%", blue: "±0.25%", violet: "±0.1%", grey: "±0.05%", gold: "±5%", silver: "±10%", none: "±20%" };
export default function ResistorColorCodeCalculator() {
  const colorList = Object.keys(COLORS);
  const multList = Object.keys(MULTIPLIERS);
  const tolList = Object.keys(TOLERANCE);
  const [b1, setB1] = useState("brown");
  const [b2, setB2] = useState("black");
  const [mult, setMult] = useState("brown");
  const [tol, setTol] = useState("gold");
  const r = (COLORS[b1] * 10 + COLORS[b2]) * MULTIPLIERS[mult];
  const fmt = (v: number) => v >= 1e6 ? (v/1e6).toFixed(2)+" MΩ" : v >= 1e3 ? (v/1e3).toFixed(2)+" kΩ" : v+" Ω";
  const sel = (val: string, set: (s:string)=>void, opts: string[]) => (
    <select value={val} onChange={e => set(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2 capitalize">
      {opts.map(o => <option key={o} value={o} className="capitalize">{o}</option>)}
    </select>
  );
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Resistor Color Code</h1>
      <p className="text-gray-400 mb-4">4-band resistor decoder</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm mb-1">Band 1</label>{sel(b1, setB1, colorList)}</div>
        <div><label className="block text-sm mb-1">Band 2</label>{sel(b2, setB2, colorList)}</div>
        <div><label className="block text-sm mb-1">Multiplier</label>{sel(mult, setMult, multList)}</div>
        <div><label className="block text-sm mb-1">Tolerance</label>{sel(tol, setTol, tolList)}</div>
      </div>
      <div className="p-4 bg-gray-800 rounded text-xl font-mono text-green-400">{fmt(r)} {TOLERANCE[tol]}</div>
    </div>
  );
}
