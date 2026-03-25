"use client"
import { useState } from "react"
export default function PixelConverter() {
  const [px, setPx] = useState("16")
  const [base, setBase] = useState("16")
  const rem = (parseFloat(px) / parseFloat(base)).toFixed(4)
  const em = rem
  const pt = (parseFloat(px) * 0.75).toFixed(2)
  const sizes = [10,12,14,16,18,20,24,32,48,64]
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pixel ↔ REM Converter</h1>
        <p className="text-gray-400 mb-8">Convert pixel values to REM, EM, PT units</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Pixel value</label><input type="number" className="w-full bg-gray-800 rounded p-3" value={px} onChange={e=>setPx(e.target.value)}/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Base font size (px)</label><input type="number" className="w-full bg-gray-800 rounded p-3" value={base} onChange={e=>setBase(e.target.value)}/></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[{l:"REM",v:`${rem}rem`},{l:"EM",v:`${em}em`},{l:"PT",v:`${pt}pt`}].map(({l,v})=>(
            <div key={l} className="bg-gray-800 rounded p-4 text-center"><p className="text-xs text-gray-400 mb-1">{l}</p><p className="text-xl font-mono text-green-400">{v}</p></div>
          ))}
        </div>
        <h2 className="text-lg font-semibold mb-3">Common sizes (base: {base}px)</h2>
        <div className="space-y-2">{sizes.map(s=><div key={s} className="flex justify-between bg-gray-800 rounded px-4 py-2 text-sm"><span className="font-mono">{s}px</span><span className="text-green-400">{(s/parseFloat(base)).toFixed(4)}rem</span></div>)}</div>
      </div>
    </div>
  )
}