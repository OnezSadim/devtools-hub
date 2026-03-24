"use client";
import { useState } from "react";
export default function HtmlToMarkdown() {
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);
  const convert = (h: string) => {
    return h
      .replace(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/gi, (_,n,t) => "#".repeat(+n)+" "+t.replace(/<[^>]+>/g,"")+"
")
      .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
      .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
      .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
      .replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
      .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
      .replace(/<a[^>]+href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, "[$2]($1)")
      .replace(/<img[^>]+src=["']([^"']*)["'][^>]+alt=["']([^"']*)["'][^>]*\/?>/gi, "![$2]($1)")
      .replace(/<img[^>]+src=["']([^"']*)["'][^>]*\/?>/gi, "![]($1)")
      .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1")
      .replace(/<\/?(ul|ol)[^>]*>/gi, "")
      .replace(/<br\s*\/?>/gi, "
")
      .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1
")
      .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "> $1")
      .replace(/<hr\s*\/?>/gi, "---")
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&nbsp;/g," ")
      .replace(/
{3,}/g, "

").trim();
  };
  const output = html ? convert(html) : "";
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">HTML to Markdown</h1>
        <p className="text-gray-400 mb-6">Convert HTML markup to clean Markdown syntax.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">HTML Input</label>
            <textarea value={html} onChange={e=>setHtml(e.target.value)} rows={20} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" placeholder="<h1>Hello</h1><p>This is <strong>bold</strong></p>" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-sm text-gray-400">Markdown Output</label>
              {output && <button onClick={copy} className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">{copied?"Copied!":"Copy"}</button>}
            </div>
            <textarea value={output} readOnly rows={20} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
}