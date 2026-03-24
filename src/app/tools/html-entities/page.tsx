"use client";
import { useState } from "react";
export default function HtmlEntities() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const encode = (s: string) => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;", '"':"&quot;","'":"&#39;"}[c]||c));
  const decode = (s: string) => s.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, c => ({"&amp;":"&","&lt;":"<","&gt;":">",'&quot;':'"',"&#39;":"'"}[c]||c));
  const output = mode === "encode" ? encode(input) : decode(input);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">HTML Entities</h1>
      <p className="text-gray-400 mb-4">Encode or decode HTML special characters.</p>
      <div className="flex gap-2 mb-4">
        {(["encode","decode"] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} className={`px-4 py-2 rounded capitalize ${mode===m?"bg-blue-600 text-white":"bg-gray-700 text-gray-300"}`}>{m}</button>
        ))}
      </div>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text..." className="w-full h-32 bg-gray-800 text-white p-3 rounded font-mono text-sm mb-4" />
      <div className="bg-gray-800 rounded p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">Output</span>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="text-blue-400 text-sm">Copy</button>
        </div>
        <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap break-all">{output||"Output will appear here"}</pre>
      </div>
    </div>
  );
}