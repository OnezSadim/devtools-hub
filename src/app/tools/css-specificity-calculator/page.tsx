"use client";
import { useState } from "react";
function calcSpec(sel: string): [number,number,number] {
  let a=0,b=0,c=0;
  let s = sel.replace(/::?[a-zA-Z-]+(?:\([^)]*\))?/g, m=>{ if (m.startsWith("::")) { c++; return ""; } if (m.startsWith(":")) { b++; return ""; } return m; });
  const ids = s.match(/#[a-zA-Z][\w-]*/g)||[]; a+=ids.length; s=s.replace(/#[a-zA-Z][\w-]*/g,"");
  const cls = s.match(/\.[\w-]+|\[[^\]]+\]/g)||[]; b+=cls.length; s=s.replace(/\.[\w-]+|\[[^\]]+\]/g,"");
  const tag = s.match(/[a-zA-Z][\w-]*/g)||[]; c+=tag.length;
  return [a,b,c];
}
export default function SpecCalc() {
  const [sel, setSel] = useState("div.container > p.text:hover");
  const [a,b,c] = calcSpec(sel);
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2">CSS Specificity Calculator</h1><p className="text-gray-400 mb-6">Calculate the specificity of a CSS selector</p><input value={sel} onChange={e=>setSel(e.target.value)} placeholder="Enter CSS selector..." className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-6" /><div className="grid grid-cols-3 gap-4 mb-6">{[["IDs (a)",a,"text-red-400"],["Classes/Attrs (b)",b,"text-yellow-400"],["Elements (c)",c,"text-blue-400"]].map(([lbl,val,cls])=>(<div key={lbl} className="bg-gray-900 border border-gray-700 rounded p-4 text-center"><div className={`text-4xl font-bold ${cls}`}>{val}</div><div className="text-sm text-gray-400 mt-1">{lbl}</div></div>))}</div><div className="bg-gray-900 border border-gray-700 rounded p-4 text-center"><span className="text-gray-400">Specificity value: </span><span className="font-mono text-2xl text-green-400">{a},{b},{c}</span></div></div></div>);
}