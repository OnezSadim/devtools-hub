"use client";
import { useState } from "react";
export default function PixelUnitConverter() {
  const [px, setPx] = useState("16");
  const [base, setBase] = useState("16");
  const val = parseFloat(px) || 0;
  const b = parseFloat(base) || 16;
  const units = [
    { name: "px", val: val, color: "text-blue-400" },
    { name: "rem", val: val/b, color: "text-green-400" },
    { name: "em", val: val/b, color: "text-yellow-400" },
    { name: "pt", val: val*0.75, color: "text-purple-400" },
    { name: "pc", val: val/16, color: "text-orange-400" },
    { name: "cm", val: val*0.02646, color: "text-pink-400" },
    { name: "mm", val: val*0.26458, color: "text-red-400" },
    { name: "in", val: val/96, color: "text-cyan-400" },
    { name: "vw (1920px)", val: val/19.2, color: "text-indigo-400" },
    { name: "vh (1080px)", val: val/10.8, color: "text-teal-400" },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">Pixel Unit Converter</h1>
        <p className="text-gray-400 mb-6">Convert pixel values to rem, em, pt, cm, mm, and more CSS units.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Pixels (px)</label>
            <input type="number" value={px} onChange={e=>setPx(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 font-mono text-lg" />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Base font size (px)</label>
            <input type="number" value={base} onChange={e=>setBase(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 font-mono text-lg" />
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
          {units.map(u => (
            <div key={u.name} className="flex justify-between items-center px-5 py-3 border-b border-gray-800 last:border-0 hover:bg-gray-800/50 cursor-pointer" onClick={()=>navigator.clipboard.writeText(u.val.toPrecision(6).replace(/\.?0+$/,""))}>
              <span className="text-gray-400 font-mono w-32">{u.name}</span>
              <span className={`${u.color} font-mono text-lg`}>{u.val.toPrecision(6).replace(/\.?0+$/,"")}</span>
              <span className="text-gray-600 text-xs">click to copy</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}