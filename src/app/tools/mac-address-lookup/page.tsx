"use client";
import { useState } from "react";
export default function MacLookup() {
  const [mac,setMac]=useState(""),[res,setRes]=useState<any>(null),[loading,setLoading]=useState(false);
  const normalize=(m:string)=>m.replace(/[^a-fA-F0-9]/g,"").toUpperCase().slice(0,12);
  const format=(m:string)=>m.match(/.{1,2}/g)?.join(":")??m;
  const lookup=async()=>{
    const clean=normalize(mac);
    if(clean.length<6){setRes({err:"Enter at least 3 octets (6 hex chars)"});return;}
    const oui=clean.slice(0,6);
    setLoading(true);
    try{
      const r=await fetch(`https://api.macvendors.com/${oui}`);
      const text=await r.text();
      setRes({oui:format(oui),vendor:r.ok?text:"Unknown vendor",full:format(clean)});
    }catch{setRes({oui:format(oui),vendor:"Lookup failed (CORS/network)",full:format(clean)});}
    setLoading(false);
  };
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-lg mx-auto"><h1 className="text-3xl font-bold mb-2">MAC Address Lookup</h1><p className="text-gray-400 mb-6">Look up the vendor/manufacturer for a MAC address OUI.</p><div className="flex gap-2 mb-4"><input className="flex-1 bg-gray-800 rounded px-3 py-2 font-mono" value={mac} onChange={e=>setMac(e.target.value)} placeholder="e.g. 00:1A:2B:3C:4D:5E" /><button onClick={lookup} disabled={loading} className="bg-blue-600 hover:bg-blue-500 rounded px-4 py-2 disabled:opacity-50">{loading?"...":"Lookup"}</button></div>{res&&<div className="bg-gray-800 rounded p-4 space-y-2">{res.err?<p className="text-red-400">{res.err}</p>:<><p><span className="text-gray-400 text-sm">OUI: </span><span className="font-mono">{res.oui}</span></p><p><span className="text-gray-400 text-sm">Vendor: </span><span className="text-green-400">{res.vendor}</span></p><p><span className="text-gray-400 text-sm">Full MAC: </span><span className="font-mono">{res.full}</span></p></>}</div>}<div className="mt-6 bg-gray-900 rounded p-4 text-sm text-gray-400"><p className="font-semibold text-gray-300 mb-2">MAC Address Formats</p><p>Colon: 00:1A:2B:3C:4D:5E</p><p>Hyphen: 00-1A-2B-3C-4D-5E</p><p>Cisco: 001A.2B3C.4D5E</p></div></div></div>);
}