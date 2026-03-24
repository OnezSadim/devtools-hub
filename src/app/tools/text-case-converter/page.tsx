"use client";
import { useState } from "react";

export default function TextCaseConverter() {
  const [input, setInput] = useState("");

  const toCase = (type: string) => {
    switch(type) {
      case "upper": return input.toUpperCase();
      case "lower": return input.toLowerCase();
      case "title": return input.replace(/\w\S*/g, t=>t[0].toUpperCase()+t.slice(1).toLowerCase());
      case "sentence": return input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c=>c.toUpperCase());
      case "camel": return input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_,c)=>c.toUpperCase());
      case "snake": return input.replace(/\s+/g,"_").replace(/([A-Z])/g,"_$1").replace(/^_/,"").toLowerCase();
      case "kebab": return input.replace(/\s+/g,"-").replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase();
      case "pascal": return input.toLowerCase().replace(/(^|[^a-zA-Z0-9])(.)/g,(_,__,c)=>c.toUpperCase());
      default: return input;
    }
  };

  const cases = [
    {label:"UPPERCASE",key:"upper"},{label:"lowercase",key:"lower"},
    {label:"Title Case",key:"title"},{label:"Sentence case",key:"sentence"},
    {label:"camelCase",key:"camel"},{label:"snake_case",key:"snake"},
    {label:"kebab-case",key:"kebab"},{label:"PascalCase",key:"pascal"}
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Case Converter</h1>
        <p className="text-gray-400 mb-6">Convert text between UPPERCASE, lowercase, camelCase, snake_case, and more.</p>
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text to convert..." className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 text-sm focus:outline-none focus:border-blue-500" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          {cases.map(c=>(
            <button key={c.key} onClick={()=>setInput(toCase(c.key))} className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded p-3 text-sm font-medium text-left">
              {c.label}
            </button>
          ))}
        </div>
        <button onClick={()=>navigator.clipboard.writeText(input)} className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Copy Result</button>
      </div>
    </main>
  );
}