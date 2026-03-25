"use client";
import { useState } from "react";
export default function ElectricChargeConverter() {
  const [val, setVal] = useState("");
  const n = parseFloat(val) || 0;
  return (
    <div style={{padding:"2rem",maxWidth:"600px",margin:"0 auto"}}>
      <h1>Electric Charge Converter</h1>
      <p>Convert electric charge units. Enter value in Coulombs (C).</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter Coulombs" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",fontSize:"1rem"}} />
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <tbody>
          {[["Coulomb (C)",1],["Millicoulomb (mC)",1000],["Microcoulomb (μC)",1e6],["Nanocoulomb (nC)",1e9],["Ampere-hour (Ah)",1/3600],["Milliampere-hour (mAh)",1000/3600],["Faraday (F)",1/96485]].map(([u,f])=>(
            <tr key={u as string}><td style={{padding:"0.5rem 0"}}>{u}</td><td style={{textAlign:"right"}}>{(n*(f as number)).toPrecision(6)}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
