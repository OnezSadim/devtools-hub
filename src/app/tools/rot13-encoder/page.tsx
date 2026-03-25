"use client";
import { useState } from "react";
export default function ROT13() {
  const [text, setText] = useState("");
  const rotate = (s: string) => s.replace(/[a-zA-Z]/g, c => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0)-base+13)%26)+base);
  });
  const result = rotate(text);
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">ROT13 Encoder/Decoder</h1><p className="text-gray-400 mb-6">ROT13 is its own inverse — encode and decode with the same operation</p><div className="grid grid-cols-1 gap-4"><div><label className="block text-sm text-gray-400 mb-1">Input</label><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text to ROT13..." className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono" /></div><div><label className="block text-sm text-gray-400 mb-1">Output (ROT13)</label><pre className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-green-400 whitespace-pre-wrap overflow-auto">{result}</pre></div></div><button onClick={()=>{setText(result);}} className="mt-4 bg-green-700 hover:bg-green-600 px-4 py-2 rounded text-sm">Swap (use output as input)</button></div></div>);
}