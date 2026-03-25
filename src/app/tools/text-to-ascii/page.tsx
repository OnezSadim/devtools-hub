"use client";
import { useState } from "react";
export default function TextToAscii() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("to-ascii");
  function convert() {
    if (mode==="to-ascii") return text.split("").map(c=>c.charCodeAt(0)).join(" ");
    try { return text.split(/\s+/).filter(Boolean).map(n=>String.fromCharCode(parseInt(n))).join(""); }
    catch { return "Invalid input"; }
  }
  const output = text ? convert() : "";
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text to ASCII Converter</h1>
        <p className="text-gray-400 mb-6">Convert text to ASCII codes and back</p>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setMode("to-ascii")} className={`px-4 py-2 rounded ${mode==="to-ascii"?"bg-orange-600":"bg-gray-800 hover:bg-gray-700"}`}>Text → ASCII</button>
          <button onClick={()=>setMode("from-ascii")} className={`px-4 py-2 rounded ${mode==="from-ascii"?"bg-orange-600":"bg-gray-800 hover:bg-gray-700"}`}>ASCII → Text</button>
        </div>
        <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full h-32 bg-gray-800 rounded p-3 text-white font-mono text-sm resize-y mb-4" placeholder={mode==="to-ascii"?"Type text here...":"Enter ASCII codes (space-separated)..."} />
        <div className="bg-gray-800 rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Output</span>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs text-blue-400 hover:text-blue-300">Copy</button>
          </div>
          <div className="font-mono text-sm text-orange-300 break-all min-h-8">{output||<span className="text-gray-600">Output appears here</span>}</div>
        </div>
      </div>
    </main>
  );
}