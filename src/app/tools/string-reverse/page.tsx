"use client";
import { useState } from "react";
export default function StringReverse() {
  const [input, setInput] = useState("");
  const reversed = input.split("").reverse().join("");
  const words = input.split(" ").reverse().join(" ");
  const lines = input.split("\n").reverse().join("\n");
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">String Reverse Tool</h1>
      <textarea className="w-full h-32 p-3 bg-gray-800 rounded border border-gray-600 text-white mb-4" placeholder="Enter text..." value={input} onChange={e=>setInput(e.target.value)} />
      <div className="space-y-4">
        <div><label className="text-gray-400 text-sm">Reversed Characters</label><div className="p-3 bg-gray-800 rounded mt-1 font-mono text-sm break-all">{reversed||"—"}</div></div>
        <div><label className="text-gray-400 text-sm">Reversed Words</label><div className="p-3 bg-gray-800 rounded mt-1 font-mono text-sm">{words||"—"}</div></div>
        <div><label className="text-gray-400 text-sm">Reversed Lines</label><div className="p-3 bg-gray-800 rounded mt-1 font-mono text-sm whitespace-pre">{lines||"—"}</div></div>
      </div>
    </div>
  );
}