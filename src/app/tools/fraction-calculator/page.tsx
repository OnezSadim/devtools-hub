"use client";
import { useState } from "react";
export default function FractionCalculator() {
  const [n1,setN1]=useState(""); const [d1,setD1]=useState("");
  const [n2,setN2]=useState(""); const [d2,setD2]=useState("");
  const [op,setOp]=useState("+");
  const gcd=(a:number,b:number):number=>b===0?a:gcd(b,a%b);
  const calc=()=>{
    const a=parseInt(n1),b=parseInt(d1),c=parseInt(n2),d=parseInt(d2);
    if(!a||!b||!c||!d) return null;
    let rn,rd;
    if(op==="+"){rn=a*d+c*b;rd=b*d;}
    else if(op==="-"){rn=a*d-c*b;rd=b*d;}
    else if(op==="*"){rn=a*c;rd=b*d;}
    else{rn=a*d;rd=b*c;}
    const g=gcd(Math.abs(rn),Math.abs(rd));
    return `${rn/g}/${rd/g}`;
  };
  const result=calc();
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fraction Calculator</h1>
        <p className="text-gray-400 mb-6">Add, subtract, multiply and divide fractions.</p>
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className="flex flex-col items-center"><input className="bg-gray-800 rounded p-2 w-20 text-center" value={n1} onChange={e=>setN1(e.target.value)} placeholder="Num" /><div className="w-20 h-0.5 bg-white my-1"/><input className="bg-gray-800 rounded p-2 w-20 text-center" value={d1} onChange={e=>setD1(e.target.value)} placeholder="Den" /></div>
          <select className="bg-gray-800 rounded p-2" value={op} onChange={e=>setOp(e.target.value)}><option>+</option><option>-</option><option>*</option><option>/</option></select>
          <div className="flex flex-col items-center"><input className="bg-gray-800 rounded p-2 w-20 text-center" value={n2} onChange={e=>setN2(e.target.value)} placeholder="Num" /><div className="w-20 h-0.5 bg-white my-1"/><input className="bg-gray-800 rounded p-2 w-20 text-center" value={d2} onChange={e=>setD2(e.target.value)} placeholder="Den" /></div>
        </div>
        {result && <div className="bg-green-900 p-4 rounded"><span className="text-gray-300">= </span><span className="text-green-400 font-bold text-2xl font-mono">{result}</span></div>}
      </div>
    </main>
  );
}