"use client";
import { useState } from "react";
export default function SvgPlaceholderGenerator() {
  const [width, setWidth] = useState("400");
  const [height, setHeight] = useState("300");
  const [bg, setBg] = useState("#cccccc");
  const [textColor, setTextColor] = useState("#666666");
  const [label, setLabel] = useState("");
  const text = label || `${width}x${height}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${Math.min(parseInt(width),parseInt(height))/8}" fill="${textColor}">${text}</text>
</svg>`;
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">SVG Placeholder Generator</h1>
      <p className="text-gray-400 mb-6">Generate SVG placeholder images for mockups and prototypes</p>
      <div className="max-w-2xl space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-sm text-gray-400">Width (px)</label><input type="number" value={width} onChange={e=>setWidth(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="text-sm text-gray-400">Height (px)</label><input type="number" value={height} onChange={e=>setHeight(e.target.value)} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="text-sm text-gray-400">Background Color</label><input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="w-full mt-1 h-10 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><label className="text-sm text-gray-400">Text Color</label><input type="color" value={textColor} onChange={e=>setTextColor(e.target.value)} className="w-full mt-1 h-10 bg-gray-800 border border-gray-700 rounded" /></div>
        </div>
        <div><label className="text-sm text-gray-400">Custom Label (optional)</label><input value={label} onChange={e=>setLabel(e.target.value)} placeholder={`${width}x${height}`} className="w-full mt-1 bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
        <div className="bg-gray-800 rounded p-4 flex justify-center">
          <img src={dataUrl} alt="placeholder" style={{maxWidth:"100%",maxHeight:"300px"}} />
        </div>
        <div className="flex gap-2">
          <button onClick={()=>navigator.clipboard.writeText(svg)} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Copy SVG</button>
          <button onClick={()=>navigator.clipboard.writeText(dataUrl)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Copy Data URL</button>
          <a href={dataUrl} download={`placeholder-${width}x${height}.svg`} className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded">Download</a>
        </div>
      </div>
    </main>
  );
}