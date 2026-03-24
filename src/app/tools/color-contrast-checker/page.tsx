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

function contrastRatio(l1: number, l2: number) {
  const lighter = Math.max(l1,l2);
  const darker = Math.min(l1,l2);
  return (lighter+0.05)/(darker+0.05);
}

export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#000000");

  const fgRgb = hexToRgb(fg);
  const bgRgb = hexToRgb(bg);
  const ratio = contrastRatio(relativeLuminance(fgRgb), relativeLuminance(bgRgb));
  const ratioFixed = ratio.toFixed(2);

  const aaLarge = ratio >= 3;
  const aaSmall = ratio >= 4.5;
  const aaaLarge = ratio >= 4.5;
  const aaaSmall = ratio >= 7;

  const badge = (pass: boolean, label: string) => (
    <span className={`px-2 py-1 rounded text-xs font-bold ${pass ? "bg-green-700 text-green-100" : "bg-red-700 text-red-100"}`}>
      {label}: {pass ? "PASS" : "FAIL"}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Color Contrast Checker</h1>
        <p className="text-gray-400 mb-6">Check WCAG 2.1 contrast ratio between foreground and background colors.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Foreground Color</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={fg} onChange={e=>setFg(e.target.value)} className="w-12 h-10 rounded cursor-pointer" />
              <input type="text" value={fg} onChange={e=>setFg(e.target.value)} className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Background Color</label>
            <div className="flex gap-2 items-center">
              <input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="w-12 h-10 rounded cursor-pointer" />
              <input type="text" value={bg} onChange={e=>setBg(e.target.value)} className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" />
            </div>
          </div>
        </div>
        <div className="rounded-lg p-8 mb-6 text-center" style={{backgroundColor: bg, color: fg}}>
          <p className="text-2xl font-bold">Sample Text</p>
          <p className="text-sm mt-1">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center mb-6">
          <p className="text-5xl font-bold mb-1">{ratioFixed}:1</p>
          <p className="text-gray-400 text-sm">Contrast Ratio</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {badge(aaSmall, "AA Normal")}
          {badge(aaLarge, "AA Large")}
          {badge(aaaSmall, "AAA Normal")}
          {badge(aaaLarge, "AAA Large")}
        </div>
        <p className="text-gray-500 text-xs mt-4">Large text is 18pt+ or 14pt+ bold. WCAG AA requires 4.5:1 normal, 3:1 large. AAA requires 7:1 normal, 4.5:1 large.</p>
      </div>
    </div>
  );
}
