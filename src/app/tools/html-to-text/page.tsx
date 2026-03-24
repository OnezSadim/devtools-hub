"use client";
import { useState } from "react";
export default function HtmlToText() {
  const [html, setHtml] = useState("");
  const [text, setText] = useState("");
  function convert() {
    const div = typeof document !== "undefined" ? document.createElement("div") : null;
    if(!div) return;
    div.innerHTML = html;
    setText(div.textContent||div.innerText||"");
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">HTML to Plain Text</h1>
      <textarea className="w-full h-40 p-3 bg-gray-800 rounded border border-gray-600 text-white mb-3" placeholder="Paste HTML here..." value={html} onChange={e=>setHtml(e.target.value)} />
      <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4">Strip HTML</button>
      {text&&<div className="p-3 bg-gray-800 rounded font-mono text-sm whitespace-pre-wrap">{text}</div>}
    </div>
  );
}