"use client";
import { useState } from "react";
export default function BaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const n = input ? parseInt(input, parseInt(fromBase)) : null;
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">Number Base Converter</h1><div className="flex gap-4 mb-4"><input className="flex-1 bg-gray-800 p-3 rounded" placeholder="Enter number" value={input} onChange={e=>setInput(e.target.value)}/><select className="bg-gray-800 p-3 rounded" value={fromBase} onChange={e=>setFromBase(e.target.value)}><option value="2">Binary (2)</option><option value="8">Octal (8)</option><option value="10">Decimal (10)</option><option value="16">Hex (16)</option></select></div>{n!==null&&!isNaN(n)&&<div className="grid grid-cols-2 gap-4">{[["Binary",2],["Octal",8],["Decimal",10],["Hex",16]].map(([l,b])=><div key={b} className="bg-gray-800 p-4 rounded"><div className="text-gray-400 text-sm">{l}</div><div className="font-mono text-xl">{n.toString(b as number).toUpperCase()}</div></div>)}</div>}</div>);
}