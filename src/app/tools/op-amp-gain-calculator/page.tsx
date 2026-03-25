"use client";
import { useState } from "react";
export default function OpAmpGain() {
  const [mode,setMode]=useState("inv"),[rf,setRf]=useState("10000"),[r1,setR1]=useState("1000"),[res,setRes]=useState("");
  const calc=()=>{
    const rfn=parseFloat(rf),r1n=parseFloat(r1);
    if(isNaN(rfn)||isNaN(r1n)||r1n===0){setRes("Invalid input");return;}
    if(mode==="inv"){const g=-(rfn/r1n);setRes(`Gain = ${g.toFixed(2)} (inverting)  |  Input impedance ≈ ${r1n}Ω`);}
    else{const g=1+(rfn/r1n);setRes(`Gain = ${g.toFixed(2)} (non-inverting)  |  Input impedance ≈ very high`);}
  };
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-lg mx-auto"><h1 className="text-3xl font-bold mb-2">Op-Amp Gain Calculator</h1><p className="text-gray-400 mb-6">Calculate inverting and non-inverting op-amp voltage gain.</p><div className="flex gap-2 mb-4"><button onClick={()=>setMode("inv")} className={`flex-1 rounded py-2 ${mode==="inv"?"bg-blue-600":"bg-gray-700"}`}>Inverting</button><button onClick={()=>setMode("noninv")} className={`flex-1 rounded py-2 ${mode==="noninv"?"bg-blue-600":"bg-gray-700"}`}>Non-Inverting</button></div><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Feedback Resistor Rf (Ω)</label><input className="w-full bg-gray-800 rounded px-3 py-2" value={rf} onChange={e=>setRf(e.target.value)} /></div><div><label className="block text-sm text-gray-400 mb-1">{mode==="inv"?"Input Resistor Rin (Ω)":"Ground Resistor R1 (Ω)"}</label><input className="w-full bg-gray-800 rounded px-3 py-2" value={r1} onChange={e=>setR1(e.target.value)} /></div><button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2">Calculate</button></div>{res&&<div className="mt-4 bg-gray-800 rounded p-4 font-mono text-green-400 text-sm">{res}</div>}</div></div>);
}