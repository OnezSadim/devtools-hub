"use client";
import { useState } from "react";
export default function BorderRadiusGenerator() {
  const [tl, setTl] = useState(8);
  const [tr, setTr] = useState(8);
  const [br, setBr] = useState(8);
  const [bl, setBl] = useState(8);
  const radius = `${tl}px ${tr}px ${br}px ${bl}px`;
  const css = `border-radius: ${radius};`;
  const corners = [{l:"Top Left",v:tl,s:setTl},{l:"Top Right",v:tr,s:setTr},{l:"Bottom Right",v:br,s:setBr},{l:"Bottom Left",v:bl,s:setBl}];
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Border Radius Generator</h1>
        <p className="text-gray-400 mb-6">Generate custom border-radius values</p>
        <div className="flex items-center justify-center h-48 bg-gray-800 rounded-xl mb-6">
          <div style={{borderRadius:radius,background:"#6366f1"}} className="w-40 h-28" />
        </div>
        {corners.map(c=><div key={c.l} className="mb-3"><label className="text-sm text-gray-400 block mb-1">{c.l}: {c.v}px</label><input type="range" min={0} max={100} value={c.v} onChange={e=>c.s(+e.target.value)} className="w-full" /></div>)}
        <div className="bg-gray-900 border border-gray-700 rounded p-4 flex items-center justify-between">
          <code className="font-mono text-sm">{css}</code>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="text-blue-400 text-sm ml-4">Copy</button>
        </div>
      </div>
    </div>
  );
}