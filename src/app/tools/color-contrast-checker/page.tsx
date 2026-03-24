"use client";
import { useState } from "react";
function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return [r,g,b];
}
function luminance([r,g,b]: number[]) {
  const toLinear = (c: number) => { const s = c/255; return s<=0.03928?s/12.92:Math.pow((s+0.055)/1.055,2.4); };
  return 0.2126*toLinear(r)+0.7152*toLinear(g)+0.0722*toLinear(b);
}
function contrastRatio(hex1: string, hex2: string) {
  const l1 = luminance(hexToRgb(hex1));
  const l2 = luminance(hexToRgb(hex2));
  const lighter = Math.max(l1,l2); const darker = Math.min(l1,l2);
  return (lighter+0.05)/(darker+0.05);
}
export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#0f172a");
  const ratio = contrastRatio(fg, bg);
  const ratioStr = ratio.toFixed(2);
  const aaLarge = ratio >= 3;
  const aa = ratio >= 4.5;
  const aaaLarge = ratio >= 4.5;
  const aaa = ratio >= 7;
  const badge = (pass: boolean) => ({background:pass?"#166534":"#7f1d1d",color:"#e2e8f0",borderRadius:4,padding:"0.2rem 0.6rem",fontSize:"0.8rem"});
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Color Contrast Checker</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Check WCAG accessibility contrast ratio between foreground and background colors.</p>
      <div style={{display:"flex",gap:"2rem",marginBottom:"2rem",flexWrap:"wrap"}}>
        <label><span style={{color:"#94a3b8",display:"block",marginBottom:4}}>Foreground</span><input type="color" value={fg} onChange={e=>setFg(e.target.value)} style={{width:80,height:40,border:"none",borderRadius:4,cursor:"pointer"}} /></label>
        <label><span style={{color:"#94a3b8",display:"block",marginBottom:4}}>Background</span><input type="color" value={bg} onChange={e=>setBg(e.target.value)} style={{width:80,height:40,border:"none",borderRadius:4,cursor:"pointer"}} /></label>
      </div>
      <div style={{background:bg,color:fg,padding:"2rem",borderRadius:8,marginBottom:"2rem",fontSize:"1.2rem"}}>Sample Text — The quick brown fox jumps over the lazy dog.</div>
      <div style={{background:"#1e293b",borderRadius:8,padding:"1.5rem"}}>
        <div style={{fontSize:"2rem",fontWeight:700,marginBottom:"1rem"}}>Contrast Ratio: {ratioStr}:1</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"1rem"}}>
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:6}}><div style={{marginBottom:4}}>AA Normal Text</div><span style={badge(aa)}>{aa?"PASS":"FAIL"}</span></div>
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:6}}><div style={{marginBottom:4}}>AA Large Text</div><span style={badge(aaLarge)}>{aaLarge?"PASS":"FAIL"}</span></div>
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:6}}><div style={{marginBottom:4}}>AAA Normal Text</div><span style={badge(aaa)}>{aaa?"PASS":"FAIL"}</span></div>
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:6}}><div style={{marginBottom:4}}>AAA Large Text</div><span style={badge(aaaLarge)}>{aaaLarge?"PASS":"FAIL"}</span></div>
        </div>
      </div>
    </div>
  );
}