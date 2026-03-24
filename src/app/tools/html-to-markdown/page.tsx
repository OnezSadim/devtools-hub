"use client";
import { useState } from "react";
function htmlToMd(html:string):string {
  return html
    .replace(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi, (_,l,t)=>"#".repeat(Number(l))+" "+t+"\n\n")
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi,'**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gi,'**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi,'*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gi,'*$1*')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi,'[$2]($1)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi,'![$2]($1)')
    .replace(/<li[^>]*>(.*?)<\/li>/gi,'- $1\n')
    .replace(/<br\s*\/?>/gi,'\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi,'$1\n\n')
    .replace(/<code[^>]*>(.*?)<\/code>/gi,''''$1''')
    .replace(/<[^>]+>/g,'')  
    .replace(/\n{3,}/g,'\n\n')
    .trim();
}
export default function HtmlToMarkdown() {
  const [html, setHtml] = useState('<h1>Hello</h1>\n<p>This is <strong>bold</strong> and <em>italic</em>.</p>\n<a href="https://example.com">Link</a>');
  const md = htmlToMd(html);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML to Markdown</h1>
        <p className="text-gray-400 mb-6">Convert HTML to clean Markdown format</p>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-gray-400 text-sm mb-1 block">HTML Input</label><textarea className="w-full h-96 bg-gray-900 rounded p-3 font-mono text-sm" value={html} onChange={e=>setHtml(e.target.value)}/></div>
          <div><label className="text-gray-400 text-sm mb-1 block">Markdown Output</label><textarea className="w-full h-96 bg-gray-900 rounded p-3 font-mono text-sm" value={md} readOnly/></div>
        </div>
        <button onClick={()=>navigator.clipboard.writeText(md)} className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Copy Markdown</button>
      </div>
    </div>
  );
}