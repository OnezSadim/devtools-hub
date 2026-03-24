"use client";
import { useState } from "react";
const fonts: Record<string, Record<string, string[]>> = {
  block: {
    A:[" __ ","/ _|","|_  ","   "],B:["|_  ","| _|","|_  ","   "],
    default:[" _ ","(_)","   ","   "]
  }
};
export default function AsciiArtGenerator() {
  const [text, setText] = useState("HELLO");
  const [style, setStyle] = useState("banner");
  const generate = () => {
    if (style === "banner") {
      const lines = ["#".repeat(text.length+4), "# " + text + " #", "#".repeat(text.length+4)];
      return lines.join("
");
    }
    if (style === "box") {
      const w = text.length + 2;
      return ["+" + "-".repeat(w) + "+", "| " + text + " |", "+" + "-".repeat(w) + "+"].join("
");
    }
    if (style === "double") {
      const w = text.length + 2;
      return ["╔" + "═".repeat(w) + "╗", "║ " + text + " ║", "╚" + "═".repeat(w) + "╝"].join("
");
    }
    if (style === "stars") {
      return ["*".repeat(text.length+4), "* " + text + " *", "*".repeat(text.length+4)].join("
");
    }
    return text;
  };
  const [output, setOutput] = useState("");
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">ASCII Art Generator</h1>
      <p className="text-gray-400 mb-6">Generate text-based ASCII art</p>
      <div className="max-w-lg space-y-4">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text..." className="w-full bg-gray-900 border border-gray-700 rounded p-3"/>
        <select value={style} onChange={e=>setStyle(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-3">
          <option value="banner">Banner (###)</option>
          <option value="box">Box (+--+)</option>
          <option value="double">Double (╔═╗)</option>
          <option value="stars">Stars (***)</option>
        </select>
        <button onClick={()=>setOutput(generate())} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-medium">Generate</button>
        {output && <>
          <pre className="bg-gray-900 rounded p-4 font-mono text-green-400 whitespace-pre overflow-x-auto">{output}</pre>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy</button>
        </>}
      </div>
    </main>
  );
}