"use client";
import { useState } from "react";
export default function TextToBinary() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("encode");
  const process = () => {
    if (mode === "encode") {
      return text.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
    } else {
      return text.trim().split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("");
    }
  };
  const [result, setResult] = useState("");
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Text to Binary</h1>
      <p className="text-gray-400 mb-6">Convert text to binary code and back.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("encode")} className={`flex-1 py-2 rounded ${mode==="encode"?"bg-blue-600":"bg-gray-700"}`}>Text → Binary</button>
        <button onClick={() => setMode("decode")} className={`flex-1 py-2 rounded ${mode==="decode"?"bg-blue-600":"bg-gray-700"}`}>Binary → Text</button>
      </div>
      <textarea value={text} onChange={e => setText(e.target.value)} rows={4} placeholder={mode==="encode"?"Enter text...":"Enter binary (space separated)..."} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-4 text-white font-mono" />
      <button onClick={() => setResult(process())} className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold mb-4">Convert</button>
      {result && <div className="p-4 bg-gray-800 rounded"><p className="text-green-400 font-mono break-all">{result}</p><button onClick={() => navigator.clipboard.writeText(result)} className="mt-2 text-sm text-blue-400">Copy</button></div>}
    </div>
  );
}