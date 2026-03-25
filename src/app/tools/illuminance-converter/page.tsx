"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Lux (lx)");
  const [to, setTo] = useState("Footcandle (fc)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "Invalid input";
    let base = 0;
    switch(from) {
      case "Lux (lx)": base = v * 1; break;
      case "Footcandle (fc)": base = v * 10.7639; break;
      case "Phot (ph)": base = v * 10000; break;
      case "Millilux (mlx)": base = v * 0.001; break;
      case "Kilolux (klx)": base = v * 1000; break;
      case "Nox": base = v * 0.001; break;
      case "Lumen/sq meter": base = v * 1; break;
      case "Lumen/sq cm": base = v * 10000; break;
      case "Lumen/sq foot": base = v * 10.7639; break;
      default: base = v;
    }
    let result = 0;
    switch(to) {
      case "Lux (lx)": result = base / 1; break;
      case "Footcandle (fc)": result = base / 10.7639; break;
      case "Phot (ph)": result = base / 10000; break;
      case "Millilux (mlx)": result = base / 0.001; break;
      case "Kilolux (klx)": result = base / 1000; break;
      case "Nox": result = base / 0.001; break;
      case "Lumen/sq meter": result = base / 1; break;
      case "Lumen/sq cm": result = base / 10000; break;
      case "Lumen/sq foot": result = base / 10.7639; break;
      default: result = base;
    }
    return result.toPrecision(8);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Illuminance Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24,fontSize:14}}>Convert between units of illuminance.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:12,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:8,marginBottom:12}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Lux (lx)">Lux (lx)</option>
          <option value="Footcandle (fc)">Footcandle (fc)</option>
          <option value="Phot (ph)">Phot (ph)</option>
          <option value="Millilux (mlx)">Millilux (mlx)</option>
          <option value="Kilolux (klx)">Kilolux (klx)</option>
          <option value="Nox">Nox</option>
          <option value="Lumen/sq meter">Lumen/sq meter</option>
          <option value="Lumen/sq cm">Lumen/sq cm</option>
          <option value="Lumen/sq foot">Lumen/sq foot</option>
          </select>
          <span style={{alignSelf:"center",color:"#94a3b8"}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Lux (lx)">Lux (lx)</option>
          <option value="Footcandle (fc)">Footcandle (fc)</option>
          <option value="Phot (ph)">Phot (ph)</option>
          <option value="Millilux (mlx)">Millilux (mlx)</option>
          <option value="Kilolux (klx)">Kilolux (klx)</option>
          <option value="Nox">Nox</option>
          <option value="Lumen/sq meter">Lumen/sq meter</option>
          <option value="Lumen/sq cm">Lumen/sq cm</option>
          <option value="Lumen/sq foot">Lumen/sq foot</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"14px 16px",fontSize:18,fontWeight:600,color:"#38bdf8",minHeight:50}}>
          {val ? convert() + " " + to : <span style={{color:"#475569"}}>Result appears here</span>}
        </div>
      </div>
    </main>
  );
}
