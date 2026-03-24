"use client";
import { useState, useRef } from "react";
export default function ImageToBase64() {
  const [b64,setB64]=useState("");
  const [type,setType]=useState("");
  const ref=useRef<HTMLInputElement>(null);
  function handleFile(e:React.ChangeEvent<HTMLInputElement>){
    const f=e.target.files?.[0]; if(!f) return;
    setType(f.type);
    const r=new FileReader();
    r.onload=ev=>setB64((ev.target?.result as string)||"")
    r.readAsDataURL(f);
  }
  function copy(){ navigator.clipboard.writeText(b64); }
  return(<div className="min-h-screen bg-gray-950 text-white p-6"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Image to Base64</h1><p className="text-gray-400 mb-6">Convert any image to a Base64 data URL for embedding in HTML/CSS.</p><div onClick={()=>ref.current?.click()} className="border-2 border-dashed border-gray-700 rounded-lg p-10 text-center cursor-pointer hover:border-blue-500 mb-4"><input ref={ref} type="file" accept="image/*" className="hidden" onChange={handleFile}/><p className="text-gray-400">Click to select an image</p></div>{b64&&<><div className="mb-3"><img src={b64} alt="preview" className="max-h-40 rounded"/></div><div className="flex gap-2 mb-2"><input className="flex-1 bg-gray-900 border border-gray-700 rounded p-2 font-mono text-xs" value={b64.substring(0,80)+"..."} readOnly/><button onClick={copy} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy</button></div><p className="text-xs text-gray-500">{b64.length} characters</p></>}</div></div>);
}