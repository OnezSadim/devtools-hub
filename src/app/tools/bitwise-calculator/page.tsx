"use client";
import { useState } from "react";
export default function BitwiseCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [results, setResults] = useState<{op:string,dec:number,bin:string,hex:string}[]>([]);
  const [error, setError] = useState("");
  const calc = () => {
    const na = parseInt(a), nb = parseInt(b);
    if (isNaN(na)||isNaN(nb)) { setError("Enter valid integers"); setResults([]); return; }
    setError("");
    const ops = [
      {op:"AND (&)",val:na&nb},{op:"OR (|)",val:na|nb},{op:"XOR (^)",val:na^nb},
      {op:"NOT A (~A)",val:~na},{op:"Left Shift (A << 1)",val:na<<1},{op:"Right Shift (A >> 1)",val:na>>1},
    ];
    setResults(ops.map(o=>({op:o.op,dec:o.val,bin:o.val>=0?o.val.toString(2):"~"+(-o.val-1).toString(2),hex:o.val>=0?o.val.toString(16).toUpperCase():o.val.toString(16)})));
  };
  return (<div style={{fontFamily:"monospace",maxWidth:520,margin:"40px auto",padding:20,background:"#18181b",color:"#f4f4f5",borderRadius:12}}><h1 style={{fontSize:22,marginBottom:16}}>Bitwise Calculator</h1><div style={{display:"flex",gap:8,marginBottom:8}}><input value={a} onChange={e=>setA(e.target.value)} placeholder="Integer A" style={{flex:1,padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:15}}/><input value={b} onChange={e=>setB(e.target.value)} placeholder="Integer B" style={{flex:1,padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:15}}/></div><button onClick={calc} style={{width:"100%",padding:"10px",background:"#2563eb",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:15,marginBottom:12}}>Calculate</button>{error&&<div style={{color:"#f87171",marginBottom:8}}>{error}</div>}{results.map(r=><div key={r.op} style={{padding:"10px 14px",background:"#27272a",borderRadius:8,marginBottom:6}}><div style={{color:"#a1a1aa",fontSize:12,marginBottom:4}}>{r.op}</div><div style={{display:"flex",gap:16,flexWrap:"wrap"}}><span><span style={{color:"#71717a",fontSize:11}}>DEC </span>{r.dec}</span><span><span style={{color:"#71717a",fontSize:11}}>BIN </span>{r.bin}</span><span><span style={{color:"#71717a",fontSize:11}}>HEX </span>0x{r.hex}</span></div></div>)}</div>);
}
