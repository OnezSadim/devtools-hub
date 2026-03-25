"use client";
import { useState } from "react";
export default function StringReverser() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"chars"|"words"|"lines">("chars");
  const reverse = () => {
    if (mode === "chars") return input.split("").reverse().join("");
    if (mode === "words") return input.split(" ").reverse().join(" ");
    return input.split("
").reverse().join("
");
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">String Reverser</h1>
        <p className="text-gray-400 mb-8">Reverse strings by characters, words, or lines</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex gap-2 mb-4">
            {(["chars","words","lines"] as const).map(m=>(
              <button key={m} onClick={()=>setMode(m)} className={`px-3 py-1 rounded text-sm capitalize ${mode===m?'bg-blue-600':'bg-gray-800 hover:bg-gray-700'}`}>{m}</button>
            ))}
          </div>
          <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text to reverse..." rows={4} className="w-full bg-gray-800 rounded px-3 py-2 mb-4 outline-none focus:ring-2 ring-blue-500 resize-none" />
          <div className="bg-gray-800 rounded p-3 font-mono text-sm whitespace-pre-wrap min-h-[80px] text-green-300">
            {input ? reverse() : <span className="text-gray-500">Output will appear here...</span>}
          </div>
        </div>
      </div>
    </div>
  );
}