"use client";
import { useState } from "react";
export default function IPLookup() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const lookup = async () => {
    setLoading(true); setError(""); setResult(null);
    try {
      const target = ip.trim() || "";
      const url = target ? `https://ipapi.co/${target}/json/` : "https://ipapi.co/json/";
      const res = await fetch(url);
      const data = await res.json();
      if (data.error) throw new Error(data.reason || "Lookup failed");
      setResult(data);
    } catch (e: any) { setError(e.message); }
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">IP Address Lookup</h1>
        <p className="text-gray-400 mb-6">Look up geolocation and info for any IP address. Leave blank to check your own IP.</p>
        <div className="flex gap-3 mb-6">
          <input value={ip} onChange={e=>setIp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&lookup()} placeholder="8.8.8.8 (blank = your IP)" className="flex-1 bg-gray-800 border border-gray-700 rounded px-4 py-2 font-mono text-sm" />
          <button onClick={lookup} disabled={loading} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-5 py-2 rounded font-semibold">{loading?"Looking up...":"Lookup"}</button>
        </div>
        {error && <div className="bg-red-900/40 border border-red-700 rounded p-3 text-red-300 mb-4">{error}</div>}
        {result && (
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-3">
            {["ip","city","region","country_name","postal","latitude","longitude","timezone","org","asn"].map(k => result[k] !== undefined && (
              <div key={k} className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400 capitalize">{k.replace(/_/g," ")}</span>
                <span className="text-green-400 font-mono">{String(result[k])}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}