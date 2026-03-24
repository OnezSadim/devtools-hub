"use client";
import { useState } from "react";
const MORSE: Record<string, string> = { A:'.-', B:'-...', C:'-.-.', D:'-..', E:'.', F:'..-.', G:'--.', H:'....', I:'..', J:'.---', K:'-.-', L:'.-..', M:'--', N:'-.', O:'---', P:'.--.', Q:'--.-', R:'.-.', S:'...', T:'-', U:'..-', V:'...-', W:'.--', X:'-..-', Y:'-.--', Z:'--..', '0':'-----', '1':'.----', '2':'..---', '3':'...--', '4':'....-', '5':'.....', '6':'-....', '7':'--...', '8':'---..', '9':'----.' };
const REVERSE = Object.fromEntries(Object.entries(MORSE).map(([k,v]) => [v,k]));
export default function MorseCodeConverter() {
  const [text, setText] = useState("");
  const [morse2, setMorse2] = useState("");
  const [mode, setMode] = useState<"toMorse"|"fromMorse">("toMorse");
  const convert = () => {
    if (mode === "toMorse") {
      setMorse2(text.toUpperCase().split("").map(c => c === " " ? "/" : (MORSE[c] || c)).join(" "));
    } else {
      setText(text.split(" / ").map(word => word.split(" ").map(c => REVERSE[c] || "?").join("")).join(" "));
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Morse Code Converter</h1>
      <p className="text-gray-400 mb-4">Convert text to/from Morse code.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("toMorse")} className={"px-3 py-1 rounded " + (mode==="toMorse" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300")}>Text → Morse</button>
        <button onClick={() => setMode("fromMorse")} className={"px-3 py-1 rounded " + (mode==="fromMorse" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300")}>Morse → Text</button>
      </div>
      <textarea className="w-full h-24 p-2 bg-gray-800 rounded text-white mb-2" value={text} onChange={e => setText(e.target.value)} placeholder={mode==="toMorse" ? "Enter text..." : "Enter morse (use / for spaces)..."} />
      <button onClick={convert} className="bg-blue-600 px-4 py-2 rounded text-white mb-4">Convert</button>
      {morse2 && <div className="bg-gray-800 p-4 rounded text-green-400 font-mono break-all">{morse2}</div>}
    </div>
  );
}