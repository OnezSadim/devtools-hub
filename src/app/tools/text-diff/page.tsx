"use client";
import { useState } from "react";
export default function TextDiff() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [diff, setDiff] = useState<{type:string,val:string}[]|null>(null);
  const compute = () => {
    const la = a.split("
"), lb = b.split("
");
    const res: {type:string,val:string}[] = [];
    const maxLen = Math.max(la.length, lb.length);
    for (let i=0;i<maxLen;i++) {
      if (i>=la.length) res.push({type:"add",val:lb[i]});
      else if (i>=lb.length) res.push({type:"remove",val:la[i]});
      else if (la[i]===lb[i]) res.push({type:"same",val:la[i]});
      else { res.push({type:"remove",val:la[i]}); res.push({type:"add",val:lb[i]}); }
    }
    setDiff(res);
  };
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Text Diff</h1>
      <p className="text-gray-400 mb-6">Compare two blocks of text line by line.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm mb-1 text-gray-400">Original</label><textarea value={a} onChange={e=>setA(e.target.value)} className="w-full h-36 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" /></div>
        <div><label className="block text-sm mb-1 text-gray-400">Modified</label><textarea value={b} onChange={e=>setB(e.target.value)} className="w-full h-36 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" /></div>
      </div>
      <button onClick={compute} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4">Compare</button>
      {diff && <div className="font-mono text-sm bg-gray-900 rounded p-4 space-y-0.5">{diff.map((l,i)=>(
        <div key={i} className={l.type==="add"?"bg-green-900/40 text-green-300":l.type==="remove"?"bg-red-900/40 text-red-300":"text-gray-400"}>
          <span className="mr-2">{l.type==="add"?"+":l.type==="remove"?"-":" "}</span>{l.val}
        </div>
      ))}</div>}
    </div>
  );
}