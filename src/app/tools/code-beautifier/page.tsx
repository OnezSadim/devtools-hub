"use client";
import { useState } from "react";

export default function CodeBeautifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("json");

  function beautify() {
    try {
      if (lang === "json") {
        setOutput(JSON.stringify(JSON.parse(input), null, 2));
      } else {
        // Basic JS/CSS: just handle JSON for now, show indented copy
        setOutput(input.replace(/;/g, ";
").replace(/{/g, "{
  ").replace(/}/g, "
}"));
      }
    } catch (e) {
      setOutput("Error: " + (e as Error).message);
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Code Beautifier</h1>
      <p className="text-gray-400 mb-6">Format and prettify your code.</p>
      <div className="flex gap-2 mb-4">
        {["json","css","javascript"].map(l=><button key={l} onClick={()=>setLang(l)} className={`px-4 py-2 rounded ${lang===l?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{l.toUpperCase()}</button>)}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 block mb-1">Input</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-80 bg-gray-900 rounded p-3 font-mono text-sm resize-none" placeholder={`Paste ${lang.toUpperCase()} here...`} />
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-1">Beautified</label>
          <textarea readOnly value={output} className="w-full h-80 bg-gray-900 rounded p-3 font-mono text-sm resize-none text-green-400" />
        </div>
      </div>
      <button onClick={beautify} className="mt-4 bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 font-semibold">Beautify</button>
    </main>
  );
}