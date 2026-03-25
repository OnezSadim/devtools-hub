"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Henry (H)");
  const [to, setTo] = useState("Millihenry (mH)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "Henry (H)": toBase = v * 1.0; break;
      case "Millihenry (mH)": toBase = v * 0.001; break;
      case "Microhenry (μH)": toBase = v * 1e-06; break;
      case "Nanohenry (nH)": toBase = v * 1e-09; break;
      case "Kilohenry (kH)": toBase = v * 1000.0; break;
      case "Stathenry": toBase = v * 898755000000.0; break;
      case "Abhenry": toBase = v * 1e-09; break;
      default: toBase = v;
    }
    let result = 0;
    switch (to) {
      case "Henry (H)": result = base / 1.0; break;
      case "Millihenry (mH)": result = base / 0.001; break;
      case "Microhenry (μH)": result = base / 1e-06; break;
      case "Nanohenry (nH)": result = base / 1e-09; break;
      case "Kilohenry (kH)": result = base / 1000.0; break;
      case "Stathenry": result = base / 898755000000.0; break;
      case "Abhenry": result = base / 1e-09; break;
      default: result = toBase;
    }
    return result.toPrecision(6);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Electric Inductance Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24}}>Convert between henries, millihenries, microhenries, nanohenries and more.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:16,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:12,marginBottom:24}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:15}}>
          <option value="Henry (H)">Henry (H)</option>
          <option value="Millihenry (mH)">Millihenry (mH)</option>
          <option value="Microhenry (μH)">Microhenry (μH)</option>
          <option value="Nanohenry (nH)">Nanohenry (nH)</option>
          <option value="Kilohenry (kH)">Kilohenry (kH)</option>
          <option value="Stathenry">Stathenry</option>
          <option value="Abhenry">Abhenry</option>
          </select>
          <span style={{alignSelf:"center",color:"#64748b",fontSize:20}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:15}}>
          <option value="Henry (H)">Henry (H)</option>
          <option value="Millihenry (mH)">Millihenry (mH)</option>
          <option value="Microhenry (μH)">Microhenry (μH)</option>
          <option value="Nanohenry (nH)">Nanohenry (nH)</option>
          <option value="Kilohenry (kH)">Kilohenry (kH)</option>
          <option value="Stathenry">Stathenry</option>
          <option value="Abhenry">Abhenry</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"18px 20px",textAlign:"center",fontSize:22,fontWeight:700,color:"#38bdf8"}}>
          {val ? convert() : "—"}
        </div>
      </div>
    </main>
  );
}
