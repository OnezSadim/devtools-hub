"use client";
import { useState } from "react";

export default function ListRandomizer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [picked, setPicked] = useState("");

  const shuffle = () => {
    const items = input.split("
").map(l=>l.trim()).filter(Boolean);
    for (let i=items.length-1;i>0;i--) {
      const j=Math.floor(Math.random()*(i+1));
      [items[i],items[j]]=[items[j],items[i]];
    }
    setOutput(items.join("
"));
  };

  const pickOne = () => {
    const items = input.split("
").map(l=>l.trim()).filter(Boolean);
    if (!items.length) return;
    setPicked(items[Math.floor(Math.random()*items.length)]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">List Randomizer</h1>
        <p className="text-gray-400 mb-6">Shuffle a list of items or pick one at random.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Your List (one item per line)</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Alice
Bob
Charlie
Dave" className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Shuffled Result</label>
            <textarea value={output} readOnly className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 text-sm" />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-4 items-center">
          <button onClick={shuffle} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Shuffle List</button>
          <button onClick={pickOne} className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded font-medium">Pick One</button>
          {picked && <span className="bg-gray-800 border border-gray-600 rounded px-4 py-2 text-yellow-400 font-medium">Selected: {picked}</span>}
        </div>
      </div>
    </main>
  );
}