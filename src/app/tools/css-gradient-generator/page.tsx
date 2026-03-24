"use client";
import { useState } from "react";
export default function CssGradientGenerator() {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#8b5cf6");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");
  const css = type === "linear" ? `linear-gradient(${angle}deg, ${color1}, ${color2})` : `radial-gradient(circle, ${color1}, ${color2})`;
  const cssRule = `background: ${css};`;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
        <p className="text-gray-400 mb-6">Generate beautiful CSS gradients instantly.</p>
        <div className="rounded-xl mb-6 h-40" style={{ background: css }} />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Color 1</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={color1} onChange={e => setColor1(e.target.value)} className="h-10 w-10 rounded cursor-pointer bg-transparent border-0" />
              <input value={color1} onChange={e => setColor1(e.target.value)} className="flex-1 bg-gray-900 border border-gray-700 rounded p-2 font-mono text-sm" />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Color 2</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={color2} onChange={e => setColor2(e.target.value)} className="h-10 w-10 rounded cursor-pointer bg-transparent border-0" />
              <input value={color2} onChange={e => setColor2(e.target.value)} className="flex-1 bg-gray-900 border border-gray-700 rounded p-2 font-mono text-sm" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <button onClick={() => setType("linear")} className={`px-4 py-2 rounded ${type==="linear"?"bg-blue-600":"bg-gray-800"}`}>Linear</button>
          <button onClick={() => setType("radial")} className={`px-4 py-2 rounded ${type==="radial"?"bg-blue-600":"bg-gray-800"}`}>Radial</button>
        </div>
        {type === "linear" && (
          <div className="mb-4">
            <label className="text-sm text-gray-400 mb-1 block">Angle: {angle}°</label>
            <input type="range" min="0" max="360" value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full" />
          </div>
        )}
        <div className="bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm flex justify-between items-center">
          <span>{cssRule}</span>
          <button onClick={() => navigator.clipboard.writeText(cssRule)} className="ml-4 text-blue-400 hover:text-blue-300 text-xs">Copy</button>
        </div>
      </div>
    </main>
  );
}