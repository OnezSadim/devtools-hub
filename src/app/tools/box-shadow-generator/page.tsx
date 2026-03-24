"use client";
import { useState } from "react";

export default function BoxShadowGenerator() {
  const [hOff, setHOff] = useState(4);
  const [vOff, setVOff] = useState(4);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(0.5);
  const [inset, setInset] = useState(false);
  const hex2rgb = (h:string) => { const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16); return `${r},${g},${b}`; };
  const shadow = `${inset?"inset ":"" }${hOff}px ${vOff}px ${blur}px ${spread}px rgba(${hex2rgb(color)},${opacity})`;
  const css = `box-shadow: ${shadow};`;
  const Slider = ({label,val,set,min,max}:{label:string,val:number,set:(n:number)=>void,min:number,max:number}) => (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">{label}</span><span className="font-mono">{val}px</span></div>
      <input type="range" min={min} max={max} value={val} onChange={e=>set(Number(e.target.value))} className="w-full" />
    </div>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Box Shadow Generator</h1>
        <p className="text-gray-400 mb-8">Generate CSS box shadows visually.</p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Slider label="Horizontal Offset" val={hOff} set={setHOff} min={-50} max={50} />
            <Slider label="Vertical Offset" val={vOff} set={setVOff} min={-50} max={50} />
            <Slider label="Blur Radius" val={blur} set={setBlur} min={0} max={100} />
            <Slider label="Spread Radius" val={spread} set={setSpread} min={-50} max={50} />
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">Opacity</span><span className="font-mono">{opacity}</span></div>
              <input type="range" min={0} max={1} step={0.01} value={opacity} onChange={e=>setOpacity(Number(e.target.value))} className="w-full" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
              <label className="text-sm text-gray-400">Shadow Color</label>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={inset} onChange={e=>setInset(e.target.checked)} className="w-4 h-4" />
              <span className="text-sm text-gray-400">Inset</span>
            </label>
          </div>
          <div>
            <div className="bg-gray-800 rounded-xl h-48 flex items-center justify-center mb-6">
              <div className="w-32 h-32 bg-white rounded-lg" style={{boxShadow:shadow}}></div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">CSS</span>
                <button onClick={()=>navigator.clipboard.writeText(css)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
              </div>
              <code className="text-sm text-green-400 break-all">{css}</code>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}