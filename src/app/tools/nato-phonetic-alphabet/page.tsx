"use client";
import { useState } from "react";

const NATO: Record<string, string> = {
  A:"Alpha",B:"Bravo",C:"Charlie",D:"Delta",E:"Echo",F:"Foxtrot",G:"Golf",H:"Hotel",
  I:"India",J:"Juliet",K:"Kilo",L:"Lima",M:"Mike",N:"November",O:"Oscar",P:"Papa",
  Q:"Quebec",R:"Romeo",S:"Sierra",T:"Tango",U:"Uniform",V:"Victor",W:"Whiskey",
  X:"X-ray",Y:"Yankee",Z:"Zulu",
  "0":"Zero","1":"One","2":"Two","3":"Three","4":"Four",
  "5":"Five","6":"Six","7":"Seven","8":"Eight","9":"Nine"
};

export default function NatoPhoneticAlphabet() {
  const [input, setInput] = useState("");
  const result = input.toUpperCase().split("").map(c => NATO[c] ? NATO[c] : (c === " " ? "[Space]" : c)).join(" ");
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">NATO Phonetic Alphabet</h1>
        <p className="text-gray-400 mb-6">Convert text to NATO phonetic alphabet.</p>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type something..." className="w-full bg-gray-800 rounded p-3 mb-4" />
        <div className="bg-gray-800 rounded p-4 font-mono text-lg min-h-16">{result}</div>
      </div>
    </div>
  );
}