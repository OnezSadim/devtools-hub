"use client";
import { useState } from "react";
export default function BoxShadowGenerator() {
  const [x, setX] = useState(4);
  const [y, setY] = useState(4);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [inset, setInset] = useState(false);
  const shadow = `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${color}`;
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Box Shadow Generator</h1>
      <div className="bg-gray-800 rounded-xl p-8 flex items-center justify-center">
        <div className="w-32 h-32 bg-white rounded-lg" style={{boxShadow: shadow}} />
      </div>
      <div className="bg-gray-800 rounded-xl p-4 space-y-3">
        {[["X Offset",x,setX],["Y Offset",y,setY],["Blur",blur,setBlur],["Spread",spread,setSpread]].map(([label,val,setter])=>(
          <label key={label} className="flex items-center gap-4 text-gray-300">
            <span className="w-24">{label}: {val}px</span>
            <input type="range" min="-50" max="50" value={val} onChange={e=>setter(Number(e.target.value))} className="flex-1" />
          </label>
        ))}
        <div className="flex items-center gap-4">
          <label className="text-gray-300">Color: <input type="color" value={color} onChange={e=>setColor(e.target.value)} className="ml-2" /></label>
          <label className="text-gray-300"><input type="checkbox" checked={inset} onChange={e=>setInset(e.target.checked)} className="mr-2" />Inset</label>
        </div>
        <div className="bg-gray-900 rounded p-3">
          <code className="text-green-400 text-sm">box-shadow: {shadow};</code>
        </div>
        <button onClick={()=>navigator.clipboard.writeText(`box-shadow: ${shadow};`)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Copy CSS</button>
      </div>
    </div>
  );
}
