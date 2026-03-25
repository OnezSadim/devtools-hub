"use client";
import { useState } from "react";
export default function AsciiArtGenerator() {
  const [text, setText] = useState("Hello");
  const [style, setStyle] = useState("block");
  const blockChars: Record<string, string[]> = {
    A: [" # ","# #","###","# #","# #"],B: ["## ","# #","## ","# #","## "],
    C: [" ##","#  ","#  ","#  "," ##"],D: ["## ","# #","# #","# #","## "],
    E: ["###","#  ","###","#  ","###"],F: ["###","#  ","###","#  ","#  "],
    G: [" ##","#  ","# #","# #"," ##"],H: ["# #","# #","###","# #","# #"],
    I: ["###"," # "," # "," # ","###"],J: ["###","  #","  #","# #"," # "],
    K: ["# #","## ","#  ","## ","# #"],L: ["#  ","#  ","#  ","#  ","###"],
    M: ["# #","###","# #","# #","# #"],N: ["# #","## ","# #","# #","# #"],
    O: [" # ","# #","# #","# #"," # "],P: ["## ","# #","## ","#  ","#  "],
    Q: [" # ","# #","# #","## "," ##"],R: ["## ","# #","## ","# #","# #"],
    S: [" ##","#  "," # ","  #","## "],T: ["###"," # "," # "," # "," # "],
    U: ["# #","# #","# #","# #"," # "],V: ["# #","# #","# #"," # "," # "],
    W: ["# #","# #","# #","###","# #"],X: ["# #"," # "," # "," # ","# #"],
    Y: ["# #"," # "," # "," # "," # "],Z: ["###","  #"," # ","#  ","###"],
    " ": ["   ","   ","   ","   ","   "],
    "0": [" # ","# #","# #","# #"," # "],"1": [" # ","## "," # "," # ","###"],
    "2": ["## ","  #"," # ","#  ","###"],"3": ["## ","  #"," # ","  #","## "],
    "4": ["# #","# #","###","  #","  #"],"5": ["###","#  ","## ","  #","## "],
    "6": [" # ","#  ","## ","# #"," # "],"7": ["###","  #"," # "," # "," # "],
    "8": [" # ","# #"," # ","# #"," # "],"9": [" # ","# #"," ##","  #"," # "],
  };
  function toAscii(t: string) {
    const upper = t.toUpperCase();
    const lines = Array(5).fill("");
    for (const ch of upper) {
      const g = blockChars[ch] || blockChars[" "];
      for (let i = 0; i < 5; i++) lines[i] += (g?.[i] ?? "   ") + " ";
    }
    return lines.join("
");
  }
  const output = toAscii(text || " ");
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">ASCII Art Generator</h1>
        <p className="text-gray-400 mb-6">Convert text to ASCII art block letters.</p>
        <input className="w-full bg-gray-900 border border-gray-700 rounded p-3 mb-4" maxLength={12} placeholder="Enter text (max 12 chars)" value={text} onChange={e => setText(e.target.value)} />
        <div className="bg-gray-900 border border-gray-700 rounded p-4 mb-4 overflow-x-auto">
          <pre className="text-green-400 text-xs leading-tight whitespace-pre">{output}</pre>
        </div>
        <button onClick={() => navigator.clipboard.writeText(output)} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy ASCII Art</button>
      </div>
    </main>
  );
}