"use client";
import { useState } from "react";

const units = ["volt", "millivolt", "kilovolt", "megavolt", "microvolt"];
const toBase: Record<string, number> = {"volt": 1, "millivolt": 0.001, "kilovolt": 1000, "megavolt": 1000000, "microvolt": 1e-06};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const result = val && !isNaN(Number(val)) ? (Number(val) * toBase[from] / toBase[to]).toPrecision(6) : "";
  return (
    <main style={{maxWidth:480,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:8}}>Electric Potential Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value"
        style={{width:"100%",padding:8,marginBottom:8,background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:4}} />
      <div style={{display:"flex",gap:8,marginBottom:8}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:8,background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:4}}>
          {units.map((u: string)=>(<option key={u}>{u}</option>))}
        </select>
        <span style={{padding:"8px 4px"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:8,background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:4}}>
          {units.map((u: string)=>(<option key={u}>{u}</option>))}
        </select>
      </div>
      {result && <div style={{padding:12,background:"#0f172a",borderRadius:4,fontSize:"1.2rem"}}>{val} {from} = {result} {to}</div>}
    </main>
  );
}
