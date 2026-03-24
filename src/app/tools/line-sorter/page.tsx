'use client';
import { useState } from 'react';
export default function LineSorter() {
  const [input, setInput] = useState('');
  function process(fn: (lines:string[])=>string[]) {
    const lines = input.split('
');
    return fn(lines).join('
');
  }
  const [output, setOutput] = useState('');
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Line Sorter</h1>
        <p className="text-gray-400 mb-6">Sort, reverse, shuffle, or deduplicate lines of text.</p>
        <textarea className="w-full h-48 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mb-4" placeholder="Paste lines of text here..." value={input} onChange={e=>setInput(e.target.value)} />
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={()=>setOutput(process(l=>[...l].sort()))} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Sort A-Z</button>
          <button onClick={()=>setOutput(process(l=>[...l].sort().reverse()))} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Sort Z-A</button>
          <button onClick={()=>setOutput(process(l=>[...new Set(l)]))} className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded text-sm">Deduplicate</button>
          <button onClick={()=>setOutput(process(l=>[...l].reverse()))} className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">Reverse</button>
          <button onClick={()=>setOutput(process(l=>{const a=[...l];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}))} className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded text-sm">Shuffle</button>
        </div>
        {output && <textarea className="w-full h-48 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" readOnly value={output} />}
      </div>
    </main>
  );
}
