"use client";
import { useState } from "react";

export default function DnsLookup() {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lookup = async () => {
    if (!domain) return;
    setLoading(true); setError(""); setResults("");
    try {
      const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`);
      const data = await res.json();
      const resA = data.Answer ? data.Answer.map((r: {data: string, TTL: number}) => `A: ${r.data} (TTL: ${r.TTL}s)`).join("\n") : "No A records found";
      const resMx = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`);
      const dataMx = await resMx.json();
      const mxRecords = dataMx.Answer ? dataMx.Answer.map((r: {data: string}) => `MX: ${r.data}`).join("\n") : "No MX records";
      setResults(resA + "\n" + mxRecords);
    } catch(e: unknown) { setError(String(e)); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">DNS Lookup</h1>
        <p className="text-gray-400 mb-6">Look up DNS records for any domain using Google DNS.</p>
        <div className="flex gap-3 mb-6">
          <input type="text" className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="example.com" value={domain} onChange={e => setDomain(e.target.value)} onKeyDown={e => e.key === "Enter" && lookup()} />
          <button onClick={lookup} disabled={loading} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-lg">{loading ? "Looking up..." : "Lookup"}</button>
        </div>
        {error && <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 text-red-400 mb-4">{error}</div>}
        {results && <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm text-green-400 whitespace-pre-wrap">{results}</pre>}
      </div>
    </div>
  );
}
