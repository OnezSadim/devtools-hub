"use client";
import { useState } from "react";
export default function TextDiffInline() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const diff = () => {
    const la = left.split("\n"); const ra = right.split("\n");
    const max = Math.max(la.length, ra.length);
    const rows = [];
    for (let i=0;i<max;i++) {
      const l = la[i]??null; const r = ra[i]??null;
      if (l===r) rows.push({type:"same",line:l,i});
      else if (l===null) rows.push({type:"added",line:r,i});
      else if (r===null) rows.push({type:"removed",line:l,i});
      else rows.push({type:"changed",left:l,right:r,i});
    }
    return rows;
  };
  const rows = diff();
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-4xl mx-auto"><h1 className="text-3xl font-bold mb-2">Inline Text Diff</h1><p className="text-gray-400 mb-6">Compare two texts line by line</p><div className="grid grid-cols-2 gap-4 mb-6"><div><label className="block text-sm text-gray-400 mb-1">Original</label><textarea value={left} onChange={e=>setLeft(e.target.value)} className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="Original text..." /></div><div><label className="block text-sm text-gray-400 mb-1">Modified</label><textarea value={right} onChange={e=>setRight(e.target.value)} className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="Modified text..." /></div></div><div className="font-mono text-sm space-y-0.5">{rows.map(r=>r.type==="same"?(<div key={r.i} className="flex"><span className="w-6 text-gray-600 select-none"> </span><span className="text-gray-400">{r.line}</span></div>):r.type==="added"?(<div key={r.i} className="flex bg-green-950"><span className="w-6 text-green-500 select-none">+</span><span className="text-green-300">{r.line}</span></div>):r.type==="removed"?(<div key={r.i} className="flex bg-red-950"><span className="w-6 text-red-500 select-none">-</span><span className="text-red-300">{r.left||r.line}</span></div>):(<><div key={r.i+"l"} className="flex bg-red-950"><span className="w-6 text-red-500 select-none">-</span><span className="text-red-300">{r.left}</span></div><div key={r.i+"r"} className="flex bg-green-950"><span className="w-6 text-green-500 select-none">+</span><span className="text-green-300">{r.right}</span></div></>))}</div></div></div>);
}