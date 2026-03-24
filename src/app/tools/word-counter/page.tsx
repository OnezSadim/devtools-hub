"use client";
import { useState } from "react";
export default function WordCounter() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim()).length;
  const readTime = Math.max(1, Math.ceil(words / 200));
  const stats = [{label:"Words",val:words},{label:"Characters",val:chars},{label:"Chars (no spaces)",val:charsNoSpace},{label:"Sentences",val:sentences},{label:"Paragraphs",val:paragraphs},{label:"Read time",val:readTime+" min"}];
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">Word Counter</h1><p className="text-gray-400 mb-6">Count words, characters, sentences and more.</p><textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-6" placeholder="Paste or type your text here..." value={text} onChange={e => setText(e.target.value)} /><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{stats.map(({label,val}) => (<div key={label} className="bg-gray-900 border border-gray-700 rounded p-4 text-center"><div className="text-2xl font-bold text-blue-400">{val}</div><div className="text-sm text-gray-400 mt-1">{label}</div></div>))}</div></div>);
}