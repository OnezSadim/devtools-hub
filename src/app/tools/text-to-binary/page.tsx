"use client";
import { useState } from "react";
export default function TextToBinary() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");
  const [result, setResult] = useState("");
  const convert = () => {
    if (mode === "encode") {
      setResult(input.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" "));
    } else {
      try { setResult(input.trim().split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("")); }
      catch { setResult("Invalid binary input"); }
    }
  };
  const copy = () => navigator.clipboard.writeText(result);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Text to Binary</h1>
      <p className="text-gray-400 mb-6">Convert text to binary (ASCII) representation and back</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("encode")} className={"flex-1 py-2 rounded-lg font-semibold " + (mode==="encode" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400")}>Text → Binary</button>
        <button onClick={() => setMode("decode")} className={"flex-1 py-2 rounded-lg font-semibold " + (mode==="decode" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400")}>Binary → Text</button>
      </div>
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={4} placeholder={mode==="encode" ? "Enter text..." : "Enter binary (space-separated bytes)"} className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 font-mono" />
      <button onClick={convert} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold mb-4">Convert</button>
      {result && <div className="p-4 bg-gray-800 rounded-lg"><div className="flex justify-between mb-2"><p className="text-gray-400 text-sm">Result</p><button onClick={copy} className="text-blue-400 text-sm hover:text-blue-300">Copy</button></div><p className="font-mono text-green-400 text-sm break-all">{result}</p></div>}
    </div>
  );
}