"use client";
import { useState } from "react";
const NATO: Record<string, string> = {A:"Alpha",B:"Bravo",C:"Charlie",D:"Delta",E:"Echo",F:"Foxtrot",G:"Golf",H:"Hotel",I:"India",J:"Juliet",K:"Kilo",L:"Lima",M:"Mike",N:"November",O:"Oscar",P:"Papa",Q:"Quebec",R:"Romeo",S:"Sierra",T:"Tango",U:"Uniform",V:"Victor",W:"Whiskey",X:"X-ray",Y:"Yankee",Z:"Zulu"};
export default function NatoAlphabetConverter() {
  const [text, setText] = useState("");
  const converted = text.toUpperCase().split("").map(c => NATO[c] || (c === " " ? "/" : c)).join(" ");
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">NATO Alphabet Converter</h1>
      <p className="text-gray-400 mb-6">Convert text to NATO phonetic alphabet (Alpha, Bravo, Charlie...).</p>
      <input className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white mb-4" placeholder="Type text here..." value={text} onChange={e => setText(e.target.value)} />
      <div className="bg-gray-900 border border-gray-700 rounded p-4 min-h-16">
        <div className="text-sm text-gray-400 mb-2">NATO Phonetic</div>
        <div className="font-mono text-green-400 text-lg">{converted || <span className="text-gray-600">Type above to convert</span>}</div>
      </div>
      <div className="mt-6 grid grid-cols-4 md:grid-cols-7 gap-2">
        {Object.entries(NATO).map(([k,v]) => (
          <div key={k} className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-center">
            <span className="text-blue-400 font-bold">{k}</span><span className="text-gray-400 text-xs ml-1">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
