"use client";
import { useState } from "react";
export default function HtmlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const encode = (s: string) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  const decode = (s: string) => s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
  const process = () => setOutput(mode === "encode" ? encode(input) : decode(input));
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">HTML Encoder / Decoder</h1>
      <p className="text-gray-400 mb-6">Encode or decode HTML entities in your text.</p>
      <div className="flex gap-2 mb-4">
        {["encode","decode"].map(m => <button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded capitalize ${mode===m?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{m}</button>)}
      </div>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text..." className="w-full h-32 bg-gray-800 border border-gray-700 rounded p-3 mb-4 font-mono text-sm" />
      <button onClick={process} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4">{mode === "encode" ? "Encode" : "Decode"}</button>
      {output && <textarea value={output} readOnly className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />}
    </div>
  );
}