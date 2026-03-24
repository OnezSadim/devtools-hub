"use client";
import { useState } from "react";
function hexToHsl(hex:string){const r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;const max=Math.max(r,g,b),min=Math.min(r,g,b);let h=0,s=0,l=(max+min)/2;if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);if(max===r)h=(g-b)/d+(g<b?6:0);else if(max===g)h=(b-r)/d+2;else h=(r-g)/d+4;h/=6;}return[Math.round(h*360),Math.round(s*100),Math.round(l*100)];}
function hslToHex(h:number,s:number,l:number){s/=100;l/=100;const a=s*Math.min(l,1-l);const f=(n:number)=>{const k=(n+h/30)%12;const c=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*c).toString(16).padStart(2,"0");};return"#"+f(0)+f(8)+f(4);}
export default function ColorPaletteGenerator() {
  const [base,setBase]=useState("#3b82f6");
  const [hsl,setHsl]=useState([217,91,60]);
  function update(hex:string){setBase(hex);setHsl(hexToHsl(hex));}
  const shades=[10,20,30,40,50,60,70,80,90];
  const palette=shades.map(l=>({l,hex:hslToHex(hsl[0],hsl[1],l)}));
  return(<div className="min-h-screen bg-gray-950 text-white p-6"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Color Palette Generator</h1><p className="text-gray-400 mb-6">Generate a full shade palette from a base color.</p><div className="flex gap-4 mb-6 items-center"><input type="color" value={base} onChange={e=>update(e.target.value)} className="w-16 h-16 rounded cursor-pointer border-0"/><div><p className="font-mono text-lg">{base.toUpperCase()}</p><p className="text-gray-400 text-sm">HSL({hsl[0]}, {hsl[1]}%, {hsl[2]}%)</p></div></div><div className="grid grid-cols-9 gap-1">{palette.map(s=><div key={s.l}><div style={{backgroundColor:s.hex}} className="h-16 rounded-t"/><div className="bg-gray-900 rounded-b p-1 text-center"><p className="text-xs text-gray-300">{s.l*10}</p><p className="text-xs font-mono text-gray-500">{s.hex}</p></div></div>)}</div></div></div>);
}