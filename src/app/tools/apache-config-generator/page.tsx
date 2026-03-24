"use client";
import { useState } from "react";

export default function ApacheConfigGenerator() {
  const [domain, setDomain] = useState("example.com");
  const [docroot, setDocroot] = useState("/var/www/html");
  const [port, setPort] = useState("3000");
  const [mode, setMode] = useState("static");
  const [config, setConfig] = useState("");

  const generate = () => {
    const cfg = mode === "proxy" ? `<VirtualHost *:80>
    ServerName ${domain}
    ServerAlias www.${domain}

    ProxyPreserveHost On
    ProxyPass / http://localhost:${port}/
    ProxyPassReverse / http://localhost:${port}/

    ErrorLog /var/log/apache2/${domain}-error.log
    CustomLog /var/log/apache2/${domain}-access.log combined
</VirtualHost>` : `<VirtualHost *:80>
    ServerName ${domain}
    ServerAlias www.${domain}
    DocumentRoot ${docroot}

    <Directory ${docroot}>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /var/log/apache2/${domain}-error.log
    CustomLog /var/log/apache2/${domain}-access.log combined
</VirtualHost>`;
    setConfig(cfg);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">Apache Config Generator</h1>
        <p className="text-gray-400 mb-6">Generate Apache VirtualHost configurations.</p>
        <div className="space-y-4 mb-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Mode</label>
            <select value={mode} onChange={e => setMode(e.target.value)} className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none">
              <option value="static">Static Site</option>
              <option value="proxy">Reverse Proxy</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Domain</label>
            <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" value={domain} onChange={e => setDomain(e.target.value)} />
          </div>
          {mode === "static" ? (
            <div>
              <label className="block text-sm text-gray-400 mb-1">Document Root</label>
              <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" value={docroot} onChange={e => setDocroot(e.target.value)} />
            </div>
          ) : (
            <div>
              <label className="block text-sm text-gray-400 mb-1">App Port</label>
              <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" value={port} onChange={e => setPort(e.target.value)} />
            </div>
          )}
        </div>
        <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg mb-4">Generate Config</button>
        {config && (
          <div>
            <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm text-green-400 whitespace-pre-wrap">{config}</pre>
            <button onClick={() => navigator.clipboard.writeText(config)} className="mt-2 text-sm text-blue-400 hover:text-blue-300">Copy to clipboard</button>
          </div>
        )}
      </div>
    </div>
  );
}
