"use client";
import { useState } from "react";
export default function IpSubnetCalculator() {
  const [ip, setIp] = useState("192.168.1.0");
  const [cidr, setCidr] = useState(24);
  const ipToNum = (s: string) => s.split(".").reduce((acc, o) => (acc << 8) + parseInt(o), 0) >>> 0;
  const numToIp = (n: number) => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
  const mask = cidr === 0 ? 0 : (0xFFFFFFFF << (32 - cidr)) >>> 0;
  const network = (ipToNum(ip.trim()) & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  const hosts = cidr >= 31 ? Math.pow(2, 32 - cidr) : Math.max(0, Math.pow(2, 32 - cidr) - 2);
  const first = cidr >= 31 ? network : network + 1;
  const last = cidr >= 31 ? broadcast : broadcast - 1;
  const rows = [
    ["Network", numToIp(network)],
    ["Netmask", numToIp(mask)],
    ["Broadcast", numToIp(broadcast)],
    ["First Host", numToIp(first)],
    ["Last Host", numToIp(last)],
    ["Usable Hosts", hosts.toLocaleString()],
    ["CIDR", `/${cidr}`],
  ];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">IP Subnet Calculator</h1>
      <div className="flex gap-3 mb-6">
        <input value={ip} onChange={e => setIp(e.target.value)} placeholder="192.168.1.0" className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded font-mono" />
        <div className="flex items-center gap-2">
          <span className="text-gray-400">/</span>
          <input type="number" min={0} max={32} value={cidr} onChange={e => setCidr(Number(e.target.value))} className="w-16 p-2 bg-gray-800 border border-gray-700 rounded font-mono" />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-700">
        {rows.map(([label, value]) => (
          <div key={label} className="flex border-b border-gray-700 last:border-0">
            <div className="w-36 px-4 py-3 bg-gray-800 text-sm text-gray-400 font-medium">{label}</div>
            <div className="flex-1 px-4 py-3 font-mono">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}