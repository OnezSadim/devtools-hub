"use client";
import { useState } from "react";
export default function StringEscaper() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"escape"|"unescape">("escape");
  const [type, setType] = useState("json");
  const process = () => {
    try {
      if (type === "json") {
        return mode === "escape" ? JSON.stringify(input).slice(1,-1) : JSON.parse(`"${input}"`);
      } else if (type === "html") {
        if (mode === "escape") return input.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
        const d = document.createElement("div"); d.innerHTML = input; return d.textContent||"";
      } else if (type === "url") {
        return mode === "escape" ? encodeURIComponent(input) : decodeURIComponent(input);
      } else if (type === "regex") {
        return mode === "escape" ? input.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") : input.replace(/\\(.)/g,"$1");
      }
      return input;
    } catch { return "Error processing input"; }
  };
  const output = input ? process() : "";
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">String Escaper</h1>
        <p className="text-gray-400 mb-6">Escape or unescape strings for JSON, HTML, URL, and Regex.</p>
        <div className="flex gap-3 mb-4 flex-wrap">
          <div className="flex gap-2">
            {["json","html","url","regex"].map(t=><button key={t} onClick={()=>setType(t)} className={`px-3 py-1 rounded text-sm font-mono ${type===t?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{t.toUpperCase()}</button>)}
          </div>
          <div className="flex gap-2 ml-auto">
            <button onClick={()=>setMode("escape")} className={`px-4 py-1 rounded ${mode==="escape"?"bg-green-600":"bg-gray-800"}`}>Escape</button>
            <button onClick={()=>setMode("unescape")} className={`px-4 py-1 rounded ${mode==="unescape"?"bg-orange-600":"bg-gray-800"}`}>Unescape</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={12} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" placeholder="Paste string here..." />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Output</label>
            <textarea value={output} readOnly rows={12} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none text-green-400" />
          </div>
        </div>
        {output && <button onClick={()=>navigator.clipboard.writeText(String(output))} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy Output</button>}
      </div>
    </div>
  );
}