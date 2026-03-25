"use client";
import { useState } from "react";
export default function SSLCertificateChecker() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");
  const check = () => {
    if (!domain.trim()) { setResult("Enter a domain name."); return; }
    const d = domain.replace(/^https?:\/\//, "").split("/")[0];
    setResult(`To check SSL for ${d}:\n\nUse: openssl s_client -connect ${d}:443 -servername ${d}\n\nOr visit: https://www.ssllabs.com/ssltest/analyze.html?d=${d}\n\nNote: Browser-side SSL checks require a backend proxy. Use the links above for full certificate details including expiry date, issuer, and cipher suites.`);
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f0f0f",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>SSL Certificate Checker</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Check SSL certificate details for any domain.</p><input value={domain} onChange={e=>setDomain(e.target.value)} placeholder="example.com" style={{width:"100%",padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",marginBottom:"1rem",boxSizing:"border-box"}} /><button onClick={check} style={{padding:"0.75rem 1.5rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",marginBottom:"1rem"}}>Check SSL</button>{result && <pre style={{background:"#1e293b",padding:"1rem",borderRadius:"6px",whiteSpace:"pre-wrap",color:"#a3e635"}}>{result}</pre>}</div>);
}
