"use client";
import { useState } from "react";
export default function IpSubnetCalculator() {
  const [ip, setIp] = useState("192.168.1.0");
  const [prefix, setPrefix] = useState("24");
  const calc = () => {
    const parts = ip.split(".").map(Number);
    if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) return null;
    const p = parseInt(prefix);
    if (isNaN(p) || p < 0 || p > 32) return null;
    const ipInt = parts.reduce((acc, o) => (acc << 8) | o, 0) >>> 0;
    const mask = p === 0 ? 0 : (~0 << (32 - p)) >>> 0;
    const net = (ipInt & mask) >>> 0;
    const bcast = (net | (~mask >>> 0)) >>> 0;
    const toIp = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
    const hosts = Math.max(0, bcast - net - 1);
    return { network: toIp(net), broadcast: toIp(bcast), first: toIp(net+1), last: toIp(bcast-1), mask: toIp(mask), hosts };
  };
  const r = calc();
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">IP Subnet Calculator</h1><p className="text-gray-400 mb-6">Calculate subnet information from an IP address and prefix.</p><div className="flex gap-3 mb-6"><input className="flex-1 bg-gray-900 border border-gray-700 rounded p-3 font-mono" placeholder="IP Address" value={ip} onChange={e=>setIp(e.target.value)} /><span className="flex items-center text-gray-400">/</span><input className="w-20 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-center" placeholder="24" value={prefix} onChange={e=>setPrefix(e.target.value)} /></div>{r ? (<div className="grid gap-3">{[["Network",r.network],["Broadcast",r.broadcast],["Subnet Mask",r.mask],["First Host",r.first],["Last Host",r.last],["Usable Hosts",r.hosts.toLocaleString()]].map(([l,v])=>(<div key={l} className="bg-gray-900 border border-gray-700 rounded p-4 flex justify-between"><span className="text-gray-400">{l}</span><span className="font-mono">{v}</span></div>))}</div>) : <div className="text-red-400">Invalid IP or prefix</div>}</div>);
}