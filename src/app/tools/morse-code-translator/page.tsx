"use client";
import { useState } from "react";

const MORSE: Record<string, string> = {
  A:'.-', B:'-...', C:'-.-.', D:'-..', E:'.', F:'..-.', G:'--.', H:'....', I:'..', J:'.---',
  K:'-.-', L:'.-..', M:'--', N:'-.', O:'---', P:'.--.', Q:'--.-', R:'.-.', S:'...', T:'-',
  U:'..-', V:'...-', W:'.--', X:'-..-', Y:'-.--', Z:'--..',
  '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....',
  '6':'-....','7':'--...','8':'---..','9':'----.',
  ' ':'/'
};
const REVERSE: Record<string, string> = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));

export default function MorseCodeTranslator() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const toMorse = () => setMorse(text.toUpperCase().split("").map(c=>MORSE[c]||c).join(" "));
  const fromMorse = () => setText(morse.split(" ").map(c=>REVERSE[c]||c).join(""));
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Morse Code Translator</h1>
        <p className="text-gray-400 mb-6">Convert text to Morse code and back.</p>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text..." className="w-full h-32 bg-gray-800 rounded p-3 font-mono mb-3" />
        <div className="flex gap-3 mb-3">
          <button onClick={toMorse} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Text → Morse</button>
          <button onClick={fromMorse} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Morse → Text</button>
        </div>
        <textarea value={morse} onChange={e=>setMorse(e.target.value)} placeholder="Morse code (dots and dashes)..." className="w-full h-32 bg-gray-800 rounded p-3 font-mono" />
      </div>
    </div>
  );
}