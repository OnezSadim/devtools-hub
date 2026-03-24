"use client";
import { useState } from "react";
export default function IpCidrCalculator() {
  const [cidr, setCidr] = useState("192.168.1.0/24");
  const [result, setResult] = useState<Record<string,string>|null>(null);
  const [error, setError] = useState("");
  const calculate = () => {
    try {
      const [ip, prefix] = cidr.split("/");
      const bits = parseInt(prefix);
      if (isNaN(bits) || bits < 0 || bits > 32) throw new Error("Invalid prefix");
      const parts = ip.split(".").map(Number);
      if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) throw new Error("Invalid IP");
      const ipNum = parts.reduce((acc,p) => (acc<<8)+p, 0) >>> 0;
      const mask = bits === 0 ? 0 : (0xFFFFFFFF << (32-bits)) >>> 0;
      const network = (ipNum & mask) >>> 0;
      const broadcast = (network | ~mask) >>> 0;
      const toIp = (n: number) => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join(".");
      const hosts = bits >= 31 ? Math.pow(2,32-bits) : Math.pow(2,32-bits)-2;
      setResult({
        "Network": toIp(network),
        "Broadcast": toIp(broadcast),
        "Subnet Mask": toIp(mask),
        "First Host": bits >= 31 ? toIp(network) : toIp(network+1),
        "Last Host": bits >= 31 ? toIp(broadcast) : toIp(broadcast-1),
        "Total Hosts": String(Math.pow(2,32-bits)),
        "Usable Hosts": String(hosts),
        "CIDR": cidr,
      });
      setError("");
    } catch(e) { setError(String(e)); setResult(null); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">IP / CIDR Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate subnet information from CIDR notation</p>
        <div className="flex gap-3 mb-6">
          <input value={cidr} onChange={e=>setCidr(e.target.value)} placeholder="192.168.1.0/24" className="flex-1 bg-gray-800 border border-gray-700 rounded p-3 font-mono"/>
          <button onClick={calculate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Calculate</button>
        </div>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {result && <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
          {Object.entries(result).map(([k,v]) => (
            <div key={k} className="flex justify-between px-4 py-3 border-b border-gray-800 last:border-0">
              <span className="text-gray-400">{k}</span>
              <span className="font-mono">{v}</span>
            </div>
          ))}
        </div>}
      </div>
    </main>
  );
}