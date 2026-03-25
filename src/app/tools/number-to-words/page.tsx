"use client";
import { useState } from "react";
const ones=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function numToWords(n: number): string {
  if (n<0) return "negative "+numToWords(-n);
  if (n<20) return ones[n];
  if (n<100) return tens[Math.floor(n/10)]+(n%10?" "+ones[n%10]:"");
  if (n<1000) return ones[Math.floor(n/100)]+" hundred"+(n%100?" "+numToWords(n%100):"");
  if (n<1000000) return numToWords(Math.floor(n/1000))+" thousand"+(n%1000?" "+numToWords(n%1000):"");
  if (n<1000000000) return numToWords(Math.floor(n/1000000))+" million"+(n%1000000?" "+numToWords(n%1000000):"");
  return numToWords(Math.floor(n/1000000000))+" billion"+(n%1000000000?" "+numToWords(n%1000000000):"");
}
export default function NumberToWords() {
  const [val, setVal] = useState("");
  const words = val && !isNaN(+val) ? numToWords(Math.floor(Math.abs(+val))) : "";
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2">Number to Words</h1><p className="text-gray-400 mb-6">Convert numbers to their word representation</p><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter a number..." className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-lg mb-4" />{words&&<div className="bg-gray-900 border border-gray-700 rounded p-4"><p className="text-yellow-300 text-xl font-medium capitalize">{words}</p></div>}</div></div>);
}