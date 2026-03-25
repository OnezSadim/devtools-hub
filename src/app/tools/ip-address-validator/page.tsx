"use client";
import { useState } from "react";

export default function IpAddressValidator() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState<{valid:boolean,type:string,info:string}|null>(null);

  function validate() {
    const v4 = /^(\d{1,3}\.){3}\d{1,3}$/;
    const v6 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::1$|^::$/;
    if (v4.test(ip)) {
      const parts = ip.split(".").map(Number);
      if (parts.every(p => p <= 255)) {
        let info = "Public";
        if (parts[0]===10) info="Private (Class A)";
        else if (parts[0]===172 && parts[1]>=16 && parts[1]<=31) info="Private (Class B)";
        else if (parts[0]===192 && parts[1]===168) info="Private (Class C)";
        else if (parts[0]===127) info="Loopback";
        else if (parts[0]===0) info="This Network";
        setResult({valid:true,type:"IPv4",info});
      } else {
        setResult({valid:false,type:"IPv4",info:"Octets must be 0-255"});
      }
    } else if (v6.test(ip)) {
      setResult({valid:true,type:"IPv6",info:ip==="::1"?"Loopback":"Valid IPv6"});
    } else {
      setResult({valid:false,type:"Unknown",info:"Not a valid IP address"});
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">IP Address Validator</h1>
        <p className="text-gray-400 mb-6">Validate IPv4 and IPv6 addresses and check address type.</p>
        <input value={ip} onChange={e=>setIp(e.target.value)} placeholder="e.g. 192.168.1.1" className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-4 font-mono" />
        <button onClick={validate} className="w-full bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold mb-4">Validate</button>
        {result && (
          <div className={`rounded p-4 space-y-2 ${result.valid?"bg-green-900 border border-green-700":"bg-red-900 border border-red-700"}`}>
            <div className="font-bold text-lg">{result.valid?"Valid":"Invalid"} {result.type}</div>
            <div className="text-gray-300">{result.info}</div>
          </div>
        )}
      </div>
    </div>
  );
}
