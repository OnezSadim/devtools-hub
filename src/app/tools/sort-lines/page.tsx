"use client";
import { useState } from "react";
export default function SortLines() {
  const [text, setText] = useState("");
  const [order, setOrder] = useState<"asc"|"desc">("asc");
  const [dedupe, setDedupe] = useState(false);
  const sorted = () => {
    let lines = text.split("\n");
    if (dedupe) lines = [...new Set(lines)];
    return lines.sort((a,b) => order==="asc" ? a.localeCompare(b) : b.localeCompare(a)).join("\n");
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Sort Lines</h1>
      <p className="text-gray-400 mb-6">Sort lines of text alphabetically.</p>
      <div className="flex gap-4 mb-4 flex-wrap">
        <button onClick={() => setOrder("asc")} className={"px-4 py-2 rounded " + (order==="asc" ? "bg-blue-600" : "bg-gray-800")}>A → Z</button>
        <button onClick={() => setOrder("desc")} className={"px-4 py-2 rounded " + (order==="desc" ? "bg-blue-600" : "bg-gray-800")}>Z → A</button>
        <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={dedupe} onChange={e => setDedupe(e.target.checked)} /><span>Remove duplicates</span></label>
      </div>
      <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-4" placeholder="Paste lines here..." value={text} onChange={e => setText(e.target.value)} />
      {text && <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-sm" readOnly value={sorted()} />}
    </div>
  );
}