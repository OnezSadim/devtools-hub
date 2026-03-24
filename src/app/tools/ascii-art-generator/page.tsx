"use client";
import { useState } from "react";
const FONT_SMALL = {
  A:["/\\","\\/ "],B:["|- ","|_ "],C:["/","\\_ "],D:["|- ","|/ "],E:["|= ","|__"],
  default:["??","?? "]
};
export default function AsciiArtGenerator() {
  const [text, setText] = useState("HELLO");
  const [style, setStyle] = useState("banner");
  const generateBanner = (t: string) => {
    const lines = ["#".repeat(t.length*4+2),"# " + t.split("").join("   ") + " #","#".repeat(t.length*4+2)];
    return lines.join("\n");
  };
  const generateBlock = (t: string) => {
    const chars = t.toUpperCase().split("");
    const top = chars.map(()=>"###").join(" ");
    const mid = chars.map(c=>"# "+c+"#").join(" ");
    const bot = chars.map(()=>"###").join(" ");
    return [top,mid,bot].join("\n");
  };
  const generateBox = (t: string) => {
    const border = "+" + "-".repeat(t.length+2) + "+";
    return [border, "| " + t + " |", border].join("\n");
  };
  const output = style==="banner" ? generateBanner(text) : style==="block" ? generateBlock(text) : generateBox(text);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">ASCII Art Generator</h1>
      <p className="text-gray-400 mb-6">Create ASCII art text banners and decorations</p>
      <div className="max-w-2xl space-y-4">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" />
        <div className="flex gap-2">
          {["banner","block","box"].map(s=>(
            <button key={s} onClick={()=>setStyle(s)} className={`px-4 py-2 rounded capitalize ${style===s?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{s}</button>
          ))}
        </div>
        <pre className="bg-gray-800 rounded p-4 font-mono text-green-400 text-sm overflow-x-auto whitespace-pre">{output}</pre>
        <button onClick={()=>navigator.clipboard.writeText(output)} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Copy</button>
      </div>
    </main>
  );
}