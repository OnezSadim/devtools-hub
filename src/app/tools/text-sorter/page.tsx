"use client";
import { useState } from "react";

export default function TextSorter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [reverse, setReverse] = useState(false);
  const [removeDups, setRemoveDups] = useState(false);
  const [trimLines, setTrimLines] = useState(true);
  const [caseMode, setCaseMode] = useState('sensitive');

  const sort = () => {
    let lines = input.split('\n');
    if (trimLines) lines = lines.map(l => l.trim());
    if (removeDups) lines = [...new Set(lines)];
    lines.sort((a, b) => {
      const x = caseMode === 'insensitive' ? a.toLowerCase() : a;
      const y = caseMode === 'insensitive' ? b.toLowerCase() : b;
      return x.localeCompare(y);
    });
    if (reverse) lines.reverse();
    setOutput(lines.join('\n'));
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Sorter</h1>
        <p className="text-gray-400 mb-6">Sort lines of text alphabetically with options.</p>
        <div className="flex flex-wrap gap-4 mb-4">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={reverse} onChange={e=>setReverse(e.target.checked)} />Reverse</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={removeDups} onChange={e=>setRemoveDups(e.target.checked)} />Remove duplicates</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={trimLines} onChange={e=>setTrimLines(e.target.checked)} />Trim whitespace</label>
          <label className="flex items-center gap-2 text-sm">Case: <select value={caseMode} onChange={e=>setCaseMode(e.target.value)} className="bg-gray-800 rounded px-2 py-1"><option value="sensitive">Sensitive</option><option value="insensitive">Insensitive</option></select></label>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={14} placeholder="One item per line..." className="w-full p-3 bg-gray-800 rounded font-mono text-sm" />
          <textarea readOnly value={output} rows={14} placeholder="Sorted output..." className="w-full p-3 bg-gray-800 rounded font-mono text-sm" />
        </div>
        <div className="flex gap-2">
          <button onClick={sort} className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700">Sort</button>
          {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Copy</button>}
        </div>
      </div>
    </main>
  );
}