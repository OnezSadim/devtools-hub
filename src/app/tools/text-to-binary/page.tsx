"use client";
import { useState } from "react";
export default function TextToBinary() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const encode = (t: string) => t.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
  const decode = (b: string) => b.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join("");
  const result = mode === "encode" ? encode(text) : decode(text);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Text to Binary</h1>
      <p className="text-gray-400 mb-6">Convert text to binary and back.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("encode")} className={"px-4 py-2 rounded " + (mode==="encode" ? "bg-blue-600" : "bg-gray-800")}>Text → Binary</button>
        <button onClick={() => setMode("decode")} className={"px-4 py-2 rounded " + (mode==="decode" ? "bg-blue-600" : "bg-gray-800")}>Binary → Text</button>
      </div>
      <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-4" placeholder={mode==="encode" ? "Enter text..." : "Enter binary (space separated)..."} value={text} onChange={e => setText(e.target.value)} />
      <div className="bg-gray-900 border border-gray-700 rounded p-4">
        <p className="text-sm text-gray-400 mb-2">Result:</p>
        <p className="font-mono text-sm break-all text-green-400">{result || "—"}</p>
      </div>
    </div>
  );
}