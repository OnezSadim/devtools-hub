"use client";
import { useState } from "react";
export default function LEDResistor() {
  const [vs,setVs]=useState("5"),[vf,setVf]=useState("2"),[mA,setMA]=useState("20"),[res,setRes]=useState<any>(null);
  const calc=()=>{
    const vsn=parseFloat(vs),vfn=parseFloat(vf),ian=parseFloat(mA)/1000;
    if(isNaN(vsn)||isNaN(vfn)||isNaN(ian)||ian<=0){setRes({err:"Invalid input"});return;}
    const r=(vsn-vfn)/ian;
    if(r<0){setRes({err:"Forward voltage exceeds supply voltage"});return;}
    const std=[10,12,15,18,22,27,33,39,47,56,68,82,100,120,150,180,220,270,330,390,470,560,680,820,1000,1200,1500,1800,2200,2700,3300,3900,4700,5600,6800,8200,10000];
    const nearest=std.reduce((a,b)=>Math.abs(b-r)<Math.abs(a-r)?b:a);
    const pw=(vsn-vfn)*(vsn-vfn)/nearest;
    setRes({r:r.toFixed(1),nearest,pw:(pw*1000).toFixed(1)});
  };
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-lg mx-auto"><h1 className="text-3xl font-bold mb-2">LED Resistor Calculator</h1><p className="text-gray-400 mb-6">Calculate the correct current-limiting resistor for your LED.</p><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Supply Voltage (V)</label><input className="w-full bg-gray-800 rounded px-3 py-2" value={vs} onChange={e=>setVs(e.target.value)} /></div><div><label className="block text-sm text-gray-400 mb-1">LED Forward Voltage (V) — typically 2.0–3.5V</label><input className="w-full bg-gray-800 rounded px-3 py-2" value={vf} onChange={e=>setVf(e.target.value)} /></div><div><label className="block text-sm text-gray-400 mb-1">Desired Current (mA) — typically 20mA</label><input className="w-full bg-gray-800 rounded px-3 py-2" value={mA} onChange={e=>setMA(e.target.value)} /></div><button onClick={calc} className="w-full bg-blue-600 hover:bg-blue-500 rounded py-2">Calculate</button></div>{res&&<div className="mt-4 bg-gray-800 rounded p-4 space-y-2">{res.err?<p className="text-red-400">{res.err}</p>:<><p className="text-green-400 text-lg font-mono">Exact: {res.r} Ω</p><p className="text-yellow-400 text-lg font-mono">Nearest standard: {res.nearest} Ω</p><p className="text-gray-300 text-sm">Power dissipation: {res.pw} mW (use ¼W resistor)</p></>}</div>}</div></div>);
}