"use client";
import { useState } from "react";
export default function CSSGradientGenerator() {
  const [c1,setC1]=useState("#ff6b6b");
  const [c2,setC2]=useState("#4ecdc4");
  const [angle,setAngle]=useState(90);
  const grad=`linear-gradient(${angle}deg, ${c1}, ${c2})`;
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">CSS Gradient Generator</h1><div className="bg-gray-800 p-6 rounded-lg mb-4"><div style={{background:grad,height:"120px"}} className="rounded mb-4"/><div className="grid grid-cols-3 gap-4"><div><label className="block text-sm mb-1">Color 1</label><input type="color" value={c1} onChange={e=>setC1(e.target.value)} className="w-full h-10 rounded"/></div><div><label className="block text-sm mb-1">Color 2</label><input type="color" value={c2} onChange={e=>setC2(e.target.value)} className="w-full h-10 rounded"/></div><div><label className="block text-sm mb-1">Angle: {angle}°</label><input type="range" min={0} max={360} value={angle} onChange={e=>setAngle(Number(e.target.value))} className="w-full"/></div></div><div className="mt-4 bg-gray-900 p-3 rounded font-mono text-sm text-green-400">{`background: ${grad};`}</div></div></div>);
}