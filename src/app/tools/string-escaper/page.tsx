
"use client";
import { useState } from "react";
export default function StringEscaper() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("json");
  const escape = (s: string, m: string) => {
    if (m === "json") return JSON.stringify(s).slice(1,-1);
    if (m === "html") return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");
    if (m === "regex") return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    if (m === "url") return encodeURIComponent(s);
    if (m === "sql") return s.replace(/'/g,"''"  ).replace(/\\/g, "\\\\");
    return s;
  };
  const unescape = (s: string, m: string) => {
    if (m === "json") try { return JSON.parse(`"${s}"`); } catch { return "Invalid escape sequence"; }
    if (m === "html") return s.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,""").replace(/&#x27;/g,"'");
    if (m === "url") try { return decodeURIComponent(s); } catch { return "Invalid URL encoding"; }
    return s;
  };
  const output = escape(input, mode);
  const unescaped = unescape(input, mode);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">String Escaper</h1>
        <p className="text-gray-400 mb-6">Escape and unescape strings for JSON, HTML, Regex, URL, SQL</p>
        <div className="flex gap-2 mb-4">
          {["json","html","regex","url","sql"].map(m=>(
            <button key={m} onClick={()=>setMode(m)} className={`px-3 py-2 rounded text-sm font-medium ${mode===m?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{m.toUpperCase()}</button>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1">Input</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="Enter text to escape/unescape..." />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-700 rounded p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Escaped</span>
              <button onClick={()=>navigator.clipboard.writeText(output)} className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">Copy</button>
            </div>
            <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap break-all">{output}</pre>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Unescaped</span>
              <button onClick={()=>navigator.clipboard.writeText(unescaped)} className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded">Copy</button>
            </div>
            <pre className="text-yellow-400 text-sm font-mono whitespace-pre-wrap break-all">{unescaped}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
