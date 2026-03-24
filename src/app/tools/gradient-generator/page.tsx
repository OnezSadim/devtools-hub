"use client";
import { useState } from "react";

export default function GradientGenerator() {
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(135);
  const [stops, setStops] = useState([{color:"#6366f1",pos:0},{color:"#ec4899",pos:100}]);
  const gradientStr = type === "linear"
    ? `linear-gradient(${angle}deg, ${stops.map(s=>`${s.color} ${s.pos}%`).join(", ")})`
    : `radial-gradient(circle, ${stops.map(s=>`${s.color} ${s.pos}%`).join(", ")})`;
  const css = `background: ${gradientStr};`;
  const addStop = () => setStops([...stops, {color:"#ffffff",pos:50}]);
  const removeStop = (i:number) => setStops(stops.filter((_,idx)=>idx!==i));
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Gradient Generator</h1>
        <p className="text-gray-400 mb-8">Create CSS gradients visually.</p>
        <div className="rounded-xl h-48 mb-6" style={{background:gradientStr}}></div>
        <div className="flex gap-3 mb-6">
          {["linear","radial"].map(t=>(
            <button key={t} onClick={()=>setType(t)} className={`px-4 py-2 rounded-lg capitalize ${type===t?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{t}</button>
          ))}
        </div>
        {type==="linear" && (
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">Angle</span><span className="font-mono">{angle}deg</span></div>
            <input type="range" min={0} max={360} value={angle} onChange={e=>setAngle(Number(e.target.value))} className="w-full" />
          </div>
        )}
        <div className="space-y-3 mb-6">
          {stops.map((s,i)=>(
            <div key={i} className="flex items-center gap-3">
              <input type="color" value={s.color} onChange={e=>setStops(stops.map((st,idx)=>idx===i?{...st,color:e.target.value}:st))} className="w-10 h-10 rounded cursor-pointer" />
              <input type="range" min={0} max={100} value={s.pos} onChange={e=>setStops(stops.map((st,idx)=>idx===i?{...st,pos:Number(e.target.value)}:st))} className="flex-1" />
              <span className="font-mono text-sm w-12">{s.pos}%</span>
              {stops.length > 2 && <button onClick={()=>removeStop(i)} className="text-red-400 hover:text-red-300">✕</button>}
            </div>
          ))}
        </div>
        <button onClick={addStop} className="mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm">+ Add Stop</button>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400">CSS</span>
            <button onClick={()=>navigator.clipboard.writeText(css)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
          </div>
          <code className="text-sm text-green-400 break-all">{css}</code>
        </div>
      </div>
    </main>
  );
}