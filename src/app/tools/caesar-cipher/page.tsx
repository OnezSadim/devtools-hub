"use client";
import { useState } from "react";
export default function CaesarCipher() {
  const [input, setInput] = useState("");
  const [shift, setShift] = useState(13);
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encrypt");
  const process = () => {
    const s = mode==="encrypt" ? shift : (26 - shift) % 26;
    const res = input.split("").map(c => {
      if (/[a-z]/.test(c)) return String.fromCharCode(((c.charCodeAt(0)-97+s)%26)+97);
      if (/[A-Z]/.test(c)) return String.fromCharCode(((c.charCodeAt(0)-65+s)%26)+65);
      return c;
    }).join("");
    setOutput(res);
  };
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Caesar Cipher</h1><p className="text-gray-400 mb-6">Encrypt and decrypt text using Caesar cipher</p><div className="flex gap-2 mb-4">{["encrypt","decrypt"].map(m=>(<button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded font-medium ${mode===m?"bg-purple-600":"bg-gray-800 hover:bg-gray-700"}`}>{m[0].toUpperCase()+m.slice(1)}</button>))}</div><div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Shift: {shift}</label><input type="range" min={1} max={25} value={shift} onChange={e=>setShift(+e.target.value)} className="w-full" /></div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text..." className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" /><button onClick={process} className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-medium mb-4">Process</button>{output&&<pre className="bg-gray-900 border border-gray-700 rounded p-3 whitespace-pre-wrap font-mono text-purple-300">{output}</pre>}</div></div>);
}