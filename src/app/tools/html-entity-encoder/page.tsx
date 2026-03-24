"use client";
import { useState } from "react";
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");
  const encode = (s) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  const decode = (s) => s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(n)).replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCharCode(parseInt(h,16)));
  const output = input ? (mode==="encode" ? encode(input) : decode(input)) : "";
  const copy = () => navigator.clipboard.writeText(output);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML Entity Encoder</h1>
        <p className="text-gray-400 mb-4">Encode or decode HTML entities</p>
        <div className="flex gap-2 mb-4">
          {["encode","decode"].map(m=>(<button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded capitalize ${mode===m?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{m}</button>))}
        </div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={6} placeholder={mode==="encode" ? "Enter text with special chars..." : "Enter HTML entities..."} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" />
        {output && (
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Result</span>
              <button onClick={copy} className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded">Copy</button>
            </div>
            <pre className="font-mono text-green-400 whitespace-pre-wrap break-all">{output}</pre>
          </div>
        )}
      </div>
    </div>
  );
}