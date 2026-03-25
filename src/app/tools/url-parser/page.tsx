"use client";
import { useState } from "react";
export default function UrlParser() {
  const [url, setUrl] = useState("https://example.com:8080/path/to/page?foo=bar&baz=qux#section");
  let parsed: URL | null = null;
  try { parsed = new URL(url); } catch {}
  const params = parsed ? Array.from(parsed.searchParams.entries()) : [];
  const Row = ({label, value}: {label: string, value: string}) => value ? (
    <tr><td className="py-2 pr-4 text-gray-400 text-sm w-32">{label}</td><td className="py-2 font-mono text-sm break-all">{value}</td></tr>
  ) : null;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">URL Parser</h1>
      <input type="text" value={url} onChange={e=>setUrl(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-3 font-mono text-sm mb-6" />
      {parsed ? (
        <div className="space-y-4">
          <table className="w-full max-w-2xl">
            <tbody>
              <Row label="Protocol" value={parsed.protocol} />
              <Row label="Hostname" value={parsed.hostname} />
              <Row label="Port" value={parsed.port} />
              <Row label="Pathname" value={parsed.pathname} />
              <Row label="Search" value={parsed.search} />
              <Row label="Hash" value={parsed.hash} />
              <Row label="Origin" value={parsed.origin} />
            </tbody>
          </table>
          {params.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Query Parameters</h2>
              <table className="w-full max-w-2xl">
                <thead><tr><th className="text-left text-gray-400 text-sm pb-2">Key</th><th className="text-left text-gray-400 text-sm pb-2">Value</th></tr></thead>
                <tbody>{params.map(([k,v],i) => <tr key={i}><td className="py-1 pr-4 font-mono text-sm text-blue-300">{k}</td><td className="py-1 font-mono text-sm">{v}</td></tr>)}</tbody>
              </table>
            </div>
          )}
        </div>
      ) : <div className="text-red-400">Invalid URL</div>}
    </div>
  );
}
