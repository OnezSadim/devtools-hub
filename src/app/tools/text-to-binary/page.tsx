"use client";
import { useState } from "react";
export default function TextToBinary() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const encode = (text: string) => text.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
  const decode = (bin: string) => bin.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join("");
  const convert = () => { try { setOutput(mode === "encode" ? encode(input) : decode(input)); } catch { setOutput("Invalid input"); } };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text to Binary</h1>
        <p className="text-gray-400 mb-6">Convert text to binary and back</p>
        <div className="flex gap-4 mb-4">
          <button onClick={() => setMode("encode")} className={`px-4 py-2 rounded ${mode==="encode"?"bg-blue-600":"bg-gray-800"}`}>Text → Binary</button>
          <button onClick={() => setMode("decode")} className={`px-4 py-2 rounded ${mode==="decode"?"bg-blue-600":"bg-gray-800"}`}>Binary → Text</button>
        </div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="encode"?"Enter text..":"Enter binary (space-separated).."} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 mb-4 font-mono" />
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold mb-4">Convert</button>
        {output && <div className="bg-gray-900 border border-gray-700 rounded p-4"><p className="font-mono break-all">{output}</p><button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-sm text-blue-400">Copy</button></div>}
      </div>
    </div>
  );
}