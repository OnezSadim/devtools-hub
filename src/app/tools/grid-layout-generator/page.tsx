"use client";
import { useState } from "react";
export default function GridLayoutGenerator() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [colGap, setColGap] = useState(16);
  const [rowGap, setRowGap] = useState(16);
  const [colTemplate, setColTemplate] = useState("repeat(3, 1fr)");
  const css = `display: grid;
grid-template-columns: ${colTemplate};
grid-template-rows: repeat(${rows}, 1fr);
column-gap: ${colGap}px;
row-gap: ${rowGap}px;`;
  const colors = ["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#3b82f6","#ef4444","#14b8a6","#f97316"];
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Grid Layout Generator</h1>
        <p className="text-gray-400 mb-6">Visualize and generate CSS grid layouts</p>
        <div style={{display:"grid",gridTemplateColumns:colTemplate,gridTemplateRows:`repeat(${rows}, 60px)`,columnGap:`${colGap}px`,rowGap:`${rowGap}px`}} className="bg-gray-800 rounded-xl p-4 mb-6">
          {Array.from({length:cols*rows},(_,i)=><div key={i} style={{background:colors[i%colors.length]}} className="rounded-lg flex items-center justify-center font-bold text-white text-sm">{i+1}</div>)}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="text-sm text-gray-400 block mb-1">Columns: {cols}</label><input type="range" min={1} max={6} value={cols} onChange={e=>{setCols(+e.target.value);setColTemplate(`repeat(${e.target.value}, 1fr)`);}} className="w-full" /></div>
          <div><label className="text-sm text-gray-400 block mb-1">Rows: {rows}</label><input type="range" min={1} max={6} value={rows} onChange={e=>setRows(+e.target.value)} className="w-full" /></div>
          <div><label className="text-sm text-gray-400 block mb-1">Col Gap: {colGap}px</label><input type="range" min={0} max={48} value={colGap} onChange={e=>setColGap(+e.target.value)} className="w-full" /></div>
          <div><label className="text-sm text-gray-400 block mb-1">Row Gap: {rowGap}px</label><input type="range" min={0} max={48} value={rowGap} onChange={e=>setRowGap(+e.target.value)} className="w-full" /></div>
        </div>
        <div className="mb-4"><label className="text-sm text-gray-400 block mb-1">Column Template</label><input value={colTemplate} onChange={e=>setColTemplate(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-2 font-mono" /></div>
        <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <pre className="font-mono text-sm whitespace-pre-wrap">{css}</pre>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-2 text-blue-400 text-sm">Copy CSS</button>
        </div>
      </div>
    </div>
  );
}