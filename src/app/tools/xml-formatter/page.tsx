"use client";
import { useState } from "react";
export default function XMLFormatter() {
  const [xml, setXml] = useState("");
  const [formatted, setFormatted] = useState("");
  const [error, setError] = useState("");
  const format = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml.trim(), "text/xml");
      const parseError = doc.querySelector("parsererror");
      if (parseError) throw new Error(parseError.textContent || "Parse error");
      const serialize = (node: Node, indent: number): string => {
        const pad = "  ".repeat(indent);
        if (node.nodeType === Node.TEXT_NODE) {
          const t = node.textContent?.trim();
          return t ? t : "";
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as Element;
          const attrs = Array.from(el.attributes).map(a => ` + '`' + `${a.name}="${a.value}"` + '`' + `).join(" ");
          const children = Array.from(el.childNodes).map(c => serialize(c, indent + 1)).filter(Boolean);
          if (children.length === 0) return `${pad}<${el.tagName}${attrs} />`;
          if (children.length === 1 && !children[0].includes("
")) return `${pad}<${el.tagName}${attrs}>${children[0]}</${el.tagName}>`;
          return `${pad}<${el.tagName}${attrs}>
${children.map(c => "  ".repeat(indent+1) + c.trim()).join("
")}
${pad}</${el.tagName}>`;
        }
        return "";
      };
      setFormatted(serialize(doc.documentElement, 0));
      setError("");
    } catch (e) {
      setError("Invalid XML: " + String(e));
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
        <p className="text-gray-400 mb-6">Format and prettify XML documents with proper indentation.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Input XML</label>
            <textarea value={xml} onChange={e => setXml(e.target.value)} rows={14} placeholder="<root><item id=1><name>Test</name></item></root>" className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" />
            <button onClick={format} className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full">Format XML</button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Formatted Output</label>
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
            <pre className="bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono overflow-auto h-64 whitespace-pre-wrap">{formatted}</pre>
            {formatted && <button onClick={() => navigator.clipboard.writeText(formatted)} className="mt-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded w-full text-sm">Copy</button>}
          </div>
        </div>
      </div>
    </div>
  );
}