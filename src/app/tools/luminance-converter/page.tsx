"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Candela/sq meter (cd/m²)");
  const [to, setTo] = useState("Nit (nt)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "Invalid input";
    let base = 0;
    switch(from) {
      case "Candela/sq meter (cd/m²)": base = v * 1; break;
      case "Nit (nt)": base = v * 1; break;
      case "Stilb (sb)": base = v * 10000; break;
      case "Apostilb (asb)": base = v * 0.31830988654751274; break;
      case "Footlambert (fL)": base = v * 3.42626; break;
      case "Lambert (L)": base = v * 3183.098861; break;
      case "Millilambert (mL)": base = v * 3.183098861; break;
      case "Candela/sq cm (cd/cm²)": base = v * 10000; break;
      case "Candela/sq foot (cd/ft²)": base = v * 10.7639; break;
      default: base = v;
    }
    let result = 0;
    switch(to) {
      case "Candela/sq meter (cd/m²)": result = base / 1; break;
      case "Nit (nt)": result = base / 1; break;
      case "Stilb (sb)": result = base / 10000; break;
      case "Apostilb (asb)": result = base / 0.31830988654751274; break;
      case "Footlambert (fL)": result = base / 3.42626; break;
      case "Lambert (L)": result = base / 3183.098861; break;
      case "Millilambert (mL)": result = base / 3.183098861; break;
      case "Candela/sq cm (cd/cm²)": result = base / 10000; break;
      case "Candela/sq foot (cd/ft²)": result = base / 10.7639; break;
      default: result = base;
    }
    return result.toPrecision(8);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Luminance Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24,fontSize:14}}>Convert between units of luminance (brightness of a surface).</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:12,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:8,marginBottom:12}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Candela/sq meter (cd/m²)">Candela/sq meter (cd/m²)</option>
          <option value="Nit (nt)">Nit (nt)</option>
          <option value="Stilb (sb)">Stilb (sb)</option>
          <option value="Apostilb (asb)">Apostilb (asb)</option>
          <option value="Footlambert (fL)">Footlambert (fL)</option>
          <option value="Lambert (L)">Lambert (L)</option>
          <option value="Millilambert (mL)">Millilambert (mL)</option>
          <option value="Candela/sq cm (cd/cm²)">Candela/sq cm (cd/cm²)</option>
          <option value="Candela/sq foot (cd/ft²)">Candela/sq foot (cd/ft²)</option>
          </select>
          <span style={{alignSelf:"center",color:"#94a3b8"}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Candela/sq meter (cd/m²)">Candela/sq meter (cd/m²)</option>
          <option value="Nit (nt)">Nit (nt)</option>
          <option value="Stilb (sb)">Stilb (sb)</option>
          <option value="Apostilb (asb)">Apostilb (asb)</option>
          <option value="Footlambert (fL)">Footlambert (fL)</option>
          <option value="Lambert (L)">Lambert (L)</option>
          <option value="Millilambert (mL)">Millilambert (mL)</option>
          <option value="Candela/sq cm (cd/cm²)">Candela/sq cm (cd/cm²)</option>
          <option value="Candela/sq foot (cd/ft²)">Candela/sq foot (cd/ft²)</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"14px 16px",fontSize:18,fontWeight:600,color:"#38bdf8",minHeight:50}}>
          {val ? convert() + " " + to : <span style={{color:"#475569"}}>Result appears here</span>}
        </div>
      </div>
    </main>
  );
}
