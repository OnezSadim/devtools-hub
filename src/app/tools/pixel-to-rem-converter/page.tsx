"use client";
import { useState } from "react";
export default function PixelToRemConverter() {
  const [px, setPx] = useState("");
  const [rem, setRem] = useState("");
  const [base, setBase] = useState("16");
  const b = parseFloat(base) || 16;
  const handlePx = v => { setPx(v); setRem(v ? (parseFloat(v)/b).toFixed(4) : ""); };
  const handleRem = v => { setRem(v); setPx(v ? (parseFloat(v)*b).toFixed(4) : ""); };
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Pixel to REM Converter</h1>
      <div className="mb-4">
        <label className="text-gray-400 text-sm">Base font size (px)</label>
        <input className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700" value={base} onChange={e=>setBase(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-400 text-sm">Pixels (px)</label>
          <input className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700" placeholder="px" value={px} onChange={e=>handlePx(e.target.value)} />
        </div>
        <div>
          <label className="text-gray-400 text-sm">REM</label>
          <input className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700" placeholder="rem" value={rem} onChange={e=>handleRem(e.target.value)} />
        </div>
      </div>
    </div>
  );
}