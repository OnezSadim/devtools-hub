
"use client";
import { useState } from "react";
export default function TextToSlug() {
  const [input, setInput] = useState("");
  const [separator, setSeparator] = useState("-");
  const slugify = (text: string, sep: string) => text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, sep).replace(/^-+|-+$/g, "");
  const slug = slugify(input, separator);
  const variants = [
    { label: "Kebab case", value: slugify(input, "-") },
    { label: "Snake case", value: slugify(input, "_") },
    { label: "Dot notation", value: slugify(input, ".") },
    { label: "No separator", value: slugify(input, "") },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text to Slug Generator</h1>
        <p className="text-gray-400 mb-6">Convert any text to URL-friendly slugs</p>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1">Input Text</label>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text to convert..." className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white" />
        </div>
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">Separator</label>
          <div className="flex gap-2">
            {["-","_",".","/"].map(s=>(
              <button key={s} onClick={()=>setSeparator(s)} className={`px-4 py-2 rounded font-mono ${separator===s?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{s === "/" ? "slash" : s === "-" ? "hyphen" : s === "_" ? "underscore" : "dot"}</button>
            ))}
          </div>
        </div>
        {input && (
          <div className="bg-gray-900 border border-gray-700 rounded p-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Result</span>
              <button onClick={()=>navigator.clipboard.writeText(slug)} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Copy</button>
            </div>
            <p className="text-green-400 font-mono text-lg mt-2">{slug}</p>
          </div>
        )}
        <div className="space-y-2">
          <p className="text-sm text-gray-500">All variants:</p>
          {variants.map(v=>(
            <div key={v.label} className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded px-4 py-3">
              <span className="text-sm text-gray-400 w-32">{v.label}</span>
              <code className="text-green-400 text-sm flex-1 px-3">{v.value || "(empty)"}</code>
              <button onClick={()=>navigator.clipboard.writeText(v.value)} className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
