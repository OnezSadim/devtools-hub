"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [input, setInput] = useState("");
  const [base, setBase] = useState("10");
  const num = parseInt(input, parseInt(base));
  const valid = !isNaN(num);
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">Number Base Converter</h1><p className="text-gray-400 mb-6">Convert between binary, octal, decimal, and hexadecimal.</p><div className="flex gap-4 mb-6"><input className="flex-1 bg-gray-900 border border-gray-700 rounded p-3 font-mono" placeholder="Enter number..." value={input} onChange={e => setInput(e.target.value)} /><select className="bg-gray-900 border border-gray-700 rounded p-3" value={base} onChange={e => setBase(e.target.value)}><option value="2">Binary (2)</option><option value="8">Octal (8)</option><option value="10">Decimal (10)</option><option value="16">Hex (16)</option></select></div>{input && (<div className="grid gap-3">{[["Binary",2],["Octal",8],["Decimal",10],["Hexadecimal",16]].map(([label,b]) => (<div key={b} className="bg-gray-900 border border-gray-700 rounded p-4"><div className="text-xs text-gray-500 mb-1">{label} (base {b})</div><div className="font-mono text-lg">{valid ? num.toString(b).toUpperCase() : "Invalid"}</div></div>))}</div>)}</div>);
}