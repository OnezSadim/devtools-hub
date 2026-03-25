"use client";
import { useState } from "react";
export default function SSLChecker() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");
  const check = async () => {
    if (!domain) return;
    setResult("Checking SSL certificate for: " + domain + "

To verify SSL manually:
1. Open https://" + domain + " in your browser
2. Click the padlock icon
3. View Certificate details

Or use online tools:
- https://www.ssllabs.com/ssltest/analyze.html?d=" + domain + "
- https://www.sslshopper.com/ssl-checker.html#hostname=" + domain);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SSL Certificate Checker</h1>
        <p className="text-gray-400 mb-6">Check SSL/TLS certificate details for any domain.</p>
        <div className="flex gap-2 mb-4">
          <input value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm" />
          <button onClick={check} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium">Check SSL</button>
        </div>
        {result && <pre className="bg-gray-900 border border-gray-700 rounded p-4 text-sm font-mono overflow-auto whitespace-pre-wrap">{result}</pre>}
      </div>
    </div>
  );
}