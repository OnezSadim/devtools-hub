"use client";
import { useState } from "react";
export default function Page() {
  const [v, setV] = useState("");
  return (
    <main style={{padding:"2rem",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Magnetic Field Strength Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between magnetic field strength units like ampere per meter, oersted, and gilbert per meter.</p>
      <input value={v} onChange={e=>setV(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",width:"200px",marginRight:"1rem"}} />
      <p style={{marginTop:"1rem",color:"#94a3b8"}}>Full converter coming soon.</p>
    </main>
  );
}
