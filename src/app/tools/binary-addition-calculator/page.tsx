"use client";
import { useState } from "react";
export default function BinaryAddition() {
  const [a,setA]=useState("1010"),[b,setB]=useState("0110"),[res,setRes]=useState<any>(null);
  const calc=()=>{
    if(!/^[01]+$/.test(a)||!/^[01]+$/.test(b)){setRes({err:"Only 0s and 1s allowed"});return;}
    const an=parseInt(a,2),bn=parseInt(b,2),sum=an+bn;
    const steps:string[]=[];
    const la=a.padStart(Math.max(a.length,b.length)+1,"0"),lb=b.padStart(Math.max(a.length,b.length)+1,"0");
    steps.push(`  ${la}`);steps.push(`+ ${lb}`);steps.push("-".repeat(la.length+2));
    steps.push(`  ${sum.toString(2).padStart(la.length,"0")}`);
    setRes({dec:`${an} + ${bn} = ${sum}`,hex:`${an.toString(16).toUpperCase()} + ${bn.toString(16).toUpperCase()} = ${sum.toString(16).toUpperCase()}`,bin:steps});
  };
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-lg mx-auto"><h1 className="text-3xl font-bold mb-2">Binary Addition Calculator</h1><p className="text-gray-400 mb-6">Add two binary numbers with step-by-step breakdown.</p><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Binary Number A</label><input className="w-full bg-gray-800 rounded px-3 py-2 font-mono" value={a} onChange={e=>setA(e.target.value.replace(/[^01]/g,""))} /></div><div><label className="block text-sm text-gray-400 mb-1">Binary Number B</label><input className="w-full bg-gray-800 rounded px-3 py-2 font-mono" value={b} onChange={e=>setB(e.target.value.replace(/[^01]/g,""))} /></div><button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2">Add</button></div>{res&&<div className="mt-4 bg-gray-800 rounded p-4">{res.err?<p className="text-red-400">{res.err}</p>:<><pre className="font-mono text-green-400 text-sm mb-3">{res.bin.join("
")}</pre><p className="text-gray-300 text-sm">Decimal: {res.dec}</p><p className="text-yellow-400 text-sm">Hex: {res.hex}</p></>}</div>}</div></div>);
}