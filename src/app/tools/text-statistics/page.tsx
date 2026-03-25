"use client";
import { useState } from "react";

export default function TextStatistics() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g,"").length;
  const lines = text ? text.split("\n").length : 0;
  const sentences = text ? (text.match(/[.!?]+/g)||[]).length : 0;
  const paragraphs = text ? text.split(/\n\n+/).filter(p=>p.trim()).length : 0;
  const readingTime = Math.ceil(words / 200);
  const stats = [
    {label:"Words", value: words},
    {label:"Characters", value: chars},
    {label:"Characters (no spaces)", value: charsNoSpace},
    {label:"Lines", value: lines},
    {label:"Sentences", value: sentences},
    {label:"Paragraphs", value: paragraphs},
    {label:"Reading Time", value: readingTime + " min"},
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Statistics</h1>
        <p className="text-gray-400 mb-6">Analyze your text with detailed statistics.</p>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." className="w-full h-40 bg-gray-800 rounded p-3 mb-6" />
        <div className="grid grid-cols-2 gap-3">
          {stats.map(({label,value})=>(
            <div key={label} className="bg-gray-800 rounded p-4">
              <div className="text-2xl font-bold text-blue-400">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}