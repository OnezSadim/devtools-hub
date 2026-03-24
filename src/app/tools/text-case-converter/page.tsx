"use client";
import { useState } from "react";
export default function TextCaseConverter() {
  const [text, setText] = useState("");
  const cases = [
    {label:"UPPER CASE", fn:(s:string)=>s.toUpperCase()},
    {label:"lower case", fn:(s:string)=>s.toLowerCase()},
    {label:"Title Case", fn:(s:string)=>s.replace(/\w\S*/g,t=>t[0].toUpperCase()+t.slice(1).toLowerCase())},
    {label:"Sentence case", fn:(s:string)=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()},
    {label:"camelCase", fn:(s:string)=>s.split(" ").map((w,i)=>i===0?w.toLowerCase():w[0].toUpperCase()+w.slice(1).toLowerCase()).join("")},
    {label:"snake_case", fn:(s:string)=>s.toLowerCase().replace(/\s+/g,"_")},
    {label:"kebab-case", fn:(s:string)=>s.toLowerCase().replace(/\s+/g,"-")},
    {label:"PascalCase", fn:(s:string)=>s.split(" ").map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join("")},
  ];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Text Case Converter</h1>
      <textarea className="w-full h-32 p-3 bg-gray-800 rounded border border-gray-600 text-white mb-4" placeholder="Enter text..." value={text} onChange={e=>setText(e.target.value)} />
      <div className="space-y-2">
        {cases.map(c=>(
          <div key={c.label} className="flex items-center justify-between p-3 bg-gray-800 rounded">
            <span className="text-gray-400 text-sm w-32">{c.label}</span>
            <span className="flex-1 font-mono text-sm mx-4 truncate">{text?c.fn(text):"—"}</span>
            <button onClick={()=>navigator.clipboard?.writeText(c.fn(text))} className="text-blue-400 text-xs hover:text-blue-300">Copy</button>
          </div>
        ))}
      </div>
    </div>
  );
}