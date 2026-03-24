"use client";
import { useState } from "react";
export default function PixelConverter() {
  const [px, setPx] = useState("");
  const [baseFontSize, setBaseFontSize] = useState("16");
  const base = Number(baseFontSize) || 16;
  const rem = px ? (Number(px) / base).toFixed(4) : "";
  const em = rem;
  const pt = px ? (Number(px) * 0.75).toFixed(2) : "";
  const vw = px ? (Number(px) / 19.2).toFixed(4) : "";
  const vh = vw;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pixel Converter</h1>
        <p className="text-gray-400 mb-6">Convert px to rem, em, pt and more.</p>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Base font size (px)</label>
            <input type="number" className="w-32 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" value={baseFontSize} onChange={e=>setBaseFontSize(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Pixels</label>
            <input type="number" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-xl" placeholder="Enter pixels..." value={px} onChange={e=>setPx(e.target.value)} />
          </div>
          {px && (
            <div className="space-y-2 border-t border-gray-700 pt-4">
              {[{label:"REM",val:rem,unit:"rem"},{label:"EM",val:em,unit:"em"},{label:"Points",val:pt,unit:"pt"},{label:"VW (1920px)",val:vw,unit:"vw"},{label:"VH (1080px)",val:vh,unit:"vh"}].map(({label,val,unit}) => (
                <div key={label} className="flex justify-between items-center bg-gray-800 rounded-lg px-4 py-3">
                  <span className="text-gray-400">{label}</span>
                  <span className="font-mono font-semibold text-blue-400">{val}{unit}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}