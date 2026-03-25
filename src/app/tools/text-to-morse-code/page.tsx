"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."," ":"/"};
export default function MorseCode() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const encode = (t:string) => t.toUpperCase().split("").map(c=>MORSE[c]||(c==" "?"/":"?")).join(" ");
  const decode = (m:string) => m.split(" / ").map(w=>w.split(" ").map(c=>Object.keys(MORSE).find(k=>MORSE[k]===c)||"?").join("")).join(" ");
  const output = text ? (mode==="encode" ? encode(text) : decode(text)) : "";
  return (<div className="max-w-2xl mx-auto p-6"><h1 className="text-2xl font-bold mb-4 text-white">Text to Morse Code</h1><p className="text-gray-400 mb-4">Convert text to Morse code and back.</p><div className="flex gap-2 mb-4">{(["encode","decode"] as const).map(m=>(<button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded capitalize ${mode===m?"bg-blue-600 text-white":"bg-gray-700 text-gray-300"}`}>{m==="encode"?"Text → Morse":"Morse → Text"}</button>))}</div><textarea value={text} onChange={e=>setText(e.target.value)} rows={4} placeholder={mode==="encode"?"Enter text..":"Enter morse (use / for space)"} className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 mb-4" />{output&&(<div className="bg-gray-800 rounded p-4"><div className="text-xs text-gray-500 mb-1">Output</div><div className="text-green-400 font-mono text-lg break-all">{output}</div><button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-sm text-blue-400 hover:text-blue-300">Copy</button></div>)}</div>);
}
