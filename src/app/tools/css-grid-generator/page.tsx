
"use client";
import { useState } from "react";
export default function CssGridGenerator() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [gap, setGap] = useState(16);
  const [colSize, setColSize] = useState("1fr");
  const [rowSize, setRowSize] = useState("100px");
  const css = `.grid-container {
  display: grid;
  grid-template-columns: repeat(${cols}, ${colSize});
  grid-template-rows: repeat(${rows}, ${rowSize});
  gap: ${gap}px;
}`;
  const previewItems = Array.from({length: cols * rows}, (_, i) => i + 1);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Grid Generator</h1>
        <p className="text-gray-400 mb-6">Generate CSS grid layouts visually</p>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Columns: {cols}</label>
              <input type="range" min={1} max={12} value={cols} onChange={e=>setCols(+e.target.value)} className="w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Rows: {rows}</label>
              <input type="range" min={1} max={8} value={rows} onChange={e=>setRows(+e.target.value)} className="w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Gap: {gap}px</label>
              <input type="range" min={0} max={64} value={gap} onChange={e=>setGap(+e.target.value)} className="w-full" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Column Size</label>
              <select value={colSize} onChange={e=>setColSize(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
                <option value="1fr">1fr (flexible)</option>
                <option value="auto">auto</option>
                <option value="100px">100px</option>
                <option value="200px">200px</option>
                <option value="minmax(100px, 1fr)">minmax(100px, 1fr)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Row Size</label>
              <select value={rowSize} onChange={e=>setRowSize(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2">
                <option value="100px">100px</option>
                <option value="auto">auto</option>
                <option value="1fr">1fr</option>
                <option value="200px">200px</option>
                <option value="minmax(50px, auto)">minmax(50px, auto)</option>
              </select>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Preview</p>
            <div style={{display:"grid", gridTemplateColumns:`repeat(${cols}, 1fr)`, gap:`${gap}px`}} className="bg-gray-900 p-3 rounded border border-gray-700 h-48 overflow-hidden">
              {previewItems.slice(0,cols*Math.min(rows,4)).map(i => (
                <div key={i} className="bg-blue-600 rounded flex items-center justify-center text-xs font-bold">{i}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded border border-gray-700 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Generated CSS</span>
            <button onClick={()=>navigator.clipboard.writeText(css)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
          </div>
          <pre className="text-green-400 text-sm font-mono whitespace-pre">{css}</pre>
        </div>
      </div>
    </div>
  );
}
