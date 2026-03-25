"use client";
import { useState } from "react";
export default function TextDiffHighlighter() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const lines1 = text1.split("\n");
  const lines2 = text2.split("\n");
  const maxLen = Math.max(lines1.length, lines2.length);
  const diffs = Array.from({length: maxLen}, (_, i) => ({
    line: i + 1,
    a: lines1[i] ?? "",
    b: lines2[i] ?? "",
    same: lines1[i] === lines2[i]
  }));
  const changed = diffs.filter(d => !d.same).length;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Text Diff Highlighter</h1>
      <p className="text-gray-400 mb-4">Compare two texts and highlight differences line by line. {changed > 0 && <span className="text-yellow-400">{changed} line(s) differ</span>}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 text-white resize-none" placeholder="Text A..." value={text1} onChange={e => setText1(e.target.value)} />
        <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 text-white resize-none" placeholder="Text B..." value={text2} onChange={e => setText2(e.target.value)} />
      </div>
      <div className="space-y-1 font-mono text-sm">
        {diffs.map(({line, a, b, same}) => (
          <div key={line} className={`grid grid-cols-2 gap-2 px-2 py-1 rounded ${same ? "" : "bg-yellow-900/30 border border-yellow-700/40"}`}>
            <div className={same ? "text-gray-300" : "text-red-300"}><span className="text-gray-600 mr-2">{line}</span>{a || <span className="text-gray-600">(empty)</span>}</div>
            <div className={same ? "text-gray-300" : "text-green-300"}>{b || <span className="text-gray-600">(empty)</span>}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
