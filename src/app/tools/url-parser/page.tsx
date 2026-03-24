'use client';
import { useState } from 'react';
export default function UrlParser() {
  const [url, setUrl] = useState('');
  const [parsed, setParsed] = useState<Record<string,string>|null>(null);
  const [error, setError] = useState('');
  function parse() {
    try {
      const u = new URL(url);
      const params: Record<string,string> = {};
      u.searchParams.forEach((v,k) => { params[k] = v; });
      setParsed({
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port || '(default)',
        pathname: u.pathname,
        search: u.search || '(none)',
        hash: u.hash || '(none)',
        params: JSON.stringify(params, null, 2),
      });
      setError('');
    } catch { setError('Invalid URL'); setParsed(null); }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">URL Parser</h1>
        <p className="text-gray-400 mb-6">Break a URL into its components: protocol, hostname, path, query params, and hash.</p>
        <input className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-3 font-mono text-sm" placeholder="https://example.com/path?foo=bar#section" value={url} onChange={e=>setUrl(e.target.value)} />
        <button onClick={parse} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mb-6">Parse</button>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {parsed && <div className="bg-gray-800 rounded p-4 space-y-2">{Object.entries(parsed).map(([k,v])=>(<div key={k}><span className="text-blue-400 font-mono text-sm">{k}:</span><span className="ml-2 text-gray-200 font-mono text-sm">{v}</span></div>))}</div>}
      </div>
    </main>
  );
}
