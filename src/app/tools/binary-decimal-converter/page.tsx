"use client";
import { useState } from "react";
export default function BinaryDecimalConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("bin2dec");
  const [result, setResult] = useState(null);
  function convert() {
    if (!input.trim()) return;
    try {
      let dec, bin, hex, oct;
      if (mode==="bin2dec") {
        if (!/^[01]+$/.test(input.trim())) { setResult({error:"Invalid binary (only 0 and 1)"}); return; }
        dec = parseInt(input.trim(), 2);
      } else {
        dec = parseInt(input.trim(), 10);
        if (isNaN(dec) || dec < 0) { setResult({error:"Enter a non-negative integer"}); return; }
      }
      bin = dec.toString(2);
      hex = dec.toString(16).toUpperCase();
      oct = dec.toString(8);
      setResult({ dec, bin, hex, oct });
    } catch(e) { setResult({error:"Conversion error"}); }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Binary ↔ Decimal Converter</h1>
        <p className="text-gray-400 mb-6">Convert between binary, decimal, hex, and octal.</p>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setMode("bin2dec")} className={"flex-1 py-2 rounded "+(mode==="bin2dec"?"bg-blue-600":"bg-gray-700 hover:bg-gray-600")}>Binary → Decimal</button>
          <button onClick={()=>setMode("dec2bin")} className={"flex-1 py-2 rounded "+(mode==="dec2bin"?"bg-blue-600":"bg-gray-700 hover:bg-gray-600")}>Decimal → Binary</button>
        </div>
        <div className="flex gap-2 mb-4">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&convert()} className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" placeholder={mode==="bin2dec"?"1010":"42"} />
          <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 rounded font-semibold">Convert</button>
        </div>
        {result && (
          <div className="bg-gray-800 rounded p-4 space-y-2">
            {result.error ? <p className="text-red-400">{result.error}</p> : (
              ["Decimal","dec","Binary","bin","Hexadecimal","hex","Octal","oct"].reduce((acc,_,i,arr)=>{
                if(i%2===0) acc.push(
                  <div key={arr[i+1]} className="flex justify-between items-center">
                    <span className="text-gray-400">{arr[i]}</span>
                    <span className="font-mono bg-gray-900 px-3 py-1 rounded">{result[arr[i+1]]}</span>
                  </div>
                ); return acc;
              },[])
            )}
          </div>
        )}
        <div className="mt-6 grid grid-cols-4 gap-2 text-center text-xs text-gray-500">
          {[[2,"Binary"],[8,"Octal"],[10,"Decimal"],[16,"Hex"]].map(([base,name])=>(
            <div key={base} className="bg-gray-800 rounded p-2"><div className="font-semibold text-gray-300">Base {base}</div><div>{name}</div></div>
          ))}
        </div>
      </div>
    </main>
  );
}
