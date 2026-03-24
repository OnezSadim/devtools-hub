"use client";
import { useState } from "react";

export default function GridGenerator() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [colGap, setColGap] = useState(16);
  const [rowGap, setRowGap] = useState(16);
  const [colTemplate, setColTemplate] = useState("repeat(3, 1fr)");
  const [rowTemplate, setRowTemplate] = useState("repeat(3, 1fr)");
  const css = `.grid {
  display: grid;
  grid-template-columns: ${colTemplate};
  grid-template-rows: ${rowTemplate};
  column-gap: ${colGap}px;
  row-gap: ${rowGap}px;
}`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Grid Generator</h1>
        <p className="text-gray-400 mb-8">Generate CSS grid layouts visually.</p>
        <div className="grid grid-cols-3 gap-8">
          <div>
            {[{label:"Columns",val:cols,set:setCols,min:1,max:12},{label:"Rows",val:rows,set:setRows,min:1,max:8}].map(({label,val,set,min,max})=>(
              <div key={label} className="mb-4">
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">{label}</span><span className="font-mono">{val}</span></div>
                <input type="range" min={min} max={max} value={val} onChange={e=>{set(Number(e.target.value));}} className="w-full" />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">grid-template-columns</label>
              <input type="text" value={colTemplate} onChange={e=>setColTemplate(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm font-mono" />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1">grid-template-rows</label>
              <input type="text" value={rowTemplate} onChange={e=>setRowTemplate(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm font-mono" />
            </div>
            {[{label:"Column Gap",val:colGap,set:setColGap},{label:"Row Gap",val:rowGap,set:setRowGap}].map(({label,val,set})=>(
              <div key={label} className="mb-4">
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">{label}</span><span className="font-mono">{val}px</span></div>
                <input type="range" min={0} max={40} value={val} onChange={e=>set(Number(e.target.value))} className="w-full" />
              </div>
            ))}
          </div>
          <div className="col-span-2">
            <div className="bg-gray-800 rounded-xl p-4 h-64 mb-4" style={{display:"grid",gridTemplateColumns:colTemplate,gridTemplateRows:rowTemplate,columnGap:`${colGap}px`,rowGap:`${rowGap}px`}}>
              {Array.from({length:cols*rows}).map((_,i)=>(
                <div key={i} className="bg-blue-600 rounded flex items-center justify-center text-xs font-bold">{i+1}</div>
              ))}
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">CSS</span>
                <button onClick={()=>navigator.clipboard.writeText(css)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
              </div>
              <pre className="text-sm text-green-400 whitespace-pre-wrap">{css}</pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}