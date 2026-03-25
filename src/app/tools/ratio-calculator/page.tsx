"use client";
import { useState } from "react";
export default function RatioCalculator() {
  const [a, setA] = useState(""); const [b, setB] = useState("");
  const [c, setC] = useState(""); const [d, setD] = useState("");
  const [result, setResult] = useState("");
  function gcd(x,y){return y===0?x:gcd(y,x%y);}
  function simplify() {
    const av=parseFloat(a),bv=parseFloat(b);
    if(isNaN(av)||isNaN(bv)||bv===0){setResult("Invalid ratio");return;}
    const ia=Math.round(av*1000),ib=Math.round(bv*1000);
    const g=gcd(Math.abs(ia),Math.abs(ib));
    setResult(`Simplified: ${ia/g} : ${ib/g}`);
  }
  function solve() {
    const vals=[a,b,c,d].map(Number);
    const missing=vals.indexOf(NaN)===-1?-1:[a,b,c,d].findIndex(v=>v===""||isNaN(Number(v)));
    if(missing===-1){setResult(`${a}/${b} = ${(Number(a)/Number(b)).toFixed(4)}, ${c}/${d} = ${(Number(c)/Number(d)).toFixed(4)}`);return;}
    const [av,bv,cv,dv]=[Number(a)||null,Number(b)||null,Number(c)||null,Number(d)||null];
    let ans;
    if(missing===0) ans=bv*cv/dv;
    else if(missing===1) ans=av*dv/cv;
    else if(missing===2) ans=av*dv/bv;
    else ans=bv*cv/av;
    const labels=["a","b","c","d"];
    setResult(`${labels[missing]} = ${ans.toFixed(6)}`);
  }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ratio Calculator</h1>
        <p className="text-gray-400 mb-6">Simplify ratios and solve proportions (a:b = c:d)</p>
        <div className="grid grid-cols-4 gap-4 mb-4 items-center">
          {[["a",a,setA],["b",b,setB],["c",c,setC],["d",d,setD]].map(([l,v,s])=>(
            <div key={l}><label className="block text-sm text-gray-400 mb-1">{l}</label><input value={v} onChange={e=>s(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" /></div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button onClick={simplify} className="bg-green-600 hover:bg-green-700 rounded py-2 font-semibold">Simplify a:b</button>
          <button onClick={solve} className="bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold">Solve proportion</button>
        </div>
        {result && <div className="bg-gray-800 rounded p-4 text-green-400 font-mono">{result}</div>}
      </div>
    </div>
  );
}