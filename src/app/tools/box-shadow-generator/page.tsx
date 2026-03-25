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

  const hex2rgba = (hex: string, op: number) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${op/100})`;
  };
  const shadow = `${inset ? "inset " : ""}${h}px ${v}px ${blur}px ${spread}px ${hex2rgba(color, opacity)}`;
  const css = `box-shadow: ${shadow};`;

  const Slider = ({label, value, set, min, max}: {label:string, value:number, set:(n:number)=>void, min:number, max:number}) => (
    <div>
      <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">{label}</span><span className="font-mono">{value}</span></div>
      <input type="range" min={min} max={max} value={value} onChange={e => set(Number(e.target.value))} className="w-full" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Box Shadow Generator</h1>
        <p className="text-gray-400 mb-6">Create CSS box shadows visually</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex justify-center items-center bg-gray-800 rounded-lg p-12">
            <div className="w-32 h-32 bg-white rounded-lg" style={{boxShadow: shadow}} />
          </div>
          <Slider label="Horizontal" value={h} set={setH} min={-50} max={50} />
          <Slider label="Vertical" value={v} set={setV} min={-50} max={50} />
          <Slider label="Blur" value={blur} set={setBlur} min={0} max={100} />
          <Slider label="Spread" value={spread} set={setSpread} min={-50} max={50} />
          <Slider label="Opacity %" value={opacity} set={setOpacity} min={0} max={100} />
          <div className="flex gap-4 items-center">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Color</label>
              <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-12 h-10 rounded cursor-pointer" />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={inset} onChange={e => setInset(e.target.checked)} className="w-4 h-4" />
              <span>Inset</span>
            </label>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm flex justify-between items-center">
            <span className="break-all">{css}</span>
            <button onClick={() => navigator.clipboard.writeText(css)} className="ml-3 text-blue-400 hover:text-blue-300 shrink-0">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
