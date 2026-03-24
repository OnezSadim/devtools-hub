"use client";
import { useState } from "react";
export default function CssBoxShadow() {
  const [hOffset, setHOffset] = useState(4);
  const [vOffset, setVOffset] = useState(4);
  const [blur, setBlur] = useState(8);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(40);
  const [inset, setInset] = useState(false);
  function hexToRgba(hex: string, a: number) {
    const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a/100})`;
  }
  const shadow = `${inset?"inset ":""} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${hexToRgba(color,opacity)}`;
  const css = `box-shadow: ${shadow};`;
  const Slider = ({label,value,setValue,min,max}:{label:string,value:number,setValue:(v:number)=>void,min:number,max:number}) => (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1"><span className="text-gray-400">{label}</span><span className="text-blue-400">{value}px</span></div>
      <input type="range" min={min} max={max} value={value} onChange={e=>setValue(Number(e.target.value))} className="w-full" />
    </div>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Box Shadow Generator</h1>
        <p className="text-gray-400 mb-6">Visually build CSS box shadows with live preview.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Slider label="Horizontal Offset" value={hOffset} setValue={setHOffset} min={-50} max={50} />
            <Slider label="Vertical Offset" value={vOffset} setValue={setVOffset} min={-50} max={50} />
            <Slider label="Blur Radius" value={blur} setValue={setBlur} min={0} max={100} />
            <Slider label="Spread Radius" value={spread} setValue={setSpread} min={-50} max={50} />
            <div className="mb-4 flex gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Color</label>
                <input type="color" value={color} onChange={e=>setColor(e.target.value)} className="h-10 w-16 rounded cursor-pointer bg-gray-900 border border-gray-700" />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-400 mb-1">Opacity: {opacity}%</label>
                <input type="range" min={0} max={100} value={opacity} onChange={e=>setOpacity(Number(e.target.value))} className="w-full mt-2" />
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={inset} onChange={e=>setInset(e.target.checked)} className="w-4 h-4" />
              <span className="text-gray-300">Inset shadow</span>
            </label>
          </div>
          <div>
            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mb-4">
              <div className="w-32 h-32 bg-white rounded-lg" style={{boxShadow:shadow}} />
            </div>
            <div className="bg-gray-900 rounded p-3">
              <code className="text-green-400 text-sm break-all">{css}</code>
            </div>
            <button onClick={()=>navigator.clipboard.writeText(css)} className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium w-full">Copy CSS</button>
          </div>
        </div>
      </div>
    </main>
  );
}
