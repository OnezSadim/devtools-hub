"use client";
import { useState } from "react";
export default function BitwiseCalculator() {
  const [a,setA]=useState(""); const [b,setB]=useState("");
  const n1=parseInt(a); const n2=parseInt(b);
  const valid=!isNaN(n1)&&!isNaN(n2);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Bitwise Calculator</h1>
        <p className="text-gray-400 mb-6">Perform bitwise operations on integers.</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <input className="bg-gray-800 rounded p-3" value={a} onChange={e=>setA(e.target.value)} placeholder="First number" type="number" />
          <input className="bg-gray-800 rounded p-3" value={b} onChange={e=>setB(e.target.value)} placeholder="Second number" type="number" />
        </div>
        {valid && <div className="space-y-2">
          {[{op:"AND",val:n1&n2},{op:"OR",val:n1|n2},{op:"XOR",val:n1^n2},{op:"NOT A",val:~n1},{op:"Left Shift A<<1",val:n1<<1},{op:"Right Shift A>>1",val:n1>>1}].map(({op,val})=>(
            <div key={op} className="bg-gray-800 p-3 rounded flex justify-between">
              <span className="text-gray-400">{op}</span>
              <span className="font-mono text-green-400">{val} (0b{(val>>>0).toString(2)})</span>
            </div>
          ))}
        </div>}
      </div>
    </main>
  );
}