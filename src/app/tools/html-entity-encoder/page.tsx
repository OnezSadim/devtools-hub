"use client";
import { useState } from "react";
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const encode = (s: string) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  const decode = (s: string) => s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
  const output = mode === "encode" ? encode(input) : decode(input);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">HTML Entity Encoder</h1>
      <p className="text-gray-400 mb-6">Encode special characters to HTML entities or decode them back.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("encode")} className={`px-4 py-2 rounded ${mode==="encode"?"bg-blue-600":"bg-gray-800"}`}>Encode</button>
        <button onClick={() => setMode("decode")} className={`px-4 py-2 rounded ${mode==="decode"?"bg-blue-600":"bg-gray-800"}`}>Decode</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Input</label>
          <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder={mode==="encode"?"<p>Hello & World</p>":"&lt;p&gt;Hello &amp; World&lt;/p&gt;"} />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Output</label>
          <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={output} readOnly />
        </div>
      </div>
      <button onClick={() => navigator.clipboard.writeText(output)} className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy Output</button>
    </main>
  );
}