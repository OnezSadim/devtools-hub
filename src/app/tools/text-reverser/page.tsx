"use client";
import { useState } from "react";
export default function TextReverser() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("chars");
  const reverse = () => {
    if (mode === "chars") return input.split("").reverse().join("");
    if (mode === "words") return input.split(" ").reverse().join(" ");
    if (mode === "lines") return input.split("\n").reverse().join("\n");
    return input;
  };
  const result = input ? reverse() : "";
  const copy = () => navigator.clipboard.writeText(result);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Text Reverser</h1>
      <p className="text-gray-400 mb-6">Reverse characters, words, or lines of text</p>
      <div className="flex gap-2 mb-4">
        {["chars","words","lines"].map(m => <button key={m} onClick={() => setMode(m)} className={"flex-1 py-2 rounded-lg font-semibold capitalize " + (mode===m ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400")}>{m}</button>)}
      </div>
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={5} placeholder="Enter text to reverse..." className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700" />
      {result && <div className="p-4 bg-gray-800 rounded-lg"><div className="flex justify-between mb-2"><p className="text-gray-400 text-sm">Result</p><button onClick={copy} className="text-blue-400 text-sm hover:text-blue-300">Copy</button></div><pre className="text-green-400 whitespace-pre-wrap">{result}</pre></div>}
    </div>
  );
}