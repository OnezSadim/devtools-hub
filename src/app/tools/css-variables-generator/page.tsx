"use client";
import { useState } from "react";
export default function CssVariablesGenerator() {
  const [vars, setVars] = useState([{name:"primary-color",value:"#3b82f6"},{name:"secondary-color",value:"#8b5cf6"},{name:"font-size-base",value:"16px"},{name:"spacing-unit",value:"8px"}]);
  const [newName, setNewName] = useState("");
  const [newVal, setNewVal] = useState("");
  const add = () => { if(newName && newVal) { setVars([...vars,{name:newName,value:newVal}]); setNewName(""); setNewVal(""); } };
  const remove = (i) => setVars(vars.filter((_,idx)=>idx!==i));
  const css = ":root {
" + vars.map(v=>"  --"+v.name+": "+v.value+";").join("
") + "
}";
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>CSS Variables Generator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Build and manage CSS custom properties</p>
      <div style={{marginBottom:"1.5rem"}}>
        {vars.map((v,i)=>(<div key={i} style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem",alignItems:"center"}}><span style={{color:"#a78bfa"}}>--</span><input value={v.name} onChange={e=>{const n=[...vars];n[i]={...n[i],name:e.target.value};setVars(n);}} style={{flex:1,padding:"0.4rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} /><span style={{color:"#64748b"}}>:</span><input value={v.value} onChange={e=>{const n=[...vars];n[i]={...n[i],value:e.target.value};setVars(n);}} style={{flex:1,padding:"0.4rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} /><button onClick={()=>remove(i)} style={{padding:"0.4rem 0.6rem",background:"#ef4444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}}>X</button></div>))}
        <div style={{display:"flex",gap:"0.5rem",marginTop:"1rem"}}><input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="variable-name" style={{flex:1,padding:"0.4rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} /><input value={newVal} onChange={e=>setNewVal(e.target.value)} placeholder="value" style={{flex:1,padding:"0.4rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} /><button onClick={add} style={{padding:"0.4rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}}>Add</button></div>
      </div>
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1rem"}}><div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>Generated CSS</div><pre style={{color:"#a78bfa",margin:0,whiteSpace:"pre-wrap"}}>{css}</pre><button onClick={()=>navigator.clipboard.writeText(css)} style={{marginTop:"1rem",padding:"0.5rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}}>Copy</button></div>
    </div>
  );
}