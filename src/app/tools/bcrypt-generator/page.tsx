"use client";
import { useState } from "react";
export default function BcryptGenerator() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [checkText, setCheckText] = useState("");
  const [checkHash, setCheckHash] = useState("");
  const [checkResult, setCheckResult] = useState<null|boolean>(null);
  const [loading, setLoading] = useState(false);
  async function generate() {
    if (!text) return;
    setLoading(true);
    try {
      const { hash: bcryptHash } = await import("bcryptjs");
      const h = await bcryptHash(text, 10);
      setHash(h);
    } catch { setHash("bcryptjs not available — install with npm"); }
    setLoading(false);
  }
  async function verify() {
    if (!checkText || !checkHash) return;
    setLoading(true);
    try {
      const { compare } = await import("bcryptjs");
      const ok = await compare(checkText, checkHash);
      setCheckResult(ok);
    } catch { setCheckResult(false); }
    setLoading(false);
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Bcrypt Hash Generator</h1>
        <p className="text-gray-400 mb-6">Generate and verify bcrypt password hashes.</p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <h2 className="font-semibold mb-3">Generate Hash</h2>
          <input value={text} onChange={e=>setText(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-3" placeholder="Enter password to hash" type="password" />
          <button onClick={generate} disabled={loading||!text} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium disabled:opacity-50">{loading?"Generating...":"Generate Hash"}</button>
          {hash && <div className="mt-3">
            <label className="text-sm text-gray-400">Hash:</label>
            <div className="flex gap-2 mt-1">
              <code className="flex-1 bg-gray-800 p-2 rounded text-xs break-all text-green-400">{hash}</code>
              <button onClick={()=>navigator.clipboard.writeText(hash)} className="px-3 py-1 bg-gray-700 rounded text-sm">Copy</button>
            </div>
          </div>}
        </div>
        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="font-semibold mb-3">Verify Hash</h2>
          <input value={checkText} onChange={e=>setCheckText(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-2" placeholder="Password to verify" type="password" />
          <input value={checkHash} onChange={e=>setCheckHash(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-3" placeholder="Bcrypt hash" />
          <button onClick={verify} disabled={loading||!checkText||!checkHash} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium disabled:opacity-50">Verify</button>
          {checkResult !== null && <p className={`mt-3 font-medium ${checkResult?"text-green-400":"text-red-400"}`}>{checkResult?"✓ Match! Password is correct":"✗ No match. Password is incorrect"}</p>}
        </div>
      </div>
    </main>
  );
}
