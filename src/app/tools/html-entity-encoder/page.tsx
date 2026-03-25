"use client";
import { useState } from "react";
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  function encode(s: string) {
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
  }
  function decode(s: string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = s;
    return txt.value;
  }
  const output = input ? (mode === "encode" ? encode(input) : decode(input)) : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML Entity Encoder / Decoder</h1>
        <p className="text-gray-400 mb-6">Encode special characters to HTML entities or decode them back.</p>
        <div className="flex gap-2 mb-4">
          {(["encode","decode"] as const).map(m => (
            <button key={m} onClick={() => setMode(m)} className={`px-4 py-2 rounded text-sm font-medium ${mode===m?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{m.charAt(0).toUpperCase()+m.slice(1)}</button>
          ))}
        </div>
        <textarea className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono h-36 mb-4" placeholder={mode==="encode"?"Enter HTML with special chars..":"Enter HTML entities.."} value={input} onChange={e => setInput(e.target.value)} />
        {output && (
          <div className="bg-gray-900 border border-gray-700 rounded p-3">
            <div className="text-xs text-gray-500 mb-2">Result:</div>
            <pre className="text-sm font-mono whitespace-pre-wrap break-all">{output}</pre>
            <button onClick={() => navigator.clipboard.writeText(output)} className="mt-3 text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
          </div>
        )}
      </div>
    </main>
  );
}