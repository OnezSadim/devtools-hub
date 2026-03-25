"use client"
import { useState } from "react"

export default function AspectRatioCalculator() {
  const [w, setW] = useState("1920")
  const [h, setH] = useState("1080")
  const gcd = (a:number,b:number):number => b===0?a:gcd(b,a%b)
  const g = gcd(parseInt(w)||1, parseInt(h)||1)
  const rw = (parseInt(w)||0)/g
  const rh = (parseInt(h)||0)/g
  const ratio = ((parseInt(w)||0)/(parseInt(h)||1)).toFixed(4)
  const common = [{label:"16:9",w:1920,h:1080},{label:"4:3",w:1024,h:768},{label:"1:1",w:1080,h:1080},{label:"9:16",w:1080,h:1920},{label:"21:9",w:2560,h:1080},{label:"3:2",w:1500,h:1000}]
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Aspect Ratio Calculator</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div><label className="block text-sm mb-1">Width</label><input value={w} onChange={e=>setW(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" /></div>
        <div><label className="block text-sm mb-1">Height</label><input value={h} onChange={e=>setH(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" /></div>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <p className="text-4xl font-bold text-blue-400">{rw}:{rh}</p>
        <p className="text-gray-400 mt-1">Decimal: {ratio}</p>
      </div>
      <h2 className="text-lg font-semibold mb-3">Common Ratios</h2>
      <div className="grid grid-cols-3 gap-3">
        {common.map(c=>(
          <button key={c.label} onClick={()=>{setW(String(c.w));setH(String(c.h))}} className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 text-center">
            <p className="font-bold text-blue-400">{c.label}</p>
            <p className="text-xs text-gray-400">{c.w}x{c.h}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
