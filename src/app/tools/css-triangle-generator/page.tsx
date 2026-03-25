"use client";
import { useState } from "react";

export default function CssTriangleGenerator() {
  const [dir, setDir] = useState('up');
  const [size, setSize] = useState(50);
  const [color, setColor] = useState('#3b82f6');
  const dirs = ['up','down','left','right'];
  const getStyle = () => ({
    width:0, height:0,
    borderLeft: dir==='right' ? `${size}px solid ${color}' : `${size/2}px solid transparent`,
    borderRight: dir==='left' ? `${size}px solid ${color}' : `${size/2}px solid transparent`,
    borderTop: dir==='down' ? `${size}px solid ${color}' : `${size/2}px solid transparent`,
    borderBottom: dir==='up' ? `${size}px solid ${color}' : `${size/2}px solid transparent`,
  });
  const getCss = () => `.triangle {
  width: 0;
  height: 0;
${dir==='right' ? `  border-left: ${size}px solid ${color};` : `  border-left: ${size/2}px solid transparent;`}
${dir==='left' ? `  border-right: ${size}px solid ${color};` : `  border-right: ${size/2}px solid transparent;`}
${dir==='down' ? `  border-top: ${size}px solid ${color};` : `  border-top: ${size/2}px solid transparent;`}
${dir==='up' ? `  border-bottom: ${size}px solid ${color};` : `  border-bottom: ${size/2}px solid transparent;`}
}`;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Triangle Generator</h1>
        <p className="text-gray-400 mb-6">Generate pure CSS triangles using the border trick.</p>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div><label className="block text-sm text-gray-400 mb-2">Direction</label><div className="grid grid-cols-2 gap-2">{dirs.map(d=><button key={d} onClick={()=>setDir(d)} className={`py-2 rounded capitalize ${dir===d?'bg-blue-600':'bg-gray-800'}`}>{d}</button>)}</div></div>
          <div><label className="block text-sm text-gray-400 mb-2">Size: {size}px</label><input type="range" min={10} max={150} value={size} onChange={e=>setSize(+e.target.value)} className="w-full" /><label className="block text-sm text-gray-400 mt-4 mb-2">Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-full h-10 rounded cursor-pointer" /></div>
        </div>
        <div className="bg-gray-900 rounded p-8 flex items-center justify-center mb-4" style={{minHeight:160}}><div style={getStyle()} /></div>
        <div className="bg-gray-900 rounded p-4 font-mono text-sm text-green-400 whitespace-pre mb-3">{getCss()}</div>
        <button onClick={()=>navigator.clipboard.writeText(getCss())} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Copy CSS</button>
      </div>
    </div>
  );
}
