"use client";
import { useState } from "react";
export default function ColorPaletteGenerator() {
  const [base, setBase] = useState("#3b82f6");
  const hex2hsl = h => {
    let r=parseInt(h.slice(1,3),16)/255,g=parseInt(h.slice(3,5),16)/255,b=parseInt(h.slice(5,7),16)/255;
    const max=Math.max(r,g,b),min=Math.min(r,g,b),l=(max+min)/2;
    if(max===min) return [0,0,l];
    const d=max-min,s=l>0.5?d/(2-max-min):d/(max+min);
    const h2=max===r?(g-b)/d+(g<b?6:0):max===g?(b-r)/d+2:(r-g)/d+4;
    return [h2/6*360,s*100,l*100];
  };
  const hsl2hex = (h,s,l) => {
    s/=100;l/=100;
    const a=s*Math.min(l,1-l),f=n=>{const k=(n+h/30)%12;return l-a*Math.max(Math.min(k-3,9-k,1),-1);};
    return "#"+[f(0),f(8),f(4)].map(x=>Math.round(x*255).toString(16).padStart(2,"0")).join("");
  };
  const [h,s,l] = hex2hsl(base);
  const shades = [10,20,30,40,50,60,70,80,90].map(ll=>hsl2hex(h,s,ll));
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Color Palette Generator</h1>
      <div className="flex items-center gap-4 mb-6">
        <input type="color" value={base} onChange={e=>setBase(e.target.value)} className="w-16 h-10 rounded cursor-pointer" />
        <input className="flex-1 p-3 rounded bg-gray-800 text-white border border-gray-700" value={base} onChange={e=>setBase(e.target.value)} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {shades.map((c,i)=>(
          <div key={i} className="rounded p-3 text-center cursor-pointer" style={{backgroundColor:c}} onClick={()=>navigator.clipboard.writeText(c)}>
            <span className="text-xs font-mono" style={{color:i<5?"#000":"#fff"}}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}