"use client";
import { useState } from "react";
export default function TextShadowGenerator() {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [blur, setBlur] = useState(4);
  const [color, setColor] = useState("#000000");
  const shadow = `${x}px ${y}px ${blur}px ${color}`;
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Text Shadow Generator</h1>
      <div className="bg-gray-800 rounded-xl p-8 flex items-center justify-center">
        <p className="text-4xl font-bold text-white" style={{textShadow: shadow}}>Hello World</p>
      </div>
      <div className="bg-gray-800 rounded-xl p-4 space-y-3">
        {[["X",x,setX],["Y",y,setY],["Blur",blur,setBlur]].map(([label,val,setter])=>(
          <label key={label} className="flex items-center gap-4 text-gray-300">
            <span className="w-20">{label}: {val}px</span>
            <input type="range" min="-20" max="20" value={val} onChange={e=>setter(Number(e.target.value))} className="flex-1" />
          </label>
        ))}
        <label className="text-gray-300">Color: <input type="color" value={color} onChange={e=>setColor(e.target.value)} className="ml-2" /></label>
        <div className="bg-gray-900 rounded p-3">
          <code className="text-green-400 text-sm">text-shadow: {shadow};</code>
        </div>
        <button onClick={()=>navigator.clipboard.writeText(`text-shadow: ${shadow};`)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Copy CSS</button>
      </div>
    </div>
  );
}
