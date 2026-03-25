"use client";
import { useState } from "react";
export default function ReadingTimeCalculator() {
  const [text, setText] = useState("");
  const [wpm, setWpm] = useState("238");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length;
  const minutes = words / parseFloat(wpm||238);
  const formatTime = (m) => {
    if (m < 1) return Math.round(m*60) + " seconds";
    if (m < 60) return Math.round(m) + " min " + Math.round((m%1)*60) + " sec";
    return Math.floor(m/60) + " hr " + Math.round(m%60) + " min";
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Reading Time Calculator</h1>
        <p className="text-gray-400 mb-6">Paste your text to estimate reading time and get word count statistics.</p>
        <div className="mb-4"><label className="block text-sm text-gray-400 mb-1">Reading Speed (WPM)</label>
          <div className="flex gap-2 mb-2">
            {[["Slow","150"],["Average","238"],["Fast","400"],["Speed","700"]].map(([l,v])=>(
              <button key={v} onClick={()=>setWpm(v)} className={`px-3 py-1 rounded text-sm ${wpm===v?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>{l}</button>
            ))}
          </div>
          <input className="w-32 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" type="number" value={wpm} onChange={e=>setWpm(e.target.value)} /></div>
        <textarea className="w-full h-48 bg-gray-800 border border-gray-700 rounded px-3 py-2 mb-6 resize-none" value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{label:"Reading Time",val:text?formatTime(minutes):"—",color:"text-green-400"},{label:"Words",val:words.toLocaleString(),color:"text-white"},{label:"Characters",val:chars.toLocaleString(),color:"text-white"},{label:"Sentences",val:sentences.toLocaleString(),color:"text-white"}].map(({label,val,color})=>(
            <div key={label} className="bg-gray-800 rounded p-4 text-center">
              <div className={"text-xl font-bold " + color}>{val}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
