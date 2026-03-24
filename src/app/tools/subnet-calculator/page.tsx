"use client";
import { useState } from "react";
export default function SubnetCalculator() {
  const [ip, setIp] = useState("192.168.1.0");
  const [cidr, setCidr] = useState("24");
  const [result, setResult] = useState<any>(null);
  const calculate = () => {
    const prefix = parseInt(cidr);
    if (prefix < 0 || prefix > 32) return;
    const mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
    const ipParts = ip.split(".").map(Number);
    if (ipParts.length !== 4 || ipParts.some(p => isNaN(p) || p < 0 || p > 255)) return;
    const ipInt = (ipParts[0]<<24)|(ipParts[1]<<16)|(ipParts[2]<<8)|ipParts[3];
    const network = (ipInt & mask) >>> 0;
    const broadcast = (network | ~mask) >>> 0;
    const toIP = (n: number) => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
    const hosts = prefix >= 31 ? Math.pow(2,32-prefix) : Math.pow(2,32-prefix)-2;
    setResult({ network: toIP(network), broadcast: toIP(broadcast), mask: toIP(mask), first: toIP(network+1), last: toIP(broadcast-1), hosts });
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Subnet Calculator</h1>
      <p className="text-gray-400 mb-6">IP/CIDR subnet calculator</p>
      <div className="max-w-lg">
        <div className="flex gap-2 mb-4">
          <input value={ip} onChange={e=>setIp(e.target.value)} placeholder="IP Address" className="flex-1 bg-gray-900 border border-gray-700 rounded p-3 font-mono"/>
          <span className="flex items-center text-gray-400">/</span>
          <input value={cidr} onChange={e=>setCidr(e.target.value)} placeholder="24" className="w-20 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-center"/>
          <button onClick={calculate} className="bg-blue-600 hover:bg-blue-700 px-4 rounded">Calc</button>
        </div>
        {result && <div className="bg-gray-900 rounded p-4 space-y-2 font-mono text-sm">
          <div className="flex justify-between"><span className="text-gray-400">Network:</span><span>{result.network}/{cidr}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Broadcast:</span><span>{result.broadcast}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Subnet mask:</span><span>{result.mask}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">First host:</span><span>{result.first}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Last host:</span><span>{result.last}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Usable hosts:</span><span className="text-green-400">{result.hosts.toLocaleString()}</span></div>
        </div>}
      </div>
    </main>
  );
}