"use client";
import { useState } from "react";
export default function NginxConfigGenerator() {
  const [serverName, setServerName] = useState("example.com");
  const [rootPath, setRootPath] = useState("/var/www/html");
  const [port, setPort] = useState("80");
  const [enableSSL, setEnableSSL] = useState(false);
  const [enableGzip, setEnableGzip] = useState(true);
  const [proxyPass, setProxyPass] = useState("");
  const [output, setOutput] = useState("");
  const generate = () => {
    let cfg = `server {
    listen ${port};
    server_name ${serverName};
    root ${rootPath};
    index index.html index.htm;
`;
    if (enableGzip) cfg += `
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
`;
    if (proxyPass) {
      cfg += `
    location / {
        proxy_pass ${proxyPass};
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
`;
    } else {
      cfg += `
    location / {
        try_files $uri $uri/ =404;
    }
`;
    }
    if (enableSSL) cfg += `
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/${serverName}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${serverName}/privkey.pem;
`;
    cfg += `}`;
    setOutput(cfg);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Nginx Config Generator</h1>
        <p className="text-gray-400 mb-8">Generate nginx server block configurations</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Server Name</label>
              <input value={serverName} onChange={e=>setServerName(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Port</label>
              <input value={port} onChange={e=>setPort(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Root Path</label>
            <input value={rootPath} onChange={e=>setRootPath(e.target.value)} className="w-full bg-gray-800 rounded p-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Proxy Pass (optional)</label>
            <input value={proxyPass} onChange={e=>setProxyPass(e.target.value)} placeholder="http://localhost:3000" className="w-full bg-gray-800 rounded p-2 text-sm" />
          </div>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={enableSSL} onChange={e=>setEnableSSL(e.target.checked)} />Enable SSL</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={enableGzip} onChange={e=>setEnableGzip(e.target.checked)} />Enable Gzip</label>
          </div>
          <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Generate Config</button>
        </div>
        {output && <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex justify-between mb-2"><span className="text-sm text-gray-400">nginx.conf</span><button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs bg-gray-700 px-3 py-1 rounded">Copy</button></div>
          <pre className="text-sm text-green-400 overflow-auto whitespace-pre-wrap">{output}</pre>
        </div>}
      </div>
    </div>
  );
}
