"use client";
import { useState } from "react";
export default function HTTPHeaderAnalyzer() {
  const [headers, setHeaders] = useState("");
  const [parsed, setParsed] = useState<{name:string,value:string,desc:string}[]>([]);
  const headerInfo: Record<string,string> = {
    "content-type": "Indicates the media type of the resource",
    "content-length": "Size of the response body in bytes",
    "cache-control": "Directives for caching mechanisms",
    "set-cookie": "Sends cookies from server to client",
    "authorization": "Authentication credentials for the request",
    "x-frame-options": "Prevents clickjacking attacks",
    "strict-transport-security": "Enforces HTTPS connections",
    "content-security-policy": "Controls resources the browser can load",
    "x-content-type-options": "Prevents MIME type sniffing",
    "access-control-allow-origin": "CORS header for allowed origins",
  };
  const analyze = () => {
    const lines = headers.split("
").filter(l => l.includes(":"));
    const result = lines.map(line => {
      const idx = line.indexOf(":");
      const name = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      const desc = headerInfo[name.toLowerCase()] || "Custom or non-standard header";
      return { name, value, desc };
    });
    setParsed(result);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTTP Header Analyzer</h1>
        <p className="text-gray-400 mb-6">Paste HTTP headers to analyze and understand each one.</p>
        <textarea value={headers} onChange={e => setHeaders(e.target.value)} rows={8} placeholder="Content-Type: application/json
Cache-Control: no-cache
X-Frame-Options: DENY" className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mb-3" />
        <button onClick={analyze} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium mb-4">Analyze Headers</button>
        {parsed.length > 0 && (
          <div className="space-y-2">
            {parsed.map((h, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded p-3">
                <div className="flex gap-2 items-start">
                  <span className="text-blue-400 font-mono text-sm font-bold">{h.name}:</span>
                  <span className="font-mono text-sm text-green-400">{h.value}</span>
                </div>
                <p className="text-gray-400 text-xs mt-1">{h.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}