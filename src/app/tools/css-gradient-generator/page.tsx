"use client";
import { useState } from "react";
export default function CssGradientGenerator() {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#8b5cf6");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState<"linear"|"radial">("linear");
  const gradient = type==="linear" ? `linear-gradient(${angle}deg, ${color1}, ${color2})` : `radial-gradient(circle, ${color1}, ${color2})`;
  const css = `background: ${gradient};`;
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">CSS Gradient Generator</h1>
      <p className="text-gray-400 mb-4">Build beautiful CSS gradients visually.</p>
      <div style={{background:gradient}} className="w-full h-40 rounded-lg mb-6" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div><label className="text-gray-400 text-sm block mb-1">Color 1</label><input type="color" value={color1} onChange={e=>setColor1(e.target.value)} className="w-full h-10 rounded cursor-pointer" /></div>
        <div><label className="text-gray-400 text-sm block mb-1">Color 2</label><input type="color" value={color2} onChange={e=>setColor2(e.target.value)} className="w-full h-10 rounded cursor-pointer" /></div>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex-1"><label className="text-gray-400 text-sm block mb-1">Type</label>
          <select value={type} onChange={e=>setType(e.target.value as "linear"|"radial")} className="w-full bg-gray-800 text-white p-2 rounded">
            <option value="linear">Linear</option><option value="radial">Radial</option>
          </select>
        </div>
        {type==="linear" && <div className="flex-1"><label className="text-gray-400 text-sm block mb-1">Angle: {angle}°</label><input type="range" min="0" max="360" value={angle} onChange={e=>setAngle(+e.target.value)} className="w-full mt-2" /></div>}
      </div>
      <div className="bg-gray-800 rounded p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">CSS</span>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="text-blue-400 text-sm">Copy</button>
        </div>
        <code className="text-green-400 font-mono text-sm break-all">{css}</code>
      </div>
    </div>
  );
}