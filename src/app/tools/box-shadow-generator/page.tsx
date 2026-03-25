"use client";
import { useState } from "react";

export default function BoxShadowGenerator() {
  const [h, setH] = useState(4);
  const [v, setV] = useState(4);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(30);
  const [inset, setInset] = useState(false);
  const rgba = `rgba(${parseInt(color.slice(1,3),16)},${parseInt(color.slice(3,5),16)},${parseInt(color.slice(5,7),16)},${opacity/100})`;
  const shadow = `${inset?"inset " : ""}${h}px ${v}px ${blur}px ${spread}px ${rgba}`;
  const css = `box-shadow: ${shadow};`;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Box Shadow Generator</h1>
        <p className="text-gray-400 mb-6">Generate CSS box shadows visually.</p>
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 bg-white rounded-lg" style={{boxShadow: shadow}} />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          {[{l:"Horizontal",v:h,s:setH},{l:"Vertical",v:v,s:setV},{l:"Blur",v:blur,s:setBlur},{l:"Spread",v:spread,s:setSpread}].map(({l,v:val,s})=>(
            <div key={l}><label className="text-gray-400">{l}: {val}px</label><input type="range" min={-50} max={50} value={val} onChange={e=>s(Number(e.target.value))} className="w-full mt-1" /></div>
          ))}
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <div><label className="text-sm text-gray-400">Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-16 h-8 mt-1 ml-2 rounded" /></div>
          <div className="flex-1"><label className="text-sm text-gray-400">Opacity: {opacity}%</label><input type="range" min={0} max={100} value={opacity} onChange={e=>setOpacity(Number(e.target.value))} className="w-full mt-1" /></div>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={inset} onChange={e=>setInset(e.target.checked)} />Inset</label>
        </div>
        <div className="bg-gray-800 rounded p-3 font-mono text-sm flex justify-between items-center">
          <span>{css}</span>
          <button onClick={()=>navigator.clipboard.writeText(css)} className="ml-4 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs">Copy</button>
        </div>
      </div>
    </div>
  );
}