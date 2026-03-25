"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Tesla (T)");
  const [to, setTo] = useState("Millitesla (mT)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "Tesla (T)": toBase = v * 1.0; break;
      case "Millitesla (mT)": toBase = v * 0.001; break;
      case "Microtesla (μT)": toBase = v * 1e-06; break;
      case "Nanotesla (nT)": toBase = v * 1e-09; break;
      case "Gauss (G)": toBase = v * 0.0001; break;
      case "Kilogauss (kG)": toBase = v * 0.1; break;
      case "Weber/sq meter (Wb/m²)": toBase = v * 1.0; break;
      default: toBase = v;
    }
    let result = 0;
    switch (to) {
      case "Tesla (T)": result = base / 1.0; break;
      case "Millitesla (mT)": result = base / 0.001; break;
      case "Microtesla (μT)": result = base / 1e-06; break;
      case "Nanotesla (nT)": result = base / 1e-09; break;
      case "Gauss (G)": result = base / 0.0001; break;
      case "Kilogauss (kG)": result = base / 0.1; break;
      case "Weber/sq meter (Wb/m²)": result = base / 1.0; break;
      default: result = toBase;
    }
    return result.toPrecision(6);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Magnetic Flux Density Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24}}>Convert between teslas, milliteslas, microteslas, gauss and more.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:16,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:12,marginBottom:24}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:15}}>
          <option value="Tesla (T)">Tesla (T)</option>
          <option value="Millitesla (mT)">Millitesla (mT)</option>
          <option value="Microtesla (μT)">Microtesla (μT)</option>
          <option value="Nanotesla (nT)">Nanotesla (nT)</option>
          <option value="Gauss (G)">Gauss (G)</option>
          <option value="Kilogauss (kG)">Kilogauss (kG)</option>
          <option value="Weber/sq meter (Wb/m²)">Weber/sq meter (Wb/m²)</option>
          </select>
          <span style={{alignSelf:"center",color:"#64748b",fontSize:20}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:15}}>
          <option value="Tesla (T)">Tesla (T)</option>
          <option value="Millitesla (mT)">Millitesla (mT)</option>
          <option value="Microtesla (μT)">Microtesla (μT)</option>
          <option value="Nanotesla (nT)">Nanotesla (nT)</option>
          <option value="Gauss (G)">Gauss (G)</option>
          <option value="Kilogauss (kG)">Kilogauss (kG)</option>
          <option value="Weber/sq meter (Wb/m²)">Weber/sq meter (Wb/m²)</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"18px 20px",textAlign:"center",fontSize:22,fontWeight:700,color:"#38bdf8"}}>
          {val ? convert() : "—"}
        </div>
      </div>
    </main>
  );
}
