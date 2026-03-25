"use client";
import { useState } from "react";
export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#000000");
  const [bg, setBg] = useState("#ffffff");
  function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return [r,g,b];
  }
  function luminance([r,g,b]: number[]) {
    const c = [r,g,b].map(v => { const s = v/255; return s <= 0.03928 ? s/12.92 : Math.pow((s+0.055)/1.055,2.4); });
    return 0.2126*c[0] + 0.7152*c[1] + 0.0722*c[2];
  }
  const l1 = luminance(hexToRgb(fg)), l2 = luminance(hexToRgb(bg));
  const ratio = (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05);
  const aa = ratio >= 4.5, aaa = ratio >= 7, aaLarge = ratio >= 3;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Color Contrast Checker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <div>
          <label className="block mb-2 text-sm text-gray-400">Foreground Color</label>
          <div className="flex gap-2">
            <input type="color" value={fg} onChange={e=>setFg(e.target.value)} className="w-12 h-10 rounded cursor-pointer" />
            <input type="text" value={fg} onChange={e=>setFg(e.target.value)} className="flex-1 bg-gray-800 rounded px-3" />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-400">Background Color</label>
          <div className="flex gap-2">
            <input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="w-12 h-10 rounded cursor-pointer" />
            <input type="text" value={bg} onChange={e=>setBg(e.target.value)} className="flex-1 bg-gray-800 rounded px-3" />
          </div>
        </div>
      </div>
      <div className="mt-6 p-6 rounded-xl max-w-2xl" style={{backgroundColor: bg, color: fg}}>
        <p className="text-2xl font-bold">Sample Text — Aa Bb Cc</p>
        <p className="text-sm mt-2">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 max-w-2xl">
        <div className={`p-4 rounded-lg text-center ${aa ? 'bg-green-900' : 'bg-red-900'}`}>
          <div className="text-2xl font-bold">{aa ? 'PASS' : 'FAIL'}</div>
          <div className="text-sm">AA Normal</div>
        </div>
        <div className={`p-4 rounded-lg text-center ${aaLarge ? 'bg-green-900' : 'bg-red-900'}`}>
          <div className="text-2xl font-bold">{aaLarge ? 'PASS' : 'FAIL'}</div>
          <div className="text-sm">AA Large</div>
        </div>
        <div className={`p-4 rounded-lg text-center ${aaa ? 'bg-green-900' : 'bg-red-900'}`}>
          <div className="text-2xl font-bold">{aaa ? 'PASS' : 'FAIL'}</div>
          <div className="text-sm">AAA</div>
        </div>
      </div>
      <div className="mt-4 text-2xl font-bold text-yellow-400">Ratio: {ratio.toFixed(2)}:1</div>
    </div>
  );
}
