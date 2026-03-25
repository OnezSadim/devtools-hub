"use client";
import { useState } from "react";
export default function XpathTester() {
  const [xml, setXml] = useState("");
  const [xpath, setXpath] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const test = () => {
    try {
      setError("");
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, "application/xml");
      const err = doc.querySelector("parsererror");
      if (err) throw new Error("Invalid XML: " + err.textContent);
      const nodes = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
      const results: string[] = [];
      let node: Node | null;
      try {
        while ((node = nodes.iterateNext())) {
          results.push(node.nodeType === 3 ? (node as Text).data : (node as Element).outerHTML || node.textContent || "");
        }
      } catch {}
      setResult(results.length > 0 ? results.join("
---
") : "No matches found");
    } catch (e: any) { setError(e.message); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">XPath Tester</h1>
      <p className="text-gray-400 mb-6">Test XPath expressions against XML documents in the browser.</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">XML Document</label>
          <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={xml} onChange={e => setXml(e.target.value)} placeholder="<root><item id='1'>Hello</item><item id='2'>World</item></root>" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">XPath Expression</label>
          <input className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={xpath} onChange={e => setXpath(e.target.value)} placeholder="//item[@id='1']/text()" />
        </div>
        <button onClick={test} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Test XPath</button>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {result && (
          <div>
            <label className="block text-sm text-gray-400 mb-1">Results</label>
            <pre className="bg-gray-900 border border-gray-700 rounded p-3 text-sm overflow-auto">{result}</pre>
          </div>
        )}
      </div>
    </main>
  );
}