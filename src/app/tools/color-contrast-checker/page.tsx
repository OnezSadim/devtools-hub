"use client"
import { useState } from "react"

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  return {r,g,b}
}

function luminance({r,g,b}: {r:number,g:number,b:number}) {
  const [rs,gs,bs] = [r,g,b].map(c => {
    const s = c/255
    return s <= 0.03928 ? s/12.92 : Math.pow((s+0.055)/1.055, 2.4)
  })
  return 0.2126*rs + 0.7152*gs + 0.0722*bs
}

function contrastRatio(hex1: string, hex2: string) {
  const l1 = luminance(hexToRgb(hex1))
  const l2 = luminance(hexToRgb(hex2))
  const [light, dark] = l1 > l2 ? [l1,l2] : [l2,l1]
  return (light + 0.05) / (dark + 0.05)
}

export default function ColorContrastChecker() {
  const [fg, setFg] = useState("#ffffff")
  const [bg, setBg] = useState("#000000")
  const ratio = contrastRatio(fg, bg)
  const pass = (min: number) => ratio >= min
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Color Contrast Checker</h1>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm mb-2">Foreground</label>
          <div className="flex gap-2">
            <input type="color" value={fg} onChange={e=>setFg(e.target.value)} className="w-12 h-10 rounded cursor-pointer" />
            <input value={fg} onChange={e=>setFg(e.target.value)} className="flex-1 bg-gray-800 rounded px-3" />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-2">Background</label>
          <div className="flex gap-2">
            <input type="color" value={bg} onChange={e=>setBg(e.target.value)} className="w-12 h-10 rounded cursor-pointer" />
            <input value={bg} onChange={e=>setBg(e.target.value)} className="flex-1 bg-gray-800 rounded px-3" />
          </div>
        </div>
      </div>
      <div className="rounded-lg p-8 text-center mb-6" style={{background:bg, color:fg}}>
        <p className="text-2xl font-bold">Sample Text</p>
        <p className="text-sm">Preview how your colors look together</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6">
        <p className="text-3xl font-bold mb-4">{ratio.toFixed(2)}:1</p>
        <div className="grid grid-cols-2 gap-4">
          {[["AA Normal",4.5],["AA Large",3],["AAA Normal",7],["AAA Large",4.5]].map(([label,min])=>(
            <div key={label as string} className={`p-3 rounded flex justify-between ${pass(min as number)?"bg-green-900 text-green-300":"bg-red-900 text-red-300"}`}>
              <span>{label as string}</span>
              <span>{pass(min as number)?"PASS":"FAIL"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
