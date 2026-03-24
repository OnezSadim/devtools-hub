"use client";
import { useState } from "react";
export default function XMLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const format = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "application/xml");
      const err = doc.querySelector("parsererror");
      if (err) throw new Error(err.textContent || "Parse error");
      const serialize = (node: Node, level: number): string => {
        const pad = " ".repeat(level * indent);
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent?.trim() || "";
          return text ? pad + text + "\n" : "";
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as Element;
          const attrs = Array.from(el.attributes).map(a => ` ${a.name}="${a.value}"`).join("");
          const children = Array.from(el.childNodes).map(c => serialize(c, level + 1)).join("");
          if (!children.trim()) return `${pad}<${el.tagName}${attrs} />\n`;
          return `${pad}<${el.tagName}${attrs}>\n${children}${pad}</${el.tagName}>\n`;
        }
        return "";
      };
      setOutput(Array.from(doc.childNodes).map(n => serialize(n, 0)).join(""));
      setError("");
    } catch (e: unknown) { setError(e instanceof Error ? e.message : "Error"); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
        <p className="text-gray-400 mb-6">Pretty-print and validate XML documents</p>
        <div className="flex gap-4 mb-4">
          <label className="text-gray-300">Indent:
            <input type="number" value={indent} onChange={e=>setIndent(Number(e.target.value))} min={1} max={8}
              className="ml-2 w-16 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm" />
          </label>
          <button onClick={format} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Format XML</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Input XML</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={20}
              placeholder="<root><item id='1'>Hello</item></root>"
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Formatted XML</label>
            <textarea value={output} readOnly rows={20}
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
        </div>
        {error && <p className="mt-2 text-red-400">{error}</p>}
        {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy</button>}
      </div>
    </main>
  );
}