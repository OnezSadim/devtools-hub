"use client";
import { useState } from "react";
export default function WhoisLookup() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");
  const lookup = async () => {
    try {
      const res = await fetch(`https://api.whois.vu/?q=${encodeURIComponent(domain)}`);
      const text = await res.text();
      setResult(text || "No data returned");
    } catch (e) {
      setResult("Error fetching WHOIS data. Try a WHOIS service directly for: " + domain);
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">WHOIS Lookup</h1>
        <p className="text-gray-400 mb-6">Get domain registration and ownership information.</p>
        <div className="flex gap-2 mb-4">
          <input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm" />
          <button onClick={lookup} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium">Lookup</button>
        </div>
        {result && <pre className="bg-gray-900 border border-gray-700 rounded p-4 text-sm font-mono overflow-auto whitespace-pre-wrap">{result}</pre>}
      </div>
    </div>
  );
}