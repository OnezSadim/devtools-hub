"use client";
import { useState } from "react";

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

export default function LoremIpsum() {
  const [count, setCount] = useState(3);
  const [unit, setUnit] = useState<"paragraphs"|"words"|"sentences">("paragraphs");
  const [output, setOutput] = useState("");

  const gen = () => {
    const word = () => WORDS[Math.floor(Math.random()*WORDS.length)];
    const sentence = () => { const w = Array.from({length:8+Math.floor(Math.random()*12)},word); w[0] = w[0][0].toUpperCase()+w[0].slice(1); return w.join(" ")+"."; };
    const para = () => Array.from({length:4+Math.floor(Math.random()*4)},sentence).join(" ");
    if(unit==="words") setOutput(Array.from({length:count},word).join(" ")+".");
    else if(unit==="sentences") setOutput(Array.from({length:count},sentence).join(" "));
    else setOutput(Array.from({length:count},para).join("\n\n"));
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-blue-400 hover:underline text-sm">&larr; All Tools</a>
        <h1 className="text-3xl font-bold mt-4 mb-2">Lorem Ipsum Generator</h1>
        <p className="text-zinc-400 mb-6">Generate placeholder text for your designs.</p>
        <div className="flex gap-3 mb-4">
          <input type="number" min={1} max={100} value={count} onChange={e=>setCount(Number(e.target.value))} className="w-24 bg-zinc-900 border border-zinc-700 rounded p-2 text-center" />
          {(["paragraphs","sentences","words"] as const).map(u=>(<button key={u} onClick={()=>setUnit(u)} className={`px-4 py-2 rounded font-medium ${unit===u?"bg-blue-600":"bg-zinc-800 hover:bg-zinc-700"}`}>{u}</button>))}
          <button onClick={gen} className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded font-medium">Generate</button>
        </div>
        {output && <div className="bg-zinc-900 border border-zinc-700 rounded p-4 whitespace-pre-wrap text-sm leading-relaxed">{output}</div>}
      </div>
    </main>
  );
}