"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [num, setNum] = useState("");
  const [roman, setRoman] = useState("");
  const toRoman = (n) => {
    const vals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let r=""; vals.forEach((v,i)=>{while(n>=v){r+=syms[i];n-=v;}});
    return r;
  };
  const fromRoman = (s) => {
    const m={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    return s.toUpperCase().split("").reduce((a,c,i,arr)=>m[c]<m[arr[i+1]]?a-m[c]:a+m[c],0);
  };
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Roman Numeral Converter</h1>
      <div className="mb-4">
        <input className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 mb-2" placeholder="Number (1-3999)" value={num} onChange={e=>setNum(e.target.value)} />
        <div className="p-3 bg-gray-800 rounded text-white">Roman: {num && !isNaN(num) ? toRoman(parseInt(num)) : ""}</div>
      </div>
      <div>
        <input className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 mb-2" placeholder="Roman numeral (e.g. XIV)" value={roman} onChange={e=>setRoman(e.target.value)} />
        <div className="p-3 bg-gray-800 rounded text-white">Number: {roman ? fromRoman(roman) : ""}</div>
      </div>
    </div>
  );
}