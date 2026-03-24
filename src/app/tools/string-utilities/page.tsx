"use client";
import { useState } from "react";
export default function StringUtilities() {
  const [input, setInput] = useState("");
  const ops = [
    { label: "Reverse", fn: s => s.split("").reverse().join("") },
    { label: "Trim whitespace", fn: s => s.trim() },
    { label: "Remove extra spaces", fn: s => s.replace(/\s+/g, " ").trim() },
    { label: "Remove all spaces", fn: s => s.replace(/\s/g, "") },
    { label: "Remove numbers", fn: s => s.replace(/[0-9]/g, "") },
    { label: "Remove special chars", fn: s => s.replace(/[^a-zA-Z0-9\s]/g, "") },
    { label: "Count chars", fn: s => String(s.length) },
    { label: "Repeat x3", fn: s => s.repeat(3) },
    { label: "Palindrome check", fn: s => { const c = s.toLowerCase().replace(/\s/g,""); return c === c.split("").reverse().join("") ? "Yes, it is a palindrome" : "No, not a palindrome"; } },
  ];
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">String Utilities</h1><p className="text-gray-400 mb-6">Common string operations and transformations.</p><textarea className="w-full h-28 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-6" placeholder="Enter string..." value={input} onChange={e=>setInput(e.target.value)} /><div className="grid gap-3">{ops.map(({label,fn})=>(<div key={label} className="bg-gray-900 border border-gray-700 rounded p-3 flex flex-wrap items-center gap-3"><span className="text-sm text-blue-400 w-40">{label}</span><span className="font-mono text-sm break-all">{input ? fn(input) : <span className="text-gray-600">—</span>}</span></div>))}</div></div>);
}