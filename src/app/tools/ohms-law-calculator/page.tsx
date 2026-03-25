"use client";
import { useState } from "react";
export default function OhmsLaw() {
  const [v,setV]=useState(""),[i,setI]=useState(""),[r,setR]=useState(""),[res,setRes]=useState("");
  const calc=(solve:string)=>{
    const vn=parseFloat(v),inn=parseFloat(i),rn=parseFloat(r);
    if(solve==="v"&&!isNaN(inn)&&!isNaN(rn))setRes(`Voltage = ${(inn*rn).toFixed(4)} V`);
    else if(solve==="i"&&!isNaN(vn)&&!isNaN(rn)&&rn!==0)setRes(`Current = ${(vn/rn).toFixed(4)} A`);
    else if(solve==="r"&&!isNaN(vn)&&!isNaN(inn)&&inn!==0)setRes(`Resistance = ${(vn/inn).toFixed(4)} Ω`);
    else setRes("Enter two values to solve for the third.");
  };
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-lg mx-auto"><h1 className="text-3xl font-bold mb-2">Ohm's Law Calculator</h1><p className="text-gray-400 mb-6">V = I × R — solve for voltage, current, or resistance.</p><div className="space-y-4"><div><label className="block text-sm text-gray-400 mb-1">Voltage (V)</label><input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={v} onChange={e=>setV(e.target.value)} placeholder="Leave blank to solve" /></div><div><label className="block text-sm text-gray-400 mb-1">Current (A)</label><input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={i} onChange={e=>setI(e.target.value)} placeholder="Leave blank to solve" /></div><div><label className="block text-sm text-gray-400 mb-1">Resistance (Ω)</label><input className="w-full bg-gray-800 rounded px-3 py-2 text-white" value={r} onChange={e=>setR(e.target.value)} placeholder="Leave blank to solve" /></div><div className="flex gap-2"><button onClick={()=>calc("v")} className="flex-1 bg-blue-600 hover:bg-blue-500 rounded py-2 text-sm">Solve V</button><button onClick={()=>calc("i")} className="flex-1 bg-green-600 hover:bg-green-500 rounded py-2 text-sm">Solve I</button><button onClick={()=>calc("r")} className="flex-1 bg-purple-600 hover:bg-purple-500 rounded py-2 text-sm">Solve R</button></div>{res&&<div className="bg-gray-800 rounded p-4 text-center text-lg font-mono text-green-400">{res}</div>}</div></div></div>);
}