"use client";
import { useState } from "react";
const WORDS = ["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua","enim","ad","minim","veniam","quis","nostrud","exercitation","ullamco","laboris","nisi","aliquip","ex","ea","commodo","consequat","duis","aute","irure","in","reprehenderit","voluptate","velit","esse","cillum","fugiat","nulla","pariatur","excepteur","sint","occaecat","cupidatat","non","proident","sunt","culpa","qui","officia","deserunt","mollit","anim","id","est","laborum"];
function rand(arr: string[]) { return arr[Math.floor(Math.random() * arr.length)]; }
function sentence() { const len = 8 + Math.floor(Math.random()*10); return Array.from({length:len},()=>rand(WORDS)).join(" ") + "."; }
function paragraph() { return Array.from({length:4+Math.floor(Math.random()*4)},sentence).join(" "); }
export default function LoremIpsumAdvanced() {
  const [type, setType] = useState("paragraphs");
  const [count, setCount] = useState(3);
  const [result, setResult] = useState("");
  const generate = () => {
    if (type === "words") setResult(Array.from({length:count},()=>rand(WORDS)).join(" "));
    else if (type === "sentences") setResult(Array.from({length:count},sentence).join(" "));
    else setResult(Array.from({length:count},paragraph).join("\n\n"));
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Lorem Ipsum Generator</h1>
      <p className="text-gray-400 mb-6">Generate placeholder text for designs and mockups.</p>
      <div className="flex gap-4 mb-6 flex-wrap">
        <select className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white" value={type} onChange={e=>setType(e.target.value)}>
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>
        <input type="number" min={1} max={20} className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white w-24" value={count} onChange={e=>setCount(Number(e.target.value))} />
        <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Generate</button>
      </div>
      {result && <div className="bg-gray-900 border border-gray-700 rounded p-4 whitespace-pre-wrap text-gray-300">{result}</div>}
    </div>
  );
}
