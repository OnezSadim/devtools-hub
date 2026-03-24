"use client";
import { useState } from "react";
export default function CssGradientGenerator() {
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(90);
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#ec4899");
  const [color3, setColor3] = useState("");
  const gradient = () => {
    const stops = [color1, color2, ...(color3 ? [color3] : [])].join(", ");
    return type === "linear" ? `linear-gradient(${angle}deg, ${stops})` : `radial-gradient(circle, ${stops})`;
  };
  const css = `background: ${gradient()};`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
        <p className="text-gray-400 mb-6">Generate beautiful CSS gradients</p>
        <div className="rounded-xl mb-6" style={{height:"200px", background: gradient()}}/>
        <div className="space-y-4">
          <div className="flex gap-4">
            <select value={type} onChange={e=>setType(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2">
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
            {type==="linear" && <div className="flex items-center gap-2">
              <label className="text-gray-400 text-sm">Angle</label>
              <input type="range" min="0" max="360" value={angle} onChange={e=>setAngle(Number(e.target.value))} className="w-32"/>
              <span className="text-sm">{angle}deg</span>
            </div>}
          </div>
          <div className="flex gap-4 items-center">
            <div><label className="text-gray-400 text-sm block mb-1">Color 1</label><input type="color" value={color1} onChange={e=>setColor1(e.target.value)} className="w-16 h-10 rounded cursor-pointer"/></div>
            <div><label className="text-gray-400 text-sm block mb-1">Color 2</label><input type="color" value={color2} onChange={e=>setColor2(e.target.value)} className="w-16 h-10 rounded cursor-pointer"/></div>
            <div><label className="text-gray-400 text-sm block mb-1">Color 3 (opt)</label><input type="color" value={color3||"#ffffff"} onChange={e=>setColor3(e.target.value)} className="w-16 h-10 rounded cursor-pointer"/><button onClick={()=>setColor3("")} className="ml-1 text-xs text-gray-500">clear</button></div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <div className="flex justify-between mb-1"><span className="text-gray-400 text-sm">CSS</span><button onClick={()=>navigator.clipboard.writeText(css)} className="text-blue-400 text-sm">Copy</button></div>
            <code className="text-green-400 font-mono text-sm break-all">{css}</code>
          </div>
        </div>
      </div>
    </main>
  );
}