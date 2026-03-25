"use client";
import { useState, useEffect, useRef } from "react";

const presets = [
  { name: "Boil egg (soft)", seconds: 360 },
  { name: "Boil egg (hard)", seconds: 600 },
  { name: "Pasta (al dente)", seconds: 480 },
  { name: "Rice", seconds: 1080 },
  { name: "Chicken breast", seconds: 1500 },
];

export default function CookingTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [input, setInput] = useState({ h: "", m: "", s: "" });
  const ref = useRef(null);

  useEffect(() => {
    if (running && seconds > 0) {
      ref.current = setInterval(() => setSeconds(s => s - 1), 1000);
    } else if (seconds === 0) { setRunning(false); }
    return () => clearInterval(ref.current);
  }, [running, seconds]);

  const start = () => {
    const total = (parseInt(input.h)||0)*3600 + (parseInt(input.m)||0)*60 + (parseInt(input.s)||0);
    if (total > 0) { setSeconds(total); setRunning(true); }
  };

  const fmt = (s) => { const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sec=s%60; return [h,m,sec].map(x=>String(x).padStart(2,"0")).join(":"); };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">Cooking Timer</h1>
        <p className="text-gray-400 mb-6">Set a timer or use a preset.</p>
        <div className="text-6xl font-mono font-bold mb-6 text-blue-400">{fmt(seconds)}</div>
        <div className="flex gap-2 justify-center mb-4">
          {["h","m","s"].map(u=><input key={u} className="w-16 bg-gray-800 rounded p-2 text-center text-white" placeholder={u} type="number" min="0" value={input[u]} onChange={e=>setInput(i=>({...i,[u]:e.target.value}))} />)}
        </div>
        <div className="flex gap-2 justify-center mb-6">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded" onClick={running ? ()=>setRunning(false) : start}>{running ? "Pause" : "Start"}</button>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded" onClick={()=>{setRunning(false);setSeconds(0);}}>Reset</button>
        </div>
        <div className="space-y-2">
          {presets.map(p=><button key={p.name} className="w-full bg-gray-800 hover:bg-gray-700 rounded p-2 text-left" onClick={()=>{setSeconds(p.seconds);setRunning(false);}}>{p.name} — {fmt(p.seconds)}</button>)}
        </div>
      </div>
    </main>
  );
}