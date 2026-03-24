"use client";
import { useState } from "react";
export default function MorseCode() {
  const M:Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."," ":"/"};
  const [input, setInput] = useState("");
  const output = input.toUpperCase().split("").map(c=>M[c]||"").join(" ");
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">Morse Code Converter</h1><textarea className="w-full h-32 bg-gray-800 p-3 rounded mb-4" placeholder="Enter text" value={input} onChange={e=>setInput(e.target.value)}/>{output&&<div className="bg-gray-800 p-4 rounded font-mono text-lg tracking-widest">{output}</div>}</div>);
}