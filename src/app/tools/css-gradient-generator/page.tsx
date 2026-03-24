"use client";
import { useState } from "react";
export default function CssGradientGenerator() {
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(90);
  const [stops, setStops] = useState([{color:"#3b82f6",pos:0},{color:"#8b5cf6",pos:100}]);
  const gradient = type==="linear"
    ? `linear-gradient(${angle}deg, ${stops.map(s=>`${s.color} ${s.pos}%`).join(", ")})`
    : `radial-gradient(circle, ${stops.map(s=>`${s.color} ${s.pos}%`).join(", ")})`;
  const css = `background: ${gradient};`;
  const updateStop = (i: number, key: string, val: any) => {
    setStops(prev=>prev.map((s,j)=>j===i?{...s,[key]:val}:s));
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
      <p className="text-gray-400 mb-6">Create beautiful CSS gradients visually</p>
      <div className="w-full h-32 rounded-lg mb-6" style={{background:gradient}} />
      <div className="flex gap-4 mb-4">
        <button onClick={()=>setType("linear")} className={`px-4 py-2 rounded ${type==="linear"?"bg-blue-600":"bg-gray-700"}`}>Linear</button>
        <button onClick={()=>setType("radial")} className={`px-4 py-2 rounded ${type==="radial"?"bg-blue-600":"bg-gray-700"}`}>Radial</button>
        {type==="linear" && <div className="flex items-center gap-2">
          <label className="text-gray-400">Angle:</label>
          <input type="range" min={0} max={360} value={angle} onChange={e=>setAngle(+e.target.value)} className="w-32" />
          <span>{angle}deg</span>
        </div>}
      </div>
      {stops.map((s,i)=>(<div key={i} className="flex gap-4 mb-3 items-center">
        <input type="color" value={s.color} onChange={e=>updateStop(i,"color",e.target.value)} className="w-12 h-10 rounded" />
        <span className="font-mono">{s.color}</span>
        <input type="range" min={0} max={100} value={s.pos} onChange={e=>updateStop(i,"pos",+e.target.value)} className="flex-1" />
        <span className="w-12 text-right">{s.pos}%</span>
      </div>))}
      <button onClick={()=>setStops([...stops,{color:"#ec4899",pos:50}])} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm mb-6">+ Add Stop</button>
      <div className="bg-gray-900 border border-gray-700 rounded p-4">
        <p className="text-gray-400 text-sm mb-2">CSS Output:</p>
        <code className="font-mono text-sm text-green-400 break-all">{css}</code>
        <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm block">Copy CSS</button>
      </div>
    </div>
  );
}