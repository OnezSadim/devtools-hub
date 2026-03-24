"use client";
import { useState } from "react";
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const encode = (s: string) => s.replace(/[&<>"'/]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"': "&quot;","'/'":"&#x27;"}[c]||c));
  const decode = (s: string) => s.replace(/&amp;|&lt;|&gt;|&quot;|&#x27;/g, c => ({"&amp;":"&","&lt;":"<","&gt;":">" ,"&quot;":""" ,"&#x27;":"'"}[c]||c));
  const process = () => setOutput(mode==="encode"?encode(input):decode(input));
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">HTML Entity Encoder</h1>
      <p className="text-gray-400 mb-6">Encode or decode HTML entities</p>
      <div className="flex gap-4 mb-4">
        <button onClick={()=>setMode("encode")} className={`px-4 py-2 rounded ${mode==="encode"?"bg-blue-600":"bg-gray-700"}`}>Encode</button>
        <button onClick={()=>setMode("decode")} className={`px-4 py-2 rounded ${mode==="decode"?"bg-blue-600":"bg-gray-700"}`}>Decode</button>
      </div>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter HTML..." className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4" />
      <button onClick={process} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold mb-4">Convert</button>
      {output && <textarea value={output} readOnly className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />}
    </div>
  );
}