"use client";
import { useState } from "react";
export default function BoxShadowGenerator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(4);
  const [blur, setBlur] = useState(8);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(40);
  const [inset, setInset] = useState(false);
  const hexToRgba = (hex: string, a: number) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a/100})`;
  };
  const shadow = `${inset?"inset ":""} ${x}px ${y}px ${blur}px ${spread}px ${hexToRgba(color, opacity)}`;
  const css = `box-shadow: ${shadow};`;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Box Shadow Generator</h1>
        <p className="text-gray-400 mb-6">Generate CSS box-shadow values visually</p>
        <div className="flex items-center justify-center mb-8" style={{height:"200px", background:"#1f2937", borderRadius:"8px"}}>
          <div style={{width:"120px",height:"120px",background:"#3b82f6",borderRadius:"8px",boxShadow:shadow}}/>
        </div>
        <div className="space-y-3">
          {(["Offset X",x,setX],["Offset Y",y,setY],["Blur",blur,setBlur],["Spread",spread,setSpread]).map(([label,val,set]: [string,number,(v:number)=>void]) => (
            <div key={label} className="flex items-center gap-4">
              <span className="text-gray-400 text-sm w-20">{label}</span>
              <input type="range" min="-50" max="50" value={val} onChange={e=>set(Number(e.target.value))} className="flex-1"/>
              <span className="text-sm w-12 text-right">{val}px</span>
            </div>
          ))}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm w-20">Opacity</span>
            <input type="range" min="0" max="100" value={opacity} onChange={e=>setOpacity(Number(e.target.value))} className="flex-1"/>
            <span className="text-sm w-12 text-right">{opacity}%</span>
          </div>
          <div className="flex gap-4 items-center">
            <div><label className="text-gray-400 text-sm block mb-1">Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-16 h-10 rounded"/></div>
            <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={inset} onChange={e=>setInset(e.target.checked)} className="w-4 h-4"/><span>Inset</span></label>
          </div>
        </div>
        <div className="mt-6 bg-gray-900 border border-gray-700 rounded p-4">
          <div className="flex justify-between mb-1"><span className="text-gray-400 text-sm">CSS</span><button onClick={()=>navigator.clipboard.writeText(css)} className="text-blue-400 text-sm">Copy</button></div>
          <code className="text-green-400 font-mono text-sm break-all">{css}</code>
        </div>
      </div>
    </main>
  );
}