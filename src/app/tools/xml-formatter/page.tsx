"use client";
import { useState } from "react";
export default function XMLFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  function format() {
    setError('');
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, 'text/xml');
      const err = doc.querySelector('parsererror');
      if(err){setError('XML Parse Error: '+err.textContent.split('
')[0]);return;}
      const serializer = new XMLSerializer();
      let str = serializer.serializeToString(doc);
      // Indent
      let indent = 0;
      let result = '';
      str.replace(/>\s*</g,'>
<').split('
').forEach(node=>{
        if(node.match(/^<\/\w/)) indent--;
        result += '  '.repeat(Math.max(0,indent)) + node.trim() + '
';
        if(node.match(/^<\w[^/]*[^/]>.*$/) && !node.match(/<.*\/>/)) indent++;
      });
      setOutput(result.trim());
    } catch(e){setError(e.message);}
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
      <p className="text-gray-400 mb-6">Format, validate, and prettify XML documents</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Input XML</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-80 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="<root><item>value</item></root>" />
          <button onClick={format} className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium">Format XML</button>
          {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Formatted Output</label>
          <textarea value={output} readOnly className="w-full h-80 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          <button onClick={()=>{if(output)navigator.clipboard.writeText(output)}} className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>
        </div>
      </div>
    </main>
  );
}