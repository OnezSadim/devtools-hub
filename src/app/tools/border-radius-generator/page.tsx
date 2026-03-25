"use client";
import { useState } from "react";
export default function BorderRadiusGenerator() {
  const [tl, setTl] = useState(8);
  const [tr, setTr] = useState(8);
  const [br, setBr] = useState(8);
  const [bl, setBl] = useState(8);
  const css = `${tl}px ${tr}px ${br}px ${bl}px`;
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Border Radius Generator</h1>
      <div className="bg-gray-800 rounded-xl p-8 flex items-center justify-center">
        <div className="w-40 h-40 bg-indigo-500" style={{borderRadius: css}} />
      </div>
      <div className="bg-gray-800 rounded-xl p-4 space-y-3">
        {[["Top Left",tl,setTl],["Top Right",tr,setTr],["Bottom Right",br,setBr],["Bottom Left",bl,setBl]].map(([label,val,setter])=>(
          <label key={label} className="flex items-center gap-4 text-gray-300">
            <span className="w-28">{label}: {val}px</span>
            <input type="range" min="0" max="100" value={val} onChange={e=>setter(Number(e.target.value))} className="flex-1" />
          </label>
        ))}
        <div className="bg-gray-900 rounded p-3">
          <code className="text-green-400 text-sm">border-radius: {css};</code>
        </div>
        <button onClick={()=>navigator.clipboard.writeText(`border-radius: ${css};`)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Copy CSS</button>
      </div>
    </div>
  );
}
