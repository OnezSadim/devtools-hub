"use client";
import { useState } from "react";
export default function AspectRatioCalculator() {
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [mode, setMode] = useState("find");
  const [newW, setNewW] = useState("");
  const [newH, setNewH] = useState("");
  const gcd = (a: number, b: number): number => b===0?a:gcd(b,a%b);
  const width = parseFloat(w), height = parseFloat(h);
  const ratio = (!isNaN(width)&&!isNaN(height)&&width>0&&height>0) ? width/height : null;
  const g = (ratio&&width&&height) ? gcd(Math.round(width),Math.round(height)) : 1;
  const ratioStr = ratio ? `${Math.round(width)/g}:${Math.round(height)/g}` : "";
  const calcNew = () => {
    if(!ratio) return "";
    if(newW) return `Height: ${(parseFloat(newW)/ratio).toFixed(0)}px`;
    if(newH) return `Width: ${(parseFloat(newH)*ratio).toFixed(0)}px`;
    return "";
  };
  const presets = ["16:9","4:3","1:1","21:9","3:2","4:5","9:16"];
  return (
    <div style={{maxWidth:550,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Aspect Ratio Calculator</h1>
      <p style={{color:"#aaa",marginBottom:"1rem"}}>Calculate aspect ratios and scale dimensions.</p>
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        {presets.map(p=>(
          <button key={p} onClick={()=>{const[pw,ph]=p.split(":");setW(pw);setH(ph);}} style={{padding:"0.3rem 0.6rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",cursor:"pointer",fontSize:"0.85rem"}}>{p}</button>
        ))}
      </div>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
        <div style={{flex:1}}><label style={{color:"#aaa",display:"block",marginBottom:4}}>Width</label><input value={w} onChange={e=>setW(e.target.value)} style={{width:"100%",padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box"}} /></div>
        <div style={{flex:1}}><label style={{color:"#aaa",display:"block",marginBottom:4}}>Height</label><input value={h} onChange={e=>setH(e.target.value)} style={{width:"100%",padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box"}} /></div>
      </div>
      {ratio && <div style={{padding:"1rem",background:"#1e1e1e",borderRadius:4,border:"1px solid #7c3aed",marginBottom:"1.5rem",textAlign:"center"}}><span style={{color:"#aaa"}}>Ratio: </span><span style={{fontSize:"1.5rem"}}>{ratioStr}</span><span style={{color:"#aaa",marginLeft:"1rem"}}>({ratio.toFixed(4)})</span></div>}
      <div style={{marginBottom:"1rem"}}>
        <p style={{color:"#aaa",marginBottom:"0.5rem"}}>Scale to new dimensions:</p>
        <div style={{display:"flex",gap:"1rem"}}>
          <div style={{flex:1}}><label style={{color:"#aaa",display:"block",marginBottom:4}}>New Width</label><input value={newW} onChange={e=>{setNewW(e.target.value);setNewH("");}} style={{width:"100%",padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box"}} /></div>
          <div style={{flex:1}}><label style={{color:"#aaa",display:"block",marginBottom:4}}>New Height</label><input value={newH} onChange={e=>{setNewH(e.target.value);setNewW("");}} style={{width:"100%",padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box"}} /></div>
        </div>
        {(newW||newH) && ratio && <div style={{marginTop:"0.5rem",padding:"0.75rem",background:"#1e1e1e",borderRadius:4,border:"1px solid #333"}}>{calcNew()}</div>}
      </div>
    </div>
  );
}