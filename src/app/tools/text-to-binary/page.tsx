"use client";
import { useState } from "react";
export default function TextToBinary() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const [output, setOutput] = useState("");
  function convert() {
    if(mode==="encode") {
      setOutput(text.split("").map(c=>c.charCodeAt(0).toString(2).padStart(8,"0")).join(" "));
    } else {
      try { setOutput(text.trim().split(" ").map(b=>String.fromCharCode(parseInt(b,2))).join(""));} catch{setOutput("Invalid binary");}
    }
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Text to Binary Converter</h1>
      <div className="flex gap-2 mb-4">
        <button onClick={()=>setMode("encode")} className={"px-4 py-2 rounded "+(mode==="encode"?"bg-blue-600":"bg-gray-700")}>Text → Binary</button>
        <button onClick={()=>setMode("decode")} className={"px-4 py-2 rounded "+(mode==="decode"?"bg-blue-600":"bg-gray-700")}>Binary → Text</button>
      </div>
      <textarea className="w-full h-32 p-3 bg-gray-800 rounded border border-gray-600 text-white mb-3" placeholder={mode==="encode"?"Enter text..":"Enter binary (space separated)..."} value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4">Convert</button>
      {output&&<div className="p-3 bg-gray-800 rounded font-mono text-sm break-all">{output}</div>}
    </div>
  );
}