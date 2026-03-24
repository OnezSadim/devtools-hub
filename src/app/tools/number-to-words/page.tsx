"use client";
import { useState } from "react";
export default function NumberToWords() {
  const [num, setNum] = useState("");
  const ones=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  function toWords(n:number):string {
    if(n<0) return "negative "+toWords(-n);
    if(n<20) return ones[n];
    if(n<100) return tens[Math.floor(n/10)]+(n%10?"-"+ones[n%10]:"");
    if(n<1000) return ones[Math.floor(n/100)]+" hundred"+(n%100?" "+toWords(n%100):"");
    if(n<1000000) return toWords(Math.floor(n/1000))+" thousand"+(n%1000?" "+toWords(n%1000):"");
    if(n<1000000000) return toWords(Math.floor(n/1000000))+" million"+(n%1000000?" "+toWords(n%1000000):"");
    return toWords(Math.floor(n/1000000000))+" billion"+(n%1000000000?" "+toWords(n%1000000000):"");
  }
  const result = num&&!isNaN(Number(num)) ? toWords(parseInt(num)) : "";
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Number to Words Converter</h1>
      <input type="number" className="w-full p-3 bg-gray-800 rounded border border-gray-600 text-white mb-4" placeholder="Enter a number..." value={num} onChange={e=>setNum(e.target.value)} />
      {result&&<div className="p-4 bg-gray-800 rounded"><p className="text-lg capitalize">{result}</p></div>}
    </div>
  );
}