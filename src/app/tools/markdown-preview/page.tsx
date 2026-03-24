"use client";
import { useState } from "react";

export default function MarkdownPreview() {
  const [md, setMd] = useState("# Hello World\n\nThis is **bold** and *italic*.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('hello');\n```\n\n> A blockquote\n\n[Link](https://example.com)");

  const render = (s: string): string => {
    return s
      .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-zinc-800 p-3 rounded my-2 overflow-auto"><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-zinc-800 px-1 rounded">$1</code>')
      .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-4 mb-1">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-4 mb-1">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-zinc-600 pl-4 my-2 text-zinc-400">$1</blockquote>')
      .replace(/^- (.+)$/gm, '<li class="ml-4">• $1</li>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 underline">$1</a>')
      .replace(/\n/g, "<br/>");
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-5xl mx-auto">
        <a href="/" className="text-blue-400 hover:underline text-sm">&larr; All Tools</a>
        <h1 className="text-3xl font-bold mt-4 mb-2">Markdown Preview</h1>
        <p className="text-zinc-400 mb-6">Write Markdown on the left, see rendered HTML on the right.</p>
        <div className="grid grid-cols-2 gap-4">
          <textarea value={md} onChange={e=>setMd(e.target.value)} className="h-96 bg-zinc-900 border border-zinc-700 rounded p-3 font-mono text-sm resize-none" />
          <div className="h-96 bg-zinc-900 border border-zinc-700 rounded p-3 text-sm overflow-auto" dangerouslySetInnerHTML={{__html: render(md)}} />
        </div>
      </div>
    </main>
  );
}