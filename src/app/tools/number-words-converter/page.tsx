"use client";
import { useState } from "react";
export default function NumberWordsConverter() {
  const [num, setNum] = useState("");
  const ones=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  const toWords = n => {
    if(n<0) return "negative " + toWords(-n);
    if(n<20) return ones[n];
    if(n<100) return tens[Math.floor(n/10)] + (n%10 ? "-" + ones[n%10] : "");
    if(n<1000) return ones[Math.floor(n/100)] + " hundred" + (n%100 ? " " + toWords(n%100) : "");
    if(n<1000000) return toWords(Math.floor(n/1000)) + " thousand" + (n%1000 ? " " + toWords(n%1000) : "");
    return toWords(Math.floor(n/1000000)) + " million" + (n%1000000 ? " " + toWords(n%1000000) : "");
  };
  const n = parseInt(num);
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Number to Words Converter</h1>
      <input className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 mb-4" placeholder="Enter a number" value={num} onChange={e=>setNum(e.target.value)} />
      {num && !isNaN(n) && <div className="p-4 bg-gray-800 rounded text-white text-lg capitalize">{toWords(n)}</div>}
    </div>
  );
}