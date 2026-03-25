"use client";
import { useState } from "react";
const COLORS=["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Gray","White"];
const MULT=["Black(x1)","Brown(x10)","Red(x100)","Orange(x1k)","Yellow(x10k)","Green(x100k)","Blue(x1M)","Violet(x10M)","Gold(x0.1)","Silver(x0.01)"];
const TOL=["Brown(±1%)","Red(±2%)","Gold(±5%)","Silver(±10%)"];
const MULTV=[1,10,100,1000,10000,100000,1000000,10000000,0.1,0.01];
const TOLV=[1,2,5,10];
const BG=["bg-gray-900","bg-amber-800","bg-red-600","bg-orange-500","bg-yellow-400","bg-green-600","bg-blue-600","bg-purple-600","bg-gray-400","bg-white"];
export default function ResistorColor() {
  const [b1,setB1]=useState(0),[b2,setB2]=useState(0),[b3,setB3]=useState(0),[m,setM]=useState(0),[t,setT]=useState(0);
  const val=(b1*10+b2)*MULTV[m];
  const fmt=(v:number)=>v>=1e6?`${v/1e6}MΩ`:v>=1e3?`${v/1e3}kΩ`:`${v}Ω`;
  const sel="w-full bg-gray-800 rounded px-2 py-2 text-sm";
  return(<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-lg mx-auto"><h1 className="text-3xl font-bold mb-2">Resistor Color Code</h1><p className="text-gray-400 mb-6">Decode 4-band resistor color codes instantly.</p><div className="space-y-3"><div><label className="text-sm text-gray-400">Band 1 (1st digit)</label><select className={sel} value={b1} onChange={e=>setB1(+e.target.value)}>{COLORS.map((c,i)=><option key={i} value={i}>{c}</option>)}</select></div><div><label className="text-sm text-gray-400">Band 2 (2nd digit)</label><select className={sel} value={b2} onChange={e=>setB2(+e.target.value)}>{COLORS.map((c,i)=><option key={i} value={i}>{c}</option>)}</select></div><div><label className="text-sm text-gray-400">Band 3 (Multiplier)</label><select className={sel} value={m} onChange={e=>setM(+e.target.value)}>{MULT.map((c,i)=><option key={i} value={i}>{c}</option>)}</select></div><div><label className="text-sm text-gray-400">Band 4 (Tolerance)</label><select className={sel} value={t} onChange={e=>setT(+e.target.value)}>{TOL.map((c,i)=><option key={i} value={i}>{c}</option>)}</select></div></div><div className="mt-6 bg-gray-800 rounded p-4 text-center"><div className="text-2xl font-mono text-green-400">{fmt(val)}</div><div className="text-gray-400 text-sm mt-1">Tolerance: ±{TOLV[t]}%</div><div className="flex gap-2 justify-center mt-3">{[b1,b2,m,t].map((ci,idx)=><div key={idx} className={`w-8 h-16 rounded ${idx<2?BG[ci]:idx===2?BG[Math.min(ci,9)]:"bg-yellow-600"} border border-gray-600`}></div>)}</div></div></div></div>);
}