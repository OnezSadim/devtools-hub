"use client";
import { useState } from "react";
const COLORS: Record<string, number> = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, grey: 8, white: 9 };
const MULTIPLIERS: Record<string, number> = { black: 1, brown: 10, red: 100, orange: 1000, yellow: 10000, green: 100000, blue: 1000000, violet: 10000000, grey: 0.01, white: 0.1, gold: 0.1, silver: 0.01 };
const TOLERANCE: Record<string, string> = { brown: "1%", red: "2%", green: "0.5%", blue: "0.25%", violet: "0.1%", grey: "0.05%", gold: "5%", silver: "10%", none: "20%" };
const colorOptions = Object.keys(COLORS);
const multOptions = ["black","brown","red","orange","yellow","green","blue","violet","grey","white","gold","silver"];
const tolOptions = ["brown","red","green","blue","violet","grey","gold","silver","none"];
export default function ResistorColorCodeCalculator() {
  const [b1, setB1] = useState("brown");
  const [b2, setB2] = useState("black");
  const [b3, setB3] = useState("red");
  const [b4, setB4] = useState("gold");
  const value = (COLORS[b1] * 10 + COLORS[b2]) * (MULTIPLIERS[b3] || 1);
  const tol = TOLERANCE[b4] || "20%";
  const fmt = (v: number) => v >= 1e6 ? (v/1e6).toFixed(2)+" MΩ" : v >= 1000 ? (v/1000).toFixed(2)+" kΩ" : v+" Ω";
  const sel = "w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white capitalize";
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Resistor Color Code</h1>
        <p className="text-gray-400 mb-6">Decode 4-band resistor color codes</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Band 1 (1st digit)</label><select value={b1} onChange={e=>setB1(e.target.value)} className={sel}>{colorOptions.map(c=><option key={c} value={c}>{c} ({COLORS[c]})</option>)}</select></div>
          <div><label className="block text-sm text-gray-400 mb-1">Band 2 (2nd digit)</label><select value={b2} onChange={e=>setB2(e.target.value)} className={sel}>{colorOptions.map(c=><option key={c} value={c}>{c} ({COLORS[c]})</option>)}</select></div>
          <div><label className="block text-sm text-gray-400 mb-1">Band 3 (Multiplier)</label><select value={b3} onChange={e=>setB3(e.target.value)} className={sel}>{multOptions.map(c=><option key={c} value={c}>{c} (×{MULTIPLIERS[c]})</option>)}</select></div>
          <div><label className="block text-sm text-gray-400 mb-1">Band 4 (Tolerance)</label><select value={b4} onChange={e=>setB4(e.target.value)} className={sel}>{tolOptions.map(c=><option key={c} value={c}>{c} ({TOLERANCE[c]})</option>)}</select></div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">{fmt(value)}</div>
            <div className="text-gray-400 mt-1">Tolerance: {tol}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
