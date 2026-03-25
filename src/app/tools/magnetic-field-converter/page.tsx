"use client";
import { useState } from "react";
export default function MagneticFieldConverter() {
  const [val, setVal] = useState("");
  const n = parseFloat(val) || 0;
  return (
    <div style={{padding:"2rem",maxWidth:"600px",margin:"0 auto"}}>
      <h1>Magnetic Field Converter</h1>
      <p>Convert magnetic flux density units. Enter value in Tesla (T).</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter Tesla" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",fontSize:"1rem"}} />
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <tbody>
          {[["Tesla (T)",1],["Millitesla (mT)",1000],["Microtesla (μT)",1e6],["Nanotesla (nT)",1e9],["Gauss (G)",10000],["Milligauss (mG)",10000000]].map(([u,f])=>(
            <tr key={u as string}><td style={{padding:"0.5rem 0"}}>{u}</td><td style={{textAlign:"right"}}>{(n*(f as number)).toPrecision(6)}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
