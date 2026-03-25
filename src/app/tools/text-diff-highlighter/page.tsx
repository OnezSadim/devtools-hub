"use client"
import { useState } from "react"

function diffWords(a: string, b: string) {
  const wa = a.split(/\s+/)
  const wb = b.split(/\s+/)
  const result: {text:string,type:"same"|"add"|"del"}[] = []
  let i=0,j=0
  while(i<wa.length||j<wb.length) {
    if(i>=wa.length){result.push({text:wb[j],type:"add"});j++}
    else if(j>=wb.length){result.push({text:wa[i],type:"del"});i++}
    else if(wa[i]===wb[j]){result.push({text:wa[i],type:"same"});i++;j++}
    else{result.push({text:wa[i],type:"del"});result.push({text:wb[j],type:"add"});i++;j++}
  }
  return result
}

export default function TextDiffHighlighter() {
  const [a, setA] = useState("The quick brown fox jumps over the lazy dog")
  const [b, setB] = useState("The fast brown fox leaps over the sleepy cat")
  const diff = diffWords(a, b)
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Text Diff Highlighter</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm mb-2">Original Text</label>
          <textarea value={a} onChange={e=>setA(e.target.value)} rows={6} className="w-full bg-gray-800 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-2">Modified Text</label>
          <textarea value={b} onChange={e=>setB(e.target.value)} rows={6} className="w-full bg-gray-800 rounded px-3 py-2" />
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <h2 className="text-sm font-semibold mb-3">Differences</h2>
        <p className="leading-8">
          {diff.map((d,i)=>(
            <span key={i} className={`mr-1 px-1 rounded ${d.type==="add"?"bg-green-900 text-green-300":d.type==="del"?"bg-red-900 text-red-300 line-through":""}` }>{d.text}</span>
          ))}
        </p>
        <div className="flex gap-4 mt-4 text-xs">
          <span className="bg-green-900 text-green-300 px-2 py-1 rounded">Added</span>
          <span className="bg-red-900 text-red-300 line-through px-2 py-1 rounded">Removed</span>
        </div>
      </div>
    </div>
  )
}
