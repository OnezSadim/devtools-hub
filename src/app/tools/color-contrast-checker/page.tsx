"use client";
import { useState } from "react";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return {r,g,b};
}
function luminance({r,g,b}: {r:number,g:number,b:number}) {
  const [rs,gs,bs] = [r,g,b].map(c => { const s=c/255; return s<=0.03928?s/12.92:Math.pow((s+0.055)/1.055,2.4); });
  return 0.2126*rs+0.7152*gs+0.0722*bs;
}

export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#1e1e2e");
  const l1 = luminance(hexToRgb(fg));
  const l2 = luminance(hexToRgb(bg));
  const ratio = ((Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05));
  const ratioStr = ratio.toFixed(2)+":1";
  const aa = ratio >= 4.5;
  const aaa = ratio >= 7;
  const aaLarge = ratio >= 3;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Color Contrast Checker</h1>
        <p className="text-gray-400 mb-6">Check WCAG accessibility contrast ratios.</p>
        <div className="rounded-xl p-8 mb-6 text-center" style={{backgroundColor:bg,color:fg}}>
          <p className="text-2xl font-bold">Sample Text</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="text-sm text-gray-400">Foreground</label><input type="color" value={fg} onChange={e=>setFg(e.target.value)} className="w-full h-12 mt-1 rounded" /></div>
          <div><label className="text-sm text-gray-400">Background</label><input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="w-full h-12 mt-1 rounded" /></div>
        </div>
        <div className="text-center text-4xl font-bold mb-4">{ratioStr}</div>
        <div className="grid grid-cols-3 gap-3">
          {[{l:"AA Normal",p:aa},{l:"AAA Normal",p:aaa},{l:"AA Large",p:aaLarge}].map(({l,p})=>(
            <div key={l} className={`rounded p-3 text-center ${p?"bg-green-800":"bg-red-800"}`}><div className="font-bold">{p?"Pass":"Fail"}</div><div className="text-xs">{l}</div></div>
          ))}
        </div>
      </div>
    </div>
  );
}