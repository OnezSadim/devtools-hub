"use client";
import { useState } from "react";

export default function GridCssGenerator() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [colGap, setColGap] = useState(16);
  const [rowGap, setRowGap] = useState(16);
  const [autoRows, setAutoRows] = useState("100px");
  const [copied, setCopied] = useState(false);

  const css = `display: grid;
grid-template-columns: repeat(${cols}, 1fr);
grid-template-rows: repeat(${rows}, ${autoRows});
column-gap: ${colGap}px;
row-gap: ${rowGap}px;`;
  const copy = () => { navigator.clipboard.writeText(css); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Grid Generator</h1>
        <p className="text-gray-400 mb-6">Visually build CSS Grid layouts</p>
        <div className="bg-gray-800 rounded-xl p-4 mb-6" style={{display:"grid",gridTemplateColumns:`repeat(${cols}, 1fr)`,columnGap:`${colGap}px`,rowGap:`${rowGap}px`}}>
          {Array.from({length:cols*rows}).map((_,i) => (
            <div key={i} className="bg-blue-600/40 border border-blue-500 rounded-lg flex items-center justify-center text-gray-300 text-sm" style={{height:60}}>{i+1}</div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-300 mb-1">Columns: {cols}</label><input type="range" min={1} max={12} value={cols} onChange={e => setCols(parseInt(e.target.value))} className="w-full" /></div>
            <div><label className="block text-sm text-gray-300 mb-1">Rows: {rows}</label><input type="range" min={1} max={8} value={rows} onChange={e => setRows(parseInt(e.target.value))} className="w-full" /></div>
            <div><label className="block text-sm text-gray-300 mb-1">Column Gap: {colGap}px</label><input type="range" min={0} max={60} value={colGap} onChange={e => setColGap(parseInt(e.target.value))} className="w-full" /></div>
            <div><label className="block text-sm text-gray-300 mb-1">Row Gap: {rowGap}px</label><input type="range" min={0} max={60} value={rowGap} onChange={e => setRowGap(parseInt(e.target.value))} className="w-full" /></div>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Row Height</label>
            <div className="flex gap-2">
              {["100px","auto","1fr","minmax(100px,auto)"].map(v => (
                <button key={v} onClick={() => setAutoRows(v)} className={`px-3 py-1 rounded text-sm ${autoRows===v ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"}`}>{v}</button>
              ))}
            </div>
          </div>
          <pre className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">{css}</pre>
          <button onClick={copy} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">{copied ? "Copied!" : "Copy CSS"}</button>
        </div>
      </div>
    </div>
  );
}
