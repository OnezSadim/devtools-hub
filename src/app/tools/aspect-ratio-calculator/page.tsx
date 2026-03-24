"use client";
import { useState } from "react";
export default function AspectRatioCalculator() {
  const [w, setW] = useState(1920);
  const [h, setH] = useState(1080);
  const [newW, setNewW] = useState(1280);
  const gcd = (a:number,b:number):number => b===0?a:gcd(b,a%b);
  const g = gcd(w, h);
  const ratioW = w/g, ratioH = h/g;
  const newH = Math.round((newW / w) * h);
  const presets = [{w:1920,h:1080},{w:1280,h:720},{w:1920,h:1200},{w:2560,h:1440},{w:3840,h:2160},{w:1080,h:1920},{w:1080,h:1080}];
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Aspect Ratio Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate and maintain aspect ratios for images and videos.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm mb-1">Width (px)</label><input type="number" value={w} onChange={e=>setW(+e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" /></div>
        <div><label className="block text-sm mb-1">Height (px)</label><input type="number" value={h} onChange={e=>setH(+e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" /></div>
      </div>
      <div className="bg-gray-800 rounded p-4 mb-6 text-center">
        <p className="text-4xl font-bold">{ratioW}:{ratioH}</p>
        <p className="text-gray-400 text-sm mt-1">{w} × {h}</p>
      </div>
      <div className="mb-4"><label className="block text-sm mb-1">New width</label><input type="number" value={newW} onChange={e=>setNewW(+e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2" /></div>
      <div className="bg-blue-900/40 rounded p-3 text-center mb-6"><p className="text-sm text-gray-400">New height</p><p className="text-2xl font-bold">{newH}px</p></div>
      <div className="grid grid-cols-4 gap-2">{presets.map(p=><button key={`${p.w}x${p.h}`} onClick={()=>{setW(p.w);setH(p.h);}} className="bg-gray-700 hover:bg-gray-600 rounded p-2 text-xs">{p.w}x{p.h}</button>)}</div>
    </div>
  );
}