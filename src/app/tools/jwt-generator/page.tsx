"use client";
import { useState } from "react";

export default function JwtGenerator() {
  const [header, setHeader] = useState(JSON.stringify({"alg":"HS256","typ":"JWT"}, null, 2));
  const [payload, setPayload] = useState(JSON.stringify({"sub":"1234567890","name":"John Doe","iat":1516239022}, null, 2));
  const [secret, setSecret] = useState("your-256-bit-secret");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const b64url = (s: string) => btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");

  const generate = async () => {
    setError(""); setToken("");
    try {
      const h = b64url(header);
      const p = b64url(payload);
      const msg = h + "." + p;
      const enc = new TextEncoder();
      const key = await crypto.subtle.importKey("raw", enc.encode(secret), {name:"HMAC",hash:"SHA-256"}, false, ["sign"]);
      const sig = await crypto.subtle.sign("HMAC", key, enc.encode(msg));
      const sigB64 = btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");
      setToken(msg + "." + sigB64);
    } catch(e: unknown) { setError(String(e)); }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">JWT Generator</h1>
        <p className="text-gray-400 mb-6">Generate signed JSON Web Tokens for testing purposes.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Header</label>
            <textarea className="w-full h-24 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:outline-none focus:border-blue-500" value={header} onChange={e => setHeader(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Payload</label>
            <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:outline-none focus:border-blue-500" value={payload} onChange={e => setPayload(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Secret</label>
            <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:outline-none focus:border-blue-500" value={secret} onChange={e => setSecret(e.target.value)} />
          </div>
          <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">Generate JWT</button>
          {token && <div className="bg-gray-900 border border-gray-700 rounded-lg p-4"><p className="text-xs text-gray-400 mb-2">Generated Token:</p><p className="font-mono text-xs text-green-400 break-all">{token}</p></div>}
          {error && <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 text-red-400">{error}</div>}
        </div>
      </div>
    </div>
  );
}
