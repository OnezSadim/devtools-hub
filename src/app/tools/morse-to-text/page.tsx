"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."};
const REV = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));
export default function MorseToText() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("decode");
  const encode = (t: string) => t.toUpperCase().split("").map(c=>c==" "?"/":MORSE[c]||"").join(" ");
  const decode = (m: string) => m.split(" / ").map(w=>w.split(" ").map(c=>REV[c]||"").join("")).join(" ");
  const convert = () => setOutput(mode==="encode"?encode(input):decode(input));
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Morse Code Converter</h1>
        <p className="text-gray-400 mb-6">Convert between text and Morse code</p>
        <div className="flex gap-4 mb-4">
          <button onClick={()=>setMode("encode")} className={`px-4 py-2 rounded ${mode==="encode"?"bg-blue-600":"bg-gray-800"}`}>Text → Morse</button>
          <button onClick={()=>setMode("decode")} className={`px-4 py-2 rounded ${mode==="decode"?"bg-blue-600":"bg-gray-800"}`}>Morse → Text</button>
        </div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="encode"?"Enter text..":"Enter morse (use / for spaces).."} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 mb-4 font-mono" />
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold mb-4">Convert</button>
        {output && <div className="bg-gray-900 border border-gray-700 rounded p-4"><p className="font-mono break-all">{output}</p><button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-sm text-blue-400">Copy</button></div>}
      </div>
    </div>
  );
}