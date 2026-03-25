"use client";
import{useState}from"react";
export default function DataStorageConverter(){
const units=["Bits","Bytes","KB","MB","GB","TB","PB"];
const toBits=[1,8,8192,8388608,8589934592,8796093022208,9007199254740992];
const[val,setVal]=useState("1");
const[from,setFrom]=useState("GB");
const fi=units.indexOf(from),inBits=(parseFloat(val)||0)*toBits[fi];
return(<div style={{padding:"2rem",background:"#0f172a",color:"#e2e8f0",minHeight:"100vh",fontFamily:"monospace"}}>
<h1>Data Storage Converter</h1>
<div style={{margin:"1rem 0"}}>
<input value={val} onChange={e=>setVal(e.target.value)} style={{padding:"8px",marginRight:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #475569",borderRadius:"4px",width:"150px"}}/>
<select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #475569",borderRadius:"4px"}}>
{units.map(u=><option key={u}>{u}</option>)}
</select>
</div>
<table style={{width:"100%",borderCollapse:"collapse"}}>
<tbody>{units.map((u,i)=><tr key={u}><td style={{padding:"8px",border:"1px solid #334155"}}>{u}</td><td style={{padding:"8px",border:"1px solid #334155"}}>{(inBits/toBits[i]).toPrecision(6)}</td></tr>)}</tbody>
</table>
</div>);
}
