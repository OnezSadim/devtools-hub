"use client";
import { useState } from "react";
export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#1e40af");
  function luminance(hex: string) {
    const r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5,7),16)/255;
    const toL = (c: number) => c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4);
    return 0.2126*toL(r)+0.7152*toL(g)+0.0722*toL(b);
  }
  const l1 = luminance(fg.length===7?fg:"#ffffff");
  const l2 = luminance(bg.length===7?bg:"#000000");
  const ratio = (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05);
  const aa = ratio >= 4.5, aaa = ratio >= 7, aaLarge = ratio >= 3;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Color Contrast Checker</h1>
        <p className="text-gray-400 mb-6">Check WCAG color contrast ratios for accessibility.</p>
        <div className="rounded-xl p-8 mb-6 text-center" style={{background:bg,color:fg}}>
          <p className="text-2xl font-bold">Sample Text</p>
          <p className="text-sm">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Foreground</label><input type="color" value={fg} onChange={e=>setFg(e.target.value)} className="w-full h-12 bg-gray-800 border border-gray-700 rounded" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Background</label><input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="w-full h-12 bg-gray-800 border border-gray-700 rounded" /></div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded p-4 mb-4">
          <p className="text-2xl font-bold text-center mb-4">{ratio.toFixed(2)}:1</p>
          <div className="grid grid-cols-3 gap-2">
            {[{label:"AA Normal",pass:aa},{label:"AA Large",pass:aaLarge},{label:"AAA Normal",pass:aaa}].map(({label,pass})=>(
              <div key={label} className={`text-center rounded p-2 ${pass?"bg-green-900 text-green-400":"bg-red-900 text-red-400"}`}>
                <div className="text-lg">{pass?"✓":"✗"}</div>
                <div className="text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}