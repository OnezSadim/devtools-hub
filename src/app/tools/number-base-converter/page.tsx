"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [val, setVal] = useState("");
  const [base, setBase] = useState(10);
  const convert = (v: string, b: number) => {
    try {
      const n = parseInt(v, b);
      if (isNaN(n)) return null;
      return { bin: n.toString(2), oct: n.toString(8), dec: n.toString(10), hex: n.toString(16).toUpperCase() };
    } catch { return null; }
  };
  const r = convert(val, base);
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Number Base Converter</h1>
    <div style={{display:"flex",gap:"0.5rem",marginBottom:"1rem",alignItems:"center"}}>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter number" style={{flex:1,padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} />
      <select value={base} onChange={e=>setBase(Number(e.target.value))} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}>
        <option value={2}>Binary (2)</option>
        <option value={8}>Octal (8)</option>
        <option value={10}>Decimal (10)</option>
        <option value={16}>Hex (16)</option>
      </select>
    </div>
    {r && <div style={{display:"grid",gap:"0.5rem"}}>
      {[["Binary",r.bin],["Octal",r.oct],["Decimal",r.dec],["Hexadecimal",r.hex]].map(([l,v])=>(
        <div key={String(l)} style={{background:"#1e293b",padding:"0.75rem",borderRadius:"4px",display:"flex",justifyContent:"space-between"}}>
          <span style={{color:"#94a3b8"}}>{l}</span><span style={{color:"#a3e635"}}>{v}</span>
        </div>
      ))}
    </div>}
  </div>);
}