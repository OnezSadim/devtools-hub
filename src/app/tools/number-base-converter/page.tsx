"use client"
import { useState } from "react"
export default function NumberBaseConverter() {
  const [val, setVal] = useState("255")
  const [base, setBase] = useState(10)
  let decimal = 0
  try { decimal = parseInt(val, base) } catch(e) {}
  const bases = [{name:"Binary (2)",b:2},{name:"Octal (8)",b:8},{name:"Decimal (10)",b:10},{name:"Hex (16)",b:16}]
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-gray-400 mb-8">Convert between binary, octal, decimal, hexadecimal</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Input</label><input className="w-full bg-gray-800 rounded p-3 font-mono" value={val} onChange={e=>setVal(e.target.value)}/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Input base</label><select className="w-full bg-gray-800 rounded p-3" value={base} onChange={e=>setBase(parseInt(e.target.value))}>{bases.map(({name,b})=><option key={b} value={b}>{name}</option>)}</select></div>
        </div>
        <div className="space-y-3">
          {bases.map(({name,b})=>(
            <div key={b} className="bg-gray-800 rounded p-4 flex justify-between items-center">
              <div><p className="text-xs text-gray-400 mb-1">{name}</p><p className="font-mono text-lg text-green-400">{isNaN(decimal)?"invalid":decimal.toString(b).toUpperCase()}</p></div>
              <button onClick={()=>!isNaN(decimal)&&navigator.clipboard.writeText(decimal.toString(b).toUpperCase())} className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}