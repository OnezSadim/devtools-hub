"use client";
import { useState } from "react";
const ones=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function toWords(n:number):string {
  if(n<0) return "negative "+toWords(-n);
  if(n<20) return ones[n];
  if(n<100) return tens[Math.floor(n/10)]+(n%10?" "+ones[n%10]:"");
  if(n<1000) return ones[Math.floor(n/100)]+" hundred"+(n%100?" "+toWords(n%100):"");
  if(n<1000000) return toWords(Math.floor(n/1000))+" thousand"+(n%1000?" "+toWords(n%1000):"");
  if(n<1000000000) return toWords(Math.floor(n/1000000))+" million"+(n%1000000?" "+toWords(n%1000000):"");
  return toWords(Math.floor(n/1000000000))+" billion"+(n%1000000000?" "+toWords(n%1000000000):"");
}
export default function NumberToWords() {
  const [input, setInput] = useState("12345");
  const n = parseInt(input.replace(/,/g,""));
  const result = isNaN(n)?"Enter a valid number":toWords(n);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number to Words</h1>
        <p className="text-gray-400 mb-8">Convert numbers to their word representation</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <label className="block text-sm text-gray-400 mb-2">Enter Number</label>
          <input type="text" value={input} onChange={e=>setInput(e.target.value)} className="w-full bg-gray-800 rounded p-4 text-2xl text-center mb-4" placeholder="Enter a number..." />
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-xl text-green-400 capitalize">{result}</p>
          </div>
          <button onClick={()=>navigator.clipboard.writeText(result)} className="mt-3 w-full bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">Copy Result</button>
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="font-medium mb-3 text-gray-300">Examples</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[42,100,1000,1234567].map(n=>(
              <button key={n} onClick={()=>setInput(String(n))} className="bg-gray-800 hover:bg-gray-700 rounded p-3 text-left">
                <div className="text-blue-400 font-mono">{n.toLocaleString()}</div>
                <div className="text-gray-400 text-xs mt-1 capitalize">{toWords(n)}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
