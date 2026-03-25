"use client"
import { useState } from "react"
export default function AspectRatioCalculator() {
  const [w, setW] = useState("16")
  const [h, setH] = useState("9")
  const [tw, setTw] = useState("1920")
  const [result, setResult] = useState("")
  const calc = () => {
    const ratio = parseInt(w) / parseInt(h)
    const th = Math.round(parseInt(tw) / ratio)
    setResult(`${tw} x ${th} px`)
  }
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Aspect Ratio Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate dimensions for any aspect ratio</p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-400 mb-1">Width ratio</label><input className="w-full bg-gray-800 rounded p-3" value={w} onChange={e=>setW(e.target.value)}/></div>
            <div><label className="block text-sm text-gray-400 mb-1">Height ratio</label><input className="w-full bg-gray-800 rounded p-3" value={h} onChange={e=>setH(e.target.value)}/></div>
          </div>
          <div><label className="block text-sm text-gray-400 mb-1">Target width (px)</label><input className="w-full bg-gray-800 rounded p-3" value={tw} onChange={e=>setTw(e.target.value)}/></div>
          <button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded p-4 text-center"><p className="text-gray-400 text-sm mb-1">Result</p><p className="text-2xl font-mono font-bold text-green-400">{result}</p></div>}
        </div>
      </div>
    </div>
  )
}