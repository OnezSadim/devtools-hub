"use client";
import { useState } from "react";
export default function IPLookup() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const lookup = async () => {
    setLoading(true);
    try {
      const target = ip.trim() || "";
      const url = target ? `https://ipapi.co/${target}/json/` : "https://ipapi.co/json/";
      const res = await fetch(url);
      const data = await res.json();
      setResult(data);
    } catch { setResult({ error: "Failed to fetch IP info" }); }
    setLoading(false);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">IP Lookup</h1>
      <p className="text-gray-400 mb-6">Get geolocation and ISP info for any IP address</p>
      <div className="flex gap-2 mb-6">
        <input value={ip} onChange={e=>setIp(e.target.value)} placeholder="Leave blank for your IP..." className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />
        <button onClick={lookup} disabled={loading} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium">{loading?"Loading...":"Lookup"}</button>
      </div>
      {result && (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          {result.error ? <p className="text-red-400">{result.error}</p> : (
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[["IP",result.ip],["City",result.city],["Region",result.region],["Country",result.country_name],["ISP",result.org],["Timezone",result.timezone],["Latitude",result.latitude],["Longitude",result.longitude]].map(([k,v])=>(
                <div key={k} className="bg-gray-800 rounded p-3"><div className="text-gray-400 text-xs mb-1">{k}</div><div className="font-mono">{v||"N/A"}</div></div>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}