"use client";
import { useState } from "react";
export default function NginxConfigGenerator() {
  const [domain, setDomain] = useState("example.com");
  const [port, setPort] = useState("3000");
  const [ssl, setSsl] = useState(true);
  const [www, setWww] = useState(true);
  const config = `server {
    listen 80;
    server_name ${www ? "www." : ""}${domain} ${domain};
${ssl ? `    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name ${www ? "www." : ""}${domain} ${domain};
    ssl_certificate /etc/letsencrypt/live/${domain}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${domain}/privkey.pem;
` : ""}
    location / {
        proxy_pass http://localhost:${port};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`;
  const [copied, setCopied] = useState(false);
  function copy() { navigator.clipboard.writeText(config); setCopied(true); setTimeout(()=>setCopied(false),2000); }
  return (
    <div style={{maxWidth:700,margin:"0 auto",padding:24,fontFamily:"monospace"}}>
      <h1 style={{fontSize:28,marginBottom:8}}>Nginx Config Generator</h1>
      <p style={{color:"#888",marginBottom:24}}>Generate Nginx reverse proxy configuration.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
        <div><label style={{display:"block",marginBottom:4}}>Domain</label><input value={domain} onChange={e=>setDomain(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} /></div>
        <div><label style={{display:"block",marginBottom:4}}>App Port</label><input value={port} onChange={e=>setPort(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} /></div>
      </div>
      <div style={{marginBottom:16,display:"flex",gap:24}}>
        <label><input type="checkbox" checked={ssl} onChange={e=>setSsl(e.target.checked)} style={{marginRight:6}} />SSL/HTTPS</label>
        <label><input type="checkbox" checked={www} onChange={e=>setWww(e.target.checked)} style={{marginRight:6}} />Include www</label>
      </div>
      <button onClick={copy} style={{marginBottom:12,padding:"8px 20px",background:copied?"#0a5":"#333",color:"#fff",border:"none",borderRadius:4,cursor:"pointer"}}>{copied?"Copied!":"Copy Config"}</button>
      <pre style={{padding:16,background:"#111",border:"1px solid #333",borderRadius:4,overflow:"auto",fontSize:12,lineHeight:1.5}}>{config}</pre>
    </div>
  );
}
