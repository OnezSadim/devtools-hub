"use client";
import { useState } from "react";
export default function TextStatistics() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g,"").length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s=>s.trim()).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p=>p.trim()).length : 0;
  const lines = text ? text.split("\n").length : 0;
  const readTime = Math.ceil(words / 200);
  const freq: Record<string,number> = {};
  text.toLowerCase().match(/\b\w+\b/g)?.forEach(w => { freq[w] = (freq[w]||0)+1; });
  const topWords = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const Stat = ({label, value}: {label:string, value:string|number}) => (
    <div className="bg-gray-900 border border-gray-700 rounded p-4 text-center">
      <div className="text-2xl font-bold text-blue-400">{value}</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Statistics</h1>
        <p className="text-gray-400 mb-6">Analyze text for word count, readability, and more</p>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={8} placeholder="Paste your text here..." className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-6 resize-none"/>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Stat label="Words" value={words}/>
          <Stat label="Characters" value={chars}/>
          <Stat label="No Spaces" value={charsNoSpace}/>
          <Stat label="Sentences" value={sentences}/>
          <Stat label="Paragraphs" value={paragraphs}/>
          <Stat label="Lines" value={lines}/>
          <Stat label="Read Time" value={`${readTime} min`}/>
          <Stat label="Avg Word Len" value={words ? (charsNoSpace/words).toFixed(1) : 0}/>
        </div>
        {topWords.length > 0 && <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <h3 className="text-gray-400 text-sm mb-3">Top Words</h3>
          <div className="space-y-2">{topWords.map(([w,c]) => (
            <div key={w} className="flex justify-between items-center">
              <span className="font-mono">{w}</span>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 h-2 rounded" style={{width: `${(c/topWords[0][1])*100}px`}}/>
                <span className="text-gray-400 text-sm">{c}</span>
              </div>
            </div>
          ))}</div>
        </div>}
      </div>
    </main>
  );
}