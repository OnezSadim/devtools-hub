"use client";
import { useState } from "react";
function luhn(n: string) {
  const d = n.replace(/\D/g,"");
  if(!d.length) return null;
  let sum=0;
  for(let i=0;i<d.length;i++){let x=+d[d.length-1-i];if(i%2===1){x*=2;if(x>9)x-=9;}sum+=x;}
  return sum%10===0;
}
const brands: [RegExp,string][] = [[/^4/,"Visa"],[/^5[1-5]/,"Mastercard"],[/^3[47]/,"Amex"],[/^6011/,"Discover"],[/^35/,"JCB"]];
function brand(n: string) { return brands.find(([r])=>r.test(n))?.[1]||"Unknown"; }
export default function LuhnChecker() {
  const [input, setInput] = useState("");
  const digits = input.replace(/\D/g,"");
  const valid = digits.length>=13 ? luhn(digits) : null;
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-6"><div className="max-w-xl mx-auto"><h1 className="text-3xl font-bold mb-2">Credit Card / Luhn Checker</h1><p className="text-gray-400 mb-6">Validate card numbers using the Luhn algorithm. No data is sent anywhere.</p><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter card number..." maxLength={23} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-xl font-mono mb-4 tracking-widest" />{digits.length>=13&&valid!==null&&<div className={`rounded p-4 border ${valid?"bg-green-900/40 border-green-700":"bg-red-900/40 border-red-700"}`}><p className="text-lg font-bold">{valid?"✓ Valid":"✗ Invalid"}</p><p className="text-gray-400 text-sm mt-1">Brand: {brand(digits)} · Length: {digits.length}</p></div>}<p className="text-gray-600 text-xs mt-6">This tool uses only the Luhn checksum algorithm. It cannot verify if a card account is real or active.</p></div></div>);
}