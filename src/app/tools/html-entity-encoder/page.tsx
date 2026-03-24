"use client";
import { useState } from "react";

const COMMON: Record<string, string> = {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
const REV = Object.fromEntries(Object.entries(COMMON).map(([k,v])=>[v,k]));

export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");

  const process = () => {
    if (mode === "encode") {
      setOutput(input.replace(/[&<>"']/g, c => COMMON[c] || c));
    } else {
      let r = input;
      Object.entries(REV).forEach(([ent, ch]) => { r = r.replaceAll(ent, ch); });
      r = r.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
      r = r.replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
      setOutput(r);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">HTML Entity Encoder/Decoder</h1>
      <p className="text-gray-400 mb-6">Convert special characters to HTML entities and back.</p>
      <div className="flex gap-2 mb-4">
        {(["encode","decode"] as const).map(m=>
          <button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded font-medium ${mode===m?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{m=="encode"?"Encode":"Decode"}</button>
        )}
      </div>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="encode"?"HTML with special chars...":"Text with &amp; entities..."} className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 mb-3 font-mono text-sm" />
      <button onClick={process} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium mb-4">Convert</button>
      <textarea readOnly value={output} className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" />
    </div>
  );
}
