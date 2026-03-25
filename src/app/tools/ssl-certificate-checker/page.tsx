"use client";
import { useState } from "react";
export default function Page() {
  const [host, setHost] = useState("");
  const [result, setResult] = useState("");
  const check = () => {
    if (!host) return;
    const h = host.replace(/^https?:\/\//,"");
    setResult(`To check SSL for ${h}:

Option 1 (terminal):
openssl s_client -connect ${h}:443 -servername ${h} 2>/dev/null | openssl x509 -noout -dates -subject -issuer

Option 2 (online):
https://www.ssllabs.com/ssltest/analyze.html?d=${h}

Option 3 (curl):
curl -vI https://${h} 2>&1 | grep -E "(SSL|expire|issuer|subject)"`);
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8",marginBottom:"1rem"}}>SSL Certificate Checker</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Check SSL certificate details and expiry for any domain.</p><div style={{display:"flex",gap:"0.5rem",marginBottom:"1rem"}}><input value={host} onChange={e=>setHost(e.target.value)} placeholder="example.com" style={{flex:1,padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}/><button onClick={check} style={{padding:"0.5rem 1rem",background:"#0ea5e9",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"}}>Check</button></div>{result&&<pre style={{background:"#1e293b",padding:"1rem",borderRadius:"8px",whiteSpace:"pre-wrap",color:"#a3e635"}}>{result}</pre>}</div>);
}