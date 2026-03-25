"use client";
import { useState } from "react";
export default function CIDRCalc() {
  const [cidr, setCidr] = useState("192.168.1.0/24");
  const calc = () => {
    try {
      const [ip, bits] = cidr.split("/"); const n = parseInt(bits);
      const parts = ip.split(".").map(Number);
      const ipInt = parts.reduce((a,b)=>(a<<8)|b,0)>>>0;
      const mask = n===0?0:(0xFFFFFFFF<<(32-n))>>>0;
      const network = (ipInt&mask)>>>0;
      const broadcast = (network|(~mask>>>0))>>>0;
      const hosts = n>=31?Math.pow(2,32-n):Math.pow(2,32-n)-2;
      const toIP=(i: number)=>[(i>>>24)&255,(i>>>16)&255,(i>>>8)&255,i&255].join(".");
      return {network:toIP(network),broadcast:toIP(broadcast),mask:toIP(mask),first:toIP(network+1),last:toIP(broadcast-1),hosts};
    } catch { return null; }
  };
  const r = calc();
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2">IP/CIDR Calculator</h1><p className="text-gray-400 mb-6">Calculate network ranges from CIDR notation</p><input value={cidr} onChange={e=>setCidr(e.target.value)} placeholder="192.168.1.0/24" className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" />{r&&<div className="bg-gray-900 border border-gray-700 rounded p-4 space-y-2">{[["Network",r.network],["Broadcast",r.broadcast],["Subnet Mask",r.mask],["First Host",r.first],["Last Host",r.last],["Usable Hosts",r.hosts.toLocaleString()]].map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-gray-400">{k}</span><span className="font-mono text-cyan-300">{v}</span></div>))}</div>}</div></div>);
}