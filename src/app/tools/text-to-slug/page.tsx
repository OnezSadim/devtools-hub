"use client";
import { useState } from "react";
export default function TextToSlug() {
  const [input, setInput] = useState("");
  const toSlug = (t:string) => t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"");
  const slug = toSlug(input);
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Text to Slug</h1>
      <p className="text-gray-400 mb-4">Convert any text to a URL-friendly slug.</p>
      <input className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-4" placeholder="Enter text..." value={input} onChange={e=>setInput(e.target.value)} />
      {slug && <div className="bg-gray-800 rounded p-4">
        <p className="text-sm text-gray-400 mb-2">Slug:</p>
        <p className="font-mono text-lg text-green-400 break-all">{slug}</p>
        <button onClick={()=>navigator.clipboard.writeText(slug)} className="mt-3 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">Copy</button>
      </div>}
      {input && <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div className="bg-gray-900 rounded p-3"><span className="text-gray-400">Original length: </span><span className="font-mono">{input.length}</span></div>
        <div className="bg-gray-900 rounded p-3"><span className="text-gray-400">Slug length: </span><span className="font-mono">{slug.length}</span></div>
      </div>}
    </div>
  );
}
