"use client";
import { useState } from "react";
function htmlToMd(html) {
  return html
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n")
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "_$1_")
    .replace(/<i[^>]*>(.*?)<\/i>/gi, "_$1_")
    .replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .trim();
}
export default function HtmlToMarkdown() {
  const [input, setInput] = useState("<h1>Hello World</h1>\n<p>This is a <strong>bold</strong> and <em>italic</em> paragraph.</p>\n<a href='https://example.com'>Link</a>");
  const [output, setOutput] = useState("");
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold text-white">HTML to Markdown</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 mb-2 text-sm">HTML Input</p>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-800 text-white rounded-xl p-4 font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-400 text-sm">Markdown Output</p>
            {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="text-indigo-400 text-sm">Copy</button>}
          </div>
          <pre className="w-full h-64 bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-sm overflow-auto whitespace-pre-wrap">{output || "Click Convert"}</pre>
        </div>
      </div>
      <button onClick={()=>setOutput(htmlToMd(input))} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold">Convert</button>
    </div>
  );
}
