"use client";
import { useState } from "react";

export default function UrlParser() {
  const [url, setUrl] = useState("");
  const [parts, setParts] = useState<Record<string,string> | null>(null);
  const [error, setError] = useState("");

  const parse = () => {
    setError(""); setParts(null);
    try {
      const u = new URL(url);
      const params: Record<string,string> = {};
      u.searchParams.forEach((v, k) => { params[k] = v; });
      setParts({
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port || "(default)",
        pathname: u.pathname,
        search: u.search || "(none)",
        hash: u.hash || "(none)",
        origin: u.origin,
        queryParams: JSON.stringify(params, null, 2),
      });
    } catch(e: unknown) { setError("Invalid URL: " + String(e)); }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">URL Parser</h1>
        <p className="text-gray-400 mb-6">Break down any URL into its components.</p>
        <div className="flex gap-3 mb-6">
          <input type="text" className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="https://example.com:8080/path?foo=bar#section" value={url} onChange={e => setUrl(e.target.value)} />
          <button onClick={parse} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">Parse</button>
        </div>
        {error && <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 text-red-400 mb-4">{error}</div>}
        {parts && (
          <div className="space-y-2">
            {Object.entries(parts).map(([k, v]) => (
              <div key={k} className="flex bg-gray-900 rounded-lg overflow-hidden">
                <span className="bg-gray-800 px-4 py-3 text-blue-400 font-mono text-sm w-36 shrink-0">{k}</span>
                <span className="px-4 py-3 font-mono text-sm text-gray-300 break-all whitespace-pre">{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
