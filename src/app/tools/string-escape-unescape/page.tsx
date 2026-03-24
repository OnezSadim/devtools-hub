"use client";
import { useState } from "react";
export default function StringEscapeUnescape() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"escape"|"unescape">("escape");
  const process = () => {
    try {
      if (mode === "escape") return JSON.stringify(text).slice(1,-1);
      return JSON.parse('"' + text + '"');
    } catch { return "Invalid input"; }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">String Escape / Unescape</h1>
      <p className="text-gray-400 mb-6">Escape or unescape special characters in strings.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("escape")} className={"px-4 py-2 rounded " + (mode==="escape" ? "bg-blue-600" : "bg-gray-800")}>Escape</button>
        <button onClick={() => setMode("unescape")} className={"px-4 py-2 rounded " + (mode==="unescape" ? "bg-blue-600" : "bg-gray-800")}>Unescape</button>
      </div>
      <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono mb-4" placeholder="Enter string..." value={text} onChange={e => setText(e.target.value)} />
      <div className="bg-gray-900 border border-gray-700 rounded p-4">
        <p className="text-sm text-gray-400 mb-2">Result:</p>
        <p className="font-mono text-sm text-green-400 whitespace-pre-wrap">{text ? process() : "—"}</p>
      </div>
    </div>
  );
}