"use client";
import { useState } from "react";

const UNITS = ["Ohm", "Milliohm", "Kiloohm", "Megaohm", "Gigaohm"];
const FACTORS = [1, 0.001, 1000, 1000000, 1000000000];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const convert = (v: string, fi: number) => {
    const n = parseFloat(v);
    if (isNaN(n)) return "-";
    const base = n * FACTORS[fi];
    return UNITS.map((u, i) => ({ u, v: (base / FACTORS[i]).toPrecision(6) }));
  };
  const results = convert(val, from);
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Resistance Converter</h1>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value"
          style={{flex:1,padding:"0.5rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))}
          style={{padding:"0.5rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333",borderRadius:"4px"}}>
          {UNITS.map((u,i)=>(<option key={i} value={i}>{u}</option>))}
        </select>
      </div>
      {Array.isArray(results) && (
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <tbody>
            {results.map((r,i)=>(<tr key={i} style={{borderBottom:"1px solid #222"}}>
              <td style={{padding:"0.4rem",color:"#aaa"}}>{r.u}</td>
              <td style={{padding:"0.4rem",textAlign:"right"}}>{r.v}</td>
            </tr>))}
          </tbody>
        </table>
      )}
    </main>
  );
}
