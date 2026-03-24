"use client";
import { useState } from "react";
export default function TextToBinary() {
  const [input, setInput] = useState("");
  const output = input.split("").map(c=>c.charCodeAt(0).toString(2).padStart(8,"0")).join(" ");
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">Text to Binary Converter</h1><textarea className="w-full h-32 bg-gray-800 p-3 rounded mb-4" placeholder="Enter text" value={input} onChange={e=>setInput(e.target.value)}/>{output&&<div className="bg-gray-800 p-4 rounded font-mono text-sm break-all">{output}</div>}</div>);
}