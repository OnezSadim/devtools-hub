"use client";
import { useState } from "react";
export default function CssGridGenerator() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [gap, setGap] = useState(16);
  const [colSize, setColSize] = useState("1fr");
  const [rowSize, setRowSize] = useState("100px");
  const css = `display: grid;
grid-template-columns: repeat(${cols}, ${colSize});
grid-template-rows: repeat(${rows}, ${rowSize});
gap: ${gap}px;`;
  const copy = () => navigator.clipboard.writeText(css);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Grid Generator</h1>
        <p className="text-gray-400 mb-6">Visually design CSS Grid layouts</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[["Columns",cols,setCols,1,12],["Rows",rows,setRows,1,8]].map(([label,val,set,min,max])=>(
            <div key={label}>
              <label className="text-gray-400 text-sm block mb-1">{label}: {val}</label>
              <input type="range" min={min} max={max} value={val} onChange={e=>set(Number(e.target.value))} className="w-full" />
            </div>
          ))}
          <div>
            <label className="text-gray-400 text-sm block mb-1">Gap: {gap}px</label>
            <input type="range" min={0} max={48} value={gap} onChange={e=>setGap(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-gray-400 text-sm block mb-1">Col Size</label>
            <select value={colSize} onChange={e=>setColSize(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1">
              {["1fr","auto","100px","200px","minmax(100px,1fr)"].map(v=><option key={v}>{v}</option>)}
            </select>
          </div>
        </div>
        <div className="bg-gray-900 rounded p-4 mb-4" style={{display:"grid",gridTemplateColumns:`repeat(${cols},${colSize})`,gridTemplateRows:`repeat(${rows},${rowSize})`,gap:`${gap}px`}}>
          {Array.from({length:cols*rows},(_,i)=>(
            <div key={i} className="bg-blue-600 rounded flex items-center justify-center text-sm text-blue-200">{i+1}</div>
          ))}
        </div>
        <div className="bg-gray-900 rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">CSS</span>
            <button onClick={copy} className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded">Copy</button>
          </div>
          <pre className="font-mono text-green-400 text-sm">{css}</pre>
        </div>
      </div>
    </div>
  );
}