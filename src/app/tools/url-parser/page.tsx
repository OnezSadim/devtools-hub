"use client";
import { useState } from "react";
export default function UrlParser() {
  const [url, setUrl] = useState("https://example.com:8080/path/to/page?foo=bar&baz=qux#section");
  const parse = () => {
    try { return new URL(url); } catch { return null; }
  };
  const u = parse();
  const params = u ? Array.from(u.searchParams.entries()) : [];
  const rows = u ? [
    ["href", u.href], ["protocol", u.protocol], ["host", u.host],
    ["hostname", u.hostname], ["port", u.port || "(default)"],
    ["pathname", u.pathname], ["search", u.search || "(none)"],
    ["hash", u.hash || "(none)"], ["origin", u.origin]
  ] : [];
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">URL Parser</h1>
      <p className="text-gray-400 mb-6">Break down a URL into its components.</p>
      <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://..." className="w-full max-w-3xl bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white mb-6 font-mono" />
      {u ? (
        <div className="max-w-3xl space-y-4">
          <div className="overflow-auto rounded border border-gray-700">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-800"><th className="px-4 py-2 text-left text-gray-400">Component</th><th className="px-4 py-2 text-left text-gray-400">Value</th></tr></thead>
              <tbody>{rows.map(([k,v])=>(<tr key={k} className="border-t border-gray-800"><td className="px-4 py-2 text-blue-400 font-mono">{k}</td><td className="px-4 py-2 font-mono text-green-300 break-all">{v}</td></tr>))}</tbody>
            </table>
          </div>
          {params.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Query Parameters</h2>
              <div className="overflow-auto rounded border border-gray-700">
                <table className="w-full text-sm">
                  <thead><tr className="bg-gray-800"><th className="px-4 py-2 text-left text-gray-400">Key</th><th className="px-4 py-2 text-left text-gray-400">Value</th></tr></thead>
                  <tbody>{params.map(([k,v])=>(<tr key={k} className="border-t border-gray-800"><td className="px-4 py-2 text-yellow-400 font-mono">{k}</td><td className="px-4 py-2 font-mono text-white">{v}</td></tr>))}</tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ) : <p className="text-red-400">Invalid URL</p>}
    </main>
  );
}