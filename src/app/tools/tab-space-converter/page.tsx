"use client";
import { useState } from "react";
export default function TabSpaceConverter() {
  const [text, setText] = useState("");
  const [spaces, setSpaces] = useState(2);
  const [mode, setMode] = useState<"tab-to-space"|"space-to-tab">("tab-to-space");
  const convert = () => mode==="tab-to-space" ? text.split("\t").join(" ".repeat(spaces)) : text.split(" ".repeat(spaces)).join("\t");
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Tab ↔ Space Converter</h1>
      <p className="text-gray-400 mb-6">Convert between tabs and spaces in code.</p>
      <div className="flex gap-4 mb-4 flex-wrap items-center">
        <button onClick={() => setMode("tab-to-space")} className={"px-4 py-2 rounded " + (mode==="tab-to-space" ? "bg-blue-600" : "bg-gray-800")}>Tabs → Spaces</button>
        <button onClick={() => setMode("space-to-tab")} className={"px-4 py-2 rounded " + (mode==="space-to-tab" ? "bg-blue-600" : "bg-gray-800")}>Spaces → Tabs</button>
        <label className="flex items-center gap-2">Spaces: <input type="number" min={1} max={8} value={spaces} onChange={e => setSpaces(Number(e.target.value))} className="w-16 bg-gray-900 border border-gray-700 rounded p-1 text-center" /></label>
      </div>
      <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono mb-4" placeholder="Paste code here..." value={text} onChange={e => setText(e.target.value)} />
      {text && <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono" readOnly value={convert()} />}
    </div>
  );
}