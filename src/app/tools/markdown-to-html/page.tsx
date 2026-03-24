"use client";
import { useState } from "react";
export default function MarkdownToHTML() {
  const [input, setInput] = useState("");
  const [tab, setTab] = useState<"html"|"preview">("html");
  const convert = (md: string) => {
    let html = md
      .replace(/^#{6}\s(.+)$/gm, "<h6>$1</h6>")
      .replace(/^#{5}\s(.+)$/gm, "<h5>$1</h5>")
      .replace(/^#{4}\s(.+)$/gm, "<h4>$1</h4>")
      .replace(/^###\s(.+)$/gm, "<h3>$1</h3>")
      .replace(/^##\s(.+)$/gm, "<h2>$1</h2>")
      .replace(/^#\s(.+)$/gm, "<h1>$1</h1>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>'.replace(/">/,">"))
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      .replace(/^\d+\.\s(.+)$/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
      .replace(/^---$/gm, "<hr/>")
      .replace(/^(?!<[h|u|l|h|p|d]).+$/gm, p => p.trim() ? `<p>${p}</p>` : "")
      .replace(/\n{2,}/g, "\n");
    return html;
  };
  const output = convert(input);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Markdown to HTML</h1>
        <p className="text-gray-400 mb-6">Convert Markdown to HTML with live preview</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Markdown Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={20}
              placeholder="# Hello World

This is **bold** and *italic*.

- Item 1
- Item 2"
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
          <div>
            <div className="flex gap-2 mb-1">
              <button onClick={()=>setTab("html")} className={`px-3 py-1 rounded text-sm ${tab==="html"?"bg-blue-600":"bg-gray-700"}`}>HTML</button>
              <button onClick={()=>setTab("preview")} className={`px-3 py-1 rounded text-sm ${tab==="preview"?"bg-blue-600":"bg-gray-700"}`}>Preview</button>
            </div>
            {tab === "html" ? (
              <textarea value={output} readOnly rows={20}
                className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
            ) : (
              <div className="w-full bg-white text-gray-900 rounded p-4 h-[480px] overflow-auto prose max-w-none"
                dangerouslySetInnerHTML={{__html: output}} />
            )}
          </div>
        </div>
        {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy HTML</button>}
      </div>
    </main>
  );
}