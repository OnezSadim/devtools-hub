"use client";
import { useState } from "react";

export default function GradientGenerator() {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#ec4899");
  const [color3, setColor3] = useState("");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");

  const colors = [color1, color2, ...(color3 ? [color3] : [])].join(", ");
  const gradient = type === "linear" ? `linear-gradient(${angle}deg, ${colors})` : `radial-gradient(circle, ${colors})`;
  const css = `background: ${gradient};`;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
        <p className="text-gray-400 mb-6">Create beautiful CSS gradients visually</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="rounded-lg h-40" style={{background: gradient}} />
          <div className="flex gap-2">
            <button onClick={() => setType("linear")} className={`flex-1 py-2 rounded-lg ${type==="linear" ? "bg-blue-600" : "bg-gray-800"}`}>Linear</button>
            <button onClick={() => setType("radial")} className={`flex-1 py-2 rounded-lg ${type==="radial" ? "bg-blue-600" : "bg-gray-800"}`}>Radial</button>
          </div>
          {type === "linear" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Angle: {angle}°</label>
              <input type="range" min={0} max={360} value={angle} onChange={e => setAngle(Number(e.target.value))} className="w-full" />
            </div>
          )}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Color 1</label>
              <div className="flex gap-2">
                <input type="color" value={color1} onChange={e => setColor1(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
                <input value={color1} onChange={e => setColor1(e.target.value)} className="flex-1 bg-gray-800 rounded px-2 font-mono text-sm" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Color 2</label>
              <div className="flex gap-2">
                <input type="color" value={color2} onChange={e => setColor2(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
                <input value={color2} onChange={e => setColor2(e.target.value)} className="flex-1 bg-gray-800 rounded px-2 font-mono text-sm" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Color 3 (optional)</label>
              <div className="flex gap-2">
                <input type="color" value={color3 || "#ffffff"} onChange={e => setColor3(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
                <input value={color3} onChange={e => setColor3(e.target.value)} placeholder="optional" className="flex-1 bg-gray-800 rounded px-2 font-mono text-sm" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">CSS Code</label>
            <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm flex justify-between items-center">
              <span className="break-all">{css}</span>
              <button onClick={() => navigator.clipboard.writeText(css)} className="ml-3 text-blue-400 hover:text-blue-300 shrink-0">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
