"use client";
import { useState } from "react";

export default function SvgPathEditor() {
  const [path, setPath] = useState("M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
  const [stroke, setStroke] = useState("#6366f1");
  const [fill, setFill] = useState("none");
  const [strokeWidth, setStrokeWidth] = useState(3);
  const svgCode = `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <path
    d="${path}"
    fill="${fill}"
    stroke="${stroke}"
    stroke-width="${strokeWidth}"
  />
</svg>`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SVG Path Editor</h1>
        <p className="text-gray-400 mb-8">Edit and preview SVG path data.</p>
        <div className="bg-gray-800 rounded-xl p-6 mb-6 flex justify-center">
          <svg viewBox="0 0 200 160" className="w-full max-w-sm h-48" xmlns="http://www.w3.org/2000/svg">
            <path d={path} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
          </svg>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Path Data (d attribute)</label>
          <textarea value={path} onChange={e=>setPath(e.target.value)} rows={3} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm resize-none" />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Stroke Color</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={stroke} onChange={e=>setStroke(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
              <input type="text" value={stroke} onChange={e=>setStroke(e.target.value)} className="flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-2 text-sm font-mono" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Fill Color</label>
            <select value={fill} onChange={e=>setFill(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
              <option value="none">none</option>
              <option value="#6366f1">#6366f1</option>
              <option value="#ec4899">#ec4899</option>
              <option value="#10b981">#10b981</option>
            </select>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">Stroke Width</span><span className="font-mono">{strokeWidth}</span></div>
            <input type="range" min={1} max={10} value={strokeWidth} onChange={e=>setStrokeWidth(Number(e.target.value))} className="w-full mt-3" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400">SVG Code</span>
            <button onClick={()=>navigator.clipboard.writeText(svgCode)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
          </div>
          <pre className="text-sm text-green-400 whitespace-pre-wrap">{svgCode}</pre>
        </div>
      </div>
    </main>
  );
}