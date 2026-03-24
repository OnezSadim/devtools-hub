"use client";
import { useState } from "react";
export default function AspectRatioCalculator() {
  const [w1,setW1]=useState(""),[h1,setH1]=useState(""),[w2,setW2]=useState(""),[h2,setH2]=useState("");
  const gcd=(a:number,b:number):number=>b===0?a:gcd(b,a%b);
  const ratio = w1&&h1 ? (()=>{const g=gcd(+w1,+h1);return `${+w1/g}:${+h1/g}`;})() : null;
  const calcH = w1&&h1&&w2 ? Math.round(+w2*(+h1/+w1)) : null;
  const calcW = w1&&h1&&h2 ? Math.round(+h2*(+w1/+h1)) : null;
  const common = [{r:"16:9",ex:"HD Video"},{r:"4:3",ex:"Traditional TV"},{r:"1:1",ex:"Square"},{r:"21:9",ex:"Ultrawide"},{r:"9:16",ex:"Portrait/Mobile"},{r:"3:2",ex:"DSLR Photo"},{r:"2:1",ex:"Panoramic"}];
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Aspect Ratio Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate aspect ratios and scale dimensions proportionally.</p>
      <div className="bg-gray-800 rounded p-4 mb-4">
        <p className="font-semibold mb-3">Original Dimensions</p>
        <div className="flex items-center gap-3">
          <input type="number" placeholder="Width" className="flex-1 bg-gray-900 border border-gray-700 rounded p-2" value={w1} onChange={e=>setW1(e.target.value)} />
          <span className="text-gray-500">×</span>
          <input type="number" placeholder="Height" className="flex-1 bg-gray-900 border border-gray-700 rounded p-2" value={h1} onChange={e=>setH1(e.target.value)} />
        </div>
        {ratio && <p className="mt-2 text-blue-400 font-mono">Ratio: {ratio}</p>}
      </div>
      <div className="bg-gray-800 rounded p-4 mb-4">
        <p className="font-semibold mb-3">Scale to New Size</p>
        <div className="grid grid-cols-2 gap-3">
          <div><p className="text-sm text-gray-400 mb-1">New Width → Height</p><div className="flex items-center gap-2"><input type="number" placeholder="Width" className="flex-1 bg-gray-900 border border-gray-700 rounded p-2" value={w2} onChange={e=>setW2(e.target.value)} />{calcH&&<span className="text-green-400 font-mono whitespace-nowrap">→ {calcH}px</span>}</div></div>
          <div><p className="text-sm text-gray-400 mb-1">New Height → Width</p><div className="flex items-center gap-2"><input type="number" placeholder="Height" className="flex-1 bg-gray-900 border border-gray-700 rounded p-2" value={h2} onChange={e=>setH2(e.target.value)} />{calcW&&<span className="text-green-400 font-mono whitespace-nowrap">→ {calcW}px</span>}</div></div>
        </div>
      </div>
      <div><p className="font-semibold mb-2 text-sm text-gray-400">Common Ratios</p><div className="grid grid-cols-2 gap-2">{common.map(c=><div key={c.r} className="flex justify-between bg-gray-900 rounded px-3 py-2 text-sm"><span className="font-mono text-blue-400">{c.r}</span><span className="text-gray-400">{c.ex}</span></div>)}</div></div>
    </div>
  );
}
