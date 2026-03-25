"use client";
import { useState } from "react";
export default function TextCaseConverter() {
  const [text, setText] = useState("");
  const toCamel = s => s.replace(/[-_\s]+(.)?/g,(m,c)=>c?c.toUpperCase():"");
  const toSnake = s => s.replace(/\s+/g,"_").replace(/([A-Z])/g,m=>"_"+m.toLowerCase()).replace(/^_/,"").toLowerCase();
  const toKebab = s => s.replace(/\s+/g,"-").replace(/([A-Z])/g,m=>"-"+m.toLowerCase()).replace(/^-/,"").toLowerCase();
  const toPascal = s => toCamel(s).replace(/^./,m=>m.toUpperCase());
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Text Case Converter</h1>
      <textarea className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 h-24 mb-4" placeholder="Enter text..." value={text} onChange={e=>setText(e.target.value)} />
      {text && (
        <div className="space-y-2">
          <div className="p-3 bg-gray-800 rounded text-white">UPPERCASE: {text.toUpperCase()}</div>
          <div className="p-3 bg-gray-800 rounded text-white">lowercase: {text.toLowerCase()}</div>
          <div className="p-3 bg-gray-800 rounded text-white">camelCase: {toCamel(text)}</div>
          <div className="p-3 bg-gray-800 rounded text-white">PascalCase: {toPascal(text)}</div>
          <div className="p-3 bg-gray-800 rounded text-white">snake_case: {toSnake(text)}</div>
          <div className="p-3 bg-gray-800 rounded text-white">kebab-case: {toKebab(text)}</div>
        </div>
      )}
    </div>
  );
}