"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {
  A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",
  K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",
  U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",
  "0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....",
  "6":"-.---","7":"--...","8":"---..","9":"----."," ":"/"
};
const REVERSE = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));
export default function MorseCodeTranslator() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"to"|"from">("to");
  const toMorse = (t: string) => t.toUpperCase().split("").map(c=>MORSE[c]||(c==" "?"/":"?")).join(" ");
  const fromMorse = (m: string) => m.split(" / ").map(word=>word.split(" ").map(code=>REVERSE[code]||"?").join("")).join(" ");
  const output = mode==="to" ? toMorse(text) : fromMorse(text);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Morse Code Translator</h1>
        <p className="text-gray-400 mb-6">Translate text to/from Morse code</p>
        <div className="flex gap-3 mb-4">
          <button onClick={()=>setMode("to")} className={`px-4 py-2 rounded font-semibold ${mode==="to"?"bg-blue-600":"bg-gray-700"}`}>Text → Morse</button>
          <button onClick={()=>setMode("from")} className={`px-4 py-2 rounded font-semibold ${mode==="from"?"bg-blue-600":"bg-gray-700"}`}>Morse → Text</button>
        </div>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={5} placeholder={mode==="to"?"Enter text..":"Enter morse (e.g. .- -... / -.-..)"} className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-4 font-mono resize-none"/>
        <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <div className="flex justify-between mb-2"><span className="text-gray-400 text-sm">Output</span><button onClick={()=>navigator.clipboard.writeText(output)} className="text-blue-400 text-sm">Copy</button></div>
          <p className="font-mono text-green-400 break-all whitespace-pre-wrap">{output}</p>
        </div>
        <div className="mt-6 bg-gray-900 border border-gray-700 rounded p-4">
          <h3 className="text-gray-400 text-sm mb-3">Reference</h3>
          <div className="grid grid-cols-4 gap-1 text-xs font-mono">{Object.entries(MORSE).filter(([k])=>k!=" ").map(([k,v])=>(<div key={k} className="flex gap-2"><span className="text-blue-400 w-4">{k}</span><span className="text-gray-300">{v}</span></div>))}</div>
        </div>
      </div>
    </main>
  );
}