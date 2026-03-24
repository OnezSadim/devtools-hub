"use client";
import { useState } from "react";
export default function CssGradientGenerator() {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#ec4899");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");
  const gradient = type === "linear" ? `linear-gradient(${angle}deg, ${color1}, ${color2})` : `radial-gradient(circle, ${color1}, ${color2})`;
  const css = `background: ${gradient};`;
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1><p className="text-gray-400 mb-6">Create and copy CSS gradients visually.</p><div className="flex gap-2 mb-6">{["linear","radial"].map(t => (<button key={t} onClick={()=>setType(t)} className={`px-4 py-2 rounded ${type===t?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{t.charAt(0).toUpperCase()+t.slice(1)}</button>))}</div><div className="rounded-xl h-48 mb-6 transition-all" style={{background:gradient}} /><div className="grid md:grid-cols-3 gap-4 mb-6"><div><label className="text-sm text-gray-400 block mb-2">Color 1</label><input type="color" value={color1} onChange={e=>setColor1(e.target.value)} className="w-full h-12 rounded cursor-pointer" /></div><div><label className="text-sm text-gray-400 block mb-2">Color 2</label><input type="color" value={color2} onChange={e=>setColor2(e.target.value)} className="w-full h-12 rounded cursor-pointer" /></div>{type==="linear" && <div><label className="text-sm text-gray-400 block mb-2">Angle: {angle}°</label><input type="range" min="0" max="360" value={angle} onChange={e=>setAngle(Number(e.target.value))} className="w-full mt-3" /></div>}</div><div className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm">{css}</div><button onClick={()=>navigator.clipboard.writeText(css)} className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy CSS</button></div>);
}