"use client";
import { useState } from "react";
export default function CORSGenerator() {
  const [origin,setOrigin]=useState("*"),[methods,setMethods]=useState({GET:true,POST:true,PUT:false,DELETE:false,PATCH:false,OPTIONS:true}),[headers,setHeaders]=useState("Content-Type, Authorization"),[credentials,setCred]=useState(false),[maxAge,setMaxAge]=useState("86400"),[out,setOut]=useState("");
  const gen=()=>{
    const m=Object.entries(methods).filter(([,v])=>v).map(([k])=>k).join(", ");
    const lines=[`Access-Control-Allow-Origin: ${origin}`,`Access-Control-Allow-Methods: ${m}`,`Access-Control-Allow-Headers: ${headers}`,`Access-Control-Max-Age: ${maxAge}`];
    if(credentials)lines.push("Access-Control-Allow-Credentials: true");
    const nginx=lines.map(l=>`add_header ${l};`).join("
");
    const express=["app.use((req, res, next) => {",`  res.setHeader("Access-Control-Allow-Origin", "${origin}");`,`  res.setHeader("Access-Control-Allow-Methods", "${m}");`,`  res.setHeader("Access-Control-Allow-Headers", "${headers}");`,`  res.setHeader("Access-Control-Max-Age", "${maxAge}");`,credentials?`  res.setHeader("Access-Control-Allow-Credentials", "true");`:"","  if (req.method === 'OPTIONS') return res.sendStatus(204);","  next();","});"].filter(Boolean).join("
");
    setOut(`# HTTP Headers
${lines.join("
")}

# Nginx
${nginx}

# Express.js
${express}`);
  };
  const tog=(k:string)=>setMethods(p=>({...p,[k]:!p[k as keyof typeof p]}));
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">CORS Header Generator</h1><p className="text-gray-400 mb-6">Generate CORS headers for Nginx, Express, and HTTP responses.</p><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Allowed Origin</label><input className="w-full bg-gray-800 rounded px-3 py-2 font-mono" value={origin} onChange={e=>setOrigin(e.target.value)} placeholder="* or https://example.com" /></div><div><label className="block text-sm text-gray-400 mb-2">Allowed Methods</label><div className="flex gap-2 flex-wrap">{Object.keys(methods).map(k=><button key={k} onClick={()=>tog(k)} className={`px-3 py-1 rounded text-sm ${methods[k as keyof typeof methods]?"bg-blue-600":"bg-gray-700"}`}>{k}</button>)}</div></div><div><label className="block text-sm text-gray-400 mb-1">Allowed Headers</label><input className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" value={headers} onChange={e=>setHeaders(e.target.value)} /></div><div><label className="block text-sm text-gray-400 mb-1">Max Age (seconds)</label><input className="w-full bg-gray-800 rounded px-3 py-2" value={maxAge} onChange={e=>setMaxAge(e.target.value)} /></div><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={credentials} onChange={e=>setCred(e.target.checked)} /><span className="text-sm">Allow Credentials</span></label><button onClick={gen} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2">Generate Headers</button></div>{out&&<pre className="mt-4 bg-gray-800 rounded p-4 text-sm font-mono text-green-400 overflow-x-auto whitespace-pre-wrap">{out}</pre>}</div></div>);
}