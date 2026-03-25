"use client";
import { useState } from "react";
export default function BinaryCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("+");
  const [result, setResult] = useState(null);
  function calculate() {
    const av = parseInt(a,2), bv = parseInt(b,2);
    if (isNaN(av)||isNaN(bv)) { setResult({error:"Enter valid binary numbers"}); return; }
    let r;
    if (op==="+") r=av+bv;
    else if (op==="-") r=av-bv;
    else if (op==="*") r=av*bv;
    else if (op==="/") r=bv===0?NaN:Math.floor(av/bv);
    else if (op==="AND") r=av&bv;
    else if (op==="OR") r=av|bv;
    else if (op==="XOR") r=av^bv;
    else if (op==="NOT") r=~av;
    if (isNaN(r)) { setResult({error:"Division by zero"}); return; }
    setResult({decimal:r,binary:r.toString(2),hex:r.toString(16).toUpperCase(),octal:r.toString(8)});
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Binary Calculator</h1>
        <p className="text-gray-400 mb-6">Arithmetic and bitwise operations on binary numbers</p>
        <div className="space-y-4 mb-4">
          <div><label className="block text-sm text-gray-400 mb-1">Binary A</label><input value={a} onChange={e=>setA(e.target.value.replace(/[^01]/g,""))} placeholder="e.g. 1010" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" /></div>
          <div className="flex gap-2 flex-wrap">
            {["+","-","*","/","AND","OR","XOR","NOT"].map(o=>(
              <button key={o} onClick={()=>setOp(o)} className={`px-3 py-1 rounded text-sm ${op===o?"bg-blue-600":"bg-gray-700"}`}>{o}</button>
            ))}
          </div>
          <div><label className="block text-sm text-gray-400 mb-1">Binary B {op==="NOT"&&"(not used)"}</label><input value={b} onChange={e=>setB(e.target.value.replace(/[^01]/g,""))} placeholder="e.g. 0110" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" disabled={op==="NOT"} /></div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold mb-4">Calculate</button>
        {result&&!result.error&&(
          <div className="bg-gray-800 rounded p-4 grid grid-cols-2 gap-3">
            {Object.entries(result).map(([k,v])=>(
              <div key={k} className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400 capitalize">{k}</div>
                <div className="text-lg font-mono text-green-400">{v}</div>
              </div>
            ))}
          </div>
        )}
        {result&&result.error&&<div className="bg-red-900/30 text-red-400 rounded p-4">{result.error}</div>}
      </div>
    </div>
  );
}