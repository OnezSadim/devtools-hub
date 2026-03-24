'use client';
import { useState } from 'react';
function formatXml(xml: string) {
  let formatted = '', indent = '';
  const tab = '  ';
  xml.replace(/>/g,'>'
').split(''
').forEach(node => {
    if(node.match(/^<\/\w/)){indent=indent.slice(tab.length);}
    formatted += indent + node + ''
';
    if(node.match(/^<\w[^!?][^>]*[^/]>.*$/)){indent+=tab;}
  });
  return formatted.trim();
}
export default function XmlFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  function format() {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, 'application/xml');
      const err = doc.querySelector('parsererror');
      if(err) throw new Error('Invalid XML');
      const s = new XMLSerializer();
      const raw = s.serializeToString(doc);
      setOutput(formatXml(raw));
      setError('');
    } catch(e:any){setError(e.message);setOutput('');}
  }
  function minify() {
    setOutput(input.replace(/
\s*/g,'').replace(/\s+</g,'<').replace(/>\s+/g,'>'));
    setError('');
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
        <p className="text-gray-400 mb-6">Format and prettify XML, or minify it.</p>
        <textarea className="w-full h-48 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mb-3" placeholder="Paste XML here..." value={input} onChange={e=>setInput(e.target.value)} />
        <div className="flex gap-3 mb-4">
          <button onClick={format} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Format</button>
          <button onClick={minify} className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded">Minify</button>
        </div>
        {error && <p className="text-red-400 mb-3">{error}</p>}
        {output && <textarea className="w-full h-48 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" readOnly value={output} />}
      </div>
    </main>
  );
}
