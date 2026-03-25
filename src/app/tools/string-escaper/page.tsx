"use client";
import { useState } from "react";
export default function StringEscaper() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("html");
  const process = (escape: boolean) => {
    if (mode === "html") {
      if (escape) return input.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
      return input.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,""").replace(/&#39;/g,"'");
    }
    if (mode === "js") {
      if (escape) return input.replace(/\/g,"\\\\").replace(/"/g,"\\"").replace(/
/g,"\\n").replace(/	/g,"\\t");
      return input.replace(/\\n/g,"
").replace(/\\t/g,"	").replace(/\\\\/g,"\\").replace(/\\"/g,""");
    }
    if (mode === "url") {
      if (escape) return encodeURIComponent(input);
      return decodeURIComponent(input);
    }
    return input;
  };
  const [result, setResult] = useState("");
  const copy = () => navigator.clipboard.writeText(result);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">String Escaper</h1>
      <p className="text-gray-400 mb-6">Escape or unescape HTML entities, JavaScript strings, and URL components</p>
      <div className="flex gap-2 mb-4">
        {["html","js","url"].map(m => <button key={m} onClick={() => setMode(m)} className={"flex-1 py-2 rounded-lg font-semibold uppercase " + (mode===m ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400")}>{m}</button>)}
      </div>
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={5} placeholder="Enter text..." className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 font-mono" />
      <div className="flex gap-2 mb-4">
        <button onClick={() => setResult(process(true))} className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">Escape</button>
        <button onClick={() => setResult(process(false))} className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold">Unescape</button>
      </div>
      {result && <div className="p-4 bg-gray-800 rounded-lg"><div className="flex justify-between mb-2"><p className="text-gray-400 text-sm">Result</p><button onClick={copy} className="text-blue-400 text-sm hover:text-blue-300">Copy</button></div><pre className="text-green-400 text-sm whitespace-pre-wrap break-all">{result}</pre></div>}
    </div>
  );
}