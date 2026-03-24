"use client";
import { useState } from "react";
export default function CodeBeautifier() {
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("json");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  function beautify() {
    setError("");
    if(lang==="json") {
      try { setOutput(JSON.stringify(JSON.parse(code),null,2)); } catch(e){setError("Invalid JSON");}
    } else {
      // Basic indent fix for other languages
      let indent=0;
      const lines=code.split("\n").map(l=>l.trim()).filter(Boolean);
      const result=lines.map(line=>{
        if(line.match(/^[}\]\)]/)) indent=Math.max(0,indent-1);
        const out=" ".repeat(indent*2)+line;
        if(line.match(/[{\[\(]$/)) indent++;
        return out;
      });
      setOutput(result.join("\n"));
    }
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Code Beautifier</h1>
      <div className="flex gap-2 mb-3">
        {["json","js","css","html"].map(l=><button key={l} onClick={()=>setLang(l)} className={"px-3 py-1 rounded text-sm "+(lang===l?"bg-blue-600":"bg-gray-700")}>{l.toUpperCase()}</button>)}
      </div>
      <textarea className="w-full h-48 p-3 bg-gray-800 rounded border border-gray-600 text-white font-mono text-sm mb-3" placeholder="Paste code..." value={code} onChange={e=>setCode(e.target.value)} />
      <button onClick={beautify} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4">Beautify</button>
      {error&&<p className="text-red-400 mb-3">{error}</p>}
      {output&&<pre className="p-3 bg-gray-800 rounded text-sm overflow-auto max-h-60">{output}</pre>}
    </div>
  );
}