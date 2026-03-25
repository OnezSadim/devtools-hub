"use client"
import { useState } from "react"
export default function TextShadowGenerator() {
  const [x, setX] = useState("2")
  const [y, setY] = useState("2")
  const [blur, setBlur] = useState("4")
  const [color, setColor] = useState("#000000")
  const [text, setText] = useState("Hello World")
  const shadow = `${x}px ${y}px ${blur}px ${color}`
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Shadow Generator</h1>
        <p className="text-gray-400 mb-8">Create CSS text-shadow effects visually</p>
        <div className="bg-gray-800 rounded-xl p-8 mb-6 text-center">
          <p className="text-4xl font-bold" style={{textShadow:shadow,color:"white"}}>{text}</p>
        </div>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Preview text</label><input className="w-full bg-gray-800 rounded p-3" value={text} onChange={e=>setText(e.target.value)}/></div>
          {[{l:"X Offset",v:x,s:setX},{l:"Y Offset",v:y,s:setY},{l:"Blur",v:blur,s:setBlur}].map(({l,v,s})=>(
            <div key={l}><label className="block text-sm text-gray-400 mb-1">{l} ({v}px)</label><input type="range" min="-20" max="20" value={v} onChange={e=>s(e.target.value)} className="w-full"/></div>
          ))}
          <div><label className="block text-sm text-gray-400 mb-1">Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-full h-10 rounded"/></div>
          <div className="bg-gray-900 rounded p-4"><code className="text-green-400">text-shadow: {shadow};</code></div>
          <button onClick={()=>navigator.clipboard.writeText(`text-shadow: ${shadow};`)} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Copy CSS</button>
        </div>
      </div>
    </div>
  )
}