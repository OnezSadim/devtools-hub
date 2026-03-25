"use client";
import { useState } from "react";
export default function DaysUntilCalculator() {
  const [target, setTarget] = useState("");
  const [name, setName] = useState("");
  const calc = () => {
    if (!target) return null;
    const t = new Date(target);
    const now = new Date();
    now.setHours(0,0,0,0); t.setHours(0,0,0,0);
    const diff = Math.round((t.getTime()-now.getTime())/86400000);
    return diff;
  };
  const diff = calc();
  const presets = [{label:"New Year",date:`${new Date().getFullYear()+1}-01-01`},{label:"Christmas",date:`${new Date().getFullYear()}-12-25`},{label:"Halloween",date:`${new Date().getFullYear()}-10-31`}];
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Days Until Calculator</h1>
        <p className="text-gray-400 mb-8">Count down to any upcoming event.</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="space-y-4 mb-4">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Event name (optional)" className="w-full bg-gray-800 rounded-lg p-3 text-white" />
            <input type="date" value={target} onChange={e=>setTarget(e.target.value)} className="w-full bg-gray-800 rounded-lg p-3 text-white" />
          </div>
          <div className="flex gap-2 mb-4">{presets.map(p=>(<button key={p.label} onClick={()=>{setTarget(p.date);setName(p.label);}} className="flex-1 bg-gray-800 hover:bg-gray-700 rounded-lg py-2 text-sm">{p.label}</button>))}</div>
          {diff !== null && (
            <div className="text-center py-6">
              <div className="text-6xl font-bold text-blue-400">{Math.abs(diff)}</div>
              <div className="text-gray-300 text-xl mt-2">{diff > 0 ? `days until ${name||"event"}` : diff < 0 ? `days since ${name||"event"}` : "Today!"}</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}