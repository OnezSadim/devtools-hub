"use client";
import { useState } from "react";
export default function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g,'').length;
  const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length;
  const paragraphs = text.split(/\n\n+/).filter(p=>p.trim()).length;
  const readTime = Math.ceil(words/200);
  const freq: Record<string,number> = {};
  text.toLowerCase().match(/\b\w{3,}\b/g)?.forEach(w=>{ freq[w]=(freq[w]||0)+1; });
  const topWords = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,10);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Counter</h1>
        <p className="text-gray-400 mb-6">Count words, characters, sentences and reading time</p>
        <textarea className="w-full h-48 bg-gray-900 rounded p-3 mb-6" value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..."/>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[["Words",words],["Characters",chars],["No Spaces",charsNoSpace],["Sentences",sentences],["Paragraphs",paragraphs],["Read Time",readTime+' min']].map(([l,v])=>(
            <div key={l as string} className="bg-gray-900 rounded p-4 text-center"><div className="text-2xl font-bold text-blue-400">{v}</div><div className="text-gray-400 text-sm">{l}</div></div>
          ))}
        </div>
        {topWords.length > 0 && <div className="bg-gray-900 rounded p-4"><p className="text-gray-400 mb-3 text-sm">Top words</p><div className="flex flex-wrap gap-2">{topWords.map(([w,c])=><span key={w} className="bg-gray-800 px-2 py-1 rounded text-sm">{w} <span className="text-blue-400">{c}</span></span>)}</div></div>}
      </div>
    </div>
  );
}