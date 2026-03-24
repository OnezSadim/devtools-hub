"use client";
import { useState } from "react";
export default function MorseCodeConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"toMorse"|"fromMorse">("toMorse");
  const morseMap: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."};
  const reverseMap = Object.fromEntries(Object.entries(morseMap).map(([k,v])=>[v,k]));
  const convert = () => {
    if (mode==="toMorse") {
      setOutput(input.toUpperCase().split("").map(c=>c==" "?"/":morseMap[c]||"").join(" "));
    } else {
      setOutput(input.split(" / ").map(word=>word.split(" ").map(c=>reverseMap[c]||"").join("")).join(" "));
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Morse Code Converter</h1>
      <p className="text-gray-400 mb-6">Convert text to/from Morse code</p>
      <div className="flex gap-4 mb-4">
        <button onClick={()=>setMode("toMorse")} className={`px-4 py-2 rounded ${mode==="toMorse"?"bg-blue-600":"bg-gray-700"}`}>Text to Morse</button>
        <button onClick={()=>setMode("fromMorse")} className={`px-4 py-2 rounded ${mode==="fromMorse"?"bg-blue-600":"bg-gray-700"}`}>Morse to Text</button>
      </div>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="toMorse"?"Enter text...":"Enter morse (use / for spaces)..."} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4" />
      <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold mb-4">Convert</button>
      {output && <div className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm break-all">{output}</div>}
    </div>
  );
}