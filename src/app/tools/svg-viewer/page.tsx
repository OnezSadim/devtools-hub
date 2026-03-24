"use client";
import { useState } from "react";
export default function SvgViewer() {
  const [svg, setSvg] = useState("");
  const [scale, setScale] = useState(1);
  const sample = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#3b82f6"/><text x="50" y="55" text-anchor="middle" fill="white" font-size="20">SVG</text></svg>`;
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">SVG Viewer</h1>
      <p className="text-gray-400 mb-6">Preview and inspect SVG code in real-time.</p>
      <textarea value={svg} onChange={e=>setSvg(e.target.value)} placeholder={sample} className="w-full h-36 bg-gray-800 border border-gray-700 rounded p-3 mb-2 font-mono text-sm" />
      <button onClick={()=>setSvg(sample)} className="text-sm text-blue-400 hover:text-blue-300 mb-4 block">Load sample</button>
      <div className="flex items-center gap-4 mb-4">
        <label className="text-sm">Scale: {scale}x</label>
        <input type="range" min={0.5} max={4} step={0.25} value={scale} onChange={e=>setScale(+e.target.value)} className="flex-1" />
      </div>
      {svg && (
        <div className="bg-white rounded p-4 flex items-center justify-center" style={{minHeight:200}}>
          <div style={{transform:`scale(${scale})`,transformOrigin:"center"}} dangerouslySetInnerHTML={{__html:svg}} />
        </div>
      )}
    </div>
  );
}