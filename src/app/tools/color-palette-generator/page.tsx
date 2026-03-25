"use client";
import { useState } from "react";
export default function ColorPaletteGenerator() {
  const [base, setBase] = useState('#3b82f6');
  const [palette, setPalette] = useState([]);
  function hexToHsl(hex) {
    let r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5,7),16)/255;
    const max = Math.max(r,g,b), min = Math.min(r,g,b);
    let h, s, l = (max+min)/2;
    if (max === min) { h = s = 0; } else {
      const d = max-min; s = l > 0.5 ? d/(2-max-min) : d/(max+min);
      switch(max) { case r: h=(g-b)/d+(g<b?6:0); break; case g: h=(b-r)/d+2; break; default: h=(r-g)/d+4; }
      h /= 6;
    }
    return [h*360, s*100, l*100];
  }
  function hslToHex(h, s, l) {
    h/=360; s/=100; l/=100;
    let r,g,b;
    if (s===0) { r=g=b=l; } else {
      const q = l<0.5?l*(1+s):l+s-l*s, p=2*l-q;
      const hue2rgb = (p,q,t)=>{ if(t<0)t+=1; if(t>1)t-=1; if(t<1/6)return p+(q-p)*6*t; if(t<1/2)return q; if(t<2/3)return p+(q-p)*(2/3-t)*6; return p; };
      r=hue2rgb(p,q,h+1/3); g=hue2rgb(p,q,h); b=hue2rgb(p,q,h-1/3);
    }
    return '#' + [r,g,b].map(x=>Math.round(x*255).toString(16).padStart(2,'0')).join('');
  }
  function generate() {
    const [h,s,l] = hexToHsl(base);
    const shades = [90,80,70,60,50,40,30,20,10].map(lv => ({hex: hslToHex(h,s,lv), l: lv}));
    const complementary = hslToHex((h+180)%360, s, l);
    const triadic = [hslToHex((h+120)%360,s,l), hslToHex((h+240)%360,s,l)];
    setPalette([{label:'Shades',colors:shades.map(x=>x.hex)},{label:'Complementary',colors:[complementary]},{label:'Triadic',colors:triadic}]);
  }
  return (
    <div style={{maxWidth:700,margin:'0 auto',padding:'2rem',fontFamily:'sans-serif',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>Color Palette Generator</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Generate harmonious color palettes from a base color.</p>
      <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.5rem'}}>
        <input type="color" value={base} onChange={e=>setBase(e.target.value)} style={{width:60,height:40,border:'none',borderRadius:4,cursor:'pointer'}} />
        <input value={base} onChange={e=>setBase(e.target.value)} style={{background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.5rem',fontFamily:'monospace',width:120}} />
        <button onClick={generate} style={{background:'#3b82f6',color:'#fff',border:'none',borderRadius:6,padding:'0.5rem 1.5rem',cursor:'pointer'}}>Generate</button>
      </div>
      {palette.map(group => (
        <div key={group.label} style={{marginBottom:'1.5rem'}}>
          <h3 style={{color:'#94a3b8',marginBottom:'0.5rem'}}>{group.label}</h3>
          <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
            {group.colors.map(c => (
              <div key={c} onClick={()=>navigator.clipboard?.writeText(c)} style={{cursor:'pointer',textAlign:'center'}}>
                <div style={{width:60,height:60,background:c,borderRadius:8,marginBottom:'0.25rem',border:'1px solid #334155'}} />
                <span style={{fontSize:'0.7rem',color:'#94a3b8'}}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}