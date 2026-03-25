"use client";
import { useState } from "react";
export default function LuminanceConverter() {
  const [val, setVal] = useState("");
  const n = parseFloat(val) || 0;
  return (
    <div style={{padding:"2rem",maxWidth:"600px",margin:"0 auto"}}>
      <h1>Luminance Converter</h1>
      <p>Convert luminance units. Enter value in candela per square meter (cd/m²).</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter cd/m²" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",fontSize:"1rem"}} />
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <tbody>
          {[["cd/m² (nit)",1],["cd/cm² (stilb)",0.0001],["cd/ft²",0.092903],["foot-lambert",0.2919],["lambert",0.00031831],["apostilb",3.14159]].map(([u,f])=>(
            <tr key={u as string}><td style={{padding:"0.5rem 0"}}>{u}</td><td style={{textAlign:"right"}}>{(n*(f as number)).toPrecision(6)}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
