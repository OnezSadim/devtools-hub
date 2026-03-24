"use client";
import { useState } from "react";
export default function TextDiff() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [diff, setDiff] = useState<string[]>([]);
  function computeDiff() {
    const a = left.split("\n"); const b = right.split("\n");
    const result: string[] = [];
    const maxLen = Math.max(a.length, b.length);
    for (let i = 0; i < maxLen; i++) {
      if (a[i] === b[i]) result.push("= " + (a[i] ?? ""));
      else { if (a[i] !== undefined) result.push("- " + a[i]); if (b[i] !== undefined) result.push("+ " + b[i]); }
    }
    setDiff(result);
  }
  return (<div className="min-h-screen bg-gray-950 text-white p-6"><div className="max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-2">Text Diff</h1><p className="text-gray-400 mb-6">Compare two texts and highlight differences line by line.</p><div className="grid grid-cols-2 gap-4 mb-4"><div><label className="block text-sm text-gray-400 mb-1">Original</label><textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" value={left} onChange={e=>setLeft(e.target.value)} placeholder="Paste original text..."/></div><div><label className="block text-sm text-gray-400 mb-1">Modified</label><textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" value={right} onChange={e=>setRight(e.target.value)} placeholder="Paste modified text..."/></div></div><button onClick={computeDiff} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium mb-4">Compare</button>{diff.length>0&&<div className="bg-gray-900 rounded p-4 font-mono text-sm">{diff.map((line,i)=><div key={i} className={line.startsWith("+")?"text-green-400":line.startsWith("-")?"text-red-400":"text-gray-400"}>{line}</div>)}</div>}</div></div>);
}