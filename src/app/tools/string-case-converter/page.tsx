"use client";
import { useState } from "react";
const to = {
  upper: (s:string) => s.toUpperCase(),
  lower: (s:string) => s.toLowerCase(),
  title: (s:string) => s.replace(/\w\S*/g, t => t[0].toUpperCase()+t.slice(1).toLowerCase()),
  camel: (s:string) => s.replace(/[^a-zA-Z0-9]+(.)/g,(_,c)=>c.toUpperCase()).replace(/^./,c=>c.toLowerCase()),
  pascal: (s:string) => s.replace(/[^a-zA-Z0-9]+(.)/g,(_,c)=>c.toUpperCase()).replace(/^./,c=>c.toUpperCase()),
  snake: (s:string) => s.replace(/[\s-]+/g,'_').replace(/([a-z])([A-Z])/g,'$1_$2').toLowerCase(),
  kebab: (s:string) => s.replace(/[\s_]+/g,'-').replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase(),
  constant: (s:string) => s.replace(/[\s-]+/g,'_').replace(/([a-z])([A-Z])/g,'$1_$2').toUpperCase(),
};
export default function StringCase() {
  const [input, setInput] = useState('Hello World Example');
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">String Case Converter</h1>
        <p className="text-gray-400 mb-6">Convert text between camelCase, snake_case, kebab-case and more</p>
        <textarea className="w-full h-24 bg-gray-900 rounded p-3 font-mono mb-6" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text..."/>
        <div className="space-y-3">
          {Object.entries(to).map(([name,fn]) => (
            <div key={name} className="bg-gray-900 rounded p-3 flex justify-between items-center">
              <span className="text-gray-400 w-28">{name}</span>
              <span className="font-mono text-green-400 flex-1 mx-4 truncate">{fn(input)}</span>
              <button onClick={()=>navigator.clipboard.writeText(fn(input))} className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}