"use client";
import { useState } from "react";
export default function IpSubnetCalculator() {
  const [ip, setIp] = useState("192.168.1.0");
  const [cidr, setCidr] = useState(24);
  const calc = () => {
    const parts = ip.split(".").map(Number);
    if (parts.length !== 4 || parts.some(p=>isNaN(p)||p<0||p>255)) return null;
    const ipNum = parts.reduce((a,b)=>(a<<8)|b,0)>>>0;
    const mask = cidr===0?0:(0xffffffff<<(32-cidr))>>>0;
    const network = (ipNum & mask)>>>0;
    const broadcast = (network | (~mask>>>0))>>>0;
    const first = network+1, last = broadcast-1;
    const hosts = Math.max(0,broadcast-network-1);
    const toStr = (n: number) => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
    return { network:toStr(network), mask:toStr(mask), broadcast:toStr(broadcast), first:toStr(first), last:toStr(last), hosts };
  };
  const r = calc();
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>IP Subnet Calculator</h1>
    <div style={{display:"flex",gap:"0.5rem",marginBottom:"1rem",alignItems:"center"}}>
      <input value={ip} onChange={e=>setIp(e.target.value)} placeholder="IP address" style={{flex:1,padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} />
      <span>/</span>
      <input type="number" value={cidr} min={0} max={32} onChange={e=>setCidr(Number(e.target.value))} style={{width:"60px",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} />
    </div>
    {r && <div style={{display:"grid",gap:"0.5rem"}}>
      {[["Network",r.network],["Subnet Mask",r.mask],["Broadcast",r.broadcast],["First Host",r.first],["Last Host",r.last],["Usable Hosts",String(r.hosts)]].map(([l,v])=>(
        <div key={String(l)} style={{background:"#1e293b",padding:"0.75rem",borderRadius:"4px",display:"flex",justifyContent:"space-between"}}>
          <span style={{color:"#94a3b8"}}>{l}</span><span style={{color:"#a3e635"}}>{v}</span>
        </div>
      ))}
    </div>}
  </div>);
}