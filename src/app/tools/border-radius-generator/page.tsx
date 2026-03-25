"use client";
import { useState } from "react";
export default function BorderRadiusGenerator() {
  const [tl, setTl] = useState(16);
  const [tr, setTr] = useState(16);
  const [br, setBr] = useState(16);
  const [bl, setBl] = useState(16);
  const [linked, setLinked] = useState(true);
  const update = (v: number) => { setTl(v); setTr(v); setBr(v); setBl(v); };
  const css = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Border Radius Generator</h1>
        <p className="text-gray-400 mb-6">Generate CSS border-radius values visually.</p>
        <div className="flex items-center justify-center bg-gray-800 rounded-xl mb-6" style={{height:"200px"}}>
          <div className="w-40 h-40 bg-blue-600" style={{borderRadius:`${tl}px ${tr}px ${br}px ${bl}px`}} />
        </div>
        <label className="flex items-center gap-2 mb-4 cursor-pointer"><input type="checkbox" checked={linked} onChange={e=>setLinked(e.target.checked)} /><span className="text-sm">Link all corners</span></label>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[{label:"Top Left",val:tl,set:(v:number)=>linked?update(v):setTl(v)},{label:"Top Right",val:tr,set:(v:number)=>linked?update(v):setTr(v)},{label:"Bottom Right",val:br,set:(v:number)=>linked?update(v):setBr(v)},{label:"Bottom Left",val:bl,set:(v:number)=>linked?update(v):setBl(v)}].map(({label,val,set})=>(
            <div key={label}><label className="block text-sm text-gray-400 mb-1">{label}: {val}px</label><input type="range" min="0" max="100" value={val} onChange={e=>set(Number(e.target.value))} className="w-full" /></div>
          ))}
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <code className="text-green-400 text-sm">{css}</code>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-2 block text-xs text-blue-400 hover:text-blue-300">Copy</button>
        </div>
      </div>
    </main>
  );
}