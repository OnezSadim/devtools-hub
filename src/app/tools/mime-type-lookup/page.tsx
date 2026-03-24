"use client";
import { useState } from "react";
const MIME_DB: Record<string,{mime:string,desc:string}> = {
  "html":{mime:"text/html",desc:"HTML Document"},"css":{mime:"text/css",desc:"CSS Stylesheet"},"js":{mime:"application/javascript",desc:"JavaScript"},"ts":{mime:"application/typescript",desc:"TypeScript"},"json":{mime:"application/json",desc:"JSON Data"},"xml":{mime:"application/xml",desc:"XML Document"},"pdf":{mime:"application/pdf",desc:"PDF Document"},"zip":{mime:"application/zip",desc:"ZIP Archive"},"tar":{mime:"application/x-tar",desc:"TAR Archive"},"gz":{mime:"application/gzip",desc:"Gzip Archive"},"png":{mime:"image/png",desc:"PNG Image"},"jpg":{mime:"image/jpeg",desc:"JPEG Image"},"jpeg":{mime:"image/jpeg",desc:"JPEG Image"},"gif":{mime:"image/gif",desc:"GIF Image"},"webp":{mime:"image/webp",desc:"WebP Image"},"svg":{mime:"image/svg+xml",desc:"SVG Vector Image"},"ico":{mime:"image/x-icon",desc:"Icon"},"mp3":{mime:"audio/mpeg",desc:"MP3 Audio"},"mp4":{mime:"video/mp4",desc:"MP4 Video"},"webm":{mime:"video/webm",desc:"WebM Video"},"woff":{mime:"font/woff",desc:"Web Font"},"woff2":{mime:"font/woff2",desc:"Web Font 2"},"csv":{mime:"text/csv",desc:"CSV Data"},"md":{mime:"text/markdown",desc:"Markdown"},"txt":{mime:"text/plain",desc:"Plain Text"},"sh":{mime:"application/x-sh",desc:"Shell Script"},"py":{mime:"text/x-python",desc:"Python Script"},"rb":{mime:"application/x-ruby",desc:"Ruby Script"},"yaml":{mime:"application/x-yaml",desc:"YAML"},"yml":{mime:"application/x-yaml",desc:"YAML"},"wasm":{mime:"application/wasm",desc:"WebAssembly"}
};
export default function MimeTypeLookup() {
  const [query, setQuery] = useState("");
  const ext = query.replace(/^.*\./, "").toLowerCase().trim();
  const result = MIME_DB[ext];
  const filtered = query.length > 0 ? Object.entries(MIME_DB).filter(([k,v])=>k.includes(ext)||v.mime.includes(query.toLowerCase())||v.desc.toLowerCase().includes(query.toLowerCase())) : Object.entries(MIME_DB).slice(0,12);
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">MIME Type Lookup</h1>
      <p className="text-gray-400 mb-4">Look up MIME types by file extension or search by type.</p>
      <input className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-4" placeholder="e.g. png, json, .html, video/mp4..." value={query} onChange={e=>setQuery(e.target.value)} />
      {result && <div className="bg-blue-900/30 border border-blue-700 rounded p-4 mb-4">
        <p className="text-lg font-mono text-blue-300">{result.mime}</p>
        <p className="text-gray-400 text-sm mt-1">{result.desc} (.{ext})</p>
        <button onClick={()=>navigator.clipboard.writeText(result.mime)} className="mt-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">Copy</button>
      </div>}
      <div className="space-y-2">{filtered.map(([k,v])=><div key={k} className="flex justify-between bg-gray-800 rounded px-3 py-2 text-sm"><span className="text-gray-400">.{k}</span><span className="font-mono text-green-400">{v.mime}</span></div>)}</div>
    </div>
  );
}
