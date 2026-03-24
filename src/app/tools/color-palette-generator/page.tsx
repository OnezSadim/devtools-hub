"use client";
import { useState } from "react";
export default function ColorPaletteGenerator() {
  const [base, setBase] = useState("#3b82f6");
  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5,7),16)/255;
    const max = Math.max(r,g,b), min = Math.min(r,g,b); let h=0,s=0,l=(max+min)/2;
    if (max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}h/=6;}
    return [h*360,s*100,l*100];
  };
  const hslToHex = (h: number, s: number, l: number) => {
    s/=100;l/=100;const a=s*Math.min(l,1-l);const f=(n: number)=>{const k=(n+h/30)%12;const c=l-a*Math.max(-1,Math.min(k-3,9-k,1));return Math.round(255*c).toString(16).padStart(2,"0")};
    return "#"+f(0)+f(8)+f(4);
  };
  const [h,s,l] = hexToHsl(base);
  const shades = [95,85,70,55,40,30,20,12].map(li=>({ l: li, hex: hslToHex(h,s,li) }));
  const complementary = hslToHex((h+180)%360,s,l);
  const triadic = [(h+120)%360,(h+240)%360].map(hh=>hslToHex(hh,s,l));
  const analogous = [(h+30)%360,(h-30+360)%360].map(hh=>hslToHex(hh,s,l));
  const Swatch = ({hex,label}:{hex:string,label:string}) => (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded cursor-pointer border border-gray-700" style={{background:hex}} onClick={()=>navigator.clipboard.writeText(hex)} />
      <span className="text-xs text-gray-400 mt-1 font-mono">{hex}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Color Palette Generator</h1>
      <p className="text-gray-400 mb-6">Generate color palettes from a base color. Click swatches to copy hex.</p>
      <div className="flex items-center gap-4 mb-8">
        <input type="color" value={base} onChange={e=>setBase(e.target.value)} className="w-16 h-10 rounded cursor-pointer" />
        <input value={base} onChange={e=>setBase(e.target.value)} className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white font-mono w-32" />
      </div>
      <div className="space-y-6 max-w-2xl">
        <div><h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Shades</h2><div className="flex gap-3 flex-wrap">{shades.map(({l:li,hex})=><Swatch key={li} hex={hex} label={li+"%"} />)}</div></div>
        <div><h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Complementary</h2><div className="flex gap-3"><Swatch hex={base} label="base" /><Swatch hex={complementary} label="complement" /></div></div>
        <div><h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Triadic</h2><div className="flex gap-3"><Swatch hex={base} label="base" />{triadic.map((c,i)=><Swatch key={i} hex={c} label={"+"+(i+1)*120+"°"} />)}</div></div>
        <div><h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Analogous</h2><div className="flex gap-3"><Swatch hex={analogous[1]} label="-30°" /><Swatch hex={base} label="base" /><Swatch hex={analogous[0]} label="+30°" /></div></div>
      </div>
    </main>
  );
}