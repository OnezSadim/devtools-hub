"use client";
import { useState } from "react";

function cidrInfo(cidr) {
  const [ip, prefix] = cidr.split('/');
  const p = parseInt(prefix);
  if (isNaN(p) || p < 0 || p > 32) throw new Error('Invalid prefix');
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some(x => isNaN(x) || x < 0 || x > 255)) throw new Error('Invalid IP');
  const ipNum = parts.reduce((acc, b) => (acc << 8) | b, 0) >>> 0;
  const mask = p === 0 ? 0 : (0xFFFFFFFF << (32 - p)) >>> 0;
  const network = (ipNum & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  const hosts = p >= 31 ? Math.pow(2, 32-p) : Math.pow(2, 32-p) - 2;
  const toIP = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
  return { network: toIP(network), broadcast: toIP(broadcast), mask: toIP(mask), first: p < 31 ? toIP(network+1) : toIP(network), last: p < 31 ? toIP(broadcast-1) : toIP(broadcast), hosts, prefix: p };
}

export default function CidrCalculator() {
  const [input, setInput] = useState('192.168.1.0/24');
  let info = null, err = null;
  try { info = cidrInfo(input.trim()); } catch(e) { err = e.message; }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CIDR Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate network address, broadcast, host range, and more from a CIDR block.</p>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. 192.168.1.0/24" className="w-full p-3 bg-gray-800 rounded font-mono text-lg mb-4" />
        {err && <p className="text-red-400 mb-4">{err}</p>}
        {info && (
          <div className="bg-gray-800 rounded overflow-hidden">
            {[['Network Address', info.network+'/'+info.prefix],['Subnet Mask', info.mask],['Broadcast Address', info.broadcast],['First Host', info.first],['Last Host', info.last],['Usable Hosts', info.hosts.toLocaleString()]].map(([k,v]) => (
              <div key={k} className="flex justify-between px-4 py-3 border-b border-gray-700 last:border-0">
                <span className="text-gray-400">{k}</span>
                <span className="font-mono text-green-400">{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
