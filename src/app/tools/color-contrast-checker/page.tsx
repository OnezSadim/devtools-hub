"use client";
import { useState } from "react";
const hexToRgb = (hex: string) => { const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16); return [r,g,b]; };
const luminance = ([r,g,b]: number[]) => { const srgb = [r,g,b].map(c => { const s = c/255; return s <= 0.03928 ? s/12.92 : Math.pow((s+0.055)/1.055, 2.4); }); return 0.2126*srgb[0] + 0.7152*srgb[1] + 0.0722*srgb[2]; };
export default function ColorContrast() {
  const [fg, setFg] = useState('#ffffff');
  const [bg, setBg] = useState('#000000');
  const ratio = (() => { try { const l1 = luminance(hexToRgb(fg)), l2 = luminance(hexToRgb(bg)); const lighter = Math.max(l1,l2), darker = Math.min(l1,l2); return ((lighter+0.05)/(darker+0.05)); } catch { return 1; } })();
  const aaLarge = ratio >= 3, aaSmall = ratio >= 4.5, aaaLarge = ratio >= 4.5, aaaSmall = ratio >= 7;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Color Contrast Checker</h1>
        <p className="text-gray-400 mb-8">Check WCAG accessibility contrast ratios.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-400 mb-1">Foreground</label><div className="flex gap-2"><input type="color" value={fg} onChange={e => setFg(e.target.value)} className="h-12 w-16 rounded cursor-pointer" /><input value={fg} onChange={e => setFg(e.target.value)} className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-white font-mono" /></div></div>
            <div><label className="block text-sm text-gray-400 mb-1">Background</label><div className="flex gap-2"><input type="color" value={bg} onChange={e => setBg(e.target.value)} className="h-12 w-16 rounded cursor-pointer" /><input value={bg} onChange={e => setBg(e.target.value)} className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-white font-mono" /></div></div>
          </div>
          <div className="rounded-lg p-6 text-center" style={{backgroundColor: bg, color: fg}}><span className="text-2xl font-bold">Sample Text Preview</span></div>
          <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-4xl font-bold text-blue-400">{ratio.toFixed(2)}:1</span><p className="text-gray-400 text-sm mt-1">Contrast Ratio</p></div>
          <div className="grid grid-cols-2 gap-2">
            {[['AA Large', aaLarge],['AA Small', aaSmall],['AAA Large', aaaLarge],['AAA Small', aaaSmall]].map(([label, pass]) => (
              <div key={label as string} className={"rounded-lg p-3 text-center " + (pass ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300')}>
                <div className="font-semibold">{label as string}</div>
                <div className="text-sm">{pass ? 'PASS' : 'FAIL'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}