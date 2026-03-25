"use client"
import { useState } from "react"
export default function CSSGridGenerator() {
  const [cols, setCols] = useState(3)
  const [rows, setRows] = useState(3)
  const [gap, setGap] = useState("16")
  const css = `display: grid;
grid-template-columns: repeat(${cols}, 1fr);
grid-template-rows: repeat(${rows}, 1fr);
gap: ${gap}px;`
  const cells = Array.from({length: cols * rows}, (_, i) => i)
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Grid Generator</h1>
        <p className="text-gray-400 mb-8">Build CSS grid layouts visually</p>
        <div className="space-y-4 mb-6">
          {[{l:"Columns",v:cols,s:setCols},{l:"Rows",v:rows,s:setRows}].map(({l,v,s})=>(
            <div key={l}><label className="block text-sm text-gray-400 mb-1">{l}: {v}</label><input type="range" min="1" max="6" value={v} onChange={e=>s(parseInt(e.target.value))} className="w-full"/></div>
          ))}
          <div><label className="block text-sm text-gray-400 mb-1">Gap: {gap}px</label><input type="range" min="0" max="48" value={gap} onChange={e=>setGap(e.target.value)} className="w-full"/></div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 mb-6" style={{display:"grid",gridTemplateColumns:`repeat(${cols},1fr)`,gap:`${gap}px`}}>
          {cells.map(i=><div key={i} className="bg-blue-600 rounded h-12 flex items-center justify-center text-xs font-mono">{i+1}</div>)}
        </div>
        <div className="bg-gray-900 rounded p-4"><pre className="text-green-400 text-sm">{css}</pre></div>
        <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Copy CSS</button>
      </div>
    </div>
  )
}