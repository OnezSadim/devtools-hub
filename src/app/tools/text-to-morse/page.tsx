"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."};
export default function TextToMorse() {
  const [input, setInput] = useState("Hello World");
  const encode = (t: string) => t.toUpperCase().split("").map(c => c==" " ? "/" : MORSE[c]||c).join(" ");
  const decode = (m: string) => m.split(" / ").map(w=>w.split(" ").map(c=>Object.keys(MORSE).find(k=>MORSE[k]===c)||c).join("")).join(" ");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text to Morse Code</h1>
        <p className="text-gray-400 mb-8">Convert text to Morse code and back</p>
        <div className="flex gap-2 mb-6">
          <button onClick={()=>setMode("encode")} className={`px-4 py-2 rounded ${mode==="encode"?"bg-blue-600":"bg-gray-700"}`}>Text → Morse</button>
          <button onClick={()=>setMode("decode")} className={`px-4 py-2 rounded ${mode==="decode"?"bg-blue-600":"bg-gray-700"}`}>Morse → Text</button>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">{mode==="encode"?"Text Input":"Morse Input (use / for spaces)"}</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={4} className="w-full bg-gray-800 rounded p-3 text-sm font-mono" />
          </div>
          <div className="bg-gray-800 rounded p-4">
            <div className="flex justify-between mb-2"><span className="text-sm text-gray-400">Output</span><button onClick={()=>navigator.clipboard.writeText(mode==="encode"?encode(input):decode(input))} className="text-xs bg-gray-700 px-3 py-1 rounded">Copy</button></div>
            <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">{mode==="encode"?encode(input):decode(input)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
