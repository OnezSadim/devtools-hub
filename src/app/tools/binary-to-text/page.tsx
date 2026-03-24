"use client";
import { useState } from "react";
export default function BinaryToText() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const convert = () => {
    try {
      const text = input.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join("");
      setOutput(text);
    } catch { setOutput("Invalid binary input"); }
  };
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">Binary to Text Converter</h1><textarea className="w-full h-32 bg-gray-800 p-3 rounded mb-4 font-mono" placeholder="Enter binary (space-separated bytes)" value={input} onChange={e=>setInput(e.target.value)}/><button onClick={convert} className="bg-blue-600 px-6 py-2 rounded mb-4">Convert</button>{output&&<div className="bg-gray-800 p-4 rounded font-mono whitespace-pre-wrap">{output}</div>}</div>);
}