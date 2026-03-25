"use client";
import { useState } from "react";
function gcd(a,b){return b?gcd(b,a%b):a;}
export default function AspectRatioCalculator() {
  const [w, setW] = useState(1920);
  const [h, setH] = useState(1080);
  const [mode, setMode] = useState("ratio");
  const [targetW, setTargetW] = useState(1280);
  const d = gcd(w,h);
  const ratio = `${w/d}:${h/d}`;
  const scaledH = Math.round(targetW * h / w);
  const scaledW = Math.round(targetW * w / h);
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Aspect Ratio Calculator</h1>
      <div className="bg-gray-800 rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <label className="text-gray-300">Width (px)
            <input type="number" value={w} onChange={e=>setW(Number(e.target.value))} className="mt-1 block w-full bg-gray-700 text-white rounded px-3 py-2" />
          </label>
          <label className="text-gray-300">Height (px)
            <input type="number" value={h} onChange={e=>setH(Number(e.target.value))} className="mt-1 block w-full bg-gray-700 text-white rounded px-3 py-2" />
          </label>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 text-center">
          <p className="text-gray-400 text-sm">Aspect Ratio</p>
          <p className="text-4xl font-bold text-indigo-400">{ratio}</p>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-white font-semibold mb-3">Scale Calculator</p>
          <div className="flex gap-2 mb-3">
            <button onClick={()=>setMode("ratio")} className={`px-3 py-1 rounded text-sm ${mode==="ratio"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300"}`}>Given Width</button>
            <button onClick={()=>setMode("height")} className={`px-3 py-1 rounded text-sm ${mode==="height"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300"}`}>Given Height</button>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-gray-300 flex-1">
              {mode==="ratio"?"Target Width":"Target Height"} (px)
              <input type="number" value={targetW} onChange={e=>setTargetW(Number(e.target.value))} className="mt-1 block w-full bg-gray-700 text-white rounded px-3 py-2" />
            </label>
            <div className="flex-1 text-center">
              <p className="text-gray-400 text-sm">Result</p>
              <p className="text-2xl font-bold text-green-400">{mode==="ratio"?`${targetW} x ${scaledH}`:`${scaledW} x ${targetW}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
