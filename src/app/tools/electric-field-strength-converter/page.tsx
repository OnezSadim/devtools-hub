"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Volt/meter (V/m)");
  const [to, setTo] = useState("Kilovolt/meter (kV/m)");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "Volt/meter (V/m)": toBase = v * 1.0; break;
      case "Kilovolt/meter (kV/m)": toBase = v * 1000.0; break;
      case "Millivolt/meter (mV/m)": toBase = v * 0.001; break;
      case "Microvolt/meter (μV/m)": toBase = v * 1e-06; break;
      case "Volt/centimeter (V/cm)": toBase = v * 100.0; break;
      case "Volt/inch (V/in)": toBase = v * 39.3701; break;
      case "Newton/coulomb (N/C)": toBase = v * 1.0; break;
      default: toBase = v;
    }
    let result = 0;
    switch (to) {
      case "Volt/meter (V/m)": result = base / 1.0; break;
      case "Kilovolt/meter (kV/m)": result = base / 1000.0; break;
      case "Millivolt/meter (mV/m)": result = base / 0.001; break;
      case "Microvolt/meter (μV/m)": result = base / 1e-06; break;
      case "Volt/centimeter (V/cm)": result = base / 100.0; break;
      case "Volt/inch (V/in)": result = base / 39.3701; break;
      case "Newton/coulomb (N/C)": result = base / 1.0; break;
      default: result = toBase;
    }
    return result.toPrecision(6);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <h1 style={{fontSize:24,fontWeight:700,marginBottom:8}}>Electric Field Strength Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:24}}>Convert between volts per meter, kilovolts per meter, millivolts per meter and more.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:16,marginBottom:16,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:12,marginBottom:24}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:15}}>
          <option value="Volt/meter (V/m)">Volt/meter (V/m)</option>
          <option value="Kilovolt/meter (kV/m)">Kilovolt/meter (kV/m)</option>
          <option value="Millivolt/meter (mV/m)">Millivolt/meter (mV/m)</option>
          <option value="Microvolt/meter (μV/m)">Microvolt/meter (μV/m)</option>
          <option value="Volt/centimeter (V/cm)">Volt/centimeter (V/cm)</option>
          <option value="Volt/inch (V/in)">Volt/inch (V/in)</option>
          <option value="Newton/coulomb (N/C)">Newton/coulomb (N/C)</option>
          </select>
          <span style={{alignSelf:"center",color:"#64748b",fontSize:20}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:15}}>
          <option value="Volt/meter (V/m)">Volt/meter (V/m)</option>
          <option value="Kilovolt/meter (kV/m)">Kilovolt/meter (kV/m)</option>
          <option value="Millivolt/meter (mV/m)">Millivolt/meter (mV/m)</option>
          <option value="Microvolt/meter (μV/m)">Microvolt/meter (μV/m)</option>
          <option value="Volt/centimeter (V/cm)">Volt/centimeter (V/cm)</option>
          <option value="Volt/inch (V/in)">Volt/inch (V/in)</option>
          <option value="Newton/coulomb (N/C)">Newton/coulomb (N/C)</option>
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:8,padding:"18px 20px",textAlign:"center",fontSize:22,fontWeight:700,color:"#38bdf8"}}>
          {val ? convert() : "—"}
        </div>
      </div>
    </main>
  );
}
