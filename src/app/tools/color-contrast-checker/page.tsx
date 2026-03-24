"use client";
import { useState } from "react";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return {r,g,b};
}
function relativeLuminance({r,g,b}: {r:number,g:number,b:number}) {
  const [rs,gs,bs] = [r,g,b].map(c => {
    const s = c/255;
    return s <= 0.03928 ? s/12.92 : Math.pow((s+0.055)/1.055, 2.4);
  });
  return 0.2126*rs + 0.7152*gs + 0.0722*bs;
}
function contrastRatio(l1:number, l2:number) {
  const lighter = Math.max(l1,l2);
  const darker = Math.min(l1,l2);
  return (lighter+0.05)/(darker+0.05);
}

export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#000000");
  let ratio = 1, grade = "Fail";
  try {
    const l1 = relativeLuminance(hexToRgb(fg));
    const l2 = relativeLuminance(hexToRgb(bg));
    ratio = contrastRatio(l1, l2);
    if (ratio >= 7) grade = "AAA";
    else if (ratio >= 4.5) grade = "AA";
    else if (ratio >= 3) grade = "AA Large";
    else grade = "Fail";
  } catch {}
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Color Contrast Checker</h1>
        <p className="text-gray-400 mb-8">Check WCAG accessibility contrast ratios.</p>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Foreground</label>
            <div className="flex gap-3 items-center">
              <input type="color" value={fg} onChange={e=>setFg(e.target.value)} className="w-12 h-12 rounded cursor-pointer" />
              <input type="text" value={fg} onChange={e=>setFg(e.target.value)} className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Background</label>
            <div className="flex gap-3 items-center">
              <input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="w-12 h-12 rounded cursor-pointer" />
              <input type="text" value={bg} onChange={e=>setBg(e.target.value)} className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" />
            </div>
          </div>
        </div>
        <div className="rounded-xl p-8 mb-6 text-center" style={{backgroundColor:bg, color:fg}}>
          <p className="text-2xl font-bold">Sample Text</p>
          <p className="text-sm mt-2">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className="text-5xl font-bold mb-2">{ratio.toFixed(2)}:1</div>
          <div className={`text-xl font-semibold ${grade==='Fail'?'text-red-400':grade.includes('AAA')?'text-green-400':'text-yellow-400'}`}>{grade}</div>
          <div className="text-sm text-gray-400 mt-2">WCAG AA: 4.5:1 normal, 3:1 large | WCAG AAA: 7:1</div>
        </div>
      </div>
    </main>
  );
}