"use client";
import { useState } from "react";
export default function ViscosityConverter() {
  const [val, setVal] = useState("");
  const n = parseFloat(val) || 0;
  return (
    <div style={{padding:"2rem",maxWidth:"600px",margin:"0 auto"}}>
      <h1>Viscosity Converter</h1>
      <p>Convert dynamic viscosity units. Enter value in Pascal-second (Pa·s).</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter Pa·s" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",fontSize:"1rem"}} />
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <tbody>
          {[["Pa·s",1],["mPa·s",1000],["cP (centipoise)",1000],["Poise (P)",10],["lbf·s/ft²",0.020885]].map(([u,f])=>(
            <tr key={u as string}><td style={{padding:"0.5rem 0"}}>{u}</td><td style={{textAlign:"right"}}>{(n*(f as number)).toPrecision(6)}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
