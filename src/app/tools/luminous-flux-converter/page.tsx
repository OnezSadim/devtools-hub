"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Lumen (lm)");
  const [to, setTo] = useState("Kilolumen (klm)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "Invalid input";
    let base = 0;
    switch(from) {
      case "Lumen (lm)": base = v * 1; break;
      case "Kilolumen (klm)": base = v * 1000; break;
      case "Milliwatt (at 555nm)": base = v * 0.0014641288433382138; break;
      case "Candela-steradian (cd·sr)": base = v * 1; break;
      case "Watt (at 555nm)": base = v * 683.000000157773; break;
      default: base = v;
    }
    let result = 0;
    switch(to) {
      case "Lumen (lm)": result = base / 1; break;
      case "Kilolumen (klm)": result = base / 1000; break;
      case "Milliwatt (at 555nm)": result = base / 0.0014641288433382138; break;
      case "Candela-steradian (cd·sr)": result = base / 1; break;
      case "Watt (at 555nm)": result = base / 683.000000157773; break;
      default: result = base;
    }
    return result.toPrecision(8);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Luminous Flux Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24,fontSize:14}}>Convert between units of luminous flux.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:12,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:8,marginBottom:12}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Lumen (lm)">Lumen (lm)</option>
          <option value="Kilolumen (klm)">Kilolumen (klm)</option>
          <option value="Milliwatt (at 555nm)">Milliwatt (at 555nm)</option>
          <option value="Candela-steradian (cd·sr)">Candela-steradian (cd·sr)</option>
          <option value="Watt (at 555nm)">Watt (at 555nm)</option>
          </select>
          <span style={{alignSelf:"center",color:"#94a3b8"}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Lumen (lm)">Lumen (lm)</option>
          <option value="Kilolumen (klm)">Kilolumen (klm)</option>
          <option value="Milliwatt (at 555nm)">Milliwatt (at 555nm)</option>
          <option value="Candela-steradian (cd·sr)">Candela-steradian (cd·sr)</option>
          <option value="Watt (at 555nm)">Watt (at 555nm)</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"14px 16px",fontSize:18,fontWeight:600,color:"#38bdf8",minHeight:50}}>
          {val ? convert() + " " + to : <span style={{color:"#475569"}}>Result appears here</span>}
        </div>
      </div>
    </main>
  );
}
