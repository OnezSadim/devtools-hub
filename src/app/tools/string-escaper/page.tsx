'use client';
import { useState } from 'react';
export default function StringEscaper() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'html'|'js'|'url'>('html');
  const operations = {
    html: {
      escape: (s:string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'),
      unescape: (s:string) => s.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#039;/g,"'")
    },
    js: {
      escape: (s:string) => s.replace(/\/g,'\\').replace(/"/g,'\"').replace(/'/g,"\'").replace(/
/g,'\n').replace(/	/g,'\t'),
      unescape: (s:string) => s.replace(/\\/g,'\').replace(/\"/g,'"').replace(/\'/g,"'").replace(/\n/g,'
').replace(/\t/g,'	')
    },
    url: {
      escape: (s:string) => encodeURIComponent(s),
      unescape: (s:string) => { try { return decodeURIComponent(s); } catch { return 'Invalid encoding'; } }
    }
  };
  const [result, setResult] = useState('');
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">String Escaper</h1>
        <p className="text-gray-400 mb-6">Escape or unescape HTML, JavaScript, and URL strings.</p>
        <div className="flex gap-2 mb-4">{(['html','js','url'] as const).map(m=>(<button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded text-sm font-medium ${mode===m?'bg-blue-600':'bg-gray-700 hover:bg-gray-600'}`}>{m.toUpperCase()}</button>))}</div>
        <textarea className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mb-3" placeholder="Enter string..." value={input} onChange={e=>setInput(e.target.value)} />
        <div className="flex gap-3 mb-4">
          <button onClick={()=>setResult(operations[mode].escape(input))} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Escape</button>
          <button onClick={()=>setResult(operations[mode].unescape(input))} className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded">Unescape</button>
        </div>
        {result && <textarea className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" readOnly value={result} />}
      </div>
    </main>
  );
}
