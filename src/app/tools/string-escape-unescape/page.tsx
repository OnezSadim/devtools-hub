"use client";
import { useState } from "react";
export default function StringEscapeUnescape() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("escape");
  const [type, setType] = useState("json");
  const process = () => {
    try {
      if(type==="json") return mode==="escape" ? JSON.stringify(input).slice(1,-1) : JSON.parse(""" + input + """);
      if(type==="html") return mode==="escape" ? input.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;") : input.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"');
      if(type==="url") return mode==="escape" ? encodeURIComponent(input) : decodeURIComponent(input);
    } catch(e) { return "Error: " + e.message; }
  };
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">String Escape / Unescape</h1>
      <div className="flex gap-2 mb-4">
        <select className="p-2 rounded bg-gray-800 text-white border border-gray-700" value={type} onChange={e=>setType(e.target.value)}>
          <option value="json">JSON</option>
          <option value="html">HTML</option>
          <option value="url">URL</option>
        </select>
        <select className="p-2 rounded bg-gray-800 text-white border border-gray-700" value={mode} onChange={e=>setMode(e.target.value)}>
          <option value="escape">Escape</option>
          <option value="unescape">Unescape</option>
        </select>
      </div>
      <textarea className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 h-24 mb-4" placeholder="Enter text..." value={input} onChange={e=>setInput(e.target.value)} />
      <div className="p-3 bg-gray-800 rounded text-white font-mono text-sm break-all">{input ? process() : ""}</div>
    </div>
  );
}