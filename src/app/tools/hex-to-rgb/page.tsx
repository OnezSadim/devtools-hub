"use client";
import { useState } from "react";
export default function HexToRgb() {
  const [hex, setHex] = useState("#3b82f6");
  const [r, setR] = useState("59");
  const [g, setG] = useState("130");
  const [b, setB] = useState("246");
  const hexToRgb = (h: string) => {
    const clean = h.replace("#","");
    const num = parseInt(clean,16);
    setR(String((num>>16)&255));
    setG(String((num>>8)&255));
    setB(String(num&255));
  };
  const rgbToHex = (rv:string,gv:string,bv:string) => {
    const h = [rv,gv,bv].map(n=>parseInt(n).toString(16).padStart(2,"0")).join("");
    setHex("#"+h);
  };
  const color = `rgb(${r},${g},${b})`;
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}><h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>HEX ↔ RGB Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert colors between HEX and RGB</p><div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}><div style={{flex:1,minWidth:"200px"}}><label style={{display:"block",marginBottom:"0.5rem",color:"#94a3b8"}}>HEX Color</label><div style={{display:"flex",gap:"0.5rem",alignItems:"center"}}><input type="text" value={hex} onChange={e=>{setHex(e.target.value);if(e.target.value.length===7)hexToRgb(e.target.value);}} style={{flex:1,background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",padding:"0.5rem"}} /><input type="color" value={hex} onChange={e=>{setHex(e.target.value);hexToRgb(e.target.value);}} style={{width:"40px",height:"40px",border:"none",borderRadius:"4px",cursor:"pointer"}} /></div></div><div style={{flex:1,minWidth:"200px"}}><label style={{display:"block",marginBottom:"0.5rem",color:"#94a3b8"}}>RGB Values</label><div style={{display:"flex",gap:"0.5rem"}}>{[[r,setR],[g,setG],[b,setB]].map(([val,set],i)=>(<input key={i} type="number" min="0" max="255" value={val as string} onChange={e=>{(set as any)(e.target.value);rgbToHex(i===0?e.target.value:r,i===1?e.target.value:g,i===2?e.target.value:b);}} style={{flex:1,background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",padding:"0.5rem"}} />))}</div></div></div><div style={{marginTop:"2rem",height:"100px",borderRadius:"12px",background:color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",fontWeight:"bold",color:parseInt(r)*0.299+parseInt(g)*0.587+parseInt(b)*0.114>128?"#000":"#fff"}}>{hex} = rgb({r}, {g}, {b})</div></div>);
}
