"use client";
import { useState } from "react";
export default function AspectRatioCalculator() {
  const [w, setW] = useState("1920");
  const [h, setH] = useState("1080");
  const [newW, setNewW] = useState("");
  const [newH, setNewH] = useState("");
  const gcd = (a:number,b:number):number => b===0?a:gcd(b,a%b);
  const width = parseInt(w)||1; const height = parseInt(h)||1;
  const d = gcd(width, height);
  const ratioW = width/d; const ratioH = height/d;
  const calcH = newW ? Math.round(parseInt(newW)*height/width) : "";
  const calcW = newH ? Math.round(parseInt(newH)*width/height) : "";
  const presets = [{n:"16:9",w:1920,h:1080},{n:"4:3",w:1024,h:768},{n:"1:1",w:1080,h:1080},{n:"9:16",w:1080,h:1920},{n:"21:9",w:2560,h:1080},{n:"3:2",w:1500,h:1000}];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Aspect Ratio Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate aspect ratios and scale dimensions</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h2 className="font-medium mb-4">Original Dimensions</h2>
          <div className="flex gap-4 items-center mb-4">
            <div><label className="block text-xs text-gray-400 mb-1">Width</label><input value={w} onChange={e=>setW(e.target.value)} className="w-28 bg-gray-800 rounded p-2" /></div>
            <span className="mt-4 text-gray-500">×</span>
            <div><label className="block text-xs text-gray-400 mb-1">Height</label><input value={h} onChange={e=>setH(e.target.value)} className="w-28 bg-gray-800 rounded p-2" /></div>
            <div className="mt-4 bg-blue-900 rounded-lg px-4 py-2"><span className="text-blue-300 font-bold text-lg">{ratioW}:{ratioH}</span></div>
          </div>
          <h2 className="font-medium mb-3">Scale to New Size</h2>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-xs text-gray-400 mb-1">New Width → get Height</label><input value={newW} onChange={e=>setNewW(e.target.value)} placeholder="Enter width" className="w-full bg-gray-800 rounded p-2" />{newW&&<div className="mt-1 text-green-400 text-sm">Height: {calcH}px</div>}</div>
            <div><label className="block text-xs text-gray-400 mb-1">New Height → get Width</label><input value={newH} onChange={e=>setNewH(e.target.value)} placeholder="Enter height" className="w-full bg-gray-800 rounded p-2" />{newH&&<div className="mt-1 text-green-400 text-sm">Width: {calcW}px</div>}</div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="font-medium mb-4">Common Presets</h2>
          <div className="grid grid-cols-3 gap-3">
            {presets.map(p=>(<button key={p.n} onClick={()=>{setW(String(p.w));setH(String(p.h))}} className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 text-center"><div className="font-bold text-blue-400">{p.n}</div><div className="text-xs text-gray-400">{p.w}x{p.h}</div></button>))}
          </div>
        </div>
      </div>
    </div>
  );
}
