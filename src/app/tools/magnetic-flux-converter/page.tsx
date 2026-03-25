"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Weber (Wb)");
  const [to, setTo] = useState("Milliweber (mWb)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "Weber (Wb)": toBase = v * 1.0; break;
      case "Milliweber (mWb)": toBase = v * 0.001; break;
      case "Microweber (μWb)": toBase = v * 1e-06; break;
      case "Kiloweber (kWb)": toBase = v * 1000.0; break;
      case "Maxwell (Mx)": toBase = v * 1e-08; break;
      case "Tesla square meter (T·m²)": toBase = v * 1.0; break;
      case "Volt second (V·s)": toBase = v * 1.0; break;
      default: toBase = v;
    }
    let result = 0;
    switch (to) {
      case "Weber (Wb)": result = base / 1.0; break;
      case "Milliweber (mWb)": result = base / 0.001; break;
      case "Microweber (μWb)": result = base / 1e-06; break;
      case "Kiloweber (kWb)": result = base / 1000.0; break;
      case "Maxwell (Mx)": result = base / 1e-08; break;
      case "Tesla square meter (T·m²)": result = base / 1.0; break;
      case "Volt second (V·s)": result = base / 1.0; break;
      default: result = toBase;
    }
    return result.toPrecision(6);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Magnetic Flux Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24}}>Convert between webers, milliwebers, microwebers, maxwells and more.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:16,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:12,marginBottom:24}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:15}}>
          <option value="Weber (Wb)">Weber (Wb)</option>
          <option value="Milliweber (mWb)">Milliweber (mWb)</option>
          <option value="Microweber (μWb)">Microweber (μWb)</option>
          <option value="Kiloweber (kWb)">Kiloweber (kWb)</option>
          <option value="Maxwell (Mx)">Maxwell (Mx)</option>
          <option value="Tesla square meter (T·m²)">Tesla square meter (T·m²)</option>
          <option value="Volt second (V·s)">Volt second (V·s)</option>
          </select>
          <span style={{alignSelf:"center",color:"#64748b",fontSize:20}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:15}}>
          <option value="Weber (Wb)">Weber (Wb)</option>
          <option value="Milliweber (mWb)">Milliweber (mWb)</option>
          <option value="Microweber (μWb)">Microweber (μWb)</option>
          <option value="Kiloweber (kWb)">Kiloweber (kWb)</option>
          <option value="Maxwell (Mx)">Maxwell (Mx)</option>
          <option value="Tesla square meter (T·m²)">Tesla square meter (T·m²)</option>
          <option value="Volt second (V·s)">Volt second (V·s)</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"18px 20px",textAlign:"center",fontSize:22,fontWeight:700,color:"#38bdf8"}}>
          {val ? convert() : "—"}
        </div>
      </div>
    </main>
  );
}
