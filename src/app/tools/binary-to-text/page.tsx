"use client";
import { useState } from "react";
export default function BinaryToText() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("bin2text");
  const convert = () => {
    try {
      if (mode === "bin2text") {
        const text = input.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join("");
        setOutput(text);
      } else {
        const bin = input.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
        setOutput(bin);
      }
    } catch { setOutput("Invalid input"); }
  };
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Binary to Text Converter</h1><p className="text-gray-400 mb-6">Convert between binary and text</p><div className="flex gap-2 mb-4">{["bin2text","text2bin"].map(m=>(<button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded font-medium ${mode===m?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{m==="bin2text"?"Binary → Text":"Text → Binary"}</button>))}</div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="bin2text"?"01001000 01101001":"Hello"} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" /><button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium mb-4">Convert</button>{output&&<pre className="bg-gray-900 border border-gray-700 rounded p-3 whitespace-pre-wrap font-mono text-green-400">{output}</pre>}</div></div>);
}