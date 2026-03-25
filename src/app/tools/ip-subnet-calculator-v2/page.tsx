"use client";
import { useState } from "react";
export default function SubnetV2() {
  const [ip,setIp]=useState("192.168.1.0"),[prefix,setPrefix]=useState("24"),[res,setRes]=useState<any>(null);
  const calc=()=>{
    const p=parseInt(prefix);
    if(p<0||p>32){setRes({err:"Prefix must be 0-32"});return;}
    const parts=ip.split(".").map(Number);
    if(parts.length!==4||parts.some(x=>isNaN(x)||x<0||x>255)){setRes({err:"Invalid IP"});return;}
    const ipInt=parts.reduce((a,b)=>(a<<8)|b,0)>>>0;
    const mask=p===0?0:(0xFFFFFFFF<<(32-p))>>>0;
    const net=ipInt&mask;
    const bc=net|(~mask>>>0);
    const hosts=Math.max(0,bc-net-1);
    const toIp=(n:number)=>[(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
    const subnetMask=toIp(mask);
    const wildcard=toIp(~mask>>>0);
    const cls=parts[0]<128?"A":parts[0]<192?"B":parts[0]<224?"C":"D/E";
    setRes({network:toIp(net)+"/"+p,mask:subnetMask,wildcard,broadcast:toIp(bc),first:p<31?toIp(net+1):"N/A",last:p<31?toIp(bc-1):"N/A",hosts:hosts.toLocaleString(),cls});
  };
  const row=(l:string,v:string)=><div className="flex justify-between py-1 border-b border-gray-700"><span className="text-gray-400 text-sm">{l}</span><span className="font-mono text-sm">{v}</span></div>;
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-lg mx-auto"><h1 className="text-3xl font-bold mb-2">IP Subnet Calculator</h1><p className="text-gray-400 mb-6">Network, broadcast, host range, and more.</p><div className="flex gap-2 mb-4"><input className="flex-1 bg-gray-800 rounded px-3 py-2 font-mono" value={ip} onChange={e=>setIp(e.target.value)} placeholder="IP Address" /><span className="flex items-center text-gray-400">/</span><input className="w-16 bg-gray-800 rounded px-3 py-2 font-mono text-center" value={prefix} onChange={e=>setPrefix(e.target.value)} placeholder="24" /></div><button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2 mb-4">Calculate</button>{res&&<div className="bg-gray-800 rounded p-4">{res.err?<p className="text-red-400">{res.err}</p>:<>{row("Network",res.network)}{row("Subnet Mask",res.mask)}{row("Wildcard",res.wildcard)}{row("Broadcast",res.broadcast)}{row("First Host",res.first)}{row("Last Host",res.last)}{row("Usable Hosts",res.hosts)}{row("Class",res.cls)}</>}</div>}</div></div>);
}