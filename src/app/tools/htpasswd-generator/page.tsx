"use client";
import { useState } from "react";
export default function HtpasswdGenerator() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  async function generate() {
    if (!user || !pass) return;
    const encoder = new TextEncoder();
    const data = encoder.encode(pass);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    const b64 = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
    setResult(user + ":{SHA}" + b64);
  }
  function copy() { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); }
  return (
    <div style={{maxWidth:600,margin:"0 auto",padding:24,fontFamily:"monospace"}}>
      <h1 style={{fontSize:28,marginBottom:8}}>htpasswd Generator</h1>
      <p style={{color:"#888",marginBottom:24}}>Generate Apache htpasswd entries (SHA-1 format).</p>
      <div style={{marginBottom:16}}>
        <label style={{display:"block",marginBottom:4}}>Username</label>
        <input value={user} onChange={e=>setUser(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} />
      </div>
      <div style={{marginBottom:16}}>
        <label style={{display:"block",marginBottom:4}}>Password</label>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} />
      </div>
      <button onClick={generate} style={{padding:"10px 24px",background:"#0f5",color:"#000",border:"none",borderRadius:4,cursor:"pointer",fontWeight:"bold"}}>Generate</button>
      {result && (
        <div style={{marginTop:16}}>
          <div style={{padding:12,background:"#111",border:"1px solid #333",borderRadius:4,wordBreak:"break-all"}}>{result}</div>
          <button onClick={copy} style={{marginTop:8,padding:"8px 16px",background:copied?"#0a5":"#333",color:"#fff",border:"none",borderRadius:4,cursor:"pointer"}}>{copied?"Copied!":"Copy"}</button>
        </div>
      )}
    </div>
  );
}
