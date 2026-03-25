"use client";
import { useState } from "react";
export default function PixelToRem() {
  const [basePx, setBasePx] = useState("16");
  const [pxVal, setPxVal] = useState("24");
  const [remVal, setRemVal] = useState("");
  const base = parseFloat(basePx)||16;
  const pxToRem = parseFloat(pxVal)||0;
  const remToConvert = parseFloat(remVal)||0;
  const sizes = [8,10,12,14,16,18,20,24,32,48,64,96];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pixel ↔ REM Converter</h1>
        <p className="text-gray-400 mb-8">Convert between pixels and REM units</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">Base Font Size (px)</label>
            <input value={basePx} onChange={e=>setBasePx(e.target.value)} className="w-32 bg-gray-800 rounded p-2" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-medium mb-3">PX → REM</h3>
              <input value={pxVal} onChange={e=>setPxVal(e.target.value)} className="w-full bg-gray-700 rounded p-2 mb-2" placeholder="px value" />
              <div className="text-green-400 text-xl font-mono">{(pxToRem/base).toFixed(4)} rem</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-medium mb-3">REM → PX</h3>
              <input value={remVal} onChange={e=>setRemVal(e.target.value)} className="w-full bg-gray-700 rounded p-2 mb-2" placeholder="rem value" />
              <div className="text-blue-400 text-xl font-mono">{(remToConvert*base).toFixed(2)} px</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="font-medium mb-4">Common Sizes (base {base}px)</h2>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map(px=>(
              <div key={px} className="bg-gray-800 rounded p-2 text-center">
                <div className="text-sm font-mono text-blue-400">{px}px</div>
                <div className="text-xs text-gray-400">{(px/base).toFixed(4)}rem</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
