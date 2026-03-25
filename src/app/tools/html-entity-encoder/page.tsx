"use client"
import { useState } from "react"
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("<h1>Hello & World!</h1>")
  const [mode, setMode] = useState("encode")
  const encode = (s) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")
  const decode = (s) => s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")
  const output = mode === "encode" ? encode(input) : decode(input)
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML Entity Encoder</h1>
        <p className="text-gray-400 mb-8">Encode or decode HTML special characters</p>
        <div className="flex gap-2 mb-4">
          {["encode","decode"].map(m=><button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded capitalize ${mode===m?"bg-blue-600":"bg-gray-800"}`}>{m}</button>)}
        </div>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Input</label><textarea className="w-full bg-gray-800 rounded p-3 h-32 font-mono text-sm" value={input} onChange={e=>setInput(e.target.value)}/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Output</label><textarea className="w-full bg-gray-900 rounded p-3 h-32 font-mono text-sm text-green-400" readOnly value={output}/></div>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Copy Output</button>
        </div>
      </div>
    </div>
  )
}