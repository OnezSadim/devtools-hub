"use client"
import { useState } from "react"

export default function SvgPathEditor() {
  const [path, setPath] = useState("M 10 10 L 90 10 L 90 90 L 10 90 Z")
  const [size, setSize] = useState("100")
  const [fill, setFill] = useState("#3b82f6")
  const [stroke, setStroke] = useState("#1e40af")
  const [sw, setSw] = useState("2")
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">SVG Path Editor</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2">SVG Path (d attribute)</label>
          <textarea value={path} onChange={e=>setPath(e.target.value)} rows={6} className="w-full bg-gray-800 rounded px-3 py-2 font-mono text-sm" />
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div><label className="block text-xs mb-1 text-gray-400">ViewBox Size</label><input value={size} onChange={e=>setSize(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" /></div>
            <div><label className="block text-xs mb-1 text-gray-400">Fill</label><input type="color" value={fill} onChange={e=>setFill(e.target.value)} className="w-full h-10 rounded cursor-pointer" /></div>
            <div><label className="block text-xs mb-1 text-gray-400">Stroke</label><input type="color" value={stroke} onChange={e=>setStroke(e.target.value)} className="w-full h-10 rounded cursor-pointer" /></div>
            <div><label className="block text-xs mb-1 text-gray-400">Stroke Width</label><input value={sw} onChange={e=>setSw(e.target.value)} className="w-full bg-gray-800 rounded px-3 py-2" /></div>
          </div>
        </div>
        <div>
          <label className="block text-sm mb-2">Preview</label>
          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center h-64">
            <svg viewBox={`0 0 ${size} ${size}`} width="200" height="200">
              <path d={path} fill={fill} stroke={stroke} strokeWidth={sw} />
            </svg>
          </div>
          <div className="mt-3">
            <label className="block text-sm mb-2">SVG Code</label>
            <pre className="bg-gray-800 rounded p-3 text-xs overflow-auto">{`<svg viewBox="0 0 ${size} ${size}">
  <path d="${path}"
    fill="${fill}" stroke="${stroke}"
    stroke-width="${sw}" />
</svg>`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
