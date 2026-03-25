"use client";
import { useState } from "react";

const UNITS = ["Becquerel (Bq)", "Kilobecquerel (kBq)", "Megabecquerel (MBq)", "Gigabecquerel (GBq)", "Curie (Ci)", "Millicurie (mCi)", "Microcurie (uCi)", "Rutherford (Rd)"];
const TO_BASE: Record<string, number> = {"Becquerel (Bq)": 1, "Kilobecquerel (kBq)": 1000.0, "Megabecquerel (MBq)": 1000000.0, "Gigabecquerel (GBq)": 1000000000.0, "Curie (Ci)": 37000000000.0, "Millicurie (mCi)": 37000000.0, "Microcurie (uCi)": 37000.0, "Rutherford (Rd)": 1000000.0};

export default function RadioactivityConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const convert = (to: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Radioactivity Converter</h1>
      <p style={{color:"#888",marginBottom:"1.5rem"}}>Convert between radioactivity units instantly.</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,minWidth:"150px",padding:"0.75rem",borderRadius:"8px",border:"1px solid #333",background:"#1a1a1a",color:"#fff",fontSize:"1rem"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #333",background:"#1a1a1a",color:"#fff",fontSize:"1rem"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"grid",gap:"0.75rem"}}>
        {UNITS.map(u=>(
          <div key={u} style={{background:"#1a1a1a",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{color:"#aaa"}}>{u}</span>
            <span style={{color:"#fff",fontWeight:600,fontSize:"1.1rem"}}>{convert(u) || "—"}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
