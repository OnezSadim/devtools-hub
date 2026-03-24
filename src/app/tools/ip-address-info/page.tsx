"use client";
import { useState } from "react";
export default function IpAddressInfo() {
  const [ip, setIp] = useState("");
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const lookup = async () => {
    if (!ip.trim()) return;
    setLoading(true); setError(""); setInfo(null);
    try {
      const res = await fetch(`https://ipapi.co/${ip.trim()}/json/`);
      const data = await res.json();
      if (data.error) throw new Error(data.reason||"Not found");
      setInfo(data);
    } catch(e) { setError(e.message); } finally { setLoading(false); }
  };
  const myIp = async () => {
    try { const res = await fetch("https://ipapi.co/json/"); const d = await res.json(); setIp(d.ip); setInfo(d); } catch {}
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">IP Address Info</h1>
        <p className="text-gray-400 mb-6">Look up geolocation and network info for any IP address</p>
        <div className="flex gap-2 mb-4">
          <input value={ip} onChange={e=>setIp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&lookup()} placeholder="e.g. 8.8.8.8" className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono" />
          <button onClick={lookup} disabled={loading} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">{loading?"..":"Lookup"}</button>
          <button onClick={myIp} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">My IP</button>
        </div>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {info && (
          <div className="space-y-2">{[
            ["IP",info.ip],["City",info.city],["Region",info.region],["Country",info.country_name],
            ["Timezone",info.timezone],["ISP",info.org],["Latitude",info.latitude],["Longitude",info.longitude]
          ].map(([k,v])=>v?(
            <div key={k} className="bg-gray-900 rounded p-3 flex justify-between">
              <span className="text-gray-400">{k}</span>
              <span className="font-mono">{String(v)}</span>
            </div>
          ):null)}</div>
        )}
      </div>
    </div>
  );
}