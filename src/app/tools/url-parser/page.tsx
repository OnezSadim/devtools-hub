"use client";
import { useState } from "react";
export default function UrlParser() {
  const [url, setUrl] = useState("");
  const [parsed, setParsed] = useState(null);
  const [error, setError] = useState("");
  const parse = () => {
    setError(""); setParsed(null);
    try {
      const u = new URL(url);
      const params = {};
      u.searchParams.forEach((v, k) => { params[k] = v; });
      setParsed({ protocol: u.protocol, hostname: u.hostname, port: u.port || "(default)", pathname: u.pathname, search: u.search, hash: u.hash, params });
    } catch { setError("Invalid URL"); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">URL Parser</h1>
        <p className="text-gray-400 mb-6">Break down any URL into its components.</p>
        <input className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" placeholder="https://example.com/path?key=value#hash" value={url} onChange={e => setUrl(e.target.value)} />
        <button onClick={parse} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Parse URL</button>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        {parsed && (
          <div className="space-y-2">
            {Object.entries(parsed).filter(([k]) => k !== "params").map(([k, v]) => (
              <div key={k} className="flex bg-gray-900 border border-gray-700 rounded overflow-hidden">
                <span className="bg-gray-800 px-3 py-2 text-gray-400 text-sm w-24 shrink-0">{k}</span>
                <span className="px-3 py-2 font-mono text-sm break-all">{v || "(empty)"}</span>
              </div>
            ))}
            {Object.keys(parsed.params).length > 0 && (
              <div className="bg-gray-900 border border-gray-700 rounded p-3">
                <p className="text-gray-400 text-sm mb-2">Query Parameters:</p>
                {Object.entries(parsed.params).map(([k, v]) => (
                  <div key={k} className="flex gap-2 text-sm font-mono"><span className="text-blue-400">{k}</span><span className="text-gray-500">=</span><span>{v}</span></div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}