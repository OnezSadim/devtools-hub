"use client"
import { useState } from "react"

export default function BinaryToDecimal() {
  const [bin, setBin] = useState("1010")
  const [dec, setDec] = useState("10")
  const [hex, setHex] = useState("a")
  const [oct, setOct] = useState("12")
  const fromBin = (v: string) => {
    const n = parseInt(v, 2)
    if(isNaN(n)) return
    setDec(String(n)); setHex(n.toString(16)); setOct(n.toString(8))
  }
  const fromDec = (v: string) => {
    const n = parseInt(v, 10)
    if(isNaN(n)) return
    setBin(n.toString(2)); setHex(n.toString(16)); setOct(n.toString(8))
  }
  const fromHex = (v: string) => {
    const n = parseInt(v, 16)
    if(isNaN(n)) return
    setBin(n.toString(2)); setDec(String(n)); setOct(n.toString(8))
  }
  const fromOct = (v: string) => {
    const n = parseInt(v, 8)
    if(isNaN(n)) return
    setBin(n.toString(2)); setDec(String(n)); setHex(n.toString(16))
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Number Base Converter</h1>
      <div className="space-y-4">
        {[
          {label:"Binary (Base 2)",val:bin,set:(v:string)=>{setBin(v);fromBin(v)},pattern:"[01]*"},
          {label:"Decimal (Base 10)",val:dec,set:(v:string)=>{setDec(v);fromDec(v)},pattern:"[0-9]*"},
          {label:"Hexadecimal (Base 16)",val:hex,set:(v:string)=>{setHex(v);fromHex(v)},pattern:"[0-9a-fA-F]*"},
          {label:"Octal (Base 8)",val:oct,set:(v:string)=>{setOct(v);fromOct(v)},pattern:"[0-7]*"}
        ].map(({label,val,set,pattern})=>(
          <div key={label}>
            <label className="block text-sm text-gray-400 mb-1">{label}</label>
            <input value={val} onChange={e=>set(e.target.value)} pattern={pattern} className="w-full bg-gray-800 rounded px-4 py-3 font-mono text-lg" />
          </div>
        ))}
      </div>
      <div className="mt-6 bg-gray-800 rounded-lg p-4">
        <p className="text-sm text-gray-400">Enter any value to convert between binary, decimal, hexadecimal, and octal instantly.</p>
      </div>
    </div>
  )
}
