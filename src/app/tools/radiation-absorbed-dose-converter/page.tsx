"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Gray (Gy)");
  const [to, setTo] = useState("Milligray (mGy)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "Invalid input";
    let base = 0;
    switch(from) {
      case "Gray (Gy)": base = v * 1; break;
      case "Milligray (mGy)": base = v * 0.001; break;
      case "Microgray (µGy)": base = v * 1e-06; break;
      case "Rad (rad)": base = v * 0.01; break;
      case "Millirad (mrad)": base = v * 1e-05; break;
      case "Joule/kilogram (J/kg)": base = v * 1; break;
      case "Millijoule/kilogram (mJ/kg)": base = v * 0.001; break;
      case "Centigray (cGy)": base = v * 0.01; break;
      case "Kilogray (kGy)": base = v * 1000; break;
      default: base = v;
    }
    let result = 0;
    switch(to) {
      case "Gray (Gy)": result = base / 1; break;
      case "Milligray (mGy)": result = base / 0.001; break;
      case "Microgray (µGy)": result = base / 1e-06; break;
      case "Rad (rad)": result = base / 0.01; break;
      case "Millirad (mrad)": result = base / 1e-05; break;
      case "Joule/kilogram (J/kg)": result = base / 1; break;
      case "Millijoule/kilogram (mJ/kg)": result = base / 0.001; break;
      case "Centigray (cGy)": result = base / 0.01; break;
      case "Kilogray (kGy)": result = base / 1000; break;
      default: result = base;
    }
    return result.toPrecision(8);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Radiation Absorbed Dose Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24,fontSize:14}}>Convert between units of radiation absorbed dose.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:12,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:8,marginBottom:12}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Gray (Gy)">Gray (Gy)</option>
          <option value="Milligray (mGy)">Milligray (mGy)</option>
          <option value="Microgray (µGy)">Microgray (µGy)</option>
          <option value="Rad (rad)">Rad (rad)</option>
          <option value="Millirad (mrad)">Millirad (mrad)</option>
          <option value="Joule/kilogram (J/kg)">Joule/kilogram (J/kg)</option>
          <option value="Millijoule/kilogram (mJ/kg)">Millijoule/kilogram (mJ/kg)</option>
          <option value="Centigray (cGy)">Centigray (cGy)</option>
          <option value="Kilogray (kGy)">Kilogray (kGy)</option>
          </select>
          <span style={{alignSelf:"center",color:"#94a3b8"}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:14}}>
          <option value="Gray (Gy)">Gray (Gy)</option>
          <option value="Milligray (mGy)">Milligray (mGy)</option>
          <option value="Microgray (µGy)">Microgray (µGy)</option>
          <option value="Rad (rad)">Rad (rad)</option>
          <option value="Millirad (mrad)">Millirad (mrad)</option>
          <option value="Joule/kilogram (J/kg)">Joule/kilogram (J/kg)</option>
          <option value="Millijoule/kilogram (mJ/kg)">Millijoule/kilogram (mJ/kg)</option>
          <option value="Centigray (cGy)">Centigray (cGy)</option>
          <option value="Kilogray (kGy)">Kilogray (kGy)</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"14px 16px",fontSize:18,fontWeight:600,color:"#38bdf8",minHeight:50}}>
          {val ? convert() + " " + to : <span style={{color:"#475569"}}>Result appears here</span>}
        </div>
      </div>
    </main>
  );
}
