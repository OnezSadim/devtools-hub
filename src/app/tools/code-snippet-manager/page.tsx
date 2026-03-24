"use client";
import { useState } from "react";
const defaultSnippets = [
  {id:1, title:"Fetch with error handling", lang:"javascript", code:`async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}`},
  {id:2, title:"Debounce function", lang:"javascript", code:`function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`},
  {id:3, title:"Deep clone object", lang:"javascript", code:`const deepClone = obj => JSON.parse(JSON.stringify(obj));`},
];
export default function CodeSnippetManager() {
  const [snippets, setSnippets] = useState(defaultSnippets);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<number|null>(1);
  const [copied, setCopied] = useState(false);
  const filtered = snippets.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));
  const current = snippets.find(s=>s.id===active);
  const copy = () => { if(current) { navigator.clipboard.writeText(current.code); setCopied(true); setTimeout(()=>setCopied(false),2000); }};
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Code Snippet Manager</h1>
      <p className="text-gray-400 mb-6">Browse and copy reusable code snippets</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search snippets..." className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-sm mb-3"/>
          <div className="space-y-1">
            {filtered.map(s=>(
              <button key={s.id} onClick={()=>setActive(s.id)} className={"w-full text-left px-3 py-2 rounded text-sm " + (active===s.id?"bg-blue-600":"bg-gray-900 hover:bg-gray-800")}>
                <div className="font-medium truncate">{s.title}</div>
                <div className="text-xs opacity-60">{s.lang}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          {current ? <>
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">{current.title}</h2>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">{current.lang}</span>
                <button onClick={copy} className={"text-xs px-3 py-1 rounded " + (copied?"bg-green-600":"bg-blue-600 hover:bg-blue-700")}>{copied?"Copied!":"Copy"}</button>
              </div>
            </div>
            <pre className="bg-gray-900 rounded p-4 font-mono text-sm text-green-400 overflow-auto h-64">{current.code}</pre>
          </> : <div className="text-gray-500 text-sm">Select a snippet</div>}
        </div>
      </div>
    </main>
  );
}