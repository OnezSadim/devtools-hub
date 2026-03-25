"use client";
import { useState } from "react";
export default function CssGridGenerator() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [gap, setGap] = useState(16);
  const css = `display: grid;
grid-template-columns: repeat(${cols}, 1fr);
grid-template-rows: repeat(${rows}, 1fr);
gap: ${gap}px;`;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">CSS Grid Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-400">Columns: {cols}</label>
            <input type="range" min={1} max={12} value={cols} onChange={e=>setCols(+e.target.value)} className="w-full" />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Rows: {rows}</label>
            <input type="range" min={1} max={8} value={rows} onChange={e=>setRows(+e.target.value)} className="w-full" />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Gap: {gap}px</label>
            <input type="range" min={0} max={48} value={gap} onChange={e=>setGap(+e.target.value)} className="w-full" />
          </div>
          <pre className="bg-gray-900 rounded p-4 text-green-400 text-sm">{css}</pre>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy CSS</button>
        </div>
        <div>
          <div style={{display:"grid", gridTemplateColumns:`repeat(${cols}, 1fr)`, gridTemplateRows:`repeat(${rows}, 1fr)`, gap:`${gap}px`, height:"300px"}}>
            {Array.from({length:cols*rows}).map((_,i)=><div key={i} className="bg-blue-500 rounded flex items-center justify-center text-xs font-bold">{i+1}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
