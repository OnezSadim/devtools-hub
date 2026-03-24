"use client";
import { useState } from "react";

const MORSE: Record<string, string> = {
  A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",
  I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",
  Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",
  Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--",
  "4":"....-","5":".....","6":"-..","7":"--...","8":"---..","9":"----.",
  " ":"/",".": ".-.-.-",",":"--..--","?":"..--..","!":"-.-.--"
};

const REVERSE: Record<string,string> = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));

export default function TextToMorse() {
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const [input, setInput] = useState("");

  const encode = (t: string) => t.toUpperCase().split("").map(c => MORSE[c] ?? "?").join(" ");
  const decode = (t: string) => t.split(" / ").map(word => word.split(" ").map(c => REVERSE[c] ?? "?").join("")).join(" ");

  const output = input ? (mode === "encode" ? encode(input) : decode(input)) : "";

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text to Morse Code</h1>
        <p className="text-gray-400 mb-6">Convert between text and Morse code. Use / to separate words when decoding.</p>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setMode("encode")} className={`px-4 py-2 rounded font-medium ${mode==="encode" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"}`}>Text → Morse</button>
          <button onClick={()=>setMode("decode")} className={`px-4 py-2 rounded font-medium ${mode==="decode" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"}`}>Morse → Text</button>
        </div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={4}
          placeholder={mode==="encode" ? "Type text here..." : "Enter morse code (e.g. .... . .-.. .-.. --- / .-- --- .-. .-.. -..)"}  
          className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono text-sm mb-4 resize-y" />
        <div className="bg-gray-800 rounded-lg p-4 font-mono text-lg break-all min-h-16">
          {output || <span className="text-gray-500">Output appears here...</span>}
        </div>
        {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-3 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm">Copy</button>}
        <div className="mt-6 bg-gray-800 rounded-lg p-4">
          <h2 className="font-bold mb-2 text-sm text-gray-300">Quick Reference</h2>
          <div className="grid grid-cols-4 gap-1 text-xs font-mono text-gray-400">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(c => (
              <span key={c}>{c}: {MORSE[c]}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
