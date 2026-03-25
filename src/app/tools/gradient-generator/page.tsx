"use client"
import { useState } from "react"
export default function GradientGenerator() {
  const [c1, setC1] = useState("#6366f1")
  const [c2, setC2] = useState("#ec4899")
  const [angle, setAngle] = useState("135")
  const [type, setType] = useState("linear")
  const css = type === "linear" ? `linear-gradient(${angle}deg, ${c1}, ${c2})` : `radial-gradient(circle, ${c1}, ${c2})`
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSS Gradient Generator</h1>
        <p className="text-gray-400 mb-8">Generate beautiful CSS gradients</p>
        <div className="rounded-xl mb-6 h-48" style={{background: css}}/>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-400 mb-1">Color 1</label><input type="color" className="w-full h-12 rounded" value={c1} onChange={e=>setC1(e.target.value)}/></div>
            <div><label className="block text-sm text-gray-400 mb-1">Color 2</label><input type="color" className="w-full h-12 rounded" value={c2} onChange={e=>setC2(e.target.value)}/></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-400 mb-1">Type</label><select className="w-full bg-gray-800 rounded p-3" value={type} onChange={e=>setType(e.target.value)}><option value="linear">Linear</option><option value="radial">Radial</option></select></div>
            <div><label className="block text-sm text-gray-400 mb-1">Angle</label><input type="range" min="0" max="360" className="w-full mt-3" value={angle} onChange={e=>setAngle(e.target.value)}/><span className="text-sm text-gray-400">{angle}°</span></div>
          </div>
          <div className="bg-gray-800 rounded p-4"><p className="text-sm text-gray-400 mb-1">CSS</p><code className="text-green-400 text-sm break-all">background: {css};</code></div>
          <button onClick={()=>navigator.clipboard.writeText(`background: ${css};`)} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Copy CSS</button>
        </div>
      </div>
    </div>
  )
}