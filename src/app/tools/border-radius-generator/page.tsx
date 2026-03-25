"use client";
import { useState } from "react";
export default function BorderRadiusGenerator() {
  const [tl, setTl] = useState(10);
  const [tr, setTr] = useState(10);
  const [br, setBr] = useState(10);
  const [bl, setBl] = useState(10);
  const [linked, setLinked] = useState(true);
  const setAll = (v: number) => { setTl(v); setTr(v); setBr(v); setBl(v); };
  const handleChange = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    if (linked) setAll(v); else setter(v);
  };
  const radius = `${tl}px ${tr}px ${br}px ${bl}px`;
  const css = `border-radius: ${radius};`;
  const corners = [{label:"Top Left",val:tl,set:setTl},{label:"Top Right",val:tr,set:setTr},{label:"Bottom Right",val:br,set:setBr},{label:"Bottom Left",val:bl,set:setBl}];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Border Radius Generator</h1>
      <div className="flex items-center justify-center mb-6 bg-gray-900 rounded p-10">
        <div className="w-40 h-40 bg-indigo-500" style={{ borderRadius: radius }} />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <input type="checkbox" checked={linked} onChange={e => setLinked(e.target.checked)} id="linked" />
        <label htmlFor="linked" className="text-sm">Link all corners</label>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {corners.map(c => (
          <div key={c.label}>
            <label className="block text-sm mb-1">{c.label}: {c.val}px</label>
            <input type="range" min={0} max={200} value={c.val} onChange={handleChange(c.set)} className="w-full" />
          </div>
        ))}
      </div>
      <div className="bg-gray-800 rounded p-3 font-mono text-sm">{css}</div>
      <button onClick={() => navigator.clipboard.writeText(css)} className="mt-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700">Copy CSS</button>
    </div>
  );
}