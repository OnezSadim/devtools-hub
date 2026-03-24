"use client";
import { useState } from "react";
export default function CssUnitConverter() {
  const [val, setVal] = useState("16");
  const [base, setBase] = useState("16");
  const px = parseFloat(val)||0;
  const b = parseFloat(base)||16;
  const units = [{label:"px",v:px},{label:"rem",v:px/b},{label:"em",v:px/b},{label:"pt",v:px*0.75},{label:"%",v:(px/b)*100},{label:"vh",v:px/7.68},{label:"vw",v:px/14.4}];
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-6"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2">CSS Unit Converter</h1><p className="text-gray-400 mb-6">Convert between CSS units: px, rem, em, pt, %, vh, vw</p><div className="flex gap-3 mb-6"><div className="flex-1"><label className="text-sm text-gray-400 mb-1 block">Value (px)</label><input type="number" value={val} onChange={e=>setVal(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-xl" /></div><div className="w-32"><label className="text-sm text-gray-400 mb-1 block">Base font (px)</label><input type="number" value={base} onChange={e=>setBase(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-xl" /></div></div><div className="grid grid-cols-2 gap-3">{units.map(u=>(<div key={u.label} className="bg-gray-800 border border-gray-700 rounded p-3 flex justify-between items-center"><span className="text-gray-400 font-mono">{u.label}</span><span className="font-mono text-lg">{u.v.toFixed(4).replace(/\.?0+$/,"")}</span></div>))}</div></div></div>);
}