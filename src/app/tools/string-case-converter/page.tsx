"use client"
import { useState } from "react"
export default function StringCaseConverter() {
  const [input, setInput] = useState("hello world example")
  const words = input.toLowerCase().replace(/[^a-z0-9 ]/g," ").trim().split(/\s+/)
  const cases = {
    camelCase: words.map((w,i)=>i===0?w:w[0].toUpperCase()+w.slice(1)).join(""),
    PascalCase: words.map(w=>w[0].toUpperCase()+w.slice(1)).join(""),
    snake_case: words.join("_"),
    "kebab-case": words.join("-"),
    UPPER_CASE: words.join("_").toUpperCase(),
    "Title Case": words.map(w=>w[0].toUpperCase()+w.slice(1)).join(" "),
    "dot.case": words.join("."),
    "SCREAMING-KEBAB": words.join("-").toUpperCase(),
  }
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">String Case Converter</h1>
        <p className="text-gray-400 mb-8">Convert between naming conventions</p>
        <div className="mb-6"><label className="block text-sm text-gray-400 mb-1">Input string</label><input className="w-full bg-gray-800 rounded p-3 font-mono" value={input} onChange={e=>setInput(e.target.value)}/></div>
        <div className="space-y-3">
          {Object.entries(cases).map(([name,val])=>(
            <div key={name} className="bg-gray-800 rounded p-3 flex items-center justify-between">
              <div><p className="text-xs text-gray-500">{name}</p><p className="font-mono text-green-400">{val}</p></div>
              <button onClick={()=>navigator.clipboard.writeText(val)} className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}