"use client";
import { useState } from "react";
export default function PercentageCalculator() {
  const [mode, setMode] = useState("basic");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  function calculate() {
    const av = parseFloat(a), bv = parseFloat(b);
    if (isNaN(av)||isNaN(bv)) { setResult("Enter valid numbers"); return; }
    if (mode==="basic") setResult(`${av}% of ${bv} = ${(av*bv/100).toFixed(4)}`);
    else if (mode==="what") setResult(`${av} is ${(av/bv*100).toFixed(4)}% of ${bv}`);
    else if (mode==="change") setResult(`Change from ${av} to ${bv}: ${((bv-av)/av*100).toFixed(4)}%`);
    else if (mode==="add") setResult(`${bv} + ${av}% = ${(bv*(1+av/100)).toFixed(4)}`);
    else if (mode==="sub") setResult(`${bv} - ${av}% = ${(bv*(1-av/100)).toFixed(4)}`);
  }
  const modes = [["basic","X% of Y"],["what","X is ?% of Y"],["change","% Change"],["add","Add %"],["sub","Subtract %"]];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Percentage Calculator</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {modes.map(([m,l])=>(
            <button key={m} onClick={()=>setMode(m)} className={`px-3 py-1 rounded text-sm ${mode===m?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{l}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><label className="block text-sm text-gray-400 mb-1">Value 1</label><input value={a} onChange={e=>setA(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Value 2</label><input value={b} onChange={e=>setB(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold mb-4">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono text-lg">{result}</div>}
      </div>
    </div>
  );
}