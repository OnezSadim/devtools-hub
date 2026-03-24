"use client";
import { useState } from "react";
export default function StringReverse() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState("");
  const reversed = input.split("").reverse().join("");
  const wordsReversed = input.split(" ").reverse().join(" ");
  const linesReversed = input.split("\n").reverse().join("\n");
  const copy = (text, key) => { navigator.clipboard.writeText(text); setCopied(key); setTimeout(()=>setCopied(""),2000); };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">String Reverse</h1>
        <p className="text-gray-400 mb-6">Reverse strings, words, or lines.</p>
        <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded-xl p-4 font-mono text-sm focus:outline-none focus:border-blue-500 resize-none mb-4" placeholder="Enter text to reverse..." value={input} onChange={e=>setInput(e.target.value)} />
        {input && (
          <div className="space-y-3">
            {[
              {label:"Characters reversed",val:reversed,key:"chars"},
              {label:"Words reversed",val:wordsReversed,key:"words"},
              {label:"Lines reversed",val:linesReversed,key:"lines"},
            ].map(({label,val,key}) => (
              <div key={key} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">{label}</span>
                  <button onClick={()=>copy(val,key)} className="text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">{copied===key?"Copied!":"Copy"}</button>
                </div>
                <div className="font-mono text-sm break-all">{val}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}