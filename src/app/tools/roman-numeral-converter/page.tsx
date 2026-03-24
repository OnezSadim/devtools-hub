"use client";
import { useState } from "react";
export default function RomanNumerals() {
  const [num, setNum] = useState("");
  const toRoman = (n:number) => {
    const vals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let result="";
    vals.forEach((v,i)=>{while(n>=v){result+=syms[i];n-=v;}});
    return result;
  };
  const n=parseInt(num);
  const output=num&&n>=1&&n<=3999?toRoman(n):"Enter number 1-3999";
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">Roman Numeral Converter</h1><input className="w-full bg-gray-800 p-3 rounded mb-4 text-2xl" type="number" placeholder="Enter number (1-3999)" value={num} onChange={e=>setNum(e.target.value)}/>{num&&<div className="bg-gray-800 p-6 rounded text-4xl font-bold text-center text-yellow-400">{output}</div>}</div>);
}