"use client"
import { useState } from "react"
export default function SvgOptimizer() {
  const [input, setInput] = useState('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" style="" data-name="test"><circle cx="50" cy="50" r="40" fill="red"/></svg>')
  const optimize = (svg) => {
    return svg
      .replace(/\s+style=""/g,"")
      .replace(/\s+data-[a-z-]+="[^"]*"/g,"")
      .replace(/<!--[\s\S]*?-->/g,"")
      .replace(/\s+id="layer[^"]*"/g,"")
      .replace(/>\s+</g,"><")
      .replace(/\s{2,}/g," ")
      .trim()
  }
  const optimized = optimize(input)
  const savings = input.length > 0 ? Math.round((1 - optimized.length/input.length)*100) : 0
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SVG Optimizer</h1>
        <p className="text-gray-400 mb-8">Clean SVG code by removing unnecessary attributes and whitespace</p>
        {savings > 0 && <div className="bg-green-900 rounded p-3 mb-4 text-green-300">Reduced by {savings}% ({input.length - optimized.length} bytes saved)</div>}
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm text-gray-400 mb-1">Input SVG ({input.length} bytes)</label><textarea className="w-full bg-gray-800 rounded p-3 h-64 font-mono text-xs" value={input} onChange={e=>setInput(e.target.value)}/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Optimized ({optimized.length} bytes)</label><textarea className="w-full bg-gray-900 rounded p-3 h-64 font-mono text-xs text-green-400" readOnly value={optimized}/></div>
        </div>
        <button onClick={()=>navigator.clipboard.writeText(optimized)} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Copy Optimized SVG</button>
      </div>
    </div>
  )
}