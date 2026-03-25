"use client";
import { useState } from "react";
export default function Page() {
  const [v, setV] = useState("");
  const [f, setF] = useState("unit1");
  const [t, setT] = useState("unit2");
  const title = "Electric Conductance Converter";
  const desc = "Convert between siemens, millisiemens, microsiemens, nanosiemens, kilosiemens, megasiemens, statsiemens, and absiemens units.";
  return (<div style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif"}}><h1>{title}</h1><p>{desc}</p><input value={v} onChange={e=>setV(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",fontSize:"1rem"}}/><p style={{color:"#888"}}>Select units and enter a value to convert.</p></div>);
}
