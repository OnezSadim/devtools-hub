"use client";
import{useState}from"react";
export default function AngleConverter(){
const units=["Degrees","Radians","Gradians","Arcminutes","Arcseconds","Turns"];
const toDeg=[1,180/Math.PI,0.9,1/60,1/3600,360];
const[val,setVal]=useState("90");
const[from,setFrom]=useState("Degrees");
const fi=units.indexOf(from),inDeg=(parseFloat(val)||0)*toDeg[fi];
return(<div style={{padding:"2rem",background:"#0f172a",color:"#e2e8f0",minHeight:"100vh",fontFamily:"monospace"}}>
<h1>Angle Converter</h1>
<div style={{margin:"1rem 0"}}>
<input value={val} onChange={e=>setVal(e.target.value)} style={{padding:"8px",marginRight:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #475569",borderRadius:"4px",width:"150px"}}/>
<select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #475569",borderRadius:"4px"}}>
{units.map(u=><option key={u}>{u}</option>)}
</select>
</div>
<table style={{width:"100%",borderCollapse:"collapse"}}>
<tbody>{units.map((u,i)=><tr key={u}><td style={{padding:"8px",border:"1px solid #334155"}}>{u}</td><td style={{padding:"8px",border:"1px solid #334155"}}>{(inDeg/toDeg[i]).toPrecision(6)}</td></tr>)}</tbody>
</table>
</div>);
}
