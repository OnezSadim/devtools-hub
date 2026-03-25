"use client";
import { useState } from "react";
export default function CidrRangeCalculator() {
  const [cidr, setCidr] = useState("192.168.1.0/24");
  const parse = () => {
    const m = cidr.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)\/(\d+)$/);
    if(!m) return null;
    const [,a,b,c,d,p] = m.map(Number);
    if(a>255||b>255||c>255||d>255||p>32) return null;
    const ip = (a<<24)|(b<<16)|(c<<8)|d;
    const mask = p===0 ? 0 : (~0 << (32-p)) >>> 0;
    const net = (ip & mask) >>> 0;
    const broad = (net | (~mask >>> 0)) >>> 0;
    const toIP = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
    const hosts = p>=31 ? Math.pow(2,32-p) : Math.pow(2,32-p)-2;
    return { network:toIP(net), broadcast:toIP(broad), mask:toIP(mask), first:toIP(p>=31?net:net+1), last:toIP(p>=31?broad:broad-1), hosts, prefix:p };
  };
  const r = parse();
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2 text-blue-400">CIDR Range Calculator</h1><p className="text-gray-400 mb-6">Calculate network range, broadcast address, subnet mask, and usable hosts from a CIDR notation.</p>
    <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">CIDR Notation</label><input type="text" value={cidr} onChange={e=>setCidr(e.target.value)} placeholder="192.168.1.0/24" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono"/></div>
    {!r && cidr && <p className="text-red-400 mb-4">Invalid CIDR notation</p>}
    {r && <div className="bg-gray-800 rounded-lg p-4 space-y-3">
      <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
        <span className="text-gray-400">Network address:</span><span className="font-mono text-green-400">{r.network}/{r.prefix}</span>
        <span className="text-gray-400">Subnet mask:</span><span className="font-mono">{r.mask}</span>
        <span className="text-gray-400">First usable host:</span><span className="font-mono">{r.first}</span>
        <span className="text-gray-400">Last usable host:</span><span className="font-mono">{r.last}</span>
        <span className="text-gray-400">Broadcast address:</span><span className="font-mono text-orange-400">{r.broadcast}</span>
        <span className="text-gray-400">Usable hosts:</span><span className="font-mono text-blue-400">{r.hosts.toLocaleString()}</span>
        <span className="text-gray-400">Total addresses:</span><span className="font-mono">{Math.pow(2,32-r.prefix).toLocaleString()}</span>
      </div>
    </div>}
    <div className="mt-6"><p className="text-sm text-gray-500 mb-2">Common examples:</p><div className="flex flex-wrap gap-2">
      {["10.0.0.0/8","172.16.0.0/12","192.168.0.0/16","192.168.1.0/24","10.0.0.0/30"].map(e=>(
        <button key={e} onClick={()=>setCidr(e)} className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs font-mono">{e}</button>))}</div></div>
  </div></div>);
}