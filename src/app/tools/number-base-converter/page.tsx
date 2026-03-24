"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [value, setValue] = useState("");
  const [base, setBase] = useState(10);
  function convert(v: string, from: number) {
    const n = parseInt(v, from);
    if (isNaN(n)) return null;
    return { dec: n.toString(10), bin: n.toString(2), oct: n.toString(8), hex: n.toString(16).toUpperCase() };
  }
  const result = value ? convert(value, base) : null;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-gray-400 mb-6">Convert between decimal, binary, octal, and hexadecimal.</p>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1">Input Base</label>
          <div className="flex gap-2 mb-3">
            {[{b:10,l:"Decimal"},{b:2,l:"Binary"},{b:8,l:"Octal"},{b:16,l:"Hex"}].map(({b,l})=>(
              <button key={b} onClick={()=>{setBase(b);setValue("");}} className={`px-3 py-1 rounded text-sm font-medium ${base===b?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{l}</button>
            ))}
          </div>
          <input value={value} onChange={e=>setValue(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-lg" placeholder={base===2?"1010":base===8?"17":base===16?"FF":"255"} />
        </div>
        {result ? (
          <div className="space-y-3">
            {[{l:"Decimal (base 10)",v:result.dec},{l:"Binary (base 2)",v:result.bin},{l:"Octal (base 8)",v:result.oct},{l:"Hexadecimal (base 16)",v:result.hex}].map(({l,v})=>(
              <div key={l} className="bg-gray-900 rounded p-3 flex justify-between items-center">
                <span className="text-gray-400 text-sm">{l}</span>
                <div className="flex items-center gap-2">
                  <code className="text-green-400 font-mono text-lg">{v}</code>
                  <button onClick={()=>navigator.clipboard.writeText(v)} className="text-xs px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">Copy</button>
                </div>
              </div>
            ))}
          </div>
        ) : value ? <p className="text-red-400">Invalid input for base {base}</p> : null}
      </div>
    </main>
  );
}
