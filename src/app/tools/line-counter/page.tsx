"use client"
import { useState } from "react"
export default function LineCounter() {
  const [text, setText] = useState("")
  const lines = text ? text.split("\n").length : 0
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const chars = text.length
  const charsNoSpace = text.replace(/\s/g,"").length
  const bytes = new TextEncoder().encode(text).length
  const stats = [{l:"Lines",v:lines},{l:"Words",v:words},{l:"Characters",v:chars},{l:"Chars (no spaces)",v:charsNoSpace},{l:"Bytes (UTF-8)",v:bytes}]
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Line Counter</h1>
        <p className="text-gray-400 mb-8">Count lines, words, characters and bytes</p>
        <textarea className="w-full bg-gray-800 rounded p-4 h-64 font-mono text-sm mb-6" placeholder="Paste your text here..." value={text} onChange={e=>setText(e.target.value)}/>
        <div className="grid grid-cols-3 gap-4">
          {stats.map(({l,v})=>(
            <div key={l} className="bg-gray-800 rounded p-4 text-center"><p className="text-xs text-gray-400 mb-1">{l}</p><p className="text-2xl font-mono font-bold text-green-400">{v.toLocaleString()}</p></div>
          ))}
        </div>
      </div>
    </div>
  )
}