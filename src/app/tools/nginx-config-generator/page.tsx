"use client";
import { useState } from "react";
export default function NginxConfigGenerator() {
  const [domain, setDomain] = useState('example.com');
  const [port, setPort] = useState('3000');
  const [ssl, setSsl] = useState(true);
  const [type, setType] = useState('proxy');
  const [output, setOutput] = useState('');
  function generate() {
    const sslBlock = ssl ? `
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/${domain}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${domain}/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;` : '';
    const redirect = ssl ? `
server {
    listen 80;
    server_name ${domain} www.${domain};
    return 301 https://$host$request_uri;
}
` : '';
    let location = '';
    if(type==='proxy') location = `
    location / {
        proxy_pass http://localhost:${port};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }`;
    else if(type==='static') location = `
    root /var/www/${domain};
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }`;
    else location = `
    location / {
        proxy_pass http://localhost:${port};
        proxy_buffering off;
        proxy_set_header X-Accel-Buffering no;
    }`;
    setOutput(`${redirect}server {
    listen ${ssl?'443 ssl':'80'};
    server_name ${domain} www.${domain};${sslBlock}${location}

    access_log /var/log/nginx/${domain}.access.log;
    error_log /var/log/nginx/${domain}.error.log;
}`);
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Nginx Config Generator</h1>
      <p className="text-gray-400 mb-6">Generate Nginx server block configurations</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Domain</label><input value={domain} onChange={e=>setDomain(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Upstream Port</label><input value={port} onChange={e=>setPort(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Type</label><select value={type} onChange={e=>setType(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2"><option value="proxy">Reverse Proxy</option><option value="static">Static Files</option><option value="stream">Streaming</option></select></div>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={ssl} onChange={e=>setSsl(e.target.checked)} /><span>Enable SSL (Let{"’"}s Encrypt)</span></label>
          <button onClick={generate} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium">Generate Config</button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-400">nginx.conf</label>
            {output&&<button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>}
          </div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm h-96 overflow-auto">{output||'Configure options and click Generate'}</pre>
        </div>
      </div>
    </main>
  );
}