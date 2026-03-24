"use client";
import { useState } from "react";
export default function HtmlToJsx() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const convert = () => {
    let o = input
      .replace(/class=/g, "className=")
      .replace(/for=/g, "htmlFor=")
      .replace(/tabindex=/g, "tabIndex=")
      .replace(/readonly/g, "readOnly")
      .replace(/maxlength=/g, "maxLength=")
      .replace(/colspan=/g, "colSpan=")
      .replace(/rowspan=/g, "rowSpan=")
      .replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}")
      .replace(/style="([^"]*)"/g, (_, s) => {
        const obj = s.split(";").filter(Boolean).map(p => {
          const [k, v] = p.split(":").map(x => x.trim());
          const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          return `${camel}: "${v}"`;
        }).join(", ");
        return `style={{${obj}}}`;
      });
    setOutput(o);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML to JSX Converter</h1>
        <p className="text-gray-400 mb-6">Convert HTML markup to valid React JSX syntax.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">HTML Input</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder="Paste HTML here..." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">JSX Output</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={output} readOnly placeholder="JSX output..." />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Convert</button>
          <button onClick={() => navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Copy JSX</button>
        </div>
      </div>
    </main>
  );
}