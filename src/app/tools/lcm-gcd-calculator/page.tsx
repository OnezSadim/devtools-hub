"use client";
import { useState } from "react";
export default function LcmGcdCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  function gcd(a,b){return b===0?a:gcd(b,a%b);}
  function lcm(a,b){return a*b/gcd(a,b);}
  function calculate() {
    const nums = input.split(/[,\s]+/).map(Number).filter(n=>Number.isInteger(n)&&n>0);
    if(nums.length<2){setResult({error:"Enter at least 2 positive integers"});return;}
    const g = nums.reduce(gcd);
    const l = nums.reduce(lcm);
    setResult({GCD:g,LCM:l,"Prime Factors":nums.map(n=>{
      let f=[],d=2,x=n; while(x>1){while(x%d===0){f.push(d);x/=d;}d++;} return n+": "+f.join(" × ");
    }).join(" | ")});
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">LCM & GCD Calculator</h1>
        <p className="text-gray-400 mb-6">Least Common Multiple and Greatest Common Divisor</p>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. 12, 18, 24" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-4" />
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold mb-4">Calculate</button>
        {result&&!result.error&&(
          <div className="bg-gray-800 rounded p-4 space-y-3">
            {Object.entries(result).map(([k,v])=>(
              <div key={k}><span className="text-gray-400 text-sm">{k}: </span><span className="text-green-400 font-mono">{v}</span></div>
            ))}
          </div>
        )}
        {result&&result.error&&<div className="bg-red-900/30 text-red-400 rounded p-3">{result.error}</div>}
      </div>
    </div>
  );
}