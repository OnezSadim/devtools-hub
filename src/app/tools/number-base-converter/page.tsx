"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [result, setResult] = useState(null);
  function convert() {
    const n=parseInt(input,fromBase);
    if(isNaN(n)){setResult({error:"Invalid number for base "+fromBase});return;}
    setResult({Binary:n.toString(2),Octal:n.toString(8),Decimal:n.toString(10),Hexadecimal:n.toString(16).toUpperCase(),Base32:n.toString(32).toUpperCase(),Base64chars:btoa(String.fromCharCode(n)).slice(0,20)});
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-gray-400 mb-6">Convert numbers between binary, octal, decimal, hex and more</p>
        <div className="flex gap-4 mb-4">
          <div className="flex-1"><label className="block text-sm text-gray-400 mb-1">Input</label><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter number" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">From base</label>
            <select value={fromBase} onChange={e=>setFromBase(Number(e.target.value))} className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
              {[2,8,10,16].map(b=><option key={b} value={b}>Base {b}</option>)}
            </select>
          </div>
        </div>
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold mb-4">Convert</button>
        {result&&!result.error&&(
          <div className="bg-gray-800 rounded p-4 grid grid-cols-2 gap-3">
            {Object.entries(result).map(([k,v])=>(
              <div key={k} className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">{k}</div>
                <div className="font-mono text-green-400 break-all">{v}</div>
              </div>
            ))}
          </div>
        )}
        {result&&result.error&&<div className="bg-red-900/30 text-red-400 rounded p-3">{result.error}</div>}
      </div>
    </div>
  );
}