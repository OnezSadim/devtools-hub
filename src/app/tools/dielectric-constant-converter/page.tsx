"use client";
import { useState } from "react";
export default function Page() {
  const units = [('Relative permittivity (εr)', 1), ('Vacuum (1.0)', 1), ('Water (~80)', 80), ('Glass (~7)', 7)];
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0][0]);
  const base = units.find(u => u[0] === from)?.[1] || 1;
  const input = parseFloat(val) || 0;
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}><h1 style={{color:"#a78bfa",marginBottom:"0.5rem"}}>Dielectric Constant Converter</h1><p style={{color:"#888",marginBottom:"1.5rem"}}>Convert relative permittivity and dielectric constant values.</p><div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1a1a1a",border:"1px solid #333",color:"#e5e5e5",borderRadius:"4px",flex:1,minWidth:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1a1a1a",border:"1px solid #333",color:"#e5e5e5",borderRadius:"4px"}}>{units.map(u=><option key={u[0]} value={u[0]}>{u[0]}</option>)}</select></div><table style={{width:"100%",borderCollapse:"collapse"}}><thead><tr><th style={{padding:"8px",border:"1px solid #333",textAlign:"left",background:"#1a1a1a"}}>Unit</th><th style={{padding:"8px",border:"1px solid #333",textAlign:"left",background:"#1a1a1a"}}>Result</th></tr></thead><tbody>{units.map(u=><tr key={u[0]}><td style={{padding:"8px",border:"1px solid #333"}}>{u[0]}</td><td style={{padding:"8px",border:"1px solid #333",color:"#a78bfa"}}>{val===''?'—':((input/base)*u[1]).toExponential(6)}</td></tr>)}</tbody></table></div>);
}