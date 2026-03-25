"use client";
import { useState } from "react";

function htmlToMd(html: string): string {
  return html
    .replace(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi, (_,n,t)=>"#".repeat(Number(n))+" "+t+"\n")
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
    .replace(/<a[^>]*href=['"](.*?)['"][^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ");
}

export default function HtmlToMarkdown() {
  const [html, setHtml] = useState("");
  const md = htmlToMd(html);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML to Markdown</h1>
        <p className="text-gray-400 mb-6">Convert HTML markup to Markdown format.</p>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-sm text-gray-400">HTML Input</label><textarea value={html} onChange={e=>setHtml(e.target.value)} placeholder="Paste HTML here..." className="w-full h-80 bg-gray-800 rounded p-3 font-mono text-sm mt-1" /></div>
          <div><label className="text-sm text-gray-400">Markdown Output</label><textarea value={md} readOnly className="w-full h-80 bg-gray-800 rounded p-3 font-mono text-sm mt-1" /></div>
        </div>
      </div>
    </div>
  );
}