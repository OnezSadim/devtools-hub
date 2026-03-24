"use client";
import { useState } from "react";
export default function CharacterCounter() {
  const [text, setText] = useState("");
  const chars = text.length;
  const charsNoSpaces = text.replace(/ /g,"").length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s=>s.trim()).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p=>p.trim()).length : 0;
  const readTime = Math.ceil(words / 200);
  const stats = [{label:"Characters",val:chars},{label:"No Spaces",val:charsNoSpaces},{label:"Words",val:words},{label:"Sentences",val:sentences},{label:"Paragraphs",val:paragraphs},{label:"Read time (min)",val:readTime}];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Character Counter</h1>
      <p className="text-gray-400 mb-6">Count characters, words, sentences, and estimate read time.</p>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Type or paste your text here..." className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 mb-6" />
      <div className="grid grid-cols-3 gap-4">{stats.map(({label,val})=>(
        <div key={label} className="bg-gray-800 rounded p-4 text-center">
          <p className="text-2xl font-bold">{val}</p>
          <p className="text-xs text-gray-400 mt-1">{label}</p>
        </div>
      ))}</div>
    </div>
  );
}