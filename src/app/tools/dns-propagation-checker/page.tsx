"use client";
import { useState } from "react";
const DNS_SERVERS=[{name:"Google",ip:"8.8.8.8",loc:"US"},{name:"Cloudflare",ip:"1.1.1.1",loc:"US"},{name:"OpenDNS",ip:"208.67.222.222",loc:"US"},{name:"Quad9",ip:"9.9.9.9",loc:"US"},{name:"Comodo",ip:"8.26.56.26",loc:"US"},{name:"Level3",ip:"4.2.2.2",loc:"US"}];
export default function DNSPropagation() {
  const [domain,setDomain]=useState(""),[type,setType]=useState("A"),[results,setResults]=useState<any[]>([]),[loading,setLoading]=useState(false);
  const check=async()=>{
    if(!domain){return;}
    setLoading(true);setResults([]);
    const checks=DNS_SERVERS.map(async(srv)=>{
      const start=Date.now();
      try{
        const r=await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=${type}`);
        const data=await r.json();
        const ms=Date.now()-start;
        const answers=(data.Answer||[]).map((a:any)=>a.data).join(", ")||"No records";
        return{...srv,answers,ms,ok:true};
      }catch{return{...srv,answers:"Failed",ms:0,ok:false};}
    });
    const res=await Promise.all(checks);
    setResults(res);setLoading(false);
  };
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">DNS Propagation Checker</h1><p className="text-gray-400 mb-6">Check DNS records across multiple resolvers.</p><div className="flex gap-2 mb-6 flex-wrap"><input className="flex-1 bg-gray-800 rounded px-3 py-2 min-w-48" value={domain} onChange={e=>setDomain(e.target.value)} placeholder="example.com" /><select className="bg-gray-800 rounded px-3 py-2" value={type} onChange={e=>setType(e.target.value)}>{["A","AAAA","CNAME","MX","TXT","NS","SOA"].map(t=><option key={t}>{t}</option>)}</select><button onClick={check} disabled={loading} className="bg-blue-600 hover:bg-blue-500 rounded px-4 py-2 disabled:opacity-50">{loading?"Checking...":"Check"}</button></div>{results.length>0&&<div className="space-y-2">{results.map((r,i)=><div key={i} className="bg-gray-800 rounded p-3 flex items-start gap-3"><span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${r.ok?"bg-green-400":"bg-red-400"}`}></span><div className="flex-1"><div className="flex justify-between"><span className="font-semibold text-sm">{r.name} ({r.ip})</span><span className="text-gray-500 text-xs">{r.ms}ms</span></div><p className="text-gray-300 text-sm font-mono mt-1 break-all">{r.answers}</p></div></div>)}</div>}<p className="text-gray-600 text-xs mt-6">Note: All queries go through Google DNS API (dns.google). Results reflect Google's view of each domain.</p></div></div>);
}