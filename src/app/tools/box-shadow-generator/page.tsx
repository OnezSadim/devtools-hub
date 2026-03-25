"use client"
import { useState } from "react"
export default function BoxShadowGenerator() {
  const [x, setX] = useState("0")
  const [y, setY] = useState("4")
  const [blur, setBlur] = useState("8")
  const [spread, setSpread] = useState("0")
  const [color, setColor] = useState("#000000")
  const [opacity, setOpacity] = useState("0.3")
  const [inset, setInset] = useState(false)
  const hex2rgb = (h) => { const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16); return `rgba(${r},${g},${b},${opacity})` }
  const shadow = `${inset?"inset ":""} ${x}px ${y}px ${blur}px ${spread}px ${hex2rgb(color)}`
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Box Shadow Generator</h1>
        <p className="text-gray-400 mb-8">Create CSS box shadows visually</p>
        <div className="flex justify-center mb-8"><div className="w-40 h-40 bg-white rounded-xl" style={{boxShadow: shadow}}/></div>
        <div className="grid grid-cols-2 gap-4">
          {[{l:"X Offset",v:x,s:setX},{l:"Y Offset",v:y,s:setY},{l:"Blur",v:blur,s:setBlur},{l:"Spread",v:spread,s:setSpread}].map(({l,v,s})=>(
            <div key={l}><label className="block text-sm text-gray-400 mb-1">{l} ({v}px)</label><input type="range" min="-50" max="50" value={v} onChange={e=>s(e.target.value)} className="w-full"/></div>
          ))}
          <div><label className="block text-sm text-gray-400 mb-1">Color</label><input type="color" value={color} onChange={e=>setColor(e.target.value)} className="w-full h-10 rounded"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Opacity ({opacity})</label><input type="range" min="0" max="1" step="0.05" value={opacity} onChange={e=>setOpacity(e.target.value)} className="w-full"/></div>
        </div>
        <div className="mt-4 flex items-center gap-3"><input type="checkbox" checked={inset} onChange={e=>setInset(e.target.checked)} className="w-4 h-4"/><label>Inset shadow</label></div>
        <div className="mt-4 bg-gray-800 rounded p-4"><code className="text-green-400 text-sm break-all">box-shadow: {shadow};</code></div>
        <button onClick={()=>navigator.clipboard.writeText(`box-shadow: ${shadow};`)} className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold">Copy CSS</button>
      </div>
    </div>
  )
}