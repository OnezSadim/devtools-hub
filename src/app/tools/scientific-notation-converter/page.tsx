"use client";
import { useState } from "react";
export default function ScientificNotationConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("to");
  const [result, setResult] = useState("");
  function convert() {
    if(mode==="to") {
      const n=parseFloat(input);
      if(isNaN(n)){setResult("Invalid number");return;}
      setResult(n.toExponential());
    } else {
      const match=input.trim().match(/^([+-]?[\d.]+)[eE]([+-]?\d+)$/);
      if(!match){setResult("Invalid scientific notation (e.g. 1.23e4)");return;}
      setResult(String(parseFloat(input)));
    }
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Scientific Notation Converter</h1>
        <p className="text-gray-400 mb-6">Convert between standard and scientific notation</p>
        <div className="flex gap-4 mb-4">
          <button onClick={()=>setMode("to")} className={`flex-1 py-2 rounded ${mode==="to"?"bg-blue-600":"bg-gray-700"}`}>Number → Scientific</button>
          <button onClick={()=>setMode("from")} className={`flex-1 py-2 rounded ${mode==="from"?"bg-blue-600":"bg-gray-700"}`}>Scientific → Number</button>
        </div>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="to"?"e.g. 12345000":"e.g. 1.2345e7"} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-4 font-mono" />
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold mb-4">Convert</button>
        {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono text-xl">{result}</div>}
      </div>
    </div>
  );
}