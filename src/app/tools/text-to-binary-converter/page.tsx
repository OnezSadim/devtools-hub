"use client";
import { useState } from "react";

export default function TextToBinaryConverter() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");
  const [mode, setMode] = useState<"toBin" | "fromBin">("toBin");

  const toBin = (t: string) => t.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
  const fromBin = (b: string) => b.trim().split(/\s+/).map(byte => String.fromCharCode(parseInt(byte, 2))).join("");

  const handleText = (v: string) => { setText(v); setBinary(toBin(v)); };
  const handleBin = (v: string) => { setBinary(v); try { setText(fromBin(v)); } catch { setText("Invalid binary"); } };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Text to Binary Converter</h1>
      <p className="text-gray-400 mb-6">Convert text to binary (ASCII) and back</p>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setMode("toBin")} className={"px-4 py-2 rounded " + (mode === "toBin" ? "bg-blue-600" : "bg-gray-800")}>Text → Binary</button>
        <button onClick={() => setMode("fromBin")} className={"px-4 py-2 rounded " + (mode === "fromBin" ? "bg-blue-600" : "bg-gray-800")}>Binary → Text</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Text</label>
          <textarea value={text} onChange={e => handleText(e.target.value)} className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono" placeholder="Hello World" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Binary</label>
          <textarea value={binary} onChange={e => handleBin(e.target.value)} className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-xs" placeholder="01001000 01100101..." />
        </div>
      </div>
    </main>
  );
}
