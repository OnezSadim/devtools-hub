"use client";
import { useState } from "react";
export default function RCCircuit() {
  const [r,setR]=useState("1000"),[c,setC]=useState("0.000001"),[res,setRes]=useState<any>(null);
  const calc=()=>{
    const rn=parseFloat(r),cn=parseFloat(c);
    if(isNaN(rn)||isNaN(cn)||rn<=0||cn<=0){setRes({err:"Invalid input"});return;}
    const tau=rn*cn,fc=1/(2*Math.PI*rn*cn);
    const fmtF=(f:number)=>f>=1e6?`${(f/1e6).toFixed(3)} MHz`:f>=1000?`${(f/1000).toFixed(3)} kHz`:`${f.toFixed(3)} Hz`;
    const fmtT=(t:number)=>t>=1?`${t.toFixed(4)} s`:t>=0.001?`${(t*1000).toFixed(4)} ms`:`${(t*1e6).toFixed(4)} µs`;
    setRes({tau:fmtT(tau),fc:fmtF(fc),t63:fmtT(tau),t99:fmtT(tau*4.6)});
  };
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-lg mx-auto"><h1 className="text-3xl font-bold mb-2">RC Circuit Calculator</h1><p className="text-gray-400 mb-6">Calculate RC time constant and cutoff frequency.</p><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Resistance (Ω)</label><input className="w-full bg-gray-800 rounded px-3 py-2" value={r} onChange={e=>setR(e.target.value)} /></div><div><label className="block text-sm text-gray-400 mb-1">Capacitance (F) — e.g. 0.000001 for 1µF</label><input className="w-full bg-gray-800 rounded px-3 py-2" value={c} onChange={e=>setC(e.target.value)} /></div><button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2">Calculate</button></div>{res&&<div className="mt-4 bg-gray-800 rounded p-4 space-y-2 font-mono">{res.err?<p className="text-red-400">{res.err}</p>:<><p className="text-green-400">τ (time constant): {res.tau}</p><p className="text-blue-400">Cutoff freq (fc): {res.fc}</p><p className="text-gray-300 text-sm">63.2% charge: {res.t63}</p><p className="text-gray-300 text-sm">99% charge (≈5τ): {res.t99}</p></>}</div>}</div></div>);
}