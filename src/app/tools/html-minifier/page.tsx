"use client";
import { useState } from "react";

function minifyHTML(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/> </g, '><')
    .replace(/ ?= ?/g, '=')
    .trim();
}

export default function HtmlMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handle = () => setOutput(minifyHTML(input));
  const savings = input.length > 0 ? Math.round((1 - output.length / input.length) * 100) : 0;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML Minifier</h1>
        <p className="text-gray-400 mb-6">Remove whitespace and comments from HTML to reduce file size.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Input HTML ({input.length} bytes)</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={14} placeholder="Paste HTML here..." className="w-full p-3 bg-gray-800 rounded font-mono text-sm" />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Minified ({output.length} bytes{output.length > 0 ? `, ${savings}% smaller` : ''})</label>
            <textarea readOnly value={output} rows={14} className="w-full p-3 bg-gray-800 rounded font-mono text-sm" />
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={handle} className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700">Minify</button>
          {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Copy</button>}
        </div>
      </div>
    </main>
  );
}