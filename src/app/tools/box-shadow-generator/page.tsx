"use client";
import { useState } from "react";
export default function BoxShadowGenerator() {
  const [hOffset, setHOffset] = useState(0);
  const [vOffset, setVOffset] = useState(4);
  const [blur, setBlur] = useState(16);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(30);
  const toHex = (n: number) => Math.round(n*2.55).toString(16).padStart(2,"0");
  const shadow = `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}${toHex(opacity)}`;
  const css = `box-shadow: ${shadow};`;
  const sliders = [{label:"H Offset",val:hOffset,set:setHOffset,min:-50,max:50},{label:"V Offset",val:vOffset,set:setVOffset,min:-50,max:50},{label:"Blur",val:blur,set:setBlur,min:0,max:100},{label:"Spread",val:spread,set:setSpread,min:-50,max:50}];
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Box Shadow Generator</h1>
        <p className="text-gray-400 mb-6">Visually build CSS box shadows</p>
        <div className="flex items-center justify-center h-48 bg-gray-800 rounded-xl mb-6">
          <div style={{boxShadow:shadow,background:"#fff"}} className="w-32 h-24 rounded-lg" />
        </div>
        {sliders.map(s=><div key={s.label} className="mb-3"><label className="text-sm text-gray-400 block mb-1">{s.label}: {s.val}px</label><input type="range" min={s.min} max={s.max} value={s.val} onChange={e=>s.set(+e.target.value)} className="w-full" /></div>)}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="text-sm text-gray-400 block mb-1">Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-full h-10 rounded" /></div>
          <div><label className="text-sm text-gray-400 block mb-1">Opacity: {opacity}%</label><input type="range" min={0} max={100} value={opacity} onChange={e=>setOpacity(+e.target.value)} className="w-full mt-3" /></div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded p-4 flex items-center justify-between">
          <code className="font-mono text-sm">{css}</code>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="text-blue-400 text-sm ml-4">Copy</button>
        </div>
      </div>
    </div>
  );
}