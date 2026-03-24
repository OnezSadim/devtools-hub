"use client";
import { useState } from "react";
export default function BinaryTextConverter() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");
  const [mode, setMode] = useState("textToBinary");
  const [error, setError] = useState("");
  const convert = () => {
    setError("");
    if (mode === "textToBinary") {
      const result = text.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
      setBinary(result);
    } else {
      try {
        const result = binary.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join("");
        setText(result);
      } catch { setError("Invalid binary input"); }
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Binary ↔ Text Converter</h1>
        <p className="text-gray-400 mb-6">Convert text to binary and binary to text online.</p>
        <div className="flex gap-4 mb-4">
          <button onClick={() => setMode("textToBinary")} className={`px-4 py-2 rounded ${mode==="textToBinary"?"bg-blue-600":"bg-gray-800"}`}>Text → Binary</button>
          <button onClick={() => setMode("binaryToText")} className={`px-4 py-2 rounded ${mode==="binaryToText"?"bg-blue-600":"bg-gray-800"}`}>Binary → Text</button>
        </div>
        {mode === "textToBinary" ? (
          <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} />
        ) : (
          <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" placeholder="Enter binary (space-separated bytes)..." value={binary} onChange={e => setBinary(e.target.value)} />
        )}
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Convert</button>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        {mode === "textToBinary" && binary && <div className="bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm break-all">{binary}</div>}
        {mode === "binaryToText" && text && <div className="bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm">{text}</div>}
      </div>
    </main>
  );
}