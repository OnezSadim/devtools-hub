"use client";
import { useState } from "react";
export default function TextStatistics() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim()).length;
  const readingTime = Math.max(1, Math.round(words / 200));
  const speakingTime = Math.max(1, Math.round(words / 130));
  const freq: Record<string,number> = {};
  text.toLowerCase().match(/\b[a-z]{3,}\b/g)?.forEach(w => { freq[w] = (freq[w]||0)+1; });
  const topWords = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const stats = [
    {label:"Words",value:words},{label:"Characters",value:chars},{label:"Chars (no spaces)",value:charsNoSpace},
    {label:"Sentences",value:sentences},{label:"Paragraphs",value:paragraphs},{label:"Reading time",value:`${readingTime} min`},
    {label:"Speaking time",value:`${speakingTime} min`},{label:"Avg word length",value:words?Math.round(charsNoSpace/words*10)/10:0}
  ];
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Statistics</h1>
        <p className="text-gray-400 mb-6">Analyze word count, character count, reading time, and more.</p>
        <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 mb-6" value={text} onChange={e => setText(e.target.value)} placeholder="Paste your text here..." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {stats.map(({label,value}) => (
            <div key={label} className="bg-gray-900 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{value}</div>
              <div className="text-gray-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
        {topWords.length > 0 && (
          <div className="bg-gray-900 rounded-lg p-4">
            <h2 className="font-semibold mb-3">Top Words</h2>
            <div className="flex flex-wrap gap-2">
              {topWords.map(([w,c]) => <span key={w} className="bg-gray-800 px-3 py-1 rounded-full text-sm">{w} <span className="text-blue-400">{c}</span></span>)}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}