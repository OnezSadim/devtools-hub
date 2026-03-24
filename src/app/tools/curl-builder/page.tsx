"use client";
import { useState } from "react";

export default function CurlBuilder() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState("Content-Type: application/json");
  const [body, setBody] = useState("");
  const [auth, setAuth] = useState("");
  const [output, setOutput] = useState("");

  const build = () => {
    let cmd = `curl -X ${method}`;
    if (auth) cmd += ` -u "${auth}"`;
    headers.split("\n").filter(Boolean).forEach(h => { cmd += ` -H "${h.trim()}"`; });
    if (body && ["POST","PUT","PATCH"].includes(method)) cmd += ` -d '${body}'`;
    cmd += ` "${url}"`;
    setOutput(cmd);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">cURL Command Builder</h1>
        <p className="text-gray-400 mb-6">Build cURL commands visually with all options.</p>
        <div className="space-y-4">
          <div className="flex gap-3">
            <select value={method} onChange={e => setMethod(e.target.value)} className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none">
              {["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map(m => <option key={m}>{m}</option>)}
            </select>
            <input type="text" className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="https://api.example.com/endpoint" value={url} onChange={e => setUrl(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Headers (one per line)</label>
            <textarea className="w-full h-24 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:outline-none focus:border-blue-500" value={headers} onChange={e => setHeaders(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Basic Auth (user:pass)</label>
            <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 font-mono text-sm focus:outline-none focus:border-blue-500" value={auth} onChange={e => setAuth(e.target.value)} />
          </div>
          {["POST","PUT","PATCH"].includes(method) && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Request Body</label>
              <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:outline-none focus:border-blue-500" placeholder='{"key": "value"}' value={body} onChange={e => setBody(e.target.value)} />
            </div>
          )}
          <button onClick={build} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">Build Command</button>
          {output && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Generated cURL</label>
              <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm text-green-400 whitespace-pre-wrap break-all">{output}</pre>
              <button onClick={() => navigator.clipboard.writeText(output)} className="mt-2 text-sm text-blue-400 hover:text-blue-300">Copy to clipboard</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
