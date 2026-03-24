"use client";
import { useState } from "react";
export default function PixelsToRem() {
  const [px, setPx] = useState("");
  const [rem, setRem] = useState("");
  const [base, setBase] = useState("16");
  const baseN = parseFloat(base) || 16;
  const handlePx = (v: string) => { setPx(v); const n=parseFloat(v); if(!isNaN(n)) setRem((n/baseN).toString()); else setRem(""); };
  const handleRem = (v: string) => { setRem(v); const n=parseFloat(v); if(!isNaN(n)) setPx((n*baseN).toString()); else setPx(""); };
  const commonSizes = [8,10,12,14,16,18,20,24,28,32,36,40,48,56,64,72,80,96];
  return (
    <div style={{maxWidth:600,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Pixels ↔ REM Converter</h1>
      <p style={{color:"#aaa",marginBottom:"2rem"}}>Convert between px and rem units for CSS.</p>
      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"1.5rem"}}>
        <span style={{color:"#aaa"}}>Base font size:</span>
        <input value={base} onChange={e=>{setBase(e.target.value);handlePx(px);}} style={{width:60,padding:"0.4rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",textAlign:"center"}} />
        <span style={{color:"#aaa"}}>px</span>
      </div>
      <div style={{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"2rem"}}>
        <div style={{flex:1}}><label style={{color:"#aaa",display:"block",marginBottom:4}}>Pixels (px)</label><input value={px} onChange={e=>handlePx(e.target.value)} placeholder="16" style={{width:"100%",padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box",fontSize:"1.1rem"}} /></div>
        <span style={{fontSize:"1.5rem",color:"#7c3aed",paddingTop:"1.2rem"}}>⇄</span>
        <div style={{flex:1}}><label style={{color:"#aaa",display:"block",marginBottom:4}}>REM</label><input value={rem} onChange={e=>handleRem(e.target.value)} placeholder="1" style={{width:"100%",padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box",fontSize:"1.1rem"}} /></div>
      </div>
      <h3 style={{color:"#aaa",marginBottom:"0.75rem"}}>Common sizes (base {baseN}px):</h3>
      <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"0.5rem"}}>
        {commonSizes.map(s=>(
          <button key={s} onClick={()=>handlePx(s.toString())} style={{padding:"0.5rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",cursor:"pointer",textAlign:"center"}}>
            <div style={{fontSize:"0.85rem"}}>{s}px</div>
            <div style={{fontSize:"0.75rem",color:"#7c3aed"}}>{(s/baseN).toFixed(4)}rem</div>
          </button>
        ))}
      </div>
    </div>
  );
}