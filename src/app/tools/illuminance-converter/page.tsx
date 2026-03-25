"use client";
import { useState } from "react";
export default function IlluminanceConverter() {
  const [val, setVal] = useState("");
  const n = parseFloat(val) || 0;
  return (
    <div style={{padding:"2rem",maxWidth:"600px",margin:"0 auto"}}>
      <h1>Illuminance Converter</h1>
      <p>Convert illuminance units. Enter value in lux (lx).</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter lux" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",fontSize:"1rem"}} />
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <tbody>
          {[["Lux (lx)",1],["Millilux (mlx)",1000],["Kilolux (klx)",0.001],["Foot-candle (fc)",0.092903],["Phot (ph)",0.0001],["Nox",1000]].map(([u,f])=>(
            <tr key={u as string}><td style={{padding:"0.5rem 0"}}>{u}</td><td style={{textAlign:"right"}}>{(n*(f as number)).toPrecision(6)}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
