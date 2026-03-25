"use client";
import { useState } from "react";
export default function GradientGenerator() {
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(135);
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#ec4899");
  const [color3, setColor3] = useState("");
  const gradient = type === "linear"
    ? `linear-gradient(${angle}deg, ${color1}, ${color2}${color3 ? ", " + color3 : ""})`
    : `radial-gradient(circle, ${color1}, ${color2}${color3 ? ", " + color3 : ""})`;
  const css = `background: ${gradient};`;
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">CSS Gradient Generator</h1>
      <div className="mb-4 rounded-lg h-40 w-full" style={{ background: gradient }} />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </div>
        {type === "linear" && (
          <div>
            <label className="block text-sm font-medium mb-1">Angle: {angle}deg</label>
            <input type="range" min={0} max={360} value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full" />
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[{label:"Color 1",val:color1,set:setColor1},{label:"Color 2",val:color2,set:setColor2},{label:"Color 3 (optional)",val:color3,set:setColor3}].map(c => (
          <div key={c.label}>
            <label className="block text-sm font-medium mb-1">{c.label}</label>
            <input type="color" value={c.val || "#000000"} onChange={e => c.set(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
            {c.label.includes("3") && <button onClick={() => setColor3("")} className="text-xs text-gray-400 mt-1">Clear</button>}
          </div>
        ))}
      </div>
      <div className="bg-gray-800 rounded p-3 font-mono text-sm">{css}</div>
      <button onClick={() => navigator.clipboard.writeText(css)} className="mt-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700">Copy CSS</button>
    </div>
  );
}