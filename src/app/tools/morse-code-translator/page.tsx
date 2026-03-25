"use client";
import { useState } from "react";
const MORSE: Record<string,string> = {A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."};
export default function MorseCode() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("text2morse");
  const convert = () => {
    if (mode==="text2morse") {
      const res = input.toUpperCase().split("").map(c=>c==" "?"/":MORSE[c]||"?").join(" ");
      setOutput(res);
    } else {
      const REV: Record<string,string> = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));
      const res = input.trim().split(" / ").map(w=>w.split(" ").map(c=>REV[c]||"?").join("")).join(" ");
      setOutput(res);
    }
  };
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Morse Code Translator</h1><p className="text-gray-400 mb-6">Translate between text and Morse code</p><div className="flex gap-2 mb-4">{["text2morse","morse2text"].map(m=>(<button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded font-medium ${mode===m?"bg-yellow-600":"bg-gray-800 hover:bg-gray-700"}`}>{m==="text2morse"?"Text → Morse":"Morse → Text"}</button>))}</div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="text2morse"?"Hello World":".... . .-.. .-.. --- / .-- --- .-. .-.. -."} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" /><button onClick={convert} className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded font-medium mb-4">Translate</button>{output&&<pre className="bg-gray-900 border border-gray-700 rounded p-3 whitespace-pre-wrap font-mono text-yellow-400">{output}</pre>}</div></div>);
}