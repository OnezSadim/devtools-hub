"use client";
import { useState } from "react";
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");
  const encode = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  const decode = s => s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
  const output = mode === "encode" ? encode(input) : decode(input);
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">HTML Entity Encoder</h1><p className="text-gray-400 mb-6">Encode or decode HTML entities.</p><div className="flex gap-2 mb-4">{["encode","decode"].map(m => (<button key={m} onClick={() => setMode(m)} className={`px-4 py-2 rounded font-medium ${mode===m?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{m.charAt(0).toUpperCase()+m.slice(1)}</button>))}</div><textarea className="w-full h-36 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4" placeholder="Input..." value={input} onChange={e => setInput(e.target.value)} /><div className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm whitespace-pre-wrap break-all min-h-24">{output || <span className="text-gray-600">Output will appear here</span>}</div><button onClick={() => navigator.clipboard.writeText(output)} className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy</button></div>);
}