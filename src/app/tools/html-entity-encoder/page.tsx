"use client";
import { useState } from "react";
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("<div class=\"hello\">Hello & World</div>");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  function encode(s: string) {
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  }
  function decode(s: string) {
    const el = document.createElement("div"); el.innerHTML = s; return el.textContent || "";
  }
  const output = mode === "encode" ? encode(input) : decode(input);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">HTML Entity Encoder/Decoder</h1>
      <div className="flex gap-2 mb-6">
        <button onClick={()=>setMode("encode")} className={`px-4 py-2 rounded ${mode==="encode"?"bg-blue-600":"bg-gray-700"}`}>Encode</button>
        <button onClick={()=>setMode("decode")} className={`px-4 py-2 rounded ${mode==="decode"?"bg-blue-600":"bg-gray-700"}`}>Decode</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm text-gray-400">Input</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={10} className="w-full bg-gray-800 rounded p-3 font-mono text-sm" />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-400">Output</label>
          <textarea value={output} readOnly rows={10} className="w-full bg-gray-900 rounded p-3 font-mono text-sm text-green-400" />
          <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy</button>
        </div>
      </div>
    </div>
  );
}
