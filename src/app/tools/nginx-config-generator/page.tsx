"use client";
import { useState } from "react";

export default function NginxConfigGenerator() {
  const [domain, setDomain] = useState("example.com");
  const [port, setPort] = useState("3000");
  const [ssl, setSsl] = useState(true);
  const [www, setWww] = useState(true);
  const [config, setConfig] = useState("");

  const generate = () => {
    const base = ssl ? `server {
    listen 80;
    server_name ${www ? `www.${domain} ` : ""}${domain};
    return 301 https://${domain}$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ${domain};

    ssl_certificate /etc/letsencrypt/live/${domain}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${domain}/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://localhost:${port};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}` : `server {
    listen 80;
    server_name ${www ? `www.${domain} ` : ""}${domain};

    location / {
        proxy_pass http://localhost:${port};
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`;
    setConfig(base);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">Nginx Config Generator</h1>
        <p className="text-gray-400 mb-6">Generate Nginx reverse proxy configurations.</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Domain</label>
            <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" value={domain} onChange={e => setDomain(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">App Port</label>
            <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" value={port} onChange={e => setPort(e.target.value)} />
          </div>
        </div>
        <div className="flex gap-6 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={ssl} onChange={e => setSsl(e.target.checked)} className="w-4 h-4" />
            <span className="text-sm">Enable SSL (Let&apos;s Encrypt)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={www} onChange={e => setWww(e.target.checked)} className="w-4 h-4" />
            <span className="text-sm">Include www redirect</span>
          </label>
        </div>
        <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg mb-4">Generate Config</button>
        {config && (
          <div>
            <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm text-green-400 whitespace-pre-wrap overflow-x-auto">{config}</pre>
            <button onClick={() => navigator.clipboard.writeText(config)} className="mt-2 text-sm text-blue-400 hover:text-blue-300">Copy to clipboard</button>
          </div>
        )}
      </div>
    </div>
  );
}
