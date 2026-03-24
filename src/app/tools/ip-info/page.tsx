"use client";
import { useState, useEffect } from "react";
export default function IpInfo() {
  const [ip, setIp] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => { setIp(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">IP Address Info</h1>
        <p className="text-gray-400 mb-6">View details about your current IP address</p>
        {loading ? <p className="text-gray-400">Detecting your IP...</p> : ip ? (
          <div className="bg-gray-900 rounded-lg p-6 space-y-3">
            {Object.entries(ip).filter(([k]) => !['languages','country_tld','country_capital','in_eu','postal'].includes(k)).map(([k,v]) => (
              <div key={k} className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400 capitalize">{k.replace(/_/g,' ')}</span>
                <span className="font-mono text-green-400">{String(v)}</span>
              </div>
            ))}
          </div>
        ) : <p className="text-red-400">Could not fetch IP info</p>}
      </div>
    </div>
  );
}