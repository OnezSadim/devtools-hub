"use client";
import { useState } from "react";
export default function MetaGen() {
  const [f, setF] = useState({title:"",desc:"",keywords:"",author:"",robots:"index, follow",viewport:"width=device-width, initial-scale=1.0",charset:"UTF-8",lang:"en"});
  const update = (k:string,v:string) => setF(p=>({...p,[k]:v}));
  const tags = [
    `<meta charset="${f.charset}" />`,
    `<meta name="viewport" content="${f.viewport}" />`,
    f.title?`<title>${f.title}</title>`:null,
    f.desc?`<meta name="description" content="${f.desc}" />`:null,
    f.keywords?`<meta name="keywords" content="${f.keywords}" />`:null,
    f.author?`<meta name="author" content="${f.author}" />`:null,
    `<meta name="robots" content="${f.robots}" />`,
    f.title?`<meta property="og:title" content="${f.title}" />`:null,
    f.desc?`<meta property="og:description" content="${f.desc}" />`:null,
    `<html lang="${f.lang}">`
  ].filter(Boolean).join("
");
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Meta Tag Generator</h1>
      <p className="text-gray-400 mb-6">Generate complete HTML meta tags for SEO</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {Object.entries(f).map(([k,v])=>(
            <div key={k}><label className="text-sm text-gray-400 mb-1 block capitalize">{k}</label>
            {k==="desc"?<textarea value={v} onChange={e=>update(k,e.target.value)} rows={3} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />:<input value={v} onChange={e=>update(k,e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />}
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-2">Generated tags:</p>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 text-sm font-mono overflow-auto whitespace-pre-wrap h-80">{tags}</pre>
          <button onClick={()=>navigator.clipboard.writeText(tags)} className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy All</button>
        </div>
      </div>
    </main>
  );
}