"use client";
import { useState } from "react";

export default function FontSizeConverter() {
  const [base, setBase] = useState(16);
  const [px, setPx] = useState("");
  const [rem, setRem] = useState("");
  const [em, setEm] = useState("");
  const [pt, setPt] = useState("");
  const fromPx = (v: string) => { const n=parseFloat(v); if(!isNaN(n)){setPx(v);setRem(String(+(n/base).toFixed(4)));setEm(String(+(n/base).toFixed(4)));setPt(String(+(n*0.75).toFixed(4)));} };
  const fromRem = (v: string) => { const n=parseFloat(v); if(!isNaN(n)){setRem(v);setPx(String(+(n*base).toFixed(4)));setEm(v);setPt(String(+(n*base*0.75).toFixed(4)));} };
  const fromPt = (v: string) => { const n=parseFloat(v); if(!isNaN(n)){setPt(v);setPx(String(+(n/0.75).toFixed(4)));setRem(String(+(n/(base*0.75)).toFixed(4)));setEm(String(+(n/(base*0.75)).toFixed(4)));} };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Font Size Converter</h1>
        <p className="text-gray-400 mb-6">Convert between px, rem, em, and pt.</p>
        <div className="mb-4"><label className="text-sm text-gray-400">Base font size (px)</label><input type="number" value={base} onChange={e=>setBase(Number(e.target.value))} className="w-full bg-gray-800 rounded p-2 mt-1" /></div>
        <div className="grid grid-cols-2 gap-4">
          {[{l:"PX",v:px,fn:fromPx},{l:"REM",v:rem,fn:fromRem},{l:"EM",v:em,fn:(v:string)=>{setEm(v);fromRem(v);}},{l:"PT",v:pt,fn:fromPt}].map(({l,v,fn})=>(
            <div key={l}><label className="text-sm text-gray-400">{l}</label><input type="number" value={v} onChange={e=>fn(e.target.value)} placeholder={`Enter ${l}`} className="w-full bg-gray-800 rounded p-3 mt-1" /></div>
          ))}
        </div>
      </div>
    </div>
  );
}