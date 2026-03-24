"use client";
import { useState } from "react";
export default function PixelToRem() {
  const [base, setBase] = useState(16);
  const [px, setPx] = useState(''  );
  const [rem, setRem] = useState('');
  const fromPx = (v:string) => { setPx(v); setRem(v ? String(parseFloat(v)/base) : ''); };
  const fromRem = (v:string) => { setRem(v); setPx(v ? String(parseFloat(v)*base) : ''); };
  const common = [8,10,12,14,16,18,20,24,32,48,64];
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">PX to REM Converter</h1>
        <p className="text-gray-400 mb-6">Convert pixels to rem and vice versa</p>
        <div className="bg-gray-900 rounded p-4 mb-4">
          <label className="text-gray-400 text-sm">Base font size (px)</label>
          <input type="number" className="w-full bg-gray-800 rounded p-2 mt-1" value={base} onChange={e=>setBase(Number(e.target.value)||16)/>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="text-gray-400 text-sm">Pixels</label><input type="number" className="w-full bg-gray-900 rounded p-3 mt-1 text-lg" value={px} onChange={e=>fromPx(e.target.value)} placeholder="16"/></div>
          <div><label className="text-gray-400 text-sm">REM</label><input type="number" className="w-full bg-gray-900 rounded p-3 mt-1 text-lg" value={rem} onChange={e=>fromRem(e.target.value)} placeholder="1"/></div>
        </div>
        <div className="bg-gray-900 rounded p-4">
          <p className="text-gray-400 text-sm mb-3">Common sizes (base {base}px)</p>
          <div className="grid grid-cols-4 gap-2">
            {common.map(p=><button key={p} onClick={()=>fromPx(String(p))} className="bg-gray-800 hover:bg-gray-700 rounded p-2 text-sm">{p}px<br/><span className="text-green-400">{(p/base).toFixed(4)}rem</span></button>)}
          </div>
        </div>
      </div>
    </div>
  );
}