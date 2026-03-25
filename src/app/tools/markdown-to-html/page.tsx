"use client";
import { useState } from "react";

function mdToHtml(md: string): string {
  return md
    .replace(/^#{6}\s(.+)/gm, "<h6>$1</h6>")
    .replace(/^#{5}\s(.+)/gm, "<h5>$1</h5>")
    .replace(/^#{4}\s(.+)/gm, "<h4>$1</h4>")
    .replace(/^#{3}\s(.+)/gm, "<h3>$1</h3>")
    .replace(/^#{2}\s(.+)/gm, "<h2>$1</h2>")
    .replace(/^#\s(.+)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^-\s(.+)/gm, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|l|p])(.+)/gm, "<p>$1</p>");
}

export default function MarkdownToHtml() {
  const [md, setMd] = useState("");
  const [show, setShow] = useState<"html"|"preview">("html");
  const html = mdToHtml(md);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Markdown to HTML</h1>
        <p className="text-gray-400 mb-6">Convert Markdown to HTML with live preview.</p>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-sm text-gray-400">Markdown Input</label><textarea value={md} onChange={e=>setMd(e.target.value)} placeholder="# Hello\n\nType **markdown** here..." className="w-full h-80 bg-gray-800 rounded p-3 font-mono text-sm mt-1" /></div>
          <div>
            <div className="flex gap-2 mb-1">
              <button onClick={()=>setShow("html")} className={`px-3 py-1 rounded text-xs ${show==="html"?"bg-blue-600":"bg-gray-700"}`}>HTML</button>
              <button onClick={()=>setShow("preview")} className={`px-3 py-1 rounded text-xs ${show==="preview"?"bg-blue-600":"bg-gray-700"}`}>Preview</button>
            </div>
            {show==="html" ? <textarea value={html} readOnly className="w-full h-80 bg-gray-800 rounded p-3 font-mono text-sm" /> : <div className="w-full h-80 bg-white text-black rounded p-3 overflow-auto prose" dangerouslySetInnerHTML={{__html:html}} />}
          </div>
        </div>
      </div>
    </div>
  );
}