"use client";
import { useState } from "react";
export default function IpSubnetCalculator() {
  const [ip, setIp] = useState("192.168.1.0");
  const [cidr, setCidr] = useState("24");
  const [result, setResult] = useState<any>(null);
  const calculate = () => {
    const prefix = parseInt(cidr);
    if (prefix < 0 || prefix > 32) return;
    const parts = ip.split(".").map(Number);
    if (parts.length !== 4) return;
    const ipInt = (parts[0]<<24)|(parts[1]<<16)|(parts[2]<<8)|parts[3];
    const mask = prefix===0?0:(0xFFFFFFFF<<(32-prefix))>>>0;
    const network = (ipInt & mask)>>>0;
    const broadcast = (network | (~mask>>>0))>>>0;
    const toIp = (n: number) => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
    setResult({
      network: toIp(network)+"/"+prefix,
      mask: toIp(mask),
      broadcast: toIp(broadcast),
      first: toIp(network+1),
      last: toIp(broadcast-1),
      hosts: Math.max(0, broadcast-network-1)
    });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">IP Subnet Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate subnet details from CIDR notation</p>
      <div className="flex gap-4 mb-4">
        <input value={ip} onChange={e=>setIp(e.target.value)} placeholder="IP Address" className="flex-1 bg-gray-900 border border-gray-700 rounded p-3" />
        <span className="self-center text-gray-400">/</span>
        <input value={cidr} onChange={e=>setCidr(e.target.value)} placeholder="CIDR" className="w-20 bg-gray-900 border border-gray-700 rounded p-3" />
        <button onClick={calculate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Calculate</button>
      </div>
      {result && <div className="bg-gray-900 border border-gray-700 rounded p-4 space-y-2">
        {Object.entries(result).map(([k,v])=>(<div key={k} className="flex justify-between"><span className="text-gray-400 capitalize">{k.replace(/([A-Z])/g," $1")}:</span><span className="font-mono">{String(v)}</span></div>))}
      </div>}
    </div>
  );
}