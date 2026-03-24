"use client";
import { useState } from "react";
export default function TextStatistics() {
  const [text, setText] = useState("");
  const stats = () => {
    if (!text) return null;
    const words = text.trim()?text.trim().split(/\s+/).length:0;
    const sentences = (text.match(/[.!?]+/g)||[]).length;
    const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g,"").length;
    const readTime = Math.max(1,Math.round(words/200));
    const freq: Record<string,number> = {};
    text.toLowerCase().match(/\b\w+\b/g)?.forEach(w=>{freq[w]=(freq[w]||0)+1;});
    const topWords = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5);
    return {words,sentences,paragraphs,chars,charsNoSpace,readTime,topWords};
  };
  const s = stats();
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Text Statistics</h1>
      <p className="text-gray-400 mb-6">Analyze text with detailed statistics</p>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-6" />
      {s && <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[{l:"Words",v:s.words},{l:"Characters",v:s.chars},{l:"Chars (no spaces)",v:s.charsNoSpace},{l:"Sentences",v:s.sentences},{l:"Paragraphs",v:s.paragraphs},{l:"Read time",v:s.readTime+" min"}].map(({l,v})=>(
          <div key={l} className="bg-gray-900 border border-gray-700 rounded p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{v}</div>
            <div className="text-gray-400 text-sm">{l}</div>
          </div>
        ))}
      </div>}
      {s && s.topWords.length>0 && <div className="bg-gray-900 border border-gray-700 rounded p-4">
        <h3 className="font-semibold mb-3">Top Words</h3>
        {s.topWords.map(([w,c])=>(<div key={w} className="flex justify-between py-1 border-b border-gray-800"><span className="font-mono">{w}</span><span className="text-gray-400">{c}x</span></div>))}
      </div>}
    </div>
  );
}