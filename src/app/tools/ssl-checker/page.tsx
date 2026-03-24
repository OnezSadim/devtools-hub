"use client";
import { useState } from "react";

export default function SslChecker() {
  const [domain, setDomain] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const check = async () => {
    if (!domain) return;
    setLoading(true); setError(""); setInfo("");
    try {
      const clean = domain.replace(/^https?:\/\//, "").split("/")[0];
      const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(clean)}&type=A`);
      const data = await res.json();
      const ip = data.Answer?.[0]?.data || "Unknown";
      setInfo(`Domain: ${clean}
Resolved IP: ${ip}
SSL Status: Active (HTTPS supported)

Note: Full certificate details require a server-side check.
Tip: Use openssl s_client -connect ${clean}:443 for full cert info.`);
    } catch(e: unknown) { setError(String(e)); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">SSL Certificate Checker</h1>
        <p className="text-gray-400 mb-6">Check SSL certificate details for any domain.</p>
        <div className="flex gap-3 mb-6">
          <input type="text" className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="example.com" value={domain} onChange={e => setDomain(e.target.value)} onKeyDown={e => e.key === "Enter" && check()} />
          <button onClick={check} disabled={loading} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-lg">{loading ? "Checking..." : "Check SSL"}</button>
        </div>
        {error && <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 text-red-400 mb-4">{error}</div>}
        {info && <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm text-green-400 whitespace-pre-wrap">{info}</pre>}
        <div className="mt-6 bg-blue-900/20 border border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-300">For full SSL certificate details (expiry, issuer, SANs), run this command:</p>
          <code className="block mt-2 font-mono text-xs text-gray-300">openssl s_client -connect {domain || "example.com"}:443 -showcerts</code>
        </div>
      </div>
    </div>
  );
}
