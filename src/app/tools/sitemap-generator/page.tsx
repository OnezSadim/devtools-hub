"use client";
import { useState } from "react";
export default function SitemapGen() {
  const [domain, setDomain] = useState("https://example.com");
  const [urls, setUrls] = useState("/
/about
/contact
/blog
/blog/post-1");
  const [freq, setFreq] = useState("weekly");
  const [priority, setPriority] = useState("0.8");
  const lines = urls.split("
").map(u=>u.trim()).filter(Boolean);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lines.map(u=>`  <url>
    <loc>${domain}${u.startsWith("/")?u:"/"+u}</loc>
    <changefreq>${freq}</changefreq>
    <priority>${u==="/"?"1.0":priority}</priority>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`).join("
")}
</urlset>`;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">XML Sitemap Generator</h1>
      <p className="text-gray-400 mb-6">Generate XML sitemaps for search engine indexing</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div><label className="text-sm text-gray-400 mb-1 block">Domain</label><input value={domain} onChange={e=>setDomain(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm" /></div>
          <div><label className="text-sm text-gray-400 mb-1 block">URLs (one per line)</label><textarea value={urls} onChange={e=>setUrls(e.target.value)} rows={8} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm font-mono" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm text-gray-400 mb-1 block">Change freq</label><select value={freq} onChange={e=>setFreq(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"><option>always</option><option>hourly</option><option>daily</option><option>weekly</option><option>monthly</option><option>yearly</option><option>never</option></select></div>
            <div><label className="text-sm text-gray-400 mb-1 block">Priority</label><select value={priority} onChange={e=>setPriority(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"><option>1.0</option><option>0.9</option><option>0.8</option><option>0.7</option><option>0.6</option><option>0.5</option></select></div>
          </div>
        </div>
        <div>
          <pre className="bg-gray-900 border border-gray-700 rounded p-4 text-xs font-mono overflow-auto whitespace-pre-wrap h-80">{sitemap}</pre>
          <div className="flex gap-2 mt-3">
            <button onClick={()=>navigator.clipboard.writeText(sitemap)} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Copy</button>
            <button onClick={()=>{const b=new Blob([sitemap],{type:"application/xml"});const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="sitemap.xml";a.click()}} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Download</button>
          </div>
        </div>
      </div>
    </main>
  );
}