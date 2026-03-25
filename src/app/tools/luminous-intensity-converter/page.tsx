"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Candela (cd)");
  const [to, setTo] = useState("Millicandela (mcd)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "Invalid input";
    let base = 0;
    switch(from) {
      case "Candela (cd)": base = v * 1; break;
      case "Millicandela (mcd)": base = v * 0.001; break;
      case "Kilocandela (kcd)": base = v * 1000; break;
      case "Hefnerkerze (HK)": base = v * 0.9025; break;
      case "International candle": base = v * 1.01937; break;
      case "Decimal candle": base = v * 1; break;
      case "Carcel": base = v * 9.74; break;
      default: base = v;
    }
    let result = 0;
    switch(to) {
      case "Candela (cd)": result = base / 1; break;
      case "Millicandela (mcd)": result = base / 0.001; break;
      case "Kilocandela (kcd)": result = base / 1000; break;
      case "Hefnerkerze (HK)": result = base / 0.9025; break;
      case "International candle": result = base / 1.01937; break;
      case "Decimal candle": result = base / 1; break;
      case "Carcel": result = base / 9.74; break;
      default: result = base;
    }
    return result.toPrecision(8);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Luminous Intensity Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24,fontSize:14}}>Convert between units of luminous intensity.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:12,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:8,marginBottom:12}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Candela (cd)">Candela (cd)</option>
          <option value="Millicandela (mcd)">Millicandela (mcd)</option>
          <option value="Kilocandela (kcd)">Kilocandela (kcd)</option>
          <option value="Hefnerkerze (HK)">Hefnerkerze (HK)</option>
          <option value="International candle">International candle</option>
          <option value="Decimal candle">Decimal candle</option>
          <option value="Carcel">Carcel</option>
          </select>
          <span style={{alignSelf:"center",color:"#94a3b8"}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Candela (cd)">Candela (cd)</option>
          <option value="Millicandela (mcd)">Millicandela (mcd)</option>
          <option value="Kilocandela (kcd)">Kilocandela (kcd)</option>
          <option value="Hefnerkerze (HK)">Hefnerkerze (HK)</option>
          <option value="International candle">International candle</option>
          <option value="Decimal candle">Decimal candle</option>
          <option value="Carcel">Carcel</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"14px 16px",fontSize:18,fontWeight:600,color:"#38bdf8",minHeight:50}}>
          {val ? convert() + " " + to : <span style={{color:"#475569"}}>Result appears here</span>}
        </div>
      </div>
    </main>
  );
}
