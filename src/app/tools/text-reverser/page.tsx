"use client";
import { useState } from "react";
export default function TextReverser() {
  const [text, setText] = useState("");
  const reversed = text.split("").reverse().join("");
  const reversedWords = text.split(" ").reverse().join(" ");
  const reversedLines = text.split("\n").reverse().join("\n");
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Text Reverser</h1>
      <p className="text-gray-400 mb-6">Reverse text by characters, words, or lines.</p>
      <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 text-white mb-6 resize-none" placeholder="Enter text to reverse..." value={text} onChange={e => setText(e.target.value)} />
      <div className="space-y-4">
        {[{label:"Reversed Characters",value:reversed},{label:"Reversed Words",value:reversedWords},{label:"Reversed Lines",value:reversedLines}].map(({label,value}) => (
          <div key={label} className="bg-gray-900 border border-gray-700 rounded p-4">
            <div className="text-sm text-gray-400 mb-2">{label}</div>
            <div className="font-mono text-green-400 break-all">{value || <span className="text-gray-600">Result appears here</span>}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
