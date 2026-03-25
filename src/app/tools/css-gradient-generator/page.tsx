"use client";
import { useState } from "react";
export default function CssGradientGenerator() {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#8b5cf6");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");
  const css = type === "linear" ? `linear-gradient(${angle}deg, ${color1}, ${color2})` : `radial-gradient(circle, ${color1}, ${color2})`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
        <p className="text-gray-400 mb-6">Create beautiful CSS gradients visually.</p>
        <div className="rounded-xl mb-6" style={{background:css,height:"200px"}} />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="block text-sm text-gray-400 mb-1">Color 1</label><input type="color" value={color1} onChange={e=>setColor1(e.target.value)} className="w-full h-12 bg-gray-800 border border-gray-700 rounded cursor-pointer" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Color 2</label><input type="color" value={color2} onChange={e=>setColor2(e.target.value)} className="w-full h-12 bg-gray-800 border border-gray-700 rounded cursor-pointer" /></div>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1">Type</label>
          <div className="flex gap-2">
            {["linear","radial"].map(t=>(<button key={t} onClick={()=>setType(t)} className={`px-4 py-2 rounded ${type===t?"bg-blue-600":"bg-gray-800 border border-gray-700"}`}>{t}</button>))}
          </div>
        </div>
        {type==="linear" && <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Angle: {angle}deg</label><input type="range" min="0" max="360" value={angle} onChange={e=>setAngle(Number(e.target.value))} className="w-full" /></div>}
        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <p className="text-sm text-gray-400 mb-2">CSS Code</p>
          <code className="text-green-400 text-sm break-all">background: {css};</code>
          <button onClick={()=>navigator.clipboard.writeText(`background: ${css};`)} className="mt-2 block text-xs text-blue-400 hover:text-blue-300">Copy to clipboard</button>
        </div>
      </div>
    </main>
  );
}