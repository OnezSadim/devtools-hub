"use client";
import { useState } from "react";
export default function BinaryToText() {
  const [mode, setMode] = useState<"toText"|"toBinary">("toText");
  const [input, setInput] = useState("");
  const binaryToText = (bin: string) => {
    try {
      return bin.trim().split(/\s+/).map(b=>String.fromCharCode(parseInt(b,2))).join("");
    } catch { return "Invalid binary"; }
  };
  const textToBinary = (txt: string) => txt.split("").map(c=>c.charCodeAt(0).toString(2).padStart(8,"0")).join(" ");
  const output = input ? (mode==="toText" ? binaryToText(input) : textToBinary(input)) : "";
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Binary to Text</h1>
        <p className="text-gray-400 mb-8">Convert between binary and ASCII text</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex gap-2 mb-4">
            <button onClick={()=>setMode("toText")} className={`px-3 py-1 rounded text-sm ${mode==="toText"?'bg-blue-600':'bg-gray-800 hover:bg-gray-700'}`}>Binary → Text</button>
            <button onClick={()=>setMode("toBinary")} className={`px-3 py-1 rounded text-sm ${mode==="toBinary"?'bg-blue-600':'bg-gray-800 hover:bg-gray-700'}`}>Text → Binary</button>
          </div>
          <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="toText"?"01001000 01100101 01101100 01101100 01101111":"Hello World"} rows={4} className="w-full bg-gray-800 rounded px-3 py-2 mb-4 outline-none focus:ring-2 ring-blue-500 resize-none font-mono text-sm" />
          <div className="bg-gray-800 rounded p-3 font-mono text-sm text-green-300 min-h-[80px] whitespace-pre-wrap break-all">
            {output || <span className="text-gray-500">Output appears here...</span>}
          </div>
        </div>
      </div>
    </div>
  );
}