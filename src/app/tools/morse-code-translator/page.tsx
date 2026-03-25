"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-.--.","7":"--...","8":"----..","9":"----."};
const REV = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));
export default function MorseCodeTranslator() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");
  const [result, setResult] = useState("");
  const translate = () => {
    if (mode === "encode") {
      setResult(input.toUpperCase().split("").map(c => c === " " ? "/" : MORSE[c] || "?").join(" "));
    } else {
      setResult(input.split(" / ").map(word => word.split(" ").map(code => REV[code] || "?").join("")).join(" "));
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Morse Code Translator</h1>
      <p className="text-gray-400 mb-6">Encode text to Morse code or decode Morse back to text</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("encode")} className={"flex-1 py-2 rounded-lg font-semibold " + (mode==="encode" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400")}>Text → Morse</button>
        <button onClick={() => setMode("decode")} className={"flex-1 py-2 rounded-lg font-semibold " + (mode==="decode" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400")}>Morse → Text</button>
      </div>
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={4} placeholder={mode==="encode" ? "Enter text..." : "Enter Morse code (use / for word break)"} className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 font-mono" />
      <button onClick={translate} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold mb-4">Translate</button>
      {result && <div className="p-4 bg-gray-800 rounded-lg"><p className="text-gray-400 text-sm mb-1">Result</p><p className="text-lg font-mono text-green-400 break-all">{result}</p></div>}
    </div>
  );
}