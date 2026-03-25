"use client";
import { useState } from "react";
export default function BoxShadowGenerator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(4);
  const [blur, setBlur] = useState(16);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(40);
  const [inset, setInset] = useState(false);
  const hex2rgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${alpha/100})`;
  };
  const shadow = `${inset?"inset ":""} ${x}px ${y}px ${blur}px ${spread}px ${hex2rgba(color,opacity)}`;
  const css = `box-shadow: ${shadow};`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Box Shadow Generator</h1>
        <p className="text-gray-400 mb-6">Generate CSS box-shadow properties visually.</p>
        <div className="flex items-center justify-center bg-gray-800 rounded-xl mb-6" style={{height:"200px"}}>
          <div className="w-32 h-32 bg-white rounded-xl" style={{boxShadow:shadow}} />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[{label:"Horizontal",val:x,set:setX,min:-50,max:50},{label:"Vertical",val:y,set:setY,min:-50,max:50},{label:"Blur",val:blur,set:setBlur,min:0,max:100},{label:"Spread",val:spread,set:setSpread,min:-50,max:50},{label:"Opacity %",val:opacity,set:setOpacity,min:0,max:100}].map(({label,val,set,min,max})=>(
            <div key={label}><label className="block text-sm text-gray-400 mb-1">{label}: {val}</label><input type="range" min={min} max={max} value={val} onChange={e=>set(Number(e.target.value))} className="w-full" /></div>
          ))}
          <div><label className="block text-sm text-gray-400 mb-1">Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-full h-10 bg-gray-800 border border-gray-700 rounded" /></div>
        </div>
        <label className="flex items-center gap-2 mb-4 cursor-pointer"><input type="checkbox" checked={inset} onChange={e=>setInset(e.target.checked)} /><span className="text-sm">Inset shadow</span></label>
        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <code className="text-green-400 text-sm break-all">{css}</code>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-2 block text-xs text-blue-400 hover:text-blue-300">Copy</button>
        </div>
      </div>
    </main>
  );
}