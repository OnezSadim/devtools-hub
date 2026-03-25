"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [results, setResults] = useState<{base:number,label:string,value:string}[]>([]);
  const convert = () => {
    try {
      const dec = parseInt(input, fromBase);
      if (isNaN(dec)) { setResults([]); return; }
      setResults([
        {base:2,label:"Binary",value:dec.toString(2)},
        {base:8,label:"Octal",value:dec.toString(8)},
        {base:10,label:"Decimal",value:dec.toString(10)},
        {base:16,label:"Hexadecimal",value:dec.toString(16).toUpperCase()},
      ]);
    } catch { setResults([]); }
  };
  return (<div style={{fontFamily:"monospace",maxWidth:480,margin:"40px auto",padding:20,background:"#18181b",color:"#f4f4f5",borderRadius:12}}><h1 style={{fontSize:22,marginBottom:16}}>Number Base Converter</h1><label>From Base: <select value={fromBase} onChange={e=>setFromBase(Number(e.target.value))} style={{background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,padding:"4px 8px",marginLeft:8}}><option value={2}>Binary (2)</option><option value={8}>Octal (8)</option><option value={10}>Decimal (10)</option><option value={16}>Hex (16)</option></select></label><br/><br/><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter number..." style={{width:"100%",padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:16,boxSizing:"border-box"}}/><br/><br/><button onClick={convert} style={{padding:"8px 20px",background:"#2563eb",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:15}}>Convert</button>{results.length>0&&<div style={{marginTop:16}}>{results.map(r=><div key={r.base} style={{padding:"10px 14px",background:"#27272a",borderRadius:8,marginBottom:8}}><span style={{color:"#a1a1aa",fontSize:13}}>{r.label} (base {r.base})</span><div style={{fontSize:18,fontWeight:700,marginTop:4}}>{r.value}</div></div>)}</div>}</div>);
}
