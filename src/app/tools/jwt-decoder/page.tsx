"use client";
import { useState } from "react";

export default function JwtDecoder() {
  const [jwt, setJwt] = useState("");
  const [decoded, setDecoded] = useState<{header:string;payload:string;signature:string}|null>(null);
  const [error, setError] = useState("");

  const decode = () => {
    try {
      setError("");
      const parts = jwt.split(".");
      if (parts.length !== 3) throw new Error("Invalid JWT: must have 3 parts");
      const header = JSON.stringify(JSON.parse(atob(parts[0].replace(/-/g,"+").replace(/_/g,"/"))), null, 2);
      const payload = JSON.stringify(JSON.parse(atob(parts[1].replace(/-/g,"+").replace(/_/g,"/"))), null, 2);
      setDecoded({ header, payload, signature: parts[2] });
    } catch (e: any) { setError(e.message); setDecoded(null); }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-blue-400 hover:underline text-sm">&larr; All Tools</a>
        <h1 className="text-3xl font-bold mt-4 mb-2">JWT Decoder</h1>
        <p className="text-zinc-400 mb-6">Paste a JSON Web Token to decode its header and payload.</p>
        <textarea value={jwt} onChange={e=>setJwt(e.target.value)} placeholder="eyJhbGciOiJIUzI1NiIs..." className="w-full h-32 bg-zinc-900 border border-zinc-700 rounded p-3 font-mono text-sm mb-3" />
        <button onClick={decode} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded font-medium mb-4">Decode</button>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {decoded && (
          <div className="space-y-4">
            <div><h3 className="text-sm font-semibold text-zinc-400 mb-1">Header</h3><pre className="bg-zinc-900 border border-zinc-700 rounded p-3 text-sm overflow-auto">{decoded.header}</pre></div>
            <div><h3 className="text-sm font-semibold text-zinc-400 mb-1">Payload</h3><pre className="bg-zinc-900 border border-zinc-700 rounded p-3 text-sm overflow-auto">{decoded.payload}</pre></div>
            <div><h3 className="text-sm font-semibold text-zinc-400 mb-1">Signature</h3><pre className="bg-zinc-900 border border-zinc-700 rounded p-3 text-sm overflow-auto break-all">{decoded.signature}</pre></div>
          </div>
        )}
      </div>
    </main>
  );
}