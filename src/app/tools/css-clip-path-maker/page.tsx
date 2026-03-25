"use client";
import { useState } from "react";
export default function CssClipPathMaker() {
  const [shape, setShape] = useState("polygon(50% 0%, 0% 100%, 100% 100%)");
  const shapes = [
    {name:"Triangle", value:"polygon(50% 0%, 0% 100%, 100% 100%)"},
    {name:"Diamond", value:"polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"},
    {name:"Pentagon", value:"polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"},
    {name:"Hexagon", value:"polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"},
    {name:"Star", value:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"},
    {name:"Circle", value:"circle(50% at 50% 50%)"},
    {name:"Ellipse", value:"ellipse(50% 30% at 50% 50%)"},
    {name:"Arrow Right", value:"polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)"},
  ];
  const css = `clip-path: ${shape};`;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">CSS Clip-Path Maker</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {shapes.map(s => <button key={s.name} onClick={()=>setShape(s.value)} className="px-3 py-1 bg-gray-700 hover:bg-blue-600 rounded text-sm">{s.name}</button>)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm text-gray-400">clip-path value</label>
          <textarea value={shape} onChange={e=>setShape(e.target.value)} rows={3} className="w-full bg-gray-800 rounded p-3 font-mono text-sm" />
          <div className="mt-4 bg-gray-900 rounded p-4 font-mono text-sm text-green-400">{css}</div>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy CSS</button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500" style={{clipPath: shape}} />
        </div>
      </div>
    </div>
  );
}
