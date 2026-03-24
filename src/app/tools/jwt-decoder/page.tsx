"use client";
import { useState } from "react";
export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const decode = (t) => {
    try {
      const parts = t.trim().split(".");
      if (parts.length !== 3) return null;
      const b64 = (s) => JSON.parse(atob(s.replace(/-/g,"+").replace(/_/g,"/")));
      return { header: b64(parts[0]), payload: b64(parts[1]), signature: parts[2] };
    } catch { return null; }
  };
  const result = token ? decode(token) : null;
  const exp = result?.payload?.exp;
  const isExpired = exp ? Date.now()/1000 > exp : null;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">JWT Decoder</h1>
        <p className="text-gray-400 mb-4">Decode and inspect JSON Web Tokens (client-side only)</p>
        <textarea value={token} onChange={e=>setToken(e.target.value)} rows={4} placeholder="Paste your JWT token here..." className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4" />
        {result ? (
          <div className="space-y-4">
            {exp && <div className={`rounded p-3 text-sm font-medium ${isExpired?"bg-red-900 text-red-200":"bg-green-900 text-green-200"}`}>{isExpired?"Token EXPIRED":"Token valid"} — expires {new Date(exp*1000).toLocaleString()}</div>}
            {[["Header",result.header],["Payload",result.payload]].map(([label,data])=>(
              <div key={label} className="bg-gray-900 rounded p-4">
                <div className="text-gray-400 text-sm mb-2">{label}</div>
                <pre className="font-mono text-sm text-green-400 overflow-auto">{JSON.stringify(data,null,2)}</pre>
              </div>
            ))}
            <div className="bg-gray-900 rounded p-4">
              <div className="text-gray-400 text-sm mb-2">Signature (not verified)</div>
              <code className="font-mono text-sm text-yellow-400 break-all">{result.signature}</code>
            </div>
          </div>
        ) : token ? <p className="text-red-400">Invalid JWT format</p> : null}
      </div>
    </div>
  );
}