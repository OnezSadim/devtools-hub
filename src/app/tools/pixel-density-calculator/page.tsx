"use client"
import { useState } from "react"

export default function PixelDensityCalculator() {
  const [w, setW] = useState("2560")
  const [h, setH] = useState("1600")
  const [diag, setDiag] = useState("13.3")
  const diagPx = Math.sqrt(Math.pow(parseInt(w)||0,2) + Math.pow(parseInt(h)||0,2))
  const ppi = diag ? (diagPx / parseFloat(diag)).toFixed(1) : "0"
  const quality = parseFloat(ppi) > 220 ? "Retina" : parseFloat(ppi) > 150 ? "High DPI" : parseFloat(ppi) > 100 ? "Good" : "Standard"
  const devices = [{name:"MacBook Pro 14",w:3024,h:1964,d:14.2},{name:"iPhone 15 Pro",w:2556,h:1179,d:6.1},{name:"iPad Pro 12.9",w:2732,h:2048,d:12.9},{name:"4K Monitor 27"",w:3840,h:2160,d:27}]
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Pixel Density Calculator (PPI)</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div><label className="block text-sm mb-1">Width (px)</label><input value={w} onChange={e=>setW(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" /></div>
        <div><label className="block text-sm mb-1">Height (px)</label><input value={h} onChange={e=>setH(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" /></div>
        <div><label className="block text-sm mb-1">Diagonal (inches)</label><input value={diag} onChange={e=>setDiag(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" /></div>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 text-center mb-6">
        <p className="text-5xl font-bold text-blue-400">{ppi}</p>
        <p className="text-lg text-gray-300">PPI</p>
        <p className="mt-2 text-sm text-green-400">{quality}</p>
      </div>
      <h2 className="text-lg font-semibold mb-3">Common Devices</h2>
      <div className="grid grid-cols-2 gap-3">
        {devices.map(d=>{
          const dp = Math.sqrt(d.w*d.w+d.h*d.h)/d.d
          return <button key={d.name} onClick={()=>{setW(String(d.w));setH(String(d.h));setDiag(String(d.d))}} className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 text-left"><p className="font-semibold text-sm">{d.name}</p><p className="text-xs text-blue-400">{dp.toFixed(0)} PPI</p></button>
        })}
      </div>
    </div>
  )
}
