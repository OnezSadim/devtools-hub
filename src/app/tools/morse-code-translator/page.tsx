"use client";
import { useState } from "react";

const MORSE: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....", "7": "--...",
  "8": "---..", "9": "----.",
};
const REVERSE_MORSE = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));

export default function MorseCodeTranslator() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const [mode, setMode] = useState<"toMorse" | "fromMorse">("toMorse");

  const toMorse = (t: string) =>
    t.toUpperCase().split("").map(c => c === " " ? "/" : MORSE[c] || c).join(" ");

  const fromMorse = (m: string) =>
    m.split(" / ").map(word =>
      word.split(" ").map(code => REVERSE_MORSE[code] || code).join("")
    ).join(" ");

  const handleTextChange = (v: string) => { setText(v); setMorse(toMorse(v)); };
  const handleMorseChange = (v: string) => { setMorse(v); setText(fromMorse(v)); };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Morse Code Translator</h1>
      <p className="text-gray-400 mb-6">Translate text to Morse code and back</p>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setMode("toMorse")} className={"px-4 py-2 rounded " + (mode === "toMorse" ? "bg-blue-600" : "bg-gray-800")}>Text → Morse</button>
        <button onClick={() => setMode("fromMorse")} className={"px-4 py-2 rounded " + (mode === "fromMorse" ? "bg-blue-600" : "bg-gray-800")}>Morse → Text</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Text</label>
          <textarea value={text} onChange={e => handleTextChange(e.target.value)} className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono" placeholder="Enter text..." />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Morse Code (/ = word separator)</label>
          <textarea value={morse} onChange={e => handleMorseChange(e.target.value)} className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono" placeholder="--- .-. / . -. - . .-. / -- --- .-. ... ." />
        </div>
      </div>
    </main>
  );
}
