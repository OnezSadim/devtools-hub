"use client";
import { useState } from "react";
export default function GradientGenerator() {
  const [c1, setC1] = useState("#6366f1");
  const [c2, setC2] = useState("#ec4899");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");
  const css = type === "linear" ? `linear-gradient(${angle}deg, ${c1}, ${c2})` : `radial-gradient(circle, ${c1}, ${c2})`;
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">CSS Gradient Generator</h1>
      <div className="rounded-xl h-40 w-full" style={{background: css}} />
      <div className="bg-gray-800 rounded-xl p-4 space-y-4">
        <div className="flex gap-4">
          <label className="text-gray-300">Type:
            <select value={type} onChange={e=>setType(e.target.value)} className="ml-2 bg-gray-700 text-white rounded px-2 py-1">
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </label>
          {type==="linear" && <label className="text-gray-300">Angle: {angle}deg
            <input type="range" min="0" max="360" value={angle} onChange={e=>setAngle(Number(e.target.value))} className="ml-2" />
          </label>}
        </div>
        <div className="flex gap-6">
          <label className="text-gray-300">Color 1: <input type="color" value={c1} onChange={e=>setC1(e.target.value)} className="ml-2" /></label>
          <label className="text-gray-300">Color 2: <input type="color" value={c2} onChange={e=>setC2(e.target.value)} className="ml-2" /></label>
        </div>
        <div className="bg-gray-900 rounded p-3">
          <p className="text-xs text-gray-400 mb-1">CSS</p>
          <code className="text-green-400 text-sm">background: {css};</code>
        </div>
        <button onClick={()=>navigator.clipboard.writeText(`background: ${css};`)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Copy CSS</button>
      </div>
    </div>
  );
}
