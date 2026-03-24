"use client";
import { useState } from "react";
export default function AspectRatioCalculator() {
  const [w, setW] = useState("1920");
  const [h, setH] = useState("1080");
  const [targetW, setTargetW] = useState("1280");
  const gcd = (a:number,b:number):number => b===0?a:gcd(b,a%b);
  const width = parseFloat(w)||0, height = parseFloat(h)||0, tw = parseFloat(targetW)||0;
  const g = width&&height ? gcd(Math.round(width),Math.round(height)) : 1;
  const ratioW = width/g, ratioH = height/g;
  const targetH = tw && height ? (tw/width)*height : 0;
  const commonRatios = [[16,9],[4,3],[21,9],[1,1],[3,2],[9,16],[4,5],[2,1]];
  const currentRatio = width/height;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">Aspect Ratio Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate aspect ratios, scale dimensions, and find matching standard ratios.</p>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-200">Dimensions</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="text-sm text-gray-400 mb-1 block">Width</label><input type="number" value={w} onChange={e=>setW(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" /></div>
            <div><label className="text-sm text-gray-400 mb-1 block">Height</label><input type="number" value={h} onChange={e=>setH(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" /></div>
          </div>
          {width && height && <div className="text-2xl font-bold text-green-400 text-center">{ratioW}:{ratioH} <span className="text-gray-500 text-base">({(currentRatio).toFixed(4)})</span></div>}
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-200">Scale to Width</h2>
          <div className="flex gap-4 items-end">
            <div className="flex-1"><label className="text-sm text-gray-400 mb-1 block">Target Width</label><input type="number" value={targetW} onChange={e=>setTargetW(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" /></div>
            <div className="flex-1 text-center"><label className="text-sm text-gray-400 mb-1 block">Calculated Height</label><div className="bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-green-400">{targetH ? Math.round(targetH) : "—"}</div></div>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h2 className="text-sm font-semibold mb-3 text-gray-400">Common Ratios</h2>
          <div className="grid grid-cols-4 gap-2">
            {commonRatios.map(([rw,rh])=>{
              const match = width&&height ? Math.abs(currentRatio - rw/rh) < 0.01 : false;
              return <button key={`${rw}:${rh}`} onClick={()=>{setW(String(rw*100));setH(String(rh*100));}} className={`rounded py-2 text-sm font-mono ${match?"bg-blue-600 text-white":"bg-gray-800 hover:bg-gray-700 text-gray-300"}`}>{rw}:{rh}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}