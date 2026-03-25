"use client";
import { useState } from "react";
export default function CssGradientGenerator() {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#8b5cf6");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");
  const gradient = type==="linear" ? `linear-gradient(${angle}deg, ${color1}, ${color2})` : `radial-gradient(circle, ${color1}, ${color2})`;
  const css = `background: ${gradient};`;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
        <p className="text-gray-400 mb-6">Generate beautiful CSS gradients</p>
        <div style={{background:gradient}} className="w-full h-48 rounded-xl mb-6" />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="text-sm text-gray-400 mb-1 block">Color 1</label><input type="color" value={color1} onChange={e=>setColor1(e.target.value)} className="w-full h-12 rounded cursor-pointer" /></div>
          <div><label className="text-sm text-gray-400 mb-1 block">Color 2</label><input type="color" value={color2} onChange={e=>setColor2(e.target.value)} className="w-full h-12 rounded cursor-pointer" /></div>
        </div>
        <div className="flex gap-4 mb-4">
          <button onClick={()=>setType("linear")} className={`px-4 py-2 rounded ${type==="linear"?"bg-blue-600":"bg-gray-800"}`}>Linear</button>
          <button onClick={()=>setType("radial")} className={`px-4 py-2 rounded ${type==="radial"?"bg-blue-600":"bg-gray-800"}`}>Radial</button>
        </div>
        {type==="linear" && <div className="mb-4"><label className="text-sm text-gray-400 mb-1 block">Angle: {angle}deg</label><input type="range" min={0} max={360} value={angle} onChange={e=>setAngle(+e.target.value)} className="w-full" /></div>}
        <div className="bg-gray-900 border border-gray-700 rounded p-4 flex items-center justify-between">
          <code className="font-mono text-sm">{css}</code>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="text-blue-400 text-sm ml-4">Copy</button>
        </div>
      </div>
    </div>
  );
}