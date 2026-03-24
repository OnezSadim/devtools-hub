"use client";
import { useState } from "react";
export default function HeadersChecker() {
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState<Record<string,string>|null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const check = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setHeaders(null);
    try {
      const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url.trim())}`);
      const data = await res.json();
      setStatus(data.status?.http_code?`HTTP ${data.status.http_code}`:"Fetched");
      setHeaders({ note: "Full headers require a server-side proxy. Showing response metadata.", url: data.status?.url||url, content_type: data.status?.content_type||"unknown", http_code: data.status?.http_code?.toString()||"unknown" });
    } catch { setHeaders({ error: "Failed. Check URL or CORS restrictions." }); }
    setLoading(false);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">HTTP Headers Checker</h1>
      <p className="text-gray-400 mb-6">Inspect HTTP response headers for any URL</p>
      <div className="flex gap-2 mb-6">
        <input value={url} onChange={e=>setUrl(e.target.value)} onKeyDown={e=>e.key==="Enter"&&check()} placeholder="https://example.com" className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />
        <button onClick={check} disabled={loading} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium">{loading?"Checking...":"Check"}</button>
      </div>
      {status && <p className="text-green-400 mb-3 text-sm">{status}</p>}
      {headers && (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          {Object.entries(headers).map(([k,v])=>(
            <div key={k} className="flex gap-4 py-2 border-b border-gray-800 last:border-0 text-sm">
              <span className="text-blue-400 font-mono w-48 shrink-0">{k}</span>
              <span className="text-gray-300 break-all">{v}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}