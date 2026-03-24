
"use client";
import { useState } from "react";
function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return {r,g,b};
}
function luminance({r,g,b}: {r:number,g:number,b:number}) {
  const [rs,gs,bs] = [r,g,b].map(v => { const s = v/255; return s <= 0.03928 ? s/12.92 : Math.pow((s+0.055)/1.055, 2.4); });
  return 0.2126*rs + 0.7152*gs + 0.0722*bs;
}
function contrastRatio(hex1: string, hex2: string) {
  const l1 = luminance(hexToRgb(hex1)), l2 = luminance(hexToRgb(hex2));
  const [light,dark] = l1 > l2 ? [l1,l2] : [l2,l1];
  return (light+0.05)/(dark+0.05);
}
export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#1a1a2e");
  let ratio = 1, aaLarge = false, aa = false, aaa = false;
  try { ratio = contrastRatio(fg, bg); aaLarge = ratio >= 3; aa = ratio >= 4.5; aaa = ratio >= 7; } catch {}
  const badge = (pass: boolean, label: string) => (
    <span className={`px-3 py-1 rounded text-sm font-medium ${pass?"bg-green-900 text-green-300":"bg-red-900 text-red-300"}`}>{pass?"PASS":"FAIL"} {label}</span>
  );
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Color Contrast Checker</h1>
        <p className="text-gray-400 mb-6">Check WCAG accessibility contrast ratios</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Foreground Color</label>
            <div className="flex gap-2">
              <input type="color" value={fg} onChange={e=>setFg(e.target.value)} className="h-10 w-12 rounded cursor-pointer bg-transparent border-0" />
              <input value={fg} onChange={e=>setFg(e.target.value)} className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Background Color</label>
            <div className="flex gap-2">
              <input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="h-10 w-12 rounded cursor-pointer bg-transparent border-0" />
              <input value={bg} onChange={e=>setBg(e.target.value)} className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono" />
            </div>
          </div>
        </div>
        <div style={{color:fg, backgroundColor:bg}} className="rounded-lg p-6 mb-6 border border-gray-700">
          <p className="text-2xl font-bold mb-2">Sample Text Preview</p>
          <p className="text-base">This is body text with the selected color combination. Aa Bb Cc 123</p>
          <p className="text-sm mt-2">Small text (14px equivalent)</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded p-4 mb-4">
          <p className="text-4xl font-bold text-center mb-2">{ratio.toFixed(2)}:1</p>
          <p className="text-center text-gray-400 text-sm">Contrast Ratio</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {badge(aaLarge, "AA Large")} {badge(aa, "AA Normal")} {badge(aaa, "AAA")}
          <span className="text-sm text-gray-500 self-center ml-2">(WCAG 2.1)</span>
        </div>
      </div>
    </div>
  );
}
