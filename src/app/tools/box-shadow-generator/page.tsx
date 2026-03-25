"use client";
import { useState } from "react";
export default function BoxShadowGenerator() {
  const [x, setX] = useState(4);
  const [y, setY] = useState(4);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(40);
  const [inset, setInset] = useState(false);
  const rgba = `rgba(${parseInt(color.slice(1,3),16)},${parseInt(color.slice(3,5),16)},${parseInt(color.slice(5,7),16)},${opacity/100})`;
  const shadow = `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${rgba}`;
  const css = `box-shadow: ${shadow};`;
  const sliders = [{label:"X Offset",val:x,set:setX,min:-50,max:50},{label:"Y Offset",val:y,set:setY,min:-50,max:50},{label:"Blur",val:blur,set:setBlur,min:0,max:100},{label:"Spread",val:spread,set:setSpread,min:-50,max:50},{label:"Opacity %",val:opacity,set:setOpacity,min:0,max:100}];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Box Shadow Generator</h1>
      <div className="flex items-center justify-center mb-6 bg-gray-900 rounded-lg p-10">
        <div className="w-32 h-32 bg-white rounded-lg" style={{ boxShadow: shadow }} />
      </div>
      <div className="space-y-3 mb-4">
        {sliders.map(s => (
          <div key={s.label} className="flex items-center gap-4">
            <label className="w-28 text-sm">{s.label}: {s.val}</label>
            <input type="range" min={s.min} max={s.max} value={s.val} onChange={e => s.set(Number(e.target.value))} className="flex-1" />
          </div>
        ))}
        <div className="flex items-center gap-4">
          <label className="w-28 text-sm">Color</label>
          <input type="color" value={color} onChange={e => setColor(e.target.value)} className="h-9 w-24 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={inset} onChange={e => setInset(e.target.checked)} id="inset" />
          <label htmlFor="inset" className="text-sm">Inset</label>
        </div>
      </div>
      <div className="bg-gray-800 rounded p-3 font-mono text-sm">{css}</div>
      <button onClick={() => navigator.clipboard.writeText(css)} className="mt-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700">Copy CSS</button>
    </div>
  );
}