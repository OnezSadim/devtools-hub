"use client";
import { useState } from "react";
export default function HtmlEntityEncoder() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const encode = (s: string) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
  const decode = (s: string) => s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'");
  const result = text ? (mode==="encode" ? encode(text) : decode(text)) : "";
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">HTML Entity Encoder</h1>
      <p className="text-gray-400 mb-6">Encode and decode HTML entities.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("encode")} className={"px-4 py-2 rounded " + (mode==="encode" ? "bg-blue-600" : "bg-gray-800")}>Encode</button>
        <button onClick={() => setMode("decode")} className={"px-4 py-2 rounded " + (mode==="decode" ? "bg-blue-600" : "bg-gray-800")}>Decode</button>
      </div>
      <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-4" placeholder="Enter HTML..." value={text} onChange={e => setText(e.target.value)} />
      <div className="bg-gray-900 border border-gray-700 rounded p-4">
        <p className="text-sm text-gray-400 mb-2">Result:</p>
        <p className="font-mono text-sm text-green-400 whitespace-pre-wrap">{result || "—"}</p>
      </div>
    </div>
  );
}