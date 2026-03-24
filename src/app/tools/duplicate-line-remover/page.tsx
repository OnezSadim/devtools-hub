"use client";
import { useState } from "react";
export default function DuplicateRemover() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const remove = () => {
    const lines = input.split("\n");
    const unique = [...new Set(lines)];
    setOutput(unique.join("\n"));
  };
  const copy = () => navigator.clipboard.writeText(output);
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">Duplicate Line Remover</h1><div className="grid grid-cols-2 gap-4"><div><label className="block mb-2 text-gray-400">Input</label><textarea className="w-full h-64 bg-gray-800 p-3 rounded font-mono text-sm" value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste lines here"/></div><div><label className="block mb-2 text-gray-400">Output (unique lines)</label><textarea className="w-full h-64 bg-gray-800 p-3 rounded font-mono text-sm" value={output} readOnly/></div></div><div className="flex gap-4 mt-4"><button onClick={remove} className="bg-blue-600 px-6 py-2 rounded">Remove Duplicates</button>{output&&<button onClick={copy} className="bg-gray-700 px-6 py-2 rounded">Copy</button>}</div></div>);
}