"use client";
import { useState } from "react";
export default function CssGradientGenerator() {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#ec4899");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");
  const css = type === "linear"
    ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
    : `radial-gradient(circle, ${color1}, ${color2})`;
  const copy = () => navigator.clipboard.writeText(`background: ${css};`);
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
      <p className="text-gray-400 mb-6">Build linear or radial CSS gradients visually.</p>
      <div className="rounded-xl overflow-hidden mb-6 h-40" style={{background: css}} />
      <div className="bg-gray-800 rounded-xl p-6 space-y-4">
        <div className="flex gap-4">
          <label className="flex flex-col gap-1 flex-1">
            <span className="text-sm text-gray-400">Color 1</span>
            <input type="color" value={color1} onChange={e=>setColor1(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
          </label>
          <label className="flex flex-col gap-1 flex-1">
            <span className="text-sm text-gray-400">Color 2</span>
            <input type="color" value={color2} onChange={e=>setColor2(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
          </label>
        </div>
        <div className="flex gap-4 items-center">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-400">Type</span>
            <select value={type} onChange={e=>setType(e.target.value)} className="bg-gray-700 rounded px-3 py-2">
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </label>
          {type==="linear" && <label className="flex flex-col gap-1 flex-1">
            <span className="text-sm text-gray-400">Angle: {angle}°</span>
            <input type="range" min={0} max={360} value={angle} onChange={e=>setAngle(+e.target.value)} className="w-full" />
          </label>}
        </div>
        <div className="bg-gray-900 rounded p-3 font-mono text-sm text-green-400">background: {css};</div>
        <button onClick={copy} className="w-full bg-indigo-600 hover:bg-indigo-500 rounded-lg py-2 font-semibold">Copy CSS</button>
      </div>
    </div>
  );
}
