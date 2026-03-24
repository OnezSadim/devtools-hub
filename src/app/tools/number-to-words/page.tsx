"use client";
import { useState } from "react";
const ones=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function toWords(n: number): string {
  if(n<0) return "negative "+toWords(-n);
  if(n<20) return ones[n];
  if(n<100) return tens[Math.floor(n/10)]+(n%10?" "+ones[n%10]:"");
  if(n<1000) return ones[Math.floor(n/100)]+" hundred"+(n%100?" "+toWords(n%100):"");
  if(n<1e6) return toWords(Math.floor(n/1000))+" thousand"+(n%1000?" "+toWords(n%1000):"");
  if(n<1e9) return toWords(Math.floor(n/1e6))+" million"+(n%1e6?" "+toWords(n%1e6):"");
  if(n<1e12) return toWords(Math.floor(n/1e9))+" billion"+(n%1e9?" "+toWords(n%1e9):"");
  return toWords(Math.floor(n/1e12))+" trillion"+(n%1e12?" "+toWords(n%1e12):"");
}
export default function NumberToWords() {
  const [input, setInput] = useState("");
  const result = input && !isNaN(+input) && isFinite(+input) ? toWords(Math.floor(Math.abs(+input))) : "";
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-6"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2">Number to Words Converter</h1><p className="text-gray-400 mb-6">Convert numbers to their English word representation</p><input type="number" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter a number..." className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-xl mb-4" />{result&&<div className="bg-gray-800 border border-gray-700 rounded p-4"><p className="text-gray-400 text-sm mb-1">In words:</p><p className="text-lg capitalize font-medium">{result}</p><button onClick={()=>navigator.clipboard.writeText(result)} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded text-sm">Copy</button></div>}</div></div>);
}