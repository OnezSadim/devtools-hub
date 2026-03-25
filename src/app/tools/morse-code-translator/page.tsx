"use client";
import { useState } from "react";

const MORSE: Record<string, string> = {
  a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",
  k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",
  u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..",
  "0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....",
  "6":"-....","7":"--...","8":"---..","9":"----."
};
const REVERSE = Object.fromEntries(Object.entries(MORSE).map(([k,v]) => [v,k]));

export default function MorseCodeTranslator() {
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const [input, setInput] = useState("");

  const output = mode === "encode"
    ? input.toLowerCase().split("").map(c => c === " " ? "/" : (MORSE[c] || "?")).join(" ")
    : input.split(" / ").map(word => word.split(" ").map(code => REVERSE[code] || "?").join("")).join(" ");

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Morse Code Translator</h1>
        <p className="text-gray-400 mb-6">Encode text to Morse code and decode Morse to text</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2">
            <button onClick={() => setMode("encode")} className={`flex-1 py-2 rounded-lg font-semibold ${mode==="encode" ? "bg-blue-600" : "bg-gray-800"}`}>Text → Morse</button>
            <button onClick={() => setMode("decode")} className={`flex-1 py-2 rounded-lg font-semibold ${mode==="decode" ? "bg-blue-600" : "bg-gray-800"}`}>Morse → Text</button>
          </div>
          <textarea value={input} onChange={e => setInput(e.target.value)}
            placeholder={mode==="encode" ? "Enter text to encode..." : "Enter morse code (use / for spaces)..."}
            rows={4} className="w-full bg-gray-800 rounded-lg px-3 py-2 font-mono" />
          <div>
            <label className="block text-sm text-gray-400 mb-1">Output</label>
            <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm min-h-16 whitespace-pre-wrap break-all">{output}</div>
          </div>
          <button onClick={() => navigator.clipboard.writeText(output)} className="text-blue-400 text-sm hover:text-blue-300">Copy output</button>
        </div>
      </div>
    </div>
  );
}
