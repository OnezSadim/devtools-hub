"use client";
import { useState } from "react";
export default function ReadingTimeEstimator() {
  const [text, setText] = useState("");
  const [wpm, setWpm] = useState("200");
  const words = (text.match(/\S+/g)||[]).length;
  const chars = text.length;
  const minutes = words / parseFloat(wpm||200);
  const secs = Math.round(minutes * 60);
  const fmt = (m) => m < 1 ? `${Math.round(m*60)}s` : m < 60 ? `${Math.floor(m)}m ${Math.round((m%1)*60)}s` : `${Math.floor(m/60)}h ${Math.floor(m%60)}m`;
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Reading Time Estimator</h1><p className="text-gray-400 mb-6">Estimate how long it takes to read any text.</p><div className="mb-4 flex items-center gap-3"><label className="text-sm text-gray-400">Reading speed:</label><input type="number" value={wpm} onChange={e=>setWpm(e.target.value)} className="w-24 bg-gray-800 border border-gray-700 rounded px-3 py-1"/><span className="text-gray-400 text-sm">words/min</span></div><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 h-48 resize-none" />{words>0 && <div className="mt-4 grid grid-cols-3 gap-4"><div className="bg-gray-800 rounded p-4 text-center"><div className="text-2xl font-bold text-blue-400">{fmt(minutes)}</div><div className="text-gray-400 text-sm mt-1">Reading Time</div></div><div className="bg-gray-800 rounded p-4 text-center"><div className="text-2xl font-bold">{words.toLocaleString()}</div><div className="text-gray-400 text-sm mt-1">Words</div></div><div className="bg-gray-800 rounded p-4 text-center"><div className="text-2xl font-bold">{chars.toLocaleString()}</div><div className="text-gray-400 text-sm mt-1">Characters</div></div></div>}</div></div>);
}