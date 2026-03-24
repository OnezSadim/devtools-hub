"use client";
import { useState } from "react";
export default function OGPreview() {
  const [title, setTitle] = useState("My Awesome Page");
  const [desc, setDesc] = useState("This is a great page with lots of useful content.");
  const [img, setImg] = useState("https://via.placeholder.com/1200x630");
  const [site, setSite] = useState("example.com");
  const code = `<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:image" content="${img}" />
<meta property="og:url" content="https://${site}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${desc}" />`;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Open Graph Preview</h1>
      <p className="text-gray-400 mb-6">Preview social media share cards and generate OG meta tags</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[["Title",title,setTitle],["Description",desc,setDesc],["Image URL",img,setImg],["Site domain",site,setSite]].map(([l,v,s]:any)=>(
            <div key={l}><label className="text-sm text-gray-400 mb-1 block">{l}</label>
            {l==="Description"?<textarea value={v} onChange={e=>s(e.target.value)} rows={3} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />:<input value={v} onChange={e=>s(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" />}
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-3">Facebook/LinkedIn preview:</p>
          <div className="border border-gray-700 rounded-lg overflow-hidden mb-6 max-w-sm">
            <div className="bg-gray-700 h-48 flex items-center justify-center text-gray-500 text-sm">Image Preview</div>
            <div className="p-3 bg-gray-900">
              <p className="text-xs text-gray-500 uppercase">{site}</p>
              <p className="font-semibold text-sm mt-1 line-clamp-2">{title}</p>
              <p className="text-gray-400 text-xs mt-1 line-clamp-2">{desc}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-2">Generated HTML:</p>
          <pre className="bg-gray-900 border border-gray-700 rounded p-3 text-xs overflow-auto whitespace-pre-wrap">{code}</pre>
          <button onClick={()=>navigator.clipboard.writeText(code)} className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy</button>
        </div>
      </div>
    </main>
  );
}