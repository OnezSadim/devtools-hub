"use client";
import { useState } from "react";
export default function TextShadowGenerator() {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [blur, setBlur] = useState(4);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(50);
  const [text, setText] = useState("Hello World");
  const hex2rgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${alpha/100})`;
  };
  const shadow = `${x}px ${y}px ${blur}px ${hex2rgba(color,opacity)}`;
  const css = `text-shadow: ${shadow};`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Shadow Generator</h1>
        <p className="text-gray-400 mb-6">Generate CSS text-shadow properties visually.</p>
        <div className="flex items-center justify-center bg-gray-800 rounded-xl mb-6" style={{height:"150px"}}>
          <span className="text-4xl font-bold text-white" style={{textShadow:shadow}}>{text}</span>
        </div>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Preview text" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white mb-4" />
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[{label:"X Offset",val:x,set:setX,min:-20,max:20},{label:"Y Offset",val:y,set:setY,min:-20,max:20},{label:"Blur",val:blur,set:setBlur,min:0,max:40},{label:"Opacity %",val:opacity,set:setOpacity,min:0,max:100}].map(({label,val,set,min,max})=>(
            <div key={label}><label className="block text-sm text-gray-400 mb-1">{label}: {val}</label><input type="range" min={min} max={max} value={val} onChange={e=>set(Number(e.target.value))} className="w-full" /></div>
          ))}
          <div><label className="block text-sm text-gray-400 mb-1">Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-full h-10 bg-gray-800 border border-gray-700 rounded" /></div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <code className="text-green-400 text-sm">{css}</code>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-2 block text-xs text-blue-400 hover:text-blue-300">Copy</button>
        </div>
      </div>
    </main>
  );
}