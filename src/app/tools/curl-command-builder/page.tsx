"use client";
import { useState } from "react";
export default function CurlCommandBuilder() {
  const [url, setUrl] = useState("https://api.example.com/data");
  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState("Content-Type: application/json");
  const [body, setBody] = useState("");
  const [auth, setAuth] = useState("");
  const [followRedirects, setFollowRedirects] = useState(true);
  const [verbose, setVerbose] = useState(false);
  const buildCurl = () => {
    const parts = ["curl"];
    if (verbose) parts.push("-v");
    if (followRedirects) parts.push("-L");
    parts.push(`-X ${method}`);
    if (auth) parts.push(`-u "${auth}"`);
    headers.split("
").filter(Boolean).forEach(h => parts.push(`-H "${h.trim()}"`));
    if (body) parts.push(`-d '${body}'`);
    parts.push(`"${url}"`);
    return parts.join(" ");
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">cURL Command Builder</h1>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">URL</label>
          <input value={url} onChange={e => setUrl(e.target.value)} className="w-full p-2 bg-gray-800 border border-gray-700 rounded font-mono text-sm" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Method</label>
            <select value={method} onChange={e => setMethod(e.target.value)} className="w-full p-2 bg-gray-800 border border-gray-700 rounded">
              {["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(m => <option key={m}>{m}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Basic Auth (user:pass)</label>
            <input value={auth} onChange={e => setAuth(e.target.value)} placeholder="user:password" className="w-full p-2 bg-gray-800 border border-gray-700 rounded font-mono text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Headers (one per line)</label>
          <textarea value={headers} onChange={e => setHeaders(e.target.value)} rows={3} className="w-full p-2 bg-gray-800 border border-gray-700 rounded font-mono text-sm resize-none" />
        </div>
        {["POST","PUT","PATCH"].includes(method) && (
          <div>
            <label className="block text-sm font-medium mb-1">Request Body</label>
            <textarea value={body} onChange={e => setBody(e.target.value)} rows={4} className="w-full p-2 bg-gray-800 border border-gray-700 rounded font-mono text-sm resize-none" />
          </div>
        )}
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={followRedirects} onChange={e => setFollowRedirects(e.target.checked)} /> Follow redirects (-L)</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={verbose} onChange={e => setVerbose(e.target.checked)} /> Verbose (-v)</label>
        </div>
      </div>
      <div className="bg-gray-800 rounded p-3 font-mono text-sm break-all">{buildCurl()}</div>
      <button onClick={() => navigator.clipboard.writeText(buildCurl())} className="mt-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700">Copy Command</button>
    </div>
  );
}