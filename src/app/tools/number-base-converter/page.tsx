"use client";
import { useState } from "react";

export default function NumberBaseConverter() {
  const [val, setVal] = useState("");
  const [base, setBase] = useState(10);

  let n: number | null = null;
  try { n = parseInt(val, base); if (isNaN(n)) n = null; } catch { n = null; }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
      <p className="text-gray-400 mb-6">Convert numbers between binary, octal, decimal, and hexadecimal.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg">
        <div className="flex gap-2 mb-4">
          {[[2,"Binary"],[8,"Octal"],[10,"Decimal"],[16,"Hex"]].map(([b,label])=>(
            <button key={b} onClick={()=>{setBase(b as number);setVal("");}} className={`px-4 py-2 rounded text-sm ${base===b?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{label as string}</button>
          ))}
        </div>
        <label className="text-sm text-gray-400 block mb-1">Enter {base===2?"Binary":base===8?"Octal":base===10?"Decimal":"Hex"} Number</label>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder={base===2?"1010":base===8?"755":base===10?"255":"FF"} className="w-full bg-gray-800 rounded p-2 font-mono mb-4" />
        {n !== null && (
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800 rounded p-3">
              <div className="text-xs text-gray-400 mb-1">Binary (base 2)</div>
              <div className="font-mono text-green-400">{n.toString(2)}</div>
            </div>
            <div className="bg-gray-800 rounded p-3">
              <div className="text-xs text-gray-400 mb-1">Octal (base 8)</div>
              <div className="font-mono text-green-400">{n.toString(8)}</div>
            </div>
            <div className="bg-gray-800 rounded p-3">
              <div className="text-xs text-gray-400 mb-1">Decimal (base 10)</div>
              <div className="font-mono text-green-400">{n.toString(10)}</div>
            </div>
            <div className="bg-gray-800 rounded p-3">
              <div className="text-xs text-gray-400 mb-1">Hexadecimal (base 16)</div>
              <div className="font-mono text-yellow-400">{n.toString(16).toUpperCase()}</div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}