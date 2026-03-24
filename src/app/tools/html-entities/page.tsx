"use client";
import { useState } from "react";
export default function HtmlEntities() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const encode = (s: string) => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));
  const decode = (s: string) => s.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#(\d+);|&#x([0-9a-fA-F]+);/g, (m,d,h) => d?String.fromCharCode(+d):h?String.fromCharCode(parseInt(h,16)):{"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}[m]||m);
  const process = () => setOutput(mode==="encode" ? encode(input) : decode(input));
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-6"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">HTML Entities Encoder/Decoder</h1><p className="text-gray-400 mb-6">Encode special characters to HTML entities or decode them back</p><div className="flex gap-2 mb-4">{(["encode","decode"] as const).map(m=>(<button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded font-medium ${mode===m?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{m.charAt(0).toUpperCase()+m.slice(1)}</button>))}</div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste HTML or text here..." className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mb-3 resize-none" /><button onClick={process} className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded font-medium mb-3">{mode.charAt(0).toUpperCase()+mode.slice(1)}</button>{output&&<><label className="text-sm text-gray-400">Output:</label><textarea readOnly value={output} className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mt-1 resize-none" /><button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded text-sm">Copy</button></>}</div></div>);
}