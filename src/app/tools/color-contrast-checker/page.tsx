"use client";
import { useState } from "react";
export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#000000");
  const hexToRgb = (hex: string) => { const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16); return [r,g,b]; };
  const luminance = (r:number,g:number,b:number) => { const a=[r,g,b].map(v=>{v/=255; return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);}); return a[0]*0.2126+a[1]*0.7152+a[2]*0.0722; };
  const [r1,g1,b1] = hexToRgb(fg);
  const [r2,g2,b2] = hexToRgb(bg);
  const l1 = luminance(r1,g1,b1), l2 = luminance(r2,g2,b2);
  const ratio = (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05);
  const aa = ratio >= 4.5, aaLarge = ratio >= 3, aaa = ratio >= 7;
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Color Contrast Checker</h1>
      <p className="text-gray-400 mb-6">Check WCAG accessibility contrast ratios.</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div><label className="block text-sm mb-1">Foreground</label><input type="color" value={fg} onChange={e=>setFg(e.target.value)} className="w-full h-12 rounded cursor-pointer" /></div>
        <div><label className="block text-sm mb-1">Background</label><input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="w-full h-12 rounded cursor-pointer" /></div>
      </div>
      <div className="rounded p-6 text-center mb-6" style={{background:bg,color:fg}}>
        <p className="text-2xl font-bold">Sample Text</p>
        <p className="text-sm">The quick brown fox jumps over the lazy dog</p>
      </div>
      <div className="bg-gray-800 rounded p-4">
        <p className="text-2xl font-bold mb-4 text-center">{ratio.toFixed(2)}:1</p>
        <div className="space-y-2">
          {[{label:"AA Normal (4.5:1)",pass:aa},{label:"AA Large (3:1)",pass:aaLarge},{label:"AAA Normal (7:1)",pass:aaa}].map(({label,pass})=>(
            <div key={label} className="flex justify-between"><span>{label}</span><span className={pass?"text-green-400":"text-red-400"}>{pass?"PASS":"FAIL"}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}