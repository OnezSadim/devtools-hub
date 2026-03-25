"use client"
import { useState } from "react"

function calcSpecificity(selector: string) {
  let a = 0, b = 0, c = 0
  let s = selector.replace(/:not\([^)]*\)/g, m => m)
  const ids = s.match(/#[a-zA-Z][\w-]*/g) || []
  a = ids.length
  s = s.replace(/#[a-zA-Z][\w-]*/g, "")
  const classes = s.match(/\.[a-zA-Z][\w-]*|\[[^\]]+\]|:[a-zA-Z][\w-]*/g) || []
  b = classes.length
  const elements = s.match(/[a-zA-Z][\w-]*/g) || []
  c = elements.filter(e => !["not","is","where","has"].includes(e)).length
  return {a, b, c, score: a*100 + b*10 + c}
}

export default function CssSpecificityCalculator() {
  const [input, setInput] = useState(".nav > ul li.active a:hover")
  const {a, b, c, score} = calcSpecificity(input)
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">CSS Specificity Calculator</h1>
      <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter CSS selector..." className="w-full bg-gray-800 rounded px-4 py-3 font-mono mb-6" />
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[["IDs",a,"bg-red-900 text-red-300"],["Classes",b,"bg-yellow-900 text-yellow-300"],["Elements",c,"bg-green-900 text-green-300"],["Score",score,"bg-blue-900 text-blue-300"]].map(([label,val,cls])=>(
          <div key={label as string} className={`${cls as string} rounded-lg p-4 text-center`}><p className="text-3xl font-bold">{val as number}</p><p className="text-sm mt-1">{label as string}</p></div>
        ))}
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <p className="text-sm text-gray-400 mb-2">Notation: ({a}, {b}, {c})</p>
        <p className="text-xs text-gray-500">IDs beat classes, classes beat elements. Inline styles = (1,0,0,0), !important overrides all.</p>
      </div>
    </div>
  )
}
