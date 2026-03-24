"use client";
import { useState } from "react";
export default function TextToSlug() {
  const [input, setInput] = useState("");
  const toSlug = (s: string) => s.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"");
  const slug = toSlug(input);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Text to Slug</h1>
      <p className="text-gray-400 mb-4">Convert any text into a URL-friendly slug.</p>
      <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text to slugify..." className="w-full bg-gray-800 text-white p-3 rounded font-mono text-sm mb-4" />
      <div className="bg-gray-800 rounded p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">Slug</span>
          <button onClick={()=>navigator.clipboard.writeText(slug)} className="text-blue-400 text-sm">Copy</button>
        </div>
        <p className="text-green-400 font-mono text-lg break-all">{slug||"slug-will-appear-here"}</p>
      </div>
    </div>
  );
}